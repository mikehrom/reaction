"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PricingTransparency = void 0;

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PricingTransparency = function PricingTransparency() {
  return _react.default.createElement(_palette.Flex, {
    pt: 3,
    flexDirection: "column"
  }, _react.default.createElement(_palette.Serif, {
    pb: 1,
    size: "4t",
    weight: "semibold",
    color: "black100"
  }, "Summary"), _react.default.createElement(_palette.Flex, {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    pb: 1
  }, _react.default.createElement(_palette.Box, null, _react.default.createElement(_palette.Serif, {
    size: "3t",
    color: "black100"
  }, "Your max bid")), _react.default.createElement(_palette.Box, null, _react.default.createElement(_palette.Serif, {
    size: "3t",
    color: "black100"
  }, "\xA318,000"))), _react.default.createElement(_palette.Flex, {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    pb: 2
  }, _react.default.createElement(_palette.Box, null, _react.default.createElement(_palette.Serif, {
    size: "3t",
    color: "black100"
  }, "Buyer's Premium")), _react.default.createElement(_palette.Box, null, _react.default.createElement(_palette.Serif, {
    size: "3t",
    color: "black100"
  }, "\xA33,600"))), _react.default.createElement(_palette.Flex, {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    pb: 1
  }, _react.default.createElement(_palette.Box, null, _react.default.createElement(_palette.Serif, {
    size: "3t",
    color: "black100"
  }, "Subtotal")), _react.default.createElement(_palette.Box, null, _react.default.createElement(_palette.Serif, {
    size: "3t",
    color: "black100"
  }, "\xA321,600"))), _react.default.createElement(_palette.Sans, {
    size: "2",
    color: "black60"
  }, "Plus any applicable shipping, taxes, and fees."));
};

exports.PricingTransparency = PricingTransparency;
//# sourceMappingURL=PricingTransparency.js.map