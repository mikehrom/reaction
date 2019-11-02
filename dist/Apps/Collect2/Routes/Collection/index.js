"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollectionRefetchContainer = exports.CollectionAppQuery = exports.CollectionApp = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

var _palette = require("@artsy/palette");

var _SeoProductsForArtworks = require("../../Components/SeoProductsForArtworks");

var _Header = require("./Components/Header");

var _AppContainer = require("../../../Components/AppContainer");

var _Analytics = require("../../../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../../../Artsy/Analytics/Schema"));

var _SystemContext = require("../../../../Artsy/SystemContext");

var _FrameWithRecentlyViewed = require("../../../../Components/FrameWithRecentlyViewed");

var _RelatedCollectionsRail = require("../../../../Components/RelatedCollectionsRail/RelatedCollectionsRail");

var _Seo = require("../../../../Components/v2/Seo");

var _found = require("found");

var _react = _interopRequireWildcard(require("react"));

var _reactHead = require("react-head");

var _reactRelay = require("react-relay");

var _sharify = require("sharify");

var _truncHtml = _interopRequireDefault(require("trunc-html"));

var _CollectionsHubRails = require("./Components/CollectionsHubRails");

var _ArtworkFilter = require("../../../../Components/v2/ArtworkFilter");

var _ArtworkFilterContext = require("../../../../Components/v2/ArtworkFilter/ArtworkFilterContext");

var _urlBuilder = require("../../../../Components/v2/ArtworkFilter/Utils/urlBuilder");

var _dec, _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CollectionApp = (_dec = (0, _Analytics.track)(function (props) {
  return {
    context_module: Schema.ContextModule.CollectionDescription,
    context_page_owner_slug: props.viewer && props.viewer.slug,
    context_page_owner_id: props.viewer && props.viewer.id
  };
}), _dec(_class = (_temp =
/*#__PURE__*/
function (_Component) {
  _inherits(CollectionApp, _Component);

  function CollectionApp() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CollectionApp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CollectionApp)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "collectionNotFound", function (collection) {
      if (!collection) {
        throw new _found.HttpError(404);
      }
    });

    return _this;
  }

  _createClass(CollectionApp, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      this.collectionNotFound(this.props.viewer);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          viewer = _this$props.viewer,
          location = _this$props.location,
          relay = _this$props.relay;
      var title = viewer.title,
          slug = viewer.slug,
          headerImage = viewer.headerImage,
          description = viewer.description,
          artworks = viewer.artworks;
      var collectionHref = "".concat(_sharify.data.APP_URL, "/collection/").concat(slug);
      var metadataDescription = description ? "Buy, bid, and inquire on ".concat(title, " on Artsy. ") + (0, _truncHtml.default)(description, 158).text : "Buy, bid, and inquire on ".concat(title, " on Artsy.");
      var showCollectionHubs = viewer.linkedCollections.length > 0;
      return _react.default.createElement(_AppContainer.AppContainer, null, _react.default.createElement(_FrameWithRecentlyViewed.FrameWithRecentlyViewed, null, _react.default.createElement(_reactHead.Title, null, "".concat(title, " - For Sale on Artsy")), _react.default.createElement(_reactHead.Meta, {
        name: "description",
        content: metadataDescription
      }), _react.default.createElement(_reactHead.Meta, {
        property: "og:url",
        content: collectionHref
      }), _react.default.createElement(_reactHead.Meta, {
        property: "og:image",
        content: headerImage
      }), _react.default.createElement(_reactHead.Meta, {
        property: "og:description",
        content: metadataDescription
      }), _react.default.createElement(_reactHead.Meta, {
        property: "twitter:description",
        content: metadataDescription
      }), _react.default.createElement(_reactHead.Link, {
        rel: "canonical",
        href: collectionHref
      }), _react.default.createElement(_Seo.BreadCrumbList, {
        items: [{
          path: "/collections",
          name: "Collections"
        }, {
          path: "/collection/".concat(slug),
          name: title
        }]
      }), artworks && _react.default.createElement(_SeoProductsForArtworks.SeoProductsForArtworks, {
        artworks: artworks
      }), _react.default.createElement(_Header.CollectionFilterFragmentContainer, {
        collection: viewer,
        artworks: artworks
      }), showCollectionHubs && _react.default.createElement(_CollectionsHubRails.CollectionsHubRailsContainer, {
        linkedCollections: viewer.linkedCollections
      }), _react.default.createElement(_palette.Box, null, _react.default.createElement(_ArtworkFilterContext.ArtworkFilterContextProvider, {
        filters: location.query,
        sortOptions: [{
          value: "-decayed_merch",
          text: "Default"
        }, {
          value: "sold,-has_price,-prices",
          text: "Price (desc.)"
        }, {
          value: "sold,-has_price,prices",
          text: "Price (asc.)"
        }, {
          value: "-partner_updated_at",
          text: "Recently updated"
        }, {
          value: "-published_at",
          text: "Recently added"
        }, {
          value: "-year",
          text: "Artwork year (desc.)"
        }, {
          value: "year",
          text: "Artwork year (asc.)"
        }],
        aggregations: viewer.artworks.aggregations,
        onChange: _urlBuilder.updateUrl,
        onFilterClick: function onFilterClick(key, value, filterState) {
          _this2.props.tracking.trackEvent({
            action_type: Schema.ActionType.CommercialFilterParamsChanged,
            changed: _defineProperty({}, key, value),
            current: filterState
          });
        }
      }, _react.default.createElement(_ArtworkFilter.BaseArtworkFilter, {
        relay: relay,
        viewer: viewer,
        relayVariables: {
          slug: viewer.slug
        }
      }))), viewer.linkedCollections.length === 0 && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Separator, {
        mt: 6,
        mb: 3
      }), _react.default.createElement(_palette.Box, {
        mt: "3"
      }, _react.default.createElement(_RelatedCollectionsRail.RelatedCollectionsRailFragmentContainer, {
        collections: viewer.relatedCollections,
        title: viewer.title
      })))));
    }
  }]);

  return CollectionApp;
}(_react.Component), _temp)) || _class); // TODO: Add `@principalField` to below query
// when KAWS returns a 404 in `errors` for non-existent collections.
// Currently it doesn't send any errors so there isn't anything
// for Metaphysics to propagate.

exports.CollectionApp = CollectionApp;

var CollectionAppQuery = function CollectionAppQuery() {
  var node = require("../../../../__generated__/CollectionRefetch2Query.graphql");

  if (node.hash && node.hash !== "64b59e9198ee3f15a5383370856b1473") {
    console.error("The definition of 'CollectionRefetch2Query' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
  }

  return require("../../../../__generated__/CollectionRefetch2Query.graphql");
};

exports.CollectionAppQuery = CollectionAppQuery;
var CollectionRefetchContainer = (0, _reactRelay.createRefetchContainer)((0, _SystemContext.withSystemContext)(CollectionApp), {
  viewer: function viewer() {
    var node = require("../../../../__generated__/Collection_viewer.graphql");

    if (node.hash && node.hash !== "7a2cce79a6692a77da812a8b24521e45") {
      console.error("The definition of 'Collection_viewer' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/Collection_viewer.graphql");
  }
}, CollectionAppQuery);
exports.CollectionRefetchContainer = CollectionRefetchContainer;
//# sourceMappingURL=index.js.map