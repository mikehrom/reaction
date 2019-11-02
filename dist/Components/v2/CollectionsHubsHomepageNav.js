"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollectionsHubsHomepageNavFragmentContainer = exports.CollectionsHubsHomepageNav = void 0;

require("core-js/modules/es6.array.map");

var _palette = require("@artsy/palette");

var _Analytics = require("../../Artsy/Analytics");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _reactTracking = _interopRequireWildcard(require("react-tracking"));

var _Events = _interopRequireDefault(require("../../Utils/Events"));

var _resizer = require("../../Utils/resizer");

var _ImageLink = require("./ImageLink");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CollectionsHubsHomepageNav = (0, _reactTracking.default)({
  context_page: _Analytics.AnalyticsSchema.PageName.HomePage,
  context_module: _Analytics.AnalyticsSchema.ContextModule.CollectionHubEntryPoint,
  subject: _Analytics.AnalyticsSchema.Subject.FeaturedCategories,
  action_type: _Analytics.AnalyticsSchema.ActionType.Impression
}, {
  dispatch: function dispatch(data) {
    return _Events.default.postEvent(data);
  }
})(function (props) {
  var _useTracking = (0, _reactTracking.useTracking)(),
      trackEvent = _useTracking.trackEvent;

  trackEvent({});
  return _react.default.createElement(_palette.CSSGrid, {
    as: "aside",
    gridTemplateColumns: ["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"],
    gridGap: 20
  }, props.marketingHubCollections.slice(0, 6).map(function (hub) {
    return _react.default.createElement(_ImageLink.ImageLink, {
      to: "/collection/".concat(hub.slug),
      src: (0, _resizer.resize)(hub.thumbnail, {
        width: 357,
        height: 175
      }),
      ratio: [0.49],
      title: _react.default.createElement(_palette.Serif, {
        size: ["3", "4"]
      }, hub.title),
      subtitle: _react.default.createElement(_palette.Serif, {
        size: "2"
      }, subtitleFor(hub.title)),
      key: hub.id,
      onClick: function onClick() {
        trackEvent({
          action_type: _Analytics.AnalyticsSchema.ActionType.Click,
          type: _Analytics.AnalyticsSchema.Type.Thumbnail,
          desination_path: "/collection/".concat(hub.slug)
        });
      }
    });
  }));
});
exports.CollectionsHubsHomepageNav = CollectionsHubsHomepageNav;
var CollectionsHubsHomepageNavFragmentContainer = (0, _reactRelay.createFragmentContainer)(CollectionsHubsHomepageNav, {
  marketingHubCollections: function marketingHubCollections() {
    var node = require("../../__generated__/CollectionsHubsHomepageNav_marketingHubCollections.graphql");

    if (node.hash && node.hash !== "cf76894fb739249a114139809dfe01cb") {
      console.error("The definition of 'CollectionsHubsHomepageNav_marketingHubCollections' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/CollectionsHubsHomepageNav_marketingHubCollections.graphql");
  }
});
/*
 * This is a customization just for the homepage entry-points use case.
 *
 * Valid hub collections will have a subtitle defined here, rather than in KAWS.
 * This mapping therefore will need to kept in sync as hubs are rotated
 * in/out of the entrypoint.
 *
 * TODO: remove (or replace with safer) placeholder once we have real data.
 */

exports.CollectionsHubsHomepageNavFragmentContainer = CollectionsHubsHomepageNavFragmentContainer;
var subtitlesMapping = {
  Contemporary: "Today’s leading artists and emerging talents",
  "Post-War": "From Abstract Expressionism to Pop Art",
  "Impressionist & Modern": "The birth of abstraction, Surrealism, and Dada",
  "Pre-20th Century": "Ancient Rome, the Renaissance, Baroque, and more",
  Photography: "Through the lens—from daguerreotypes to digital",
  "Street Art": "The rise of graffiti, vinyl toys, and skate culture"
};

var subtitleFor = function subtitleFor(title) {
  return subtitlesMapping[title];
};
//# sourceMappingURL=CollectionsHubsHomepageNav.js.map