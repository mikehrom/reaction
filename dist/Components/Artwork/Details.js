"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DetailsFragmentContainer = exports.Details = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.string.link");

require("core-js/modules/es6.array.reduce");

var _palette = require("@artsy/palette");

var _Artsy = require("../../Artsy");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireDefault(require("styled-components"));

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TruncatedLine = _styledComponents.default.div.withConfig({
  displayName: "Details__TruncatedLine",
  componentId: "sc-16w5d4l-0"
})(["display:block;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;"]);

var Details =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Details, _React$Component);

  function Details() {
    _classCallCheck(this, Details);

    return _possibleConstructorReturn(this, _getPrototypeOf(Details).apply(this, arguments));
  }

  _createClass(Details, [{
    key: "artistLine",
    value: function artistLine() {
      var _this = this;

      var _this$props$artwork = this.props.artwork,
          cultural_maker = _this$props$artwork.cultural_maker,
          artists = _this$props$artwork.artists;
      var includeLinks = this.props.includeLinks;

      if (cultural_maker) {
        return _react.default.createElement(TruncatedLine, null, _react.default.createElement("strong", null, cultural_maker));
      } else if (artists && artists.length) {
        var artistLine = artists.reduce(function (acc, artist, index) {
          return acc.concat([", ", includeLinks ? _this.link(artist.name, artist.href, artist.__id + "-" + index) : artist.name]);
        }, []).slice(1);
        return _react.default.createElement(TruncatedLine, null, _react.default.createElement("strong", null, artistLine));
      }
    }
  }, {
    key: "titleLine",
    value: function titleLine() {
      var includeLinks = this.props.includeLinks;

      var artworkText = _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("em", null, this.props.artwork.title), this.props.artwork.date && ", ".concat(this.props.artwork.date));

      var artworkTextWithLink = includeLinks ? _react.default.createElement(_TextLink.default, {
        href: this.props.artwork.href
      }, artworkText) : artworkText;
      return _react.default.createElement(TruncatedLine, null, artworkTextWithLink);
    }
  }, {
    key: "line",
    value: function line(text) {
      return _react.default.createElement(TruncatedLine, null, text);
    }
  }, {
    key: "link",
    value: function link(text, href, key) {
      return _react.default.createElement(_TextLink.default, {
        href: href,
        key: key
      }, text);
    }
  }, {
    key: "partnerLine",
    value: function partnerLine() {
      if (this.props.artwork.collecting_institution) {
        return this.line(this.props.artwork.collecting_institution);
      } else if (this.props.artwork.partner) {
        if (this.props.includeLinks) {
          return _react.default.createElement(TruncatedLine, null, _react.default.createElement(_TextLink.default, {
            href: this.props.artwork.partner.href
          }, this.props.artwork.partner.name));
        } else {
          return this.line(this.props.artwork.partner.name);
        }
      }
    }
  }, {
    key: "saleLine",
    value: function saleLine() {
      var artwork = this.props.artwork;
      var hasSaleMessage = artwork.sale_message && artwork.sale_message !== "Contact For Price";
      var notInAuction = !(artwork.sale && artwork.sale.is_auction);

      if (hasSaleMessage && notInAuction) {
        return _react.default.createElement("div", null, artwork.sale_message);
      }
    }
  }, {
    key: "saleInfoLine",
    value: function saleInfoLine() {
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Sans, {
        style: {
          display: "inline"
        },
        color: (0, _palette.color)("black100"),
        weight: "medium",
        size: "2"
      }, this.saleMessage(), " "), _react.default.createElement(_palette.Sans, {
        style: {
          display: "inline"
        },
        size: "2",
        color: (0, _palette.color)("black100"),
        weight: "regular"
      }, this.bidInfo()), _react.default.createElement(_palette.Spacer, {
        mb: 0.3
      }));
    }
  }, {
    key: "bidInfo",
    value: function bidInfo() {
      var artwork = this.props.artwork;
      var sale = this.props.artwork.sale;
      var inRunningAuction = sale && sale.is_auction && !sale.is_closed;

      if (!inRunningAuction) {
        return undefined;
      }

      var bidderPositionCounts = (0, _get.get)(artwork, function (a) {
        return a.sale_artwork.counts.bidder_positions;
      }, 0);

      if (bidderPositionCounts === 0) {
        return undefined;
      }

      var s = bidderPositionCounts > 1 ? "s" : "";
      return "(".concat(bidderPositionCounts, " bid").concat(s, ")");
    }
  }, {
    key: "saleMessage",
    value: function saleMessage() {
      var artwork = this.props.artwork;
      var sale = artwork.sale;
      var isAuction = sale && sale.is_auction;

      if (isAuction) {
        var showBiddingClosed = sale.is_closed;

        if (showBiddingClosed) {
          return "Bidding closed";
        } else {
          var highestBidDisplay = (0, _get.get)(artwork, function (p) {
            return p.sale_artwork.highest_bid.display;
          });
          var openingBidDisplay = (0, _get.get)(artwork, function (p) {
            return p.sale_artwork.opening_bid.display;
          });
          return highestBidDisplay || openingBidDisplay || "";
        }
      } // TODO: Extract this sentence-cased version and apply everywhere.


      if (artwork.sale_message === "Contact For Price") {
        return "Contact for price";
      }

      return artwork.sale_message;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement(_Artsy.SystemContextConsumer, null, function (_ref) {
        var user = _ref.user;
        return _react.default.createElement("div", null, _this2.saleInfoLine(), _this2.artistLine(), _this2.titleLine(), _this2.partnerLine());
      });
    }
  }]);

  return Details;
}(_react.default.Component);

exports.Details = Details;

_defineProperty(Details, "defaultProps", {
  showSaleLine: true,
  includeLinks: true
});

var DetailsFragmentContainer = (0, _reactRelay.createFragmentContainer)(Details, {
  artwork: function artwork() {
    var node = require("../../__generated__/Details_artwork.graphql");

    if (node.hash && node.hash !== "a53e33484f3008f6623800dc61f8c891") {
      console.error("The definition of 'Details_artwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/Details_artwork.graphql");
  }
});
exports.DetailsFragmentContainer = DetailsFragmentContainer;
//# sourceMappingURL=Details.js.map