"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollectionDefaultHeaderFragmentContainer = exports.getHeaderArtworks = exports.CollectionDefaultHeader = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.string.small");

require("core-js/modules/es6.array.map");

var _palette = require("@artsy/palette");

var _Analytics = require("../../../../../../Artsy/Analytics");

var _useTracking2 = require("../../../../../../Artsy/Analytics/useTracking");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _useWindowSize = require("../../../../../../Utils/Hooks/useWindowSize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    margin-left: -20px;\n    margin-right: -20px;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var IMAGE_MARGIN_X = 10;
var LARGE_VIEWPORT_WIDTH = 880;

var CollectionDefaultHeader = function CollectionDefaultHeader(_ref) {
  var headerArtworks = _ref.headerArtworks,
      defaultHeaderImageHeight = _ref.defaultHeaderImageHeight,
      collection_id = _ref.collection_id,
      collection_slug = _ref.collection_slug;
  var artworks = headerArtworks.hits;

  if (!artworks) {
    return null;
  }

  var viewportWidth = (0, _useWindowSize.useWindowSize)().width;
  var smallViewport = viewportWidth < LARGE_VIEWPORT_WIDTH;
  /**
   * Relay is returning 12 artworks since this query populates both the artworks
   *  used for merchandisable artists and those used for this component.
   *  Slice the artworks array to get just the first 10 in the result set.
   */

  var duplicatedArtworks = artworks.slice(0, 10);
  var artworksToRender = getHeaderArtworks(duplicatedArtworks, viewportWidth, smallViewport);

  var _useTracking = (0, _useTracking2.useTracking)(),
      trackEvent = _useTracking.trackEvent;

  return _react.default.createElement("header", null, _react.default.createElement(DefaultHeaderContainer, {
    position: ["relative", "absolute"],
    left: ["auto", 0],
    width: ["auto", 1],
    height: [160, 160, 250]
  }, _react.default.createElement(HeaderArtworks, null, artworksToRender.map(function (artwork, i) {
    return _react.default.createElement("a", {
      href: artwork.href,
      key: artwork.href,
      onClick: function onClick() {
        trackEvent({
          action_type: _Analytics.AnalyticsSchema.ActionType.Click,
          context_module: _Analytics.AnalyticsSchema.ContextModule.ArtworkBanner,
          context_page_owner_type: _Analytics.AnalyticsSchema.OwnerType.Collection,
          context_page: _Analytics.AnalyticsSchema.PageName.CollectionPage,
          context_page_owner_id: collection_id,
          context_page_owner_slug: collection_slug,
          destination_path: artwork.href
        });
      }
    }, _react.default.createElement(HeaderImage, {
      height: defaultHeaderImageHeight,
      src: smallViewport ? artwork.image.small.url : artwork.image.large.url,
      preventRightClick: true
    }));
  }))));
};

exports.CollectionDefaultHeader = CollectionDefaultHeader;

var getHeaderArtworks = function getHeaderArtworks(artworksArray, headerWidth, isSmallViewport) {
  var artworkWidths = 0;
  var shouldAppendDuplicateArtworksToHeader = true;
  var headerArtworks = [];

  if (artworksArray.length < 1) {
    return [];
  }
  /**
   * Loop through the initial artworks array, appending an artwork to the output array,
   * until the summed widths of the artworks in the output array are greater than the
   * width of the viewport.
   */


  while (shouldAppendDuplicateArtworksToHeader) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = artworksArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var artwork = _step.value;

        if (artworkWidths > headerWidth) {
          headerArtworks.push(artwork);
          shouldAppendDuplicateArtworksToHeader = false;
          return headerArtworks;
        }

        headerArtworks.push(artwork);
        isSmallViewport ? artworkWidths += artwork.image.small.width + IMAGE_MARGIN_X : artworkWidths += artwork.image.large.width + IMAGE_MARGIN_X;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
};

exports.getHeaderArtworks = getHeaderArtworks;
var CollectionDefaultHeaderFragmentContainer = (0, _reactRelay.createFragmentContainer)(CollectionDefaultHeader, {
  headerArtworks: function headerArtworks() {
    var node = require("../../../../../../__generated__/DefaultHeader_headerArtworks.graphql");

    if (node.hash && node.hash !== "91384b79f54832378562f301bc78bbf9") {
      console.error("The definition of 'DefaultHeader_headerArtworks' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../../../__generated__/DefaultHeader_headerArtworks.graphql");
  }
});
exports.CollectionDefaultHeaderFragmentContainer = CollectionDefaultHeaderFragmentContainer;
var DefaultHeaderContainer = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "DefaultHeader__DefaultHeaderContainer",
  componentId: "ermo8a-0"
})(["background-color:", ";overflow:hidden;", ";"], (0, _palette.color)("black5"), _palette.media.xs(_templateObject()));
var HeaderArtworks = (0, _styledComponents.default)(_palette.Flex).withConfig({
  displayName: "DefaultHeader__HeaderArtworks",
  componentId: "ermo8a-1"
})(["flex-direction:row;position:absolute;bottom:0;& a:first-child > img{margin-left:0px;}& a:last-child > img{margin-left:0px;}"]);
var HeaderImage = (0, _styledComponents.default)(_palette.Image).withConfig({
  displayName: "DefaultHeader__HeaderImage",
  componentId: "ermo8a-2"
})(["margin-right:", "px;margin-left:", "px;"], (0, _palette.space)(0.5), (0, _palette.space)(0.5));
//# sourceMappingURL=DefaultHeader.js.map