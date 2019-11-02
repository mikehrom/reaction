"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trackImpression = trackImpression;
exports.trackViewability = trackViewability;

require("core-js/modules/es6.function.name");

var alreadyFired = {};
/**
 * An impression tracking utility for display ads that tries to not double
 * track the same impression by checking a cache of previous impressions.
 *
 * @example
 *
 *      import { track } from "src/utils/track"
 *
 *      @track()
 *      class DisplayAd extends React.Component<{}, null> {
 *
 *        @trackImpression(() => "panel")
 *        componentDidMount() {
 *          // ...
 *        }
 *      }
 */

var trackOnce = function trackOnce(unitLayout, action) {
  return function (target, name, descriptor) {
    var decoratedFn = descriptor.value; // tslint:disable-next-line:only-arrow-functions

    descriptor.value = function () {
      var key = [this.props.campaign.name, unitLayout(this.props), action, this.props.article && this.props.article.id || ""].join(":");
      if (alreadyFired[key]) return decoratedFn.apply(this, arguments);
      this.props.tracking && this.props.tracking.trackEvent({
        action: action,
        entity_type: "display_ad",
        campaign_name: this.props.campaign.name,
        unit_layout: unitLayout(this.props)
      });
      alreadyFired[key] = true;
      decoratedFn.apply(this, arguments);
    };
  };
};

function trackImpression(unitLayout) {
  return trackOnce(unitLayout, "Impression");
}

function trackViewability(unitLayout) {
  return trackOnce(unitLayout, "Viewability");
}
//# sourceMappingURL=track-once.js.map