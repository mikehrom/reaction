"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CaptionContainer = exports.Caption = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var _Fonts = require("../../../Assets/Fonts");

var _Helpers = require("../../Helpers");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    padding: 0px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding: 0px 10px;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Caption = function Caption(props) {
  var caption = props.caption,
      children = props.children,
      color = props.color,
      layout = props.layout,
      sectionLayout = props.sectionLayout;

  var child = children || _react.default.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: caption
    }
  });

  return _react.default.createElement(CaptionContainer, null, _react.default.createElement(Figcaption, {
    layout: layout,
    sectionLayout: sectionLayout,
    color: color
  }, child));
};

exports.Caption = Caption;

var CaptionContainer = _styledComponents.default.div.withConfig({
  displayName: "Caption__CaptionContainer",
  componentId: "sc-1c6ztax-0"
})(["display:flex;justify-content:space-between;margin:10px 0 10px 0;", ";"], _Helpers.pMedia.xs(_templateObject())); // includes draft placeholder class for editable text in Writer


exports.CaptionContainer = CaptionContainer;

var Figcaption = _styledComponents.default.div.withConfig({
  displayName: "Caption__Figcaption",
  componentId: "sc-1c6ztax-1"
})(["padding:", " width:100%;word-break:break-word;& > p,p,.public-DraftEditorPlaceholder-root,.public-DraftStyleDefault-block{", " color:", ";margin:0;display:inline;}& > a,a{color:#999;&:hover{color:black;}}", ""], function (props) {
  return props.sectionLayout === "fillwidth" ? "0 10px;" : "0;";
}, function (props) {
  return props.layout === "classic" ? (0, _Fonts.garamond)("s15") : (0, _Fonts.unica)("s14");
}, function (props) {
  return props.color ? props.color : props.layout === "classic" ? "#666" : "#999";
}, _Helpers.pMedia.xs(_templateObject2()));
//# sourceMappingURL=Caption.js.map