"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VanguardCredits = void 0;

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VanguardCredits = function VanguardCredits(props) {
  return _react.default.createElement(_palette.Box, {
    textAlign: "center",
    pt: props.isMobile ? 0 : 50
  }, _react.default.createElement(_palette.Sans, {
    size: "3t",
    weight: "medium"
  }, "Videos by Alex John Beck"), _react.default.createElement(_palette.Sans, {
    size: "3t",
    weight: "medium"
  }, "Video Editing by Nate DeYoung"), _react.default.createElement(_palette.Sans, {
    size: "3t",
    weight: "medium"
  }, "Interaction Design by Wax Studios"));
};

exports.VanguardCredits = VanguardCredits;
//# sourceMappingURL=VanguardCredits.js.map