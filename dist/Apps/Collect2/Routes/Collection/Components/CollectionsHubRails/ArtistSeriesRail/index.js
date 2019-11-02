"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtistSeriesRailContainer = exports.ArrowContainer = exports.ArtistSeriesRail = void 0;

require("core-js/modules/es6.function.name");

var _palette = require("@artsy/palette");

var _Analytics = require("../../../../../../../Artsy/Analytics");

var _useTracking2 = require("../../../../../../../Artsy/Analytics/useTracking");

var _Carousel = require("../../../../../../../Components/v2/Carousel");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _sharify = require("sharify");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ArtistSeriesEntity = require("./ArtistSeriesEntity");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArtistSeriesRail = function ArtistSeriesRail(_ref) {
  var collectionGroup = _ref.collectionGroup;
  var members = collectionGroup.members,
      name = collectionGroup.name;

  var _useTracking = (0, _useTracking2.useTracking)(),
      trackEvent = _useTracking.trackEvent;

  var trackArrowClick = function trackArrowClick() {
    trackEvent({
      action_type: _Analytics.AnalyticsSchema.ActionType.Click,
      context_module: _Analytics.AnalyticsSchema.ContextModule.ArtistCollectionsRail,
      context_page_owner_type: _Analytics.AnalyticsSchema.OwnerType.Collection,
      context_page: _Analytics.AnalyticsSchema.PageName.CollectionPage,
      type: _Analytics.AnalyticsSchema.Type.Button,
      subject: _Analytics.AnalyticsSchema.Subject.ClickedNextButton
    });
  };

  return _react.default.createElement(Content, {
    mt: 2,
    py: 3
  }, _react.default.createElement(_palette.Serif, {
    size: "5",
    mb: 1
  }, name), _react.default.createElement(_Carousel.Carousel, {
    height: "250px",
    options: {
      wrapAround: _sharify.data.IS_MOBILE ? true : false,
      pageDots: false
    },
    data: members,
    render: function render(slide, slideIndex) {
      return _react.default.createElement(_ArtistSeriesEntity.ArtistSeriesRailContainer, {
        member: slide,
        itemNumber: slideIndex,
        key: slide.slug
      });
    },
    onArrowClick: function onArrowClick() {
      return trackArrowClick();
    }
  }));
};

exports.ArtistSeriesRail = ArtistSeriesRail;
var Content = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "ArtistSeriesRail__Content",
  componentId: "sc-1vky104-0"
})(["border-top:1px solid ", ";"], (0, _palette.color)("black10"));
var ArrowContainer = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "ArtistSeriesRail__ArrowContainer",
  componentId: "sc-1vky104-1"
})(["align-self:flex-start;", "{height:85%;}"], _Carousel.ArrowButton);
exports.ArrowContainer = ArrowContainer;
var ArtistSeriesRailContainer = (0, _reactRelay.createFragmentContainer)(ArtistSeriesRail, {
  collectionGroup: function collectionGroup() {
    var node = require("../../../../../../../__generated__/ArtistSeriesRail_collectionGroup.graphql");

    if (node.hash && node.hash !== "74444f1335a930cac0d23033f2438ad6") {
      console.error("The definition of 'ArtistSeriesRail_collectionGroup' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../../../../__generated__/ArtistSeriesRail_collectionGroup.graphql");
  }
});
exports.ArtistSeriesRailContainer = ArtistSeriesRailContainer;
//# sourceMappingURL=index.js.map