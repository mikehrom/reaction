"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Contact = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _get = require("../../Utils/get");

var _TextLink = _interopRequireDefault(require("../TextLink"));

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

var Contact =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Contact, _React$Component);

  function Contact() {
    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, _getPrototypeOf(Contact).apply(this, arguments));
  }

  _createClass(Contact, [{
    key: "contactLine",
    value: function contactLine() {
      var artwork = this.props.artwork;

      if (artwork.sale && artwork.sale.is_auction) {
        return this.auctionLine();
      } else if (artwork.is_inquireable) {
        return this.contactPartnerLine();
      }
    }
  }, {
    key: "auctionLine",
    value: function auctionLine() {
      var artwork = this.props.artwork;
      var isLiveOpen = (0, _get.get)(artwork, function (p) {
        return p.sale.is_live_open;
      });
      var isOpen = (0, _get.get)(artwork, function (p) {
        return p.sale.is_open;
      });
      var isClosed = (0, _get.get)(artwork, function (p) {
        return p.sale.is_closed;
      });

      if (isLiveOpen) {
        return _react.default.createElement(_TextLink.default, {
          href: artwork.href,
          underline: true
        }, "Enter Live Auction");
      } else if (isOpen) {
        var sa = (0, _get.get)(artwork, function (p) {
          return p.sale_artwork;
        });
        var bidderPositions = (0, _get.get)(sa, function (p) {
          return p.counts.bidder_positions;
        });
        var highestBidDisplay = (0, _get.get)(sa, function (p) {
          return p.highest_bid.display;
        });
        var openingBidDisplay = (0, _get.get)(sa, function (p) {
          return p.opening_bid.display;
        });

        if (bidderPositions && bidderPositions > 0) {
          var s = bidderPositions > 1 ? "s" : "";
          return _react.default.createElement("span", null, highestBidDisplay, " (", bidderPositions, " bid", s, ")");
        } else {
          return _react.default.createElement("span", null, openingBidDisplay);
        }
      } else if (isClosed) {
        return _react.default.createElement("span", null, "Auction closed");
      } else {
        return _react.default.createElement("span", null);
      }
    }
  }, {
    key: "contactPartnerLine",
    value: function contactPartnerLine() {
      var partner = (0, _get.get)(this.props, function (p) {
        return p.artwork.partner.type.toLocaleLowerCase();
      });

      if (partner) {
        return _react.default.createElement(_TextLink.default, {
          href: this.props.artwork.href,
          underline: true
        }, "Contact ", partner);
      } else {
        return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, this.contactLine());
    }
  }]);

  return Contact;
}(_react.default.Component);

exports.Contact = Contact;

var _default = (0, _reactRelay.createFragmentContainer)(Contact, {
  artwork: function artwork() {
    var node = require("../../__generated__/Contact_artwork.graphql");

    if (node.hash && node.hash !== "eae0e1181f8c3d8e63e2e9d53be065d3") {
      console.error("The definition of 'Contact_artwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/Contact_artwork.graphql");
  }
});

exports.default = _default;
//# sourceMappingURL=Contact.js.map