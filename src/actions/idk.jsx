// src/utils/withAnalytics.js
// this version uses Mutation Observer based on default meta tags existing in the index.html (but doesn't require them, so I am testing a simplified solution)

import React from 'react';
import { withRouter } from 'react-router-dom';

const withAnalytics = (WrappedComponent) => {
  class WithAnalytics extends React.Component {
    componentDidMount() {
      console.log(`[withAnalytics] Mounted: ${WrappedComponent.name || 'Unknown'}`);
      this.trackPageView();
    }

    componentDidUpdate(prevProps) {
      if (this.props.location.pathname !== prevProps.location.pathname ||
          this.props.location.hash !== prevProps.location.hash) {
        console.log(`[withAnalytics] Route changed to: ${this.props.location.pathname}`);
        this.trackPageView();
      }
    }

    trackPageView() {
      let { pathname } = this.props.location;
      let pagePath = pathname === "/" ? "/home" : pathname;
      console.log(`[withAnalytics] Tracking page view: ${pagePath}`);

      function runAfterMetaUpdate(callback) {
        const targetNode = document.head;
        const config = { childList: true, subtree: true };

        const observer = new MutationObserver((mutations, obs) => {
        // Check if the desired meta tags are present and have non-default values
        const metaSiteSection = document.querySelector('meta[name="site_section"]');
        const metaProductCategory = document.querySelector('meta[name="product_category"]');
        const metaProductSku = document.querySelector('meta[name="product_sku"]');
        const metaProductName = document.querySelector('meta[name="product_name"]');
        const metaProductPrice = document.querySelector('meta[name="product_price"]');
        const metaTotalRevenue = document.querySelector('meta[name="total_revenue"]');
        const metaTotalUnits = document.querySelector('meta[name="total_units"]');
        const metaPurchaseId = document.querySelector('meta[name="purchase_id"]');

    if (
      metaSiteSection && metaSiteSection.content !== 'Default Section' &&
      metaProductCategory && metaProductCategory.content !== 'Default Category' &&
      metaProductSku && metaProductSku.content !== 'Default Product SKU' &&
      metaProductName && metaProductName.content !== 'Default Product Name' &&
      metaProductPrice && metaProductPrice.content !== 'Default Product Price' &&
      metaTotalRevenue && metaTotalRevenue.content !== 'Default Total Revenue' &&
      metaTotalUnits && metaTotalUnits.content !== 'Default Total Units' &&
      metaPurchaseId && metaPurchaseId.content !== 'Default Purchase Id'

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
        const productSku = metaTagProductSku ? metaTagProductSku.content : 'Default Product SKU';

        const metaTagProductName = document.querySelector('meta[name="product_name"]');
        const productName = metaTagProductName ? metaTagProductName : 'Default Product Name';

        const metaTagProductPrice = document.querySelector('meta[name="product_price"]');
        const productPrice = metaTagProductPrice ? metaTagProductPrice : 'Default Product Price';

        const metaTagTotalRevenue = document.querySelector('meta[name="total_revenue"]');
        const totalRevenue = metaTagTotalRevenue ? metaTagTotalRevenue : 'Default Total Revenue';

        const metaTagTotalUnits = document.querySelector('meta[name="total_units"]');
        const totalUnits = metaTagTotalUnits ? metaTagTotalUnits : 'Default Total Units';

        const metaTagPurchaseId = document.querySelector('meta[name="purchase_id"]');
        const purchaseId = metaTagPurchaseId ? metaTagPurchaseId : 'Default Purchase Id'

        // const siteSection = document.querySelector('meta[name="site_section"]')?.content || 'Default Section';
        // const product_category = document.querySelector('meta[name="product_category"]')?.content || 'Default Category';


        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "page_view",
          pagePath: pagePath,
          pageTitle: document.title, // Assume Helmet updated the title
          siteSection,
          productCategory,
          productSku,
          productName,
          productPrice,
          totalRevenue,
          totalUnits,
          purchaseId
        });
        console.log(`[withAnalytics] dataLayer updated:`, window.dataLayer[window.dataLayer.length - 1]);
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
