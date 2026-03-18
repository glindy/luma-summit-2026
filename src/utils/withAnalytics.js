// src/utils/withAnalytics.js


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
      this.trackPageView();

      // Listen for the custom event
      window.addEventListener("productDataLoaded", this.trackPageView);
    }

    componentWillUnmount() {
      window.removeEventListener("productDataLoaded", this.trackPageView);
    }

    componentDidUpdate(prevProps) {
  if (
    (this.props.location.pathname !== prevProps.location.pathname ||
    this.props.location.hash !== prevProps.location.hash) && location.hash.split('/')[1] !== 'product'
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
    const productPrice = metaTagProductPrice ? parseFloat(metaTagProductPrice.content) : 0;



 
window.digitalData = {};


window.digitalData = {
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
};


console.log("Updated digitalData:", window.digitalData);

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
