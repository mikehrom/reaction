"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreditCardSummaryItemFragmentContainer = void 0;

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var _StepSummaryItem = require("../../../Components/v2/StepSummaryItem");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _CreditCardDetails = require("./CreditCardDetails");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CreditCardSummaryItem = function CreditCardSummaryItem(_ref) {
  var creditCard = _ref.order.creditCard,
      others = _objectWithoutProperties(_ref, ["order"]);

  return _react.default.createElement(_StepSummaryItem.StepSummaryItem, others, _react.default.createElement(_CreditCardDetails.CreditCardDetails, creditCard));
};

var CreditCardSummaryItemFragmentContainer = (0, _reactRelay.createFragmentContainer)(CreditCardSummaryItem, {
  order: function order() {
    var node = require("../../../__generated__/CreditCardSummaryItem_order.graphql");

    if (node.hash && node.hash !== "281587f1020c8ac58c8d214993f3c581") {
      console.error("The definition of 'CreditCardSummaryItem_order' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../__generated__/CreditCardSummaryItem_order.graphql");
  }
});
exports.CreditCardSummaryItemFragmentContainer = CreditCardSummaryItemFragmentContainer;
//# sourceMappingURL=CreditCardSummaryItem.js.map