"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trackPageView = trackPageView;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

function trackPageView() {
  if (typeof window.analytics !== "undefined") {
    window.analytics.page({
      path: window.location.pathname
    }, {
      integrations: {
        Marketo: false
      }
    }); // Reset timers that track time on page since we're tracking each order
    // checkout view as a separate page.

    typeof window.desktopPageTimeTrackers !== "undefined" && window.desktopPageTimeTrackers.forEach(function (tracker) {
      // No need to reset the tracker if we're on the same page.
      if (window.location.pathname !== tracker.path) tracker.reset(window.location.pathname);
    });
  }
}
//# sourceMappingURL=trackPageView.js.map