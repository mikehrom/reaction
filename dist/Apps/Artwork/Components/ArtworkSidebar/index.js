"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtworkSidebarQueryRenderer = exports.ArtworkSidebarFragmentContainer = exports.ArtworkSidebar = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _palette = require("@artsy/palette");

var _renderWithLoadProgress = require("../../../../Artsy/Relay/renderWithLoadProgress");

var _AuctionTimer = require("../../../../Components/v2/AuctionTimer");

var _react = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ArtworkSidebarArtists = require("./ArtworkSidebarArtists");

var _ArtworkSidebarAuctionPartnerInfo = require("./ArtworkSidebarAuctionPartnerInfo");

var _ArtworkSidebarBidAction = require("./ArtworkSidebarBidAction");

var _ArtworkSidebarCommercial = require("./ArtworkSidebarCommercial");

var _ArtworkSidebarCurrentBidInfo = require("./ArtworkSidebarCurrentBidInfo");

var _ArtworkSidebarExtraLinks = require("./ArtworkSidebarExtraLinks");

var _ArtworkSidebarMetadata = require("./ArtworkSidebarMetadata");

var _ArtworkSidebarPartnerInfo = require("./ArtworkSidebarPartnerInfo");

var _Artsy = require("../../../../Artsy");

var _SystemQueryRenderer = require("../../../../Artsy/Relay/SystemQueryRenderer");

var _AuthenticityCertificate = require("../TrustSignals/AuthenticityCertificate");

var _SecurePayment = require("../TrustSignals/SecurePayment");

var _VerifiedSeller = require("../TrustSignals/VerifiedSeller");

var _graphql;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var ArtworkSidebarContainer = _palette.Box;

var TrustSignalsContainer = _styledComponents.default.div.withConfig({
  displayName: "ArtworkSidebar__TrustSignalsContainer",
  componentId: "weyg4q-0"
})(["> * + *{margin-top:", "px;}:after{content:\"\";display:block;margin-bottom:", "px;}"], (0, _palette.space)(2), (0, _palette.space)(3));

var ArtworkSidebar =
/*#__PURE__*/
function (_Component) {
  _inherits(ArtworkSidebar, _Component);

  function ArtworkSidebar() {
    _classCallCheck(this, ArtworkSidebar);

    return _possibleConstructorReturn(this, _getPrototypeOf(ArtworkSidebar).apply(this, arguments));
  }

  _createClass(ArtworkSidebar, [{
    key: "render",
    value: function render() {
      var artwork = this.props.artwork;
      return _react.default.createElement(ArtworkSidebarContainer, null, _react.default.createElement(_ArtworkSidebarArtists.ArtworkSidebarArtistsFragmentContainer, {
        artwork: artwork
      }), _react.default.createElement(_palette.Spacer, {
        mb: 2
      }), _react.default.createElement(_ArtworkSidebarMetadata.ArtworkSidebarMetadataFragmentContainer, {
        artwork: artwork
      }), artwork.is_in_auction ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Spacer, {
        mb: 2
      }), _react.default.createElement(_ArtworkSidebarAuctionPartnerInfo.ArtworkSidebarAuctionPartnerInfoFragmentContainer, {
        artwork: artwork
      }), _react.default.createElement(_ArtworkSidebarCurrentBidInfo.ArtworkSidebarCurrentBidInfoFragmentContainer, {
        artwork: artwork
      }), _react.default.createElement(_ArtworkSidebarBidAction.ArtworkSidebarBidActionFragmentContainer, {
        artwork: artwork
      }), !artwork.sale.is_closed && _react.default.createElement(_palette.Box, {
        py: 2
      }, _react.default.createElement(_AuctionTimer.AuctionTimerFragmentContainer, {
        sale: artwork.sale
      }))) : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Spacer, {
        mb: 3
      }), _react.default.createElement(_ArtworkSidebarCommercial.ArtworkSidebarCommercialFragmentContainer, {
        artwork: artwork
      }), _react.default.createElement(_ArtworkSidebarPartnerInfo.ArtworkSidebarPartnerInfoFragmentContainer, {
        artwork: artwork
      })), _react.default.createElement(TrustSignalsContainer, null, _react.default.createElement(_AuthenticityCertificate.AuthenticityCertificateFragmentContainer, {
        artwork: artwork
      }), _react.default.createElement(_SecurePayment.SecurePaymentFragmentContainer, {
        artwork: artwork
      }), _react.default.createElement(_VerifiedSeller.VerifiedSellerFragmentContainer, {
        artwork: artwork
      })), _react.default.createElement(_ArtworkSidebarExtraLinks.ArtworkSidebarExtraLinksFragmentContainer, {
        artwork: artwork
      }));
    }
  }]);

  return ArtworkSidebar;
}(_react.Component);

exports.ArtworkSidebar = ArtworkSidebar;
var ArtworkSidebarFragmentContainer = (0, _reactRelay.createFragmentContainer)(ArtworkSidebar, {
  artwork: function artwork() {
    var node = require("../../../../__generated__/ArtworkSidebar_artwork.graphql");

    if (node.hash && node.hash !== "dfe2a81caa32c07aa46a382f0b8cc2cb") {
      console.error("The definition of 'ArtworkSidebar_artwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/ArtworkSidebar_artwork.graphql");
  }
});
exports.ArtworkSidebarFragmentContainer = ArtworkSidebarFragmentContainer;

var ArtworkSidebarQueryRenderer = function ArtworkSidebarQueryRenderer(_ref) {
  var artworkID = _ref.artworkID;

  var _useContext = (0, _react.useContext)(_Artsy.SystemContext),
      relayEnvironment = _useContext.relayEnvironment;

  return _react.default.createElement(_SystemQueryRenderer.SystemQueryRenderer, {
    environment: relayEnvironment,
    variables: {
      artworkID: artworkID
    },
    query: _graphql || (_graphql = function _graphql() {
      var node = require("../../../../__generated__/ArtworkSidebarQuery.graphql");

      if (node.hash && node.hash !== "1988ef19372fd3bff993684592a2d8e8") {
        console.error("The definition of 'ArtworkSidebarQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("../../../../__generated__/ArtworkSidebarQuery.graphql");
    }),
    render: (0, _renderWithLoadProgress.renderWithLoadProgress)(ArtworkSidebarFragmentContainer)
  });
};

exports.ArtworkSidebarQueryRenderer = ArtworkSidebarQueryRenderer;
//# sourceMappingURL=index.js.map