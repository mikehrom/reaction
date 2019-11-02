"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConditionsOfSaleCheckbox = void 0;

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _sharify = require("sharify");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConditionsOfSaleCheckbox = function ConditionsOfSaleCheckbox(_ref) {
  var selected = _ref.selected,
      onSelect = _ref.onSelect;
  return _react.default.createElement(_palette.Checkbox, {
    selected: selected,
    onSelect: onSelect
  }, _react.default.createElement(_palette.Serif, {
    display: "inline",
    color: "black60",
    size: "3t",
    ml: 0.5
  }, "Agree to ", _react.default.createElement(_palette.Serif, {
    display: "inline",
    color: "black100",
    size: "3t"
  }, _react.default.createElement(_palette.Link, {
    color: "black100",
    href: "".concat(_sharify.data.APP_URL, "/conditions-of-sale"),
    target: "_blank"
  }, "Conditions of Sale"))));
};

exports.ConditionsOfSaleCheckbox = ConditionsOfSaleCheckbox;
//# sourceMappingURL=ConditionsOfSaleCheckbox.js.map