"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollectionsHubsNavFragmentContainer = exports.CollectionsHubsNav = void 0;

require("core-js/modules/es6.array.map");

var _palette = require("@artsy/palette");

var _Analytics = require("../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../Artsy/Analytics/Schema"));

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _resizer = require("../../Utils/resizer");

var _ImageLink = require("./ImageLink");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var CollectionsHubsNav = function CollectionsHubsNav(props) {
  var _useTracking = (0, _Analytics.useTracking)(),
      trackEvent = _useTracking.trackEvent;

  return _react.default.createElement(_palette.CSSGrid, {
    as: "aside",
    gridTemplateColumns: ["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(6, 1fr)"],
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
        size: "4t"
      }, hub.title),
      key: hub.id,
      onClick: function onClick() {
        trackEvent({
          action_type: Schema.ActionType.Click,
          context_page: Schema.PageName.CollectPage,
          context_module: Schema.ContextModule.CollectionHubEntryPoint,
          type: Schema.Type.Thumbnail,
          destination_path: "/collection/".concat(hub.slug)
        });
      }
    });
  }));
};

exports.CollectionsHubsNav = CollectionsHubsNav;
var CollectionsHubsNavFragmentContainer = (0, _reactRelay.createFragmentContainer)(CollectionsHubsNav, {
  marketingHubCollections: function marketingHubCollections() {
    var node = require("../../__generated__/CollectionsHubsNav_marketingHubCollections.graphql");

    if (node.hash && node.hash !== "459c406a45d0cbce01052c982a5228ff") {
      console.error("The definition of 'CollectionsHubsNav_marketingHubCollections' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/CollectionsHubsNav_marketingHubCollections.graphql");
  }
});
exports.CollectionsHubsNavFragmentContainer = CollectionsHubsNavFragmentContainer;
//# sourceMappingURL=CollectionsHubsNav.js.map