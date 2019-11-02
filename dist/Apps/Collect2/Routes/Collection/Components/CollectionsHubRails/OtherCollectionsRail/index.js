"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OtherCollectionsRailsContainer = exports.OtherCollectionsRail = void 0;

require("core-js/modules/es6.function.name");

var _palette = require("@artsy/palette");

var Schema = _interopRequireWildcard(require("../../../../../../../Artsy/Analytics/Schema"));

var _useTracking2 = require("../../../../../../../Artsy/Analytics/useTracking");

var _Carousel = require("../../../../../../../Components/v2/Carousel");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _sharify = require("sharify");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _OtherCollectionEntity = require("./OtherCollectionEntity");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var OtherCollectionsRail = function OtherCollectionsRail(_ref) {
  var collectionGroup = _ref.collectionGroup;
  var name = collectionGroup.name,
      members = collectionGroup.members;

  var _useTracking = (0, _useTracking2.useTracking)(),
      trackEvent = _useTracking.trackEvent;

  var trackArrowClick = function trackArrowClick() {
    trackEvent({
      action_type: Schema.ActionType.Click,
      context_module: Schema.ContextModule.OtherCollectionsRail,
      context_page_owner_type: Schema.OwnerType.Collection,
      context_page: Schema.PageName.CollectionPage,
      type: Schema.Type.Button,
      subject: Schema.Subject.ClickedNextButton
    });
  };

  return _react.default.createElement(Container, {
    mb: 4
  }, _react.default.createElement(_palette.Serif, {
    size: "5",
    mt: 3,
    mb: 2
  }, name), _react.default.createElement(_Carousel.Carousel, {
    height: "100px",
    options: {
      wrapAround: _sharify.data.IS_MOBILE ? true : false,
      pageDots: false
    },
    data: members,
    render: function render(slide, slideIndex) {
      return _react.default.createElement(_OtherCollectionEntity.OtherCollectionsRailsContainer, {
        member: slide,
        itemNumber: slideIndex
      });
    },
    onArrowClick: function onArrowClick() {
      return trackArrowClick();
    }
  }));
};

exports.OtherCollectionsRail = OtherCollectionsRail;
var Container = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "OtherCollectionsRail__Container",
  componentId: "sc-1e38g72-0"
})(["border-top:1px solid ", ";", "{height:60%;}"], (0, _palette.color)("black10"), _Carousel.ArrowButton);
var OtherCollectionsRailsContainer = (0, _reactRelay.createFragmentContainer)(OtherCollectionsRail, {
  collectionGroup: function collectionGroup() {
    var node = require("../../../../../../../__generated__/OtherCollectionsRail_collectionGroup.graphql");

    if (node.hash && node.hash !== "6f17d980c261d156126a25c34bacc8d7") {
      console.error("The definition of 'OtherCollectionsRail_collectionGroup' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../../../../__generated__/OtherCollectionsRail_collectionGroup.graphql");
  }
});
exports.OtherCollectionsRailsContainer = OtherCollectionsRailsContainer;
//# sourceMappingURL=index.js.map