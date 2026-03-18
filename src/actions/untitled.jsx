import React from 'react';
import { withRouter } from 'react-router-dom';

const withAnalytics = (WrappedComponent) => {
  class WithAnalytics extends React.Component {
    
    constructor(props) {
      super(props);
      this.trackPageView = this.trackPageView.bind(this);
    }

    componentDidMount() {
      console.log(`[withAnalytics] Mounted: ${WrappedComponent.name || 'Unknown'}`);
      
      // Fire event at the top of the page load
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "page_load_top",
        page: {
          name: document.title,
          url: window.location.href
        }
      });
      console.log("[withAnalytics] Page load top event pushed");

      this.trackPageView();

      // Listen for the custom event
      window.addEventListener("productDataLoaded", this.trackPageView);

      // Fire event at the bottom of the page (when the data layer is ready)
      setTimeout(() => {
        window.dataLayer.push({
          event: "page_load_bottom",
          page: {
            name: document.title,
            url: window.location.href
          }
        });
        console.log("[withAnalytics] Page load bottom event pushed");
      }, 1000);
    }

    componentWillUnmount() {
      window.removeEventListener("productDataLoaded", this.trackPageView);
    }

    componentDidUpdate(prevProps) {
      if (
        (this.props.location.pathname !== prevProps.location.pathname ||
          this.props.location.hash !== prevProps.location.hash) &&
        location.hash.split('/')[1] !== 'product'
      ) {
        console.log(`[withAnalytics] Route changed to: ${this.props.location.pathname}${this.props.location.hash}`);
        this.trackPageView();
      }
    }

    trackPageView() {
      if (!this.props.location) {
        console.error("[withAnalytics] location prop is undefined. Ensure component is wrapped with Router.");
        return;
      }

      const { pathname } = this.props.location;
      const pagePath = pathname === "/" ? "/home" : pathname;
      console.log(`[withAnalytics] Tracking page view: ${pagePath}`);

      function runAfterMetaUpdate(callback) {
        const targetNode = document.head;
        const config = { childList: true, subtree: true };

        const observer = new MutationObserver((mutations, obs) => {
          const metaSiteSection = document.querySelector('meta[name="site_section"]');
          const metaProductCategory = document.querySelector('meta[name="product_category"]');

          if (
            metaSiteSection && metaSiteSection.content !== 'Default Section' &&
            metaProductCategory && metaProductCategory.content !== 'Default Category'
          ) {
            obs.disconnect();
            callback();
          }
        });

        observer.observe(targetNode, config);
      }

      runAfterMetaUpdate(() => {
        const metaTagSiteSection = document.querySelector('meta[name="site_section"]');
        const siteSection = metaTagSiteSection ? metaTagSiteSection.content : 'Default Section';

        const metaTagProductCategory = document.querySelector('meta[name="product_category"]');
        const productCategory = metaTagProductCategory ? metaTagProductCategory.content : 'Default Category';

        const metaTagProductSku = document.querySelector('meta[name="product_sku"]');
        const productSku = metaTagProductSku ? metaTagProductSku.content : '';

        const metaTagProductName = document.querySelector('meta[name="product_name"]');
        const productName = metaTagProductName ? metaTagProductName.content : '';

        const metaTagProductPrice = document.querySelector('meta[name="product_price"]');
        const productPrice = metaTagProductPrice ? metaTagProductPrice.content : '';

        window.digitalData = window.digitalData || [];

        // Clear the digitalData before pushing the new event to ensure it only stores the most recent page
        window.digitalData.length = 0;

        window.digitalData.push({
          event: "page_view",
          page: {
            pagePath,
            pageTitle: document.title,
            siteSection,
            productCategory,
            productSku,
            productName,
            productPrice,
          }
        });

        console.log(`[withAnalytics] digitalData updated:`, window.digitalData[window.digitalData.length - 1]);
      });
    }

    render() {
      console.log(`[withAnalytics] Wrapping: ${WrappedComponent.name || 'Unknown Component'}`);
      return <WrappedComponent {...this.props} />;
    }
  }

  return withRouter(WithAnalytics);
};

export default withAnalytics;
