"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CloseButton = void 0;

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CloseButtonContainer = _styledComponents.default.svg.withConfig({
  displayName: "CloseButton__CloseButtonContainer",
  componentId: "kadsdk-0"
})(["width:", "px;height:", "px;padding:", "px;stroke:", ";stroke-width:3px;overflow:visible;cursor:pointer;"], (0, _palette.space)(6), (0, _palette.space)(6), (0, _palette.space)(3) / 2, (0, _palette.color)("white100"));

var CloseButton = function CloseButton(props) {
  return _react.default.createElement(CloseButtonContainer, {
    onClick: props.onClick
  }, _react.default.createElement("line", {
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "100%"
  }), _react.default.createElement("line", {
    x1: "0%",
    y1: "100%",
    x2: "100%",
    y2: "0%"
  }));
};

exports.CloseButton = CloseButton;
//# sourceMappingURL=CloseButton.js.map