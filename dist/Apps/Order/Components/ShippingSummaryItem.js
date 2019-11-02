"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShippingSummaryItemFragmentContainer = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var _palette = require("@artsy/palette");

var _StepSummaryItem = require("../../../Components/v2/StepSummaryItem");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _ShippingAddress = require("./ShippingAddress");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * When the order is completed or canceled state we _don't_ want to tell
 * the user that they'll be assigned an artsy specialist as it doesn't make
 * sense in that context
 */
var showPickupCopy = function showPickupCopy(state) {
  return state !== "FULFILLED" && state !== "CANCELED";
};

var ShippingSummaryItem = function ShippingSummaryItem(_ref) {
  var _ref$order = _ref.order,
      state = _ref$order.state,
      requestedFulfillment = _ref$order.requestedFulfillment,
      lineItems = _ref$order.lineItems,
      others = _objectWithoutProperties(_ref, ["order"]);

  return requestedFulfillment.__typename === "CommerceShip" ? _react.default.createElement(_StepSummaryItem.StepSummaryItem, _extends({
    title: "Ship to"
  }, others), _react.default.createElement(_ShippingAddress.ShippingAddressFragmentContainer, {
    ship: requestedFulfillment
  })) : _react.default.createElement(_StepSummaryItem.StepSummaryItem, _extends({
    title: _react.default.createElement(_react.default.Fragment, null, "Pick up (", lineItems.edges[0].node.artwork.shippingOrigin, ")")
    /* Fixes spacing issues with title when no pickup description copy is present */
    ,
    mb: showPickupCopy(state) ? undefined : -1
  }, others), showPickupCopy(state) && _react.default.createElement(_palette.Serif, {
    size: "3t"
  }, "After your order is confirmed, a specialist will contact you within 2 business days to coordinate pickup."));
};

var ShippingSummaryItemFragmentContainer = (0, _reactRelay.createFragmentContainer)(ShippingSummaryItem, {
  order: function order() {
    var node = require("../../../__generated__/ShippingSummaryItem_order.graphql");

    if (node.hash && node.hash !== "6a6edab4e4acbfb55e55f5fb1d9c4ae0") {
      console.error("The definition of 'ShippingSummaryItem_order' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../__generated__/ShippingSummaryItem_order.graphql");
  }
});
exports.ShippingSummaryItemFragmentContainer = ShippingSummaryItemFragmentContainer;
//# sourceMappingURL=ShippingSummaryItem.js.map