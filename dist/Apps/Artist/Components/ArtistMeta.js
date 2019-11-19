"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtistMetaFragmentContainer = exports.ArtistMeta = exports.structuredDataAttributes = exports.offerAttributes = exports.productAttributes = exports.offersAttributes = exports.imageObjectAttributes = exports.sellerFromPartner = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.string.small");

require("core-js/modules/es6.function.name");

var _pickBy2 = _interopRequireDefault(require("lodash/pickBy"));

var _identity2 = _interopRequireDefault(require("lodash/identity"));

var _Person = require("../../../Components/v2/Seo/Person");

var _react = _interopRequireWildcard(require("react"));

var _reactHead = require("react-head");

var _reactRelay = require("react-relay");

var _sharify = require("sharify");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var sellerFromPartner = function sellerFromPartner(partner) {
  if (partner) {
    var profile = partner.profile;
    var image = imageObjectAttributes(profile);
    return {
      "@context": "http://schema.org",
      "@type": "ArtGallery",
      name: partner.name,
      url: "".concat(_sharify.data.APP_URL).concat(partner.href),
      image: image
    };
  }
};

exports.sellerFromPartner = sellerFromPartner;

var imageObjectAttributes = function imageObjectAttributes(item) {
  if (!item) {
    return null;
  }

  var thumbnailUrl = item.image && item.image.small;
  var url = item.image && item.image.large;
  return thumbnailUrl && {
    "@type": "ImageObject",
    thumbnailUrl: thumbnailUrl,
    url: url
  };
};

exports.imageObjectAttributes = imageObjectAttributes;

var offersAttributes = function offersAttributes(artist) {
  var edges = artist.artworks_connection.edges;
  var offers = edges && edges.map(function (_ref) {
    var node = _ref.node;
    var seller = sellerFromPartner(node.partner);
    var itemOffered = productAttributes(artist, node);
    var availability = node.availability === "for sale" ? "InStock" : "OutOfStock";
    if (!itemOffered) return null;
    return {
      "@type": "Offer",
      availability: availability,
      priceCurrency: node.price_currency,
      seller: seller,
      itemOffered: itemOffered
    };
  }).filter(function (offer) {
    return !!offer;
  });
  return offers;
};

exports.offersAttributes = offersAttributes;

var productAttributes = function productAttributes(artist, artwork) {
  var image = imageObjectAttributes(artwork);
  var offers = offerAttributes(artwork);
  if (!offers) return null;
  return {
    "@type": "Product",
    additionalType: artwork.category,
    productionDate: artwork.date,
    name: artwork.title,
    url: "".concat(_sharify.data.APP_URL).concat(artwork.href),
    image: image,
    offers: offers,
    brand: {
      "@type": "Person",
      name: artist.name
    }
  };
};

exports.productAttributes = productAttributes;

var offerAttributes = function offerAttributes(artwork) {
  if (!artwork.listPrice) return null;

  switch (artwork.listPrice.__typename) {
    case "PriceRange":
      if (!artwork.listPrice.minPrice || !artwork.listPrice.maxPrice) {
        return null;
      }

      return {
        "@type": "AggregateOffer",
        lowPrice: artwork.listPrice.minPrice.major,
        highPrice: artwork.listPrice.maxPrice.major,
        priceCurrency: artwork.listPrice.maxPrice.currencyCode
      };

    case "Money":
      return {
        "@type": "Offer",
        price: artwork.listPrice.major,
        priceCurrency: artwork.listPrice.currencyCode,
        availability: "InStock"
      };

    default:
      return null;
  }
};

exports.offerAttributes = offerAttributes;

var structuredDataAttributes = function structuredDataAttributes(artist) {
  var makesOffer = offersAttributes(artist);

  if (makesOffer && makesOffer.length === 0) {
    makesOffer = undefined;
  }

  var attributes = {
    additionalType: "Artist",
    image: artist.image ? artist.image.large : "",
    name: artist.name,
    url: "".concat(_sharify.data.APP_URL).concat(artist.href),
    gender: artist.gender,
    birthDate: artist.birthday,
    deathDate: artist.deathday,
    mainEntityOfPage: "".concat(_sharify.data.APP_URL).concat(artist.href),
    description: artist.meta ? artist.meta.description : "",
    nationality: {
      "@type": "Country",
      name: artist.nationality
    },
    makesOffer: makesOffer
  };
  return (0, _pickBy2.default)(attributes, _identity2.default);
};

exports.structuredDataAttributes = structuredDataAttributes;

var ArtistMeta =
/*#__PURE__*/
function (_Component) {
  _inherits(ArtistMeta, _Component);

  function ArtistMeta() {
    _classCallCheck(this, ArtistMeta);

    return _possibleConstructorReturn(this, _getPrototypeOf(ArtistMeta).apply(this, arguments));
  }

  _createClass(ArtistMeta, [{
    key: "renderImageMetaTags",
    value: function renderImageMetaTags() {
      var artist = this.props.artist;
      var hasImage = artist.image && artist.image.versions.length;

      if (hasImage && artist.image.versions.indexOf("large") !== -1) {
        return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactHead.Meta, {
          property: "twitter:card",
          content: "summary_large_image"
        }), _react.default.createElement(_reactHead.Meta, {
          property: "og:image",
          content: artist.image.large
        }), _react.default.createElement(_reactHead.Meta, {
          name: "thumbnail",
          content: artist.image.square
        }));
      } else {
        return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactHead.Meta, {
          property: "twitter:card",
          content: "summary"
        }));
      }
    }
  }, {
    key: "maybeRenderNoIndex",
    value: function maybeRenderNoIndex() {
      var artist = this.props.artist;

      if (artist.counts.artworks === 0 && !artist.blurb) {
        return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactHead.Meta, {
          name: "robots",
          content: "noindex, follow"
        }));
      }
    }
  }, {
    key: "renderStructuredData",
    value: function renderStructuredData() {
      var artist = this.props.artist;
      return _react.default.createElement(_Person.Person, {
        data: structuredDataAttributes(artist)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var artist = this.props.artist;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactHead.Title, null, artist.meta.title), _react.default.createElement(_reactHead.Link, {
        rel: "canonical",
        href: "".concat(_sharify.data.APP_URL, "/artist/").concat(artist.id)
      }), _react.default.createElement(_reactHead.Meta, {
        property: "og:title",
        content: artist.meta.title
      }), _react.default.createElement(_reactHead.Meta, {
        name: "description",
        content: artist.meta.description
      }), _react.default.createElement(_reactHead.Meta, {
        property: "og:description",
        content: artist.meta.description
      }), _react.default.createElement(_reactHead.Meta, {
        property: "twitter:description",
        content: artist.meta.description
      }), _react.default.createElement(_reactHead.Meta, {
        property: "og:url",
        href: "".concat(_sharify.data.APP_URL, "/artist/").concat(artist.id)
      }), _react.default.createElement(_reactHead.Meta, {
        property: "og:type",
        href: "".concat(_sharify.data.FACEBOOK_APP_NAMESPACE, ":artist")
      }), artist.alternate_names && _react.default.createElement(_reactHead.Meta, {
        name: "skos:prefLabel",
        content: artist.alternate_names.join("; ")
      }), artist.nationality && _react.default.createElement(_reactHead.Meta, {
        property: "og:nationality",
        content: artist.nationality
      }), artist.birthday && _react.default.createElement(_reactHead.Meta, {
        property: "og:birthyear",
        content: artist.birthday
      }), artist.deathday && _react.default.createElement(_reactHead.Meta, {
        property: "og:deathyear",
        content: artist.deathday
      }), this.renderImageMetaTags(), this.maybeRenderNoIndex(), this.renderStructuredData());
    }
  }]);

  return ArtistMeta;
}(_react.Component);

exports.ArtistMeta = ArtistMeta;
var ArtistMetaFragmentContainer = (0, _reactRelay.createFragmentContainer)(ArtistMeta, {
  artist: function artist() {
    var node = require("../../../__generated__/ArtistMeta_artist.graphql");

    if (node.hash && node.hash !== "d39c9878d26bce0520f066843a619884") {
      console.error("The definition of 'ArtistMeta_artist' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../__generated__/ArtistMeta_artist.graphql");
  }
});
exports.ArtistMetaFragmentContainer = ArtistMetaFragmentContainer;
//# sourceMappingURL=ArtistMeta.js.map