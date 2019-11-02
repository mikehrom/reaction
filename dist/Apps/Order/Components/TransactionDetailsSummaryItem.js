"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransactionDetailsSummaryItemFragmentContainer = exports.TransactionDetailsSummaryItem = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

var _omit = _interopRequireDefault(require("lodash/omit"));

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _palette = require("@artsy/palette");

var _v = require("../../../Components/v2");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var emDash = "—";

var TransactionDetailsSummaryItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TransactionDetailsSummaryItem, _React$Component);

  function TransactionDetailsSummaryItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TransactionDetailsSummaryItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TransactionDetailsSummaryItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "shippingDisplayAmount", function () {
      var order = _this.props.order;

      switch (order.mode) {
        case "BUY":
          return order.shippingTotal || emDash;

        case "OFFER":
          var offer = _this.getOffer();

          return offer && offer.shippingTotal || emDash;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "taxDisplayAmount", function () {
      var order = _this.props.order;

      switch (order.mode) {
        case "BUY":
          return order.taxTotal || emDash;

        case "OFFER":
          var offer = _this.getOffer();

          return offer && offer.taxTotal || emDash;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "buyerTotalDisplayAmount", function () {
      var order = _this.props.order;

      switch (order.mode) {
        case "BUY":
          return order.buyerTotal;

        case "OFFER":
          var offer = _this.getOffer();

          return offer && offer.buyerTotal;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderPriceEntry", function () {
      var _this$props = _this.props,
          order = _this$props.order,
          offerOverride = _this$props.offerOverride,
          offerContextPrice = _this$props.offerContextPrice;

      if (order.mode === "BUY") {
        return _react.default.createElement(Entry, {
          label: "Price",
          value: order.itemsTotal
        });
      }

      var offer = _this.getOffer();

      var isBuyerOffer = offerOverride != null || !offer || offer.fromParticipant === "BUYER";
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(Entry, {
        label: isBuyerOffer ? "Your offer" : "Seller's offer",
        value: offerOverride || offer && offer.amount || emDash
      }), offerContextPrice === "LIST_PRICE" ? _react.default.createElement(SecondaryEntry, {
        label: "List price",
        value: order.totalListPrice
      }) : // show last offer
      _react.default.createElement(SecondaryEntry, {
        label: order.lastOffer.fromParticipant === "SELLER" ? "Seller's offer" : "Your offer",
        value: order.lastOffer.amount
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderNoteEntry", function () {
      var offer = _this.getOffer();

      if (offer.note) {
        return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Spacer, {
          mb: [2, 3]
        }), _react.default.createElement(_palette.Serif, {
          size: ["2", "3t"],
          weight: "semibold",
          color: "black100"
        }, "Your note"), _react.default.createElement(_palette.Serif, {
          size: ["2", "3t"],
          color: "black60"
        }, offer.note));
      }
    });

    return _this;
  }

  _createClass(TransactionDetailsSummaryItem, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          showOfferNote = _this$props2.showOfferNote,
          offerOverride = _this$props2.offerOverride,
          order = _this$props2.order,
          others = _objectWithoutProperties(_this$props2, ["showOfferNote", "offerOverride", "order"]);

      return _react.default.createElement(_v.StepSummaryItem, others, this.renderPriceEntry(), _react.default.createElement(_palette.Spacer, {
        mb: 2
      }), _react.default.createElement(Entry, {
        label: "Shipping",
        value: this.shippingDisplayAmount()
      }), _react.default.createElement(Entry, {
        label: "Tax",
        value: this.taxDisplayAmount()
      }), _react.default.createElement(_palette.Spacer, {
        mb: 2
      }), _react.default.createElement(Entry, {
        label: "Total",
        value: this.buyerTotalDisplayAmount(),
        final: true
      }), showOfferNote && order.mode === "OFFER" && this.renderNoteEntry());
    }
  }, {
    key: "getOffer",
    value: function getOffer() {
      return this.props.useLastSubmittedOffer ? this.props.order.lastOffer : this.props.order.myLastOffer;
    }
  }]);

  return TransactionDetailsSummaryItem;
}(_react.default.Component);

exports.TransactionDetailsSummaryItem = TransactionDetailsSummaryItem;

_defineProperty(TransactionDetailsSummaryItem, "defaultProps", {
  offerContextPrice: "LIST_PRICE"
});

var Entry = function Entry(_ref) {
  var label = _ref.label,
      value = _ref.value,
      final = _ref.final;
  return _react.default.createElement(_palette.Flex, {
    justifyContent: "space-between",
    alignItems: "baseline"
  }, _react.default.createElement("div", null, _react.default.createElement(_palette.Serif, {
    size: ["2", "3"],
    color: "black60"
  }, label)), _react.default.createElement("div", null, _react.default.createElement(_palette.Serif, {
    size: ["2", "3"],
    color: final ? "black100" : "black60",
    weight: final ? "semibold" : "regular"
  }, value)));
};

var SecondaryEntry = function SecondaryEntry(_ref2) {
  var label = _ref2.label,
      value = _ref2.value;
  return _react.default.createElement(_palette.Flex, {
    justifyContent: "space-between",
    alignItems: "baseline"
  }, _react.default.createElement("div", null, _react.default.createElement(_palette.Sans, {
    size: "2",
    color: "black60"
  }, label)), _react.default.createElement("div", null, _react.default.createElement(_palette.Sans, {
    size: "2",
    color: "black60"
  }, value)));
};

({
  data: function data() {
    var node = require("../../../__generated__/TransactionDetailsSummaryItemOfferProperties.graphql");

    if (node.hash && node.hash !== "ef8122fa1ce0cfb3e82d1bdfbfcd4d68") {
      console.error("The definition of 'TransactionDetailsSummaryItemOfferProperties' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../__generated__/TransactionDetailsSummaryItemOfferProperties.graphql");
  }
});
var TransactionDetailsSummaryItemFragmentContainer = (0, _reactRelay.createFragmentContainer)(TransactionDetailsSummaryItem, {
  order: function order() {
    var node = require("../../../__generated__/TransactionDetailsSummaryItem_order.graphql");

    if (node.hash && node.hash !== "e207bab0483d25f4386054ee2b0365c6") {
      console.error("The definition of 'TransactionDetailsSummaryItem_order' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../__generated__/TransactionDetailsSummaryItem_order.graphql");
  }
});
exports.TransactionDetailsSummaryItemFragmentContainer = TransactionDetailsSummaryItemFragmentContainer;
//# sourceMappingURL=TransactionDetailsSummaryItem.js.map