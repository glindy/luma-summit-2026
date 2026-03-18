/** Global Analytics utility file **/

export const trackPageView = () => {
  if (window.digitalData) {
    window.digitalData.push({
      event: "page_view",
      pagePath: window.location.pathname,
      pageTitle: document.title
    });
  }
};

export const trackEvent = (eventName, eventData) => {
  if (window.digitalData) {
    window.digitalData.push({
      event: eventName,
      ...eventData
    });
  }
};
