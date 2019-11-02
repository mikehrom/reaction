"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtworkBannerQueryRenderer = exports.ArtworkBannerFragmentContainer = exports.ArtworkBanner = void 0;

require("core-js/modules/es6.function.name");

var _Artsy = require("../../../../Artsy");

var _renderWithLoadProgress = require("../../../../Artsy/Relay/renderWithLoadProgress");

var _SystemQueryRenderer = require("../../../../Artsy/Relay/SystemQueryRenderer");

var _react = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _get = require("../../../../Utils/get");

var _Banner = require("./Banner");

var _graphql;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var ArtworkBanner = function ArtworkBanner(props) {
  var _props$artwork = props.artwork,
      artworkContextAuction = _props$artwork.artworkContextAuction,
      artworkContextFair = _props$artwork.artworkContextFair,
      artworkContextPartnerShow = _props$artwork.artworkContextPartnerShow,
      partner = _props$artwork.partner,
      sale = _props$artwork.sale; // Auction

  if (artworkContextAuction && artworkContextAuction.__typename === "ArtworkContextAuction") {
    var auctionImage = (0, _get.get)(sale, function (s) {
      return s.is_auction && s.cover_image.url;
    });
    return _react.default.createElement(_Banner.Banner, {
      imageUrl: auctionImage,
      initials: partner.initials,
      meta: "In auction",
      name: artworkContextAuction.name // Do not display partner name for benefit or gallery auctions
      ,
      subHeadline: sale.isBenefit || sale.isGalleryAuction ? null : partner.name,
      href: artworkContextAuction.href
    });
  } // Fair


  if (artworkContextFair && artworkContextFair.__typename === "ArtworkContextFair") {
    var fairImage = (0, _get.get)(artworkContextFair, function (c) {
      return c.profile.icon.img.url;
    });
    var initials = (0, _get.get)(artworkContextFair, function (c) {
      return c.profile.initials;
    });
    return _react.default.createElement(_Banner.Banner, {
      imageUrl: fairImage,
      initials: initials,
      meta: "At fair",
      name: artworkContextFair.name,
      subHeadline: partner.name,
      href: artworkContextFair.href
    });
  } // Partner Show


  if (artworkContextPartnerShow && artworkContextPartnerShow.__typename === "ArtworkContextPartnerShow") {
    var showImage = (0, _get.get)(artworkContextPartnerShow, function (c) {
      return c.thumbnail.img.url;
    });
    var showLine = "In current show";

    if (artworkContextPartnerShow.status === "upcoming") {
      showLine = "In upcoming show";
    } else if (artworkContextPartnerShow.status === "closed") {
      showLine = "In past show";
    }

    return _react.default.createElement(_Banner.Banner, {
      imageUrl: showImage,
      initials: partner.initials,
      meta: showLine,
      name: artworkContextPartnerShow.name,
      subHeadline: partner.name,
      href: artworkContextPartnerShow.href
    });
  }

  return null;
};

exports.ArtworkBanner = ArtworkBanner;
var ArtworkBannerFragmentContainer = (0, _reactRelay.createFragmentContainer)(ArtworkBanner, {
  artwork: function artwork() {
    var node = require("../../../../__generated__/ArtworkBanner_artwork.graphql");

    if (node.hash && node.hash !== "844cbaa515bdcdb004d87d2a42b1ee2e") {
      console.error("The definition of 'ArtworkBanner_artwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/ArtworkBanner_artwork.graphql");
  }
});
exports.ArtworkBannerFragmentContainer = ArtworkBannerFragmentContainer;

var ArtworkBannerQueryRenderer = function ArtworkBannerQueryRenderer(_ref) {
  var artworkID = _ref.artworkID;

  var _useContext = (0, _react.useContext)(_Artsy.SystemContext),
      relayEnvironment = _useContext.relayEnvironment;

  return _react.default.createElement(_SystemQueryRenderer.SystemQueryRenderer, {
    environment: relayEnvironment,
    variables: {
      artworkID: artworkID
    },
    query: _graphql || (_graphql = function _graphql() {
      var node = require("../../../../__generated__/ArtworkBannerQuery.graphql");

      if (node.hash && node.hash !== "57669525925ecb7643ccd32c0a3a66a8") {
        console.error("The definition of 'ArtworkBannerQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("../../../../__generated__/ArtworkBannerQuery.graphql");
    }),
    render: (0, _renderWithLoadProgress.renderWithLoadProgress)(ArtworkBannerFragmentContainer)
  });
};

exports.ArtworkBannerQueryRenderer = ArtworkBannerQueryRenderer;
//# sourceMappingURL=index.js.map