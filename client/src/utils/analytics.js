export function trackPhoneClick(location = 'unknown') {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click_to_call', {
      event_category: 'engagement',
      event_label: location,
      value: 1,
    });
  }
}

export function trackFormSubmission(formName = 'unknown', success = true) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', success ? 'form_submission' : 'form_error', {
      event_category: 'lead_generation',
      event_label: formName,
      value: success ? 1 : 0,
    });
  }
}

export function trackCTAClick(ctaLabel, location = 'unknown') {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'cta_click', {
      event_category: 'engagement',
      event_label: `${ctaLabel} | ${location}`,
    });
  }
}
