"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreditCardInstructions = void 0;

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CreditCardInstructions = function CreditCardInstructions() {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Serif, {
    size: "4",
    color: "black100"
  }, "Please enter your credit card information below. The name on your Artsy account must match the name on the card, and a valid credit card is required in order to bid."), _react.default.createElement(_palette.Serif, {
    size: "4",
    mt: 2,
    color: "black100"
  }, "Registration is free. Artsy will never charge this card without your permission, and you are not required to use this card to pay if you win."));
};

exports.CreditCardInstructions = CreditCardInstructions;
//# sourceMappingURL=CreditCardInstructions.js.map