"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledAuthor = exports.Author = void 0;

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Constants = require("../Constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Author = function Author(props) {
  var color = props.color,
      layout = props.layout,
      size = props.size;
  var condensed = layout === "condensed";
  var fontSize = size ? size : condensed ? "2" : "3t";
  return _react.default.createElement(_palette.Sans, {
    size: fontSize,
    weight: "medium"
  }, _react.default.createElement(StyledAuthor, {
    condensed: condensed,
    color: color
  }, (0, _Constants.getAuthorByline)(props.authors)));
};

exports.Author = Author;
Author.defaultProps = {
  color: "black"
};

var StyledAuthor = _styledComponents.default.div.attrs({}).withConfig({
  displayName: "Author__StyledAuthor",
  componentId: "sbiape-0"
})(["margin:10px 20px 0 0;", ";"], function (props) {
  return bullet(props.color, props.condensed);
});

exports.StyledAuthor = StyledAuthor;

var bullet = function bullet(color) {
  var condensed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return "\n    &::before {\n      content: \"\";\n      display: inline-block;\n      width: 8px;\n      height: 8px;\n      border-radius: 50%;\n      margin: ".concat(condensed ? "0 5px 1px 0;" : "5px 5px 1px 0", ";\n      background-color: ").concat(color, ";\n    }\n  ");
};
//# sourceMappingURL=Author.js.map