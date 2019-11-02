"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TermsOfServiceCheckbox = void 0;

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TermsOfServiceCheckbox = function TermsOfServiceCheckbox(props) {
  return _react.default.createElement(_palette.Checkbox, props, _react.default.createElement(_palette.Serif, {
    size: "3",
    color: "black60"
  }, "Agree to ", _react.default.createElement("a", {
    href: "https://www.artsy.net/terms",
    target: "_blank"
  }, "Terms & Conditions"), ". All sales are final."));
};

exports.TermsOfServiceCheckbox = TermsOfServiceCheckbox;
//# sourceMappingURL=TermsOfServiceCheckbox.js.map