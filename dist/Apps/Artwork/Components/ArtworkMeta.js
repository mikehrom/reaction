"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtworkMetaFragmentContainer = exports.ArtworkMeta = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.function.name");

var _react = _interopRequireWildcard(require("react"));

var _reactHead = require("react-head");

var _reactRelay = require("react-relay");

var _sharify = require("sharify");

var _get = require("../../../Utils/get");

var _Artsy = require("../../../Artsy");

var _SeoDataForArtwork = require("./Seo/SeoDataForArtwork");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ArtworkMeta =
/*#__PURE__*/
function (_Component) {
  _inherits(ArtworkMeta, _Component);

  function ArtworkMeta() {
    _classCallCheck(this, ArtworkMeta);

    return _possibleConstructorReturn(this, _getPrototypeOf(ArtworkMeta).apply(this, arguments));
  }

  _createClass(ArtworkMeta, [{
    key: "renderImageMetaTags",
    value: function renderImageMetaTags() {
      var artwork = this.props.artwork;
      var meta_image = artwork.meta_image,
          is_shareable = artwork.is_shareable;
      var imageURL = (0, _get.get)(meta_image, function (img) {
        return img.resized.url;
      });

      if (is_shareable && imageURL) {
        return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactHead.Meta, {
          property: "twitter:card",
          content: "summary_large_image"
        }), _react.default.createElement(_reactHead.Meta, {
          property: "og:image",
          content: imageURL
        }), _react.default.createElement(_reactHead.Meta, {
          property: "og:image:width",
          content: meta_image.resized.width
        }), _react.default.createElement(_reactHead.Meta, {
          property: "og:image:height",
          content: meta_image.resized.height
        }));
      }

      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactHead.Meta, {
        property: "twitter:card",
        content: "summary"
      }));
    }
  }, {
    key: "renderSailthruTags",
    value: function renderSailthruTags() {
      var artwork = this.props.artwork;
      var imageURL = (0, _get.get)(artwork, function (a) {
        return a.meta_image.resized.url;
      });

      if (artwork.context && artwork.context.__typename === "ArtworkContextFair") {
        return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactHead.Meta, {
          name: "artwork_type",
          content: "fair"
        }), _react.default.createElement(_reactHead.Meta, {
          name: "artwork_date",
          content: artwork.date
        }), artwork.artist_names && _react.default.createElement(_reactHead.Meta, {
          name: "artist_name",
          content: artwork.artist_names
        }), artwork.sale_message && _react.default.createElement(_reactHead.Meta, {
          name: "price",
          content: artwork.sale_message
        }), _react.default.createElement(_reactHead.Meta, {
          name: "sailthru_fair_slug",
          content: artwork.context.id
        }), _react.default.createElement(_reactHead.Meta, {
          name: "sailthru_fair_name",
          content: artwork.context.name
        }), _react.default.createElement(_reactHead.Meta, {
          name: "sailthru_fair_page",
          content: "artwork"
        }), artwork.partner && _react.default.createElement(_reactHead.Meta, {
          name: "sailthru_partner_name",
          content: artwork.partner.name
        }), artwork.image_rights && _react.default.createElement(_reactHead.Meta, {
          name: "sailthru_credit",
          content: artwork.image_rights
        }), imageURL && _react.default.createElement(_reactHead.Meta, {
          name: "image",
          content: imageURL
        }));
      }
    }
  }, {
    key: "renderGoogleAdSnippet",
    value: function renderGoogleAdSnippet() {
      var _this$props = this.props,
          artwork = _this$props.artwork,
          fromPropsGoogleAdId = _this$props.googleAdId;
      var fromSharifyGoogleAdId = _sharify.data.GOOGLE_ADWORDS_ID;
      var is_in_auction = artwork.is_in_auction,
          is_acquireable = artwork.is_acquireable,
          _id = artwork._id;
      if (!is_in_auction && !is_acquireable) return; // TODO: Investigate always being able to select from sharify.

      var googleAdId = fromSharifyGoogleAdId || fromPropsGoogleAdId;
      if (!googleAdId) return;
      var script = "\n      window.dataLayer = window.dataLayer || [];\n      function gtag(){dataLayer.push(arguments);}\n      gtag('js', new Date());\n      gtag('config', \"".concat(googleAdId, "\");\n      gtag('event', 'page_view', {\n        'send_to': \"").concat(googleAdId, "\",\n        'dynx_itemid': \"").concat(_id, "\"\n      });"); // The below might be a useful guard if scripts start to be evaluated twice.
      // const isServer = typeof window === "undefined"
      // if (!isServer) return

      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactHead.Meta, {
        tag: "script",
        type: "text/javascript",
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=".concat(googleAdId)
      }), _react.default.createElement(_reactHead.Meta, {
        tag: "script",
        type: "text/javascript",
        dangerouslySetInnerHTML: {
          __html: script
        }
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var artwork = this.props.artwork;
      var imageURL = (0, _get.get)(artwork, function (a) {
        return a.meta_image.resized.url;
      });
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactHead.Title, null, artwork.meta.title), _react.default.createElement(_reactHead.Meta, {
        name: "description",
        content: artwork.meta.description
      }), imageURL && _react.default.createElement(_reactHead.Meta, {
        name: "thumbnail",
        content: imageURL
      }), _react.default.createElement(_reactHead.Link, {
        rel: "canonical",
        href: "".concat(_sharify.data.APP_URL).concat(artwork.href)
      }), _react.default.createElement(_reactHead.Meta, {
        property: "twitter:description",
        content: artwork.meta.long_description
      }), _react.default.createElement(_reactHead.Meta, {
        property: "og:title",
        content: artwork.meta.title
      }), _react.default.createElement(_reactHead.Meta, {
        property: "og:description",
        content: artwork.meta.description
      }), _react.default.createElement(_reactHead.Meta, {
        property: "og:url",
        content: "".concat(_sharify.data.APP_URL).concat(artwork.href)
      }), _react.default.createElement(_reactHead.Meta, {
        property: "og:type",
        content: "".concat(_sharify.data.FACEBOOK_APP_NAMESPACE, ":artwork")
      }), _react.default.createElement(_SeoDataForArtwork.SeoDataForArtworkFragmentContainer, {
        artwork: artwork
      }), this.renderImageMetaTags(), this.renderSailthruTags(), this.renderGoogleAdSnippet());
    }
  }]);

  return ArtworkMeta;
}(_react.Component);

exports.ArtworkMeta = ArtworkMeta;
var ArtworkMetaFragmentContainer = (0, _reactRelay.createFragmentContainer)((0, _Artsy.withSystemContext)(ArtworkMeta), {
  artwork: function artwork() {
    var node = require("../../../__generated__/ArtworkMeta_artwork.graphql");

    if (node.hash && node.hash !== "e1bf74578133fc8ebf24b1ea06329d38") {
      console.error("The definition of 'ArtworkMeta_artwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../__generated__/ArtworkMeta_artwork.graphql");
  }
});
exports.ArtworkMetaFragmentContainer = ArtworkMetaFragmentContainer;
//# sourceMappingURL=ArtworkMeta.js.map