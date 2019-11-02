"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SeoDataForArtworkFragmentContainer = exports.SeoDataForArtwork = exports.AVAILABILITY = void 0;

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/es6.regexp.split");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es6.function.name");

var _trim2 = _interopRequireDefault(require("lodash/trim"));

var _react = _interopRequireDefault(require("react"));

var _CreativeWork = require("../../../../Components/v2/Seo/CreativeWork");

var _Product = require("../../../../Components/v2/Seo/Product");

var _reactRelay = require("react-relay");

var _sharify = require("sharify");

var _get = require("../../../../Utils/get");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var APP_URL = _sharify.data.APP_URL;
var AVAILABILITY = {
  "for sale": "https://schema.org/InStock",
  sold: "https://schema.org/OutOfStock"
};
exports.AVAILABILITY = AVAILABILITY;

var SeoDataForArtwork = function SeoDataForArtwork(_ref) {
  var artwork = _ref.artwork;
  var artistsName = artwork.artist_names;
  var dimensions = parseDimensions((0, _get.get)(artwork, function (a) {
    return a.dimensions.in;
  }, ""));

  var artworkMetaData = _objectSpread({
    name: artwork.meta.title,
    image: (0, _get.get)(artwork, function (a) {
      return a.meta_image.resized.url;
    }),
    description: (0, _get.get)(artwork, function (a) {
      return a.meta.description;
    }),
    url: "".concat(APP_URL).concat(artwork.href)
  }, dimensions, {
    brand: {
      "@type": "Person",
      name: artistsName
    }
  });

  var partnerType = (0, _get.get)(artwork, function (a) {
    return a.partner.type;
  });

  if (partnerType === "Institution") {
    return _react.default.createElement(_CreativeWork.CreativeWork, {
      data: artworkMetaData
    });
  }

  var ecommerceData = {
    category: artwork.category,
    productionDate: artwork.date,
    offers: _objectSpread({
      "@type": "Offer"
    }, displayPrice(artwork), {
      availability: AVAILABILITY[artwork.availability],
      seller: {
        "@type": "ArtGallery",
        name: (0, _get.get)(artwork, function (a) {
          return a.partner.name;
        }),
        image: (0, _get.get)(artwork, function (a) {
          return a.partner.profile.image.resized.url;
        })
      }
    })
  };
  return _react.default.createElement(_Product.Product, {
    data: _objectSpread({}, artworkMetaData, ecommerceData)
  });
};

exports.SeoDataForArtwork = SeoDataForArtwork;
var SeoDataForArtworkFragmentContainer = (0, _reactRelay.createFragmentContainer)(SeoDataForArtwork, {
  artwork: function artwork() {
    var node = require("../../../../__generated__/SeoDataForArtwork_artwork.graphql");

    if (node.hash && node.hash !== "d478c663cc0c86c7e82da8c3342d1bf7") {
      console.error("The definition of 'SeoDataForArtwork_artwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/SeoDataForArtwork_artwork.graphql");
  }
});
exports.SeoDataForArtworkFragmentContainer = SeoDataForArtworkFragmentContainer;

var displayPrice = function displayPrice(artwork) {
  var is_price_hidden = artwork.is_price_hidden,
      is_price_range = artwork.is_price_range,
      price = artwork.price,
      sale_message = artwork.sale_message,
      price_currency = artwork.price_currency;

  if (is_price_range && !is_price_hidden && price) {
    return buildPriceSpecification(price_currency, splitPriceRange(price));
  }

  if (sale_message && sale_message.includes("-")) {
    return buildPriceSpecification(price_currency, splitPriceRange(sale_message));
  }

  return {
    price: sale_message,
    priceCurrency: price_currency
  };
};

var splitPriceRange = function splitPriceRange(priceRange) {
  var minAndMaxPrice = priceRange.split("-");
  return {
    minPrice: (0, _trim2.default)(minAndMaxPrice[0]).replace("$", ""),
    maxPrice: (0, _trim2.default)(minAndMaxPrice[1])
  };
};

var buildPriceSpecification = function buildPriceSpecification(price_currency, priceRange) {
  return {
    priceSpecification: _objectSpread({
      "@type": "PriceSpecification",
      priceCurrency: price_currency
    }, priceRange)
  };
};

var parseDimensions = function parseDimensions(dimensions) {
  if (!dimensions) return {};
  var segments = dimensions.replace(" in", "").split("×");

  if (segments.length === 2) {
    return {
      width: "".concat((0, _trim2.default)(segments[0]), " in"),
      height: "".concat((0, _trim2.default)(segments[1]), " in")
    };
  }

  if (segments.length === 3) {
    return {
      width: "".concat((0, _trim2.default)(segments[0]), " in"),
      height: "".concat((0, _trim2.default)(segments[1]), " in"),
      depth: "".concat((0, _trim2.default)(segments[2]), " in")
    };
  }

  return {};
};
//# sourceMappingURL=SeoDataForArtwork.js.map