"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorPreview = void 0;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.function.name");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://24ways.org/2010/calculating-color-contrast/
function getContrast(hex) {
  var r = parseInt(hex.substr(1, 2), 16);
  var g = parseInt(hex.substr(3, 2), 16);
  var b = parseInt(hex.substr(5, 2), 16);
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "black" : "white";
}

var visibleColor = function visibleColor(name) {
  return getContrast(_palette.themeProps.colors[name]);
};

var ColorBlock = _styledComponents.default.div.attrs({}).withConfig({
  displayName: "ColorPreview__ColorBlock",
  componentId: "sc-75kype-0"
})(["width:100px;height:100px;padding:5px;", ";"], _styledSystem.color);

var LabeledColorBlock = function LabeledColorBlock(_ref) {
  var name = _ref.name;
  return _react.default.createElement(ColorBlock, {
    bg: name
  }, _react.default.createElement(_palette.Flex, {
    flexDirection: "column"
  }, _react.default.createElement(_palette.Display, {
    color: visibleColor(name),
    size: "4t"
  }, name.toUpperCase()), _react.default.createElement(_palette.Display, {
    color: visibleColor(name),
    size: "4t"
  }, _palette.themeProps.colors[name])));
};

var Grid = _styledComponents.default.div.withConfig({
  displayName: "ColorPreview__Grid",
  componentId: "sc-75kype-1"
})(["display:grid;grid-template-columns:100px 100px 100px 100px;grid-gap:10px;"]);

var ColorPreview = function ColorPreview() {
  return _react.default.createElement(Grid, null, Object.keys(_palette.themeProps.colors).map(function (name, key) {
    return _react.default.createElement(LabeledColorBlock, {
      name: name,
      key: key
    });
  }));
};

exports.ColorPreview = ColorPreview;
//# sourceMappingURL=ColorPreview.js.map