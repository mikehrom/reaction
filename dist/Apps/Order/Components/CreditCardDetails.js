"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreditCardDetails = void 0;

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es7.string.pad-start");

var _react = _interopRequireDefault(require("react"));

var _palette = require("@artsy/palette");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CreditCardDetails = function CreditCardDetails(_ref) {
  var brand = _ref.brand,
      last_digits = _ref.last_digits,
      expiration_month = _ref.expiration_month,
      expiration_year = _ref.expiration_year,
      _ref$responsive = _ref.responsive,
      responsive = _ref$responsive === void 0 ? true : _ref$responsive;
  return _react.default.createElement(_palette.Flex, {
    alignItems: "center"
  }, _react.default.createElement(_palette.CreditCardIcon, {
    type: brand,
    style: {
      marginRight: (0, _palette.space)(1)
    },
    width: "25px"
  }), _react.default.createElement(_palette.Serif, {
    size: responsive ? ["2", "3"] : "3",
    color: "black100",
    style: {
      position: "relative",
      top: "1px"
    }
  }, "\u2022\u2022\u2022\u2022 ", last_digits, "\xA0\xA0 Exp ", expiration_month.toString().padStart(2, "0"), "/", expiration_year.toString().slice(-2)));
};

exports.CreditCardDetails = CreditCardDetails;
//# sourceMappingURL=CreditCardDetails.js.map