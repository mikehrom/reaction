"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OfferSummaryItemFragmentContainer = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var _palette = require("@artsy/palette");

var _StepSummaryItem = require("../../../Components/v2/StepSummaryItem");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var OfferSummaryItem = function OfferSummaryItem(_ref) {
  var order = _ref.order,
      others = _objectWithoutProperties(_ref, ["order"]);

  var offerNote = order.myLastOffer.note;
  return _react.default.createElement(_StepSummaryItem.StepSummaryItem, _extends({
    title: "Your offer"
  }, others), _react.default.createElement(_palette.Serif, {
    size: ["2", "3t"],
    color: "black100"
  }, order.myLastOffer.amount), _react.default.createElement(_palette.Sans, {
    size: "2",
    color: "black60"
  }, "List price: ", order.totalListPrice), offerNote && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Spacer, {
    mb: [2, 3]
  }), _react.default.createElement(_palette.Serif, {
    size: ["2", "3t"],
    weight: "semibold",
    color: "black100"
  }, "Your note"), _react.default.createElement(_palette.Serif, {
    size: ["2", "3t"],
    color: "black60"
  }, offerNote)));
};

var OfferSummaryItemFragmentContainer = (0, _reactRelay.createFragmentContainer)(OfferSummaryItem, {
  order: function order() {
    var node = require("../../../__generated__/OfferSummaryItem_order.graphql");

    if (node.hash && node.hash !== "0261dbe6d5bf78317ddcbcc13f207aa5") {
      console.error("The definition of 'OfferSummaryItem_order' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../__generated__/OfferSummaryItem_order.graphql");
  }
});
exports.OfferSummaryItemFragmentContainer = OfferSummaryItemFragmentContainer;
//# sourceMappingURL=OfferSummaryItem.js.map