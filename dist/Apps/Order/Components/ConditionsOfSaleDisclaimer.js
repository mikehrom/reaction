"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConditionsOfSaleDisclaimer = void 0;

require("core-js/modules/es6.object.assign");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ConditionsOfSaleDisclaimer = function ConditionsOfSaleDisclaimer(props) {
  return _react.default.createElement(_palette.Sans, _extends({
    size: "2",
    color: "black60"
  }, props), "By clicking Submit, I agree to Artsy\u2019s", " ", _react.default.createElement(_palette.Link, {
    href: "/conditions-of-sale",
    target: "_blank"
  }, "Conditions of Sale."));
};

exports.ConditionsOfSaleDisclaimer = ConditionsOfSaleDisclaimer;
//# sourceMappingURL=ConditionsOfSaleDisclaimer.js.map