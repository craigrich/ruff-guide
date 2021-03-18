export const GA_TRACKING_ID = 'UA-145922458-2';

export const pageview = (url) => {
  const windowWithAnalystics = window as any;
  windowWithAnalystics.gtag('config', GA_TRACKING_ID, {
    page_path: url
  });
};

export const event = ({ action, category, label, value }) => {
  const windowWithAnalystics = window as any;
  windowWithAnalystics.gtag('event', action, {
    event_category: category,
    event_label: label,
    value
  });
};
