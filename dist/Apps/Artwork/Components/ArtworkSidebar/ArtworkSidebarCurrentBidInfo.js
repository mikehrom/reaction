"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtworkSidebarCurrentBidInfoFragmentContainer = exports.ArtworkSidebarCurrentBidInfo = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _get = require("../../../../Utils/get");

var _palette = require("@artsy/palette");

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

var ArtworkSidebarCurrentBidInfo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ArtworkSidebarCurrentBidInfo, _React$Component);

  function ArtworkSidebarCurrentBidInfo() {
    _classCallCheck(this, ArtworkSidebarCurrentBidInfo);

    return _possibleConstructorReturn(this, _getPrototypeOf(ArtworkSidebarCurrentBidInfo).apply(this, arguments));
  }

  _createClass(ArtworkSidebarCurrentBidInfo, [{
    key: "render",
    value: function render() {
      var artwork = this.props.artwork; // We do not have reliable Bid info for artworks in Live sales in progress

      if (artwork.sale.is_live_open) return null;

      if (artwork.sale.is_closed) {
        return _react.default.createElement(_palette.Box, null, _react.default.createElement(_palette.Separator, {
          mb: 3
        }), _react.default.createElement(_palette.Serif, {
          size: "5t",
          weight: "semibold",
          color: "black100"
        }, "Bidding closed"), _react.default.createElement(_palette.Spacer, {
          mb: 3
        }));
      } // Don't display anything if there is no starting bid info


      if (!artwork.sale_artwork || !artwork.sale_artwork.current_bid) return null;
      var bidsCount = (0, _get.get)(artwork, function (a) {
        return a.sale_artwork.counts.bidder_positions;
      });
      var bidsPresent = bidsCount > 0;
      var bidColor = artwork.sale_artwork.is_with_reserve && bidsPresent && artwork.sale_artwork.reserve_status === "reserve_not_met" ? "red100" : "black60";
      var bidTextParts = [];
      var reserveMessage = artwork.sale_artwork.reserve_message;

      if (bidsPresent) {
        bidTextParts.push(bidsCount === 1 ? "1 bid" : bidsCount + " bids");
        if (reserveMessage) reserveMessage = reserveMessage.toLocaleLowerCase();
      }

      if (reserveMessage) {
        reserveMessage = reserveMessage + ".";
        bidTextParts.push(reserveMessage);
      }

      var bidText = bidTextParts.join(", ");
      /**
       * NOTE: This is making an incorrect assumption that there could only ever
       *       be 1 live sale with this work. When we run into that case, there is
       *       likely design work to be done too, so we can adjust this then.
       */

      var myLotStanding = artwork.myLotStanding && artwork.myLotStanding[0];
      var myBidPresent = !!(myLotStanding && myLotStanding.most_recent_bid);
      var myMostRecent = myBidPresent && myLotStanding.most_recent_bid;
      var myBidWinning = myBidPresent && (0, _get.get)(myLotStanding, function (s) {
        return s.active_bid.is_winning;
      });
      var myMaxBid = (0, _get.get)(myMostRecent, function (bid) {
        return bid.max_bid.display;
      });
      return _react.default.createElement(_palette.Box, null, _react.default.createElement(_palette.Separator, {
        mb: 3
      }), _react.default.createElement(_palette.Flex, {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
      }, _react.default.createElement(_palette.Serif, {
        size: "5t",
        weight: "semibold",
        pr: 1
      }, bidsPresent ? "Current bid" : "Starting bid"), _react.default.createElement(_palette.Flex, {
        flexDirection: "row",
        justifyContent: "right",
        alignContent: "baseline"
      }, myBidPresent && _react.default.createElement(_palette.Box, {
        pt: 0.5
      }, myBidWinning ? _react.default.createElement(_palette.WinningBidIcon, {
        fill: "green100"
      }) : _react.default.createElement(_palette.LosingBidIcon, {
        fill: "red100"
      })), _react.default.createElement(_palette.Serif, {
        size: "5t",
        weight: "semibold",
        pl: 0.5
      }, artwork.sale_artwork.current_bid.display))), _react.default.createElement(_palette.Flex, {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
      }, _react.default.createElement(_palette.Sans, {
        size: "2",
        color: bidColor,
        pr: 1
      }, bidText), myMaxBid && _react.default.createElement(_palette.Sans, {
        size: "2",
        color: "black60",
        pl: 1
      }, "Your max: ", myMaxBid)), _react.default.createElement(_palette.Spacer, {
        mb: 3
      }));
    }
  }]);

  return ArtworkSidebarCurrentBidInfo;
}(_react.default.Component);

exports.ArtworkSidebarCurrentBidInfo = ArtworkSidebarCurrentBidInfo;
var ArtworkSidebarCurrentBidInfoFragmentContainer = (0, _reactRelay.createFragmentContainer)(ArtworkSidebarCurrentBidInfo, {
  artwork: function artwork() {
    var node = require("../../../../__generated__/ArtworkSidebarCurrentBidInfo_artwork.graphql");

    if (node.hash && node.hash !== "fedde3c8966b405132cca1af168ee580") {
      console.error("The definition of 'ArtworkSidebarCurrentBidInfo_artwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/ArtworkSidebarCurrentBidInfo_artwork.graphql");
  }
});
exports.ArtworkSidebarCurrentBidInfoFragmentContainer = ArtworkSidebarCurrentBidInfoFragmentContainer;
//# sourceMappingURL=ArtworkSidebarCurrentBidInfo.js.map