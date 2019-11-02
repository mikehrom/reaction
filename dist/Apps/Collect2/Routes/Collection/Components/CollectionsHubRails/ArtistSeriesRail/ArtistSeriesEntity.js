"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtistSeriesRailContainer = exports.StyledLink = exports.ImgWrapper = exports.Container = exports.ArtworkImage = exports.ArtistSeriesEntity = void 0;

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.array.map");

var _palette = require("@artsy/palette");

var _Analytics = require("../../../../../../../Artsy/Analytics");

var _useTracking2 = require("../../../../../../../Artsy/Analytics/useTracking");

var _RouterLink = require("../../../../../../../Artsy/Router/RouterLink");

var _Truncator = require("../../../../../../../Components/Truncator");

var _currency = _interopRequireDefault(require("currency.js"));

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _sharify = require("sharify");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _get = require("../../../../../../../Utils/get");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArtistSeriesEntity = function ArtistSeriesEntity(_ref) {
  var member = _ref.member,
      itemNumber = _ref.itemNumber;
  var headerImage = member.headerImage,
      artworks_connection = member.artworks.artworks_connection,
      price_guidance = member.price_guidance,
      slug = member.slug,
      title = member.title;
  var artworks = artworks_connection.edges.map(function (_ref2) {
    var node = _ref2.node;
    return node;
  });
  var bgImages = artworks.map(function (_ref3) {
    var image = _ref3.image;
    return image && image.url;
  });
  var imageSize = bgImages.length === 1 ? 221 : bgImages.length === 2 ? 109 : 72;

  var _useTracking = (0, _useTracking2.useTracking)(),
      trackEvent = _useTracking.trackEvent;

  var handleLinkClick = function handleLinkClick() {
    trackEvent({
      action_type: _Analytics.AnalyticsSchema.ActionType.Click,
      context_page: _Analytics.AnalyticsSchema.PageName.CollectionPage,
      context_module: _Analytics.AnalyticsSchema.ContextModule.ArtistCollectionsRail,
      context_page_owner_type: _Analytics.AnalyticsSchema.OwnerType.Collection,
      type: _Analytics.AnalyticsSchema.Type.Thumbnail,
      destination_path: "".concat(_sharify.data.APP_URL, "/collection/").concat(slug),
      item_number: itemNumber
    });
  };

  return _react.default.createElement(Container, {
    px: 2,
    pt: 2,
    pb: 2,
    m: 1
  }, _react.default.createElement(StyledLink, {
    to: "/collection/".concat(slug),
    onClick: handleLinkClick
  }, _react.default.createElement(ImgWrapper, null, bgImages.length ? bgImages.map(function (url, i) {
    var hit = artworks[i];
    var artistName = (0, _get.get)(hit.artist, function (a) {
      return a.name;
    });
    var alt = "".concat(artistName ? artistName + ", " : "").concat(hit.title);
    return _react.default.createElement(SingleImgContainer, {
      key: i
    }, _react.default.createElement(ImgOverlay, {
      width: imageSize
    }), url && _react.default.createElement(ArtworkImage, {
      key: i,
      src: url,
      width: imageSize,
      alt: alt
    }));
  }) : headerImage && _react.default.createElement(ArtworkImage, {
    src: headerImage,
    width: 221
  })), _react.default.createElement(CollectionTitle, {
    pt: 1,
    pb: 0.5,
    size: "3"
  }, _react.default.createElement(_Truncator.Truncator, {
    maxLineCount: 1
  }, title)), price_guidance && _react.default.createElement(_palette.Sans, {
    size: "2",
    color: "black60",
    pb: 1
  }, "From $", (0, _currency.default)(price_guidance, {
    separator: ",",
    precision: 0
  }).format())));
};

exports.ArtistSeriesEntity = ArtistSeriesEntity;

var ArtworkImage = _styledComponents.default.img.withConfig({
  displayName: "ArtistSeriesEntity__ArtworkImage",
  componentId: "ym4z09-0"
})(["width:", "px;height:125px;background-color:", ";object-fit:cover;object-position:center;opacity:0.9;"], function (_ref4) {
  var width = _ref4.width;
  return width;
}, (0, _palette.color)("black10"));

exports.ArtworkImage = ArtworkImage;
var ImgOverlay = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "ArtistSeriesEntity__ImgOverlay",
  componentId: "ym4z09-1"
})(["height:125px;background-color:", ";opacity:0.1;position:absolute;top:0;left:0;z-index:7;"], (0, _palette.color)("black30"));
var Container = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "ArtistSeriesEntity__Container",
  componentId: "ym4z09-2"
})(["border:1px solid ", ";border-radius:2px;&:hover{text-decoration:none;border:1px solid ", ";}"], (0, _palette.color)("black10"), (0, _palette.color)("black60"));
exports.Container = Container;
var SingleImgContainer = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "ArtistSeriesEntity__SingleImgContainer",
  componentId: "ym4z09-3"
})(["position:relative;margin-right:2px;&:last-child{margin-right:0;}"]);
var CollectionTitle = (0, _styledComponents.default)(_palette.Serif).withConfig({
  displayName: "ArtistSeriesEntity__CollectionTitle",
  componentId: "ym4z09-4"
})(["width:100%;"]);
var ImgWrapper = (0, _styledComponents.default)(_palette.Flex).withConfig({
  displayName: "ArtistSeriesEntity__ImgWrapper",
  componentId: "ym4z09-5"
})(["width:221px;"]);
exports.ImgWrapper = ImgWrapper;
var StyledLink = (0, _styledComponents.default)(_RouterLink.RouterLink).withConfig({
  displayName: "ArtistSeriesEntity__StyledLink",
  componentId: "ym4z09-6"
})(["text-decoration:none;-webkit-tap-highlight-color:rgba(0,0,0,0);&:hover{text-decoration:none;}"]);
exports.StyledLink = StyledLink;
var ArtistSeriesRailContainer = (0, _reactRelay.createFragmentContainer)(ArtistSeriesEntity, {
  member: function member() {
    var node = require("../../../../../../../__generated__/ArtistSeriesEntity_member.graphql");

    if (node.hash && node.hash !== "37c70de561375cea9b334ff8d670fdc7") {
      console.error("The definition of 'ArtistSeriesEntity_member' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../../../../__generated__/ArtistSeriesEntity_member.graphql");
  }
});
exports.ArtistSeriesRailContainer = ArtistSeriesRailContainer;
//# sourceMappingURL=ArtistSeriesEntity.js.map