"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SeoProductsForArtworks = exports.SeoProducts = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.regexp.split");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.array.filter");

var _currency = _interopRequireDefault(require("currency.js"));

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _underscore = require("underscore.string");

var _Product = require("../../../Components/v2/Seo/Product");

var _get = require("../../../Utils/get");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var APP_URL = process.env.APP_URL;
var AVAILABILITY = {
  "for sale": "https://schema.org/InStock",
  sold: "https://schema.org/OutOfStock"
};

var formatCurrency = function formatCurrency(value) {
  return (0, _currency.default)(value, {
    separator: ""
  }).format();
};

var SeoProducts =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SeoProducts, _React$Component);

  function SeoProducts() {
    _classCallCheck(this, SeoProducts);

    return _possibleConstructorReturn(this, _getPrototypeOf(SeoProducts).apply(this, arguments));
  }

  _createClass(SeoProducts, [{
    key: "render",
    value: function render() {
      var artworks_connection = this.props.artworks.artworks_connection; // here the filtering is necessary so we can re-use the artwork list shown in the page (could include
      // non-acquireable artworks) without making an extra request. Also, seller image is a required field
      // so excluding those that don't have `partner.profile.icon.url`.

      var artworksForSeoProduct = artworks_connection.edges.filter(function (edge) {
        return (0, _get.get)(edge, function (e) {
          return e.node.is_acquireable && e.node.partner.profile.icon.url;
        });
      });
      return artworksForSeoProduct.map(function (a) {
        if (a.node !== null) {
          var node = a.node;
          var artists = node.artists,
              availability = node.availability,
              image = node.image,
              is_price_range = node.is_price_range,
              partner = node.partner,
              price = node.price;
          var location = partner && partner.locations && partner.locations[0];
          var artistsName = artists ? (0, _underscore.toSentence)(artists.map(function (artist) {
            return artist.name;
          })) : null;
          var isInstitution = partner && partner.type === "Institution";
          var partnerImg = (0, _get.get)(partner, function (p) {
            return p.profile.icon.url;
          });
          return _react.default.createElement(_Product.Product, {
            key: node.__id,
            data: _objectSpread({
              name: node.title,
              image: image && image.url,
              description: node.meta && node.meta.description,
              url: "".concat(APP_URL).concat(node.href),
              brand: {
                "@type": "Person",
                name: artistsName
              }
            }, isInstitution ? {} : {
              category: node.category,
              productionDate: node.date,
              offers: {
                "@type": "Offer",
                price: !is_price_range ? formatCurrency(price) : {
                  minPrice: price && formatCurrency(price.split("-")[0]),
                  maxPrice: price && formatCurrency(price.split("-")[1])
                },
                priceCurrency: node.price_currency,
                availability: availability && AVAILABILITY[availability],
                seller: {
                  "@type": "ArtGallery",
                  name: partner && partner.name,
                  image: partnerImg,
                  address: location ? [location.address, location.address_2, location.city, location.state, location.country, location.postal_code].filter(Boolean).join(", ") : null,
                  telephone: location ? location.phone : null
                }
              }
            })
          });
        }
      });
    }
  }]);

  return SeoProducts;
}(_react.default.Component);

exports.SeoProducts = SeoProducts;
var SeoProductsForArtworks = (0, _reactRelay.createFragmentContainer)(SeoProducts, {
  artworks: function artworks() {
    var node = require("../../../__generated__/SeoProductsForArtworks_artworks.graphql");

    if (node.hash && node.hash !== "afaa66a6f2b7f10590f77f0064ab18e2") {
      console.error("The definition of 'SeoProductsForArtworks_artworks' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../__generated__/SeoProductsForArtworks_artworks.graphql");
  }
});
exports.SeoProductsForArtworks = SeoProductsForArtworks;
//# sourceMappingURL=SeoProductsForArtworks.js.map