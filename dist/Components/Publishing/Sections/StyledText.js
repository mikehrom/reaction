"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledText = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var _palette = require("@artsy/palette");

var _Fonts = require("../../../Assets/Fonts");

require("react");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Helpers = require("../../Helpers");

var _LinkWithTooltip = require("../ToolTip/LinkWithTooltip");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    p, ul, ol,\n    div[data-block=true] .public-DraftStyleDefault-block {\n      ", "\n    }\n    li {\n      ", "\n    }\n    h1 {\n      ", "\n    }\n    h2 {\n      ", "\n    }\n    h3 {\n      ", "\n      line-height: ", ";\n    }\n    h3 strong {\n      ", "\n    }\n    blockquote {\n      ", ";\n      margin: ", ";\n    }\n    .content-start {\n      font-size: 55px;\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function getBlockquoteSize(layout, size) {
  var desktop = size === "lg";

  switch (layout) {
    case "feature":
      {
        return desktop ? (0, _Fonts.unica)("s40") : (0, _Fonts.unica)("s34");
      }

    case "news":
      {
        return desktop ? (0, _Fonts.unica)("s19", "medium") : (0, _Fonts.unica)("s16", "medium");
      }

    default:
      {
        return desktop ? (0, _Fonts.garamond)("s40") : (0, _Fonts.garamond)("s34");
      }
  }
}

var StyledText = _styledComponents.default.div.withConfig({
  displayName: "StyledText",
  componentId: "sc-1ysl1h-0"
})(["position:relative;padding-bottom:", ";width:100%;color:", ";a{color:", ";text-decoration:none;background-image:linear-gradient( to bottom,transparent 0,", " 1px,transparent 0 );background-size:1.25px 4px;background-repeat:repeat-x;background-position:bottom;&:hover{color:", ";opacity:", ";}}div[class*='ToolTip'] a{background-image:none;opacity:1;color:inherit;}p,ul,ol,.paragraph,div[data-block=true] .public-DraftStyleDefault-block{", " padding-top:", ";padding-bottom:", ";margin:0;font-style:", ";}p:first-child,.paragraph:first-child,div[data-block=true]:first-child .public-DraftStyleDefault-block{padding-top:0;}p:last-child,.paragraph:last-child,div[data-block=true]:last-child .public-DraftStyleDefault-block{padding-bottom:0;}ul,ol{padding-left:1em;}ul{list-style:disc;}ol{list-style:decimal;}li{", " padding-top:.5em;padding-bottom:.5em;}h1{", " font-weight:normal;padding-top:107px;padding-bottom:46px;margin:0;position:relative;text-align:center;&::before{content:\"\";width:8px;height:8px;background:", ";border-radius:50%;position:absolute;top:69px;right:calc(50% - 4px);}}h2{", " font-weight:normal;margin:0;a{background-size:1.25px 1px;}", "{background-position:bottom !important;}}h3{", " font-weight:normal;padding-top:23px;margin:0;strong{font-weight:normal;", "}em{font-style:", ";}a{background-size:1.25px 1px;}}blockquote{", " text-align:", ";font-weight:normal;padding-top:46px;padding-bottom:46px;margin:0;word-break:break-word;", " a{", "}}p:first-child:first-letter,.paragraph:first-child:first-letter,div[data-block=true]:first-child .public-DraftStyleDefault-block:first-letter{", " ", "}.preventLineBreak{white-space:nowrap;}.content-end{display:inline-block;content:\"\";width:8px;height:8px;background:", ";border-radius:50%;margin-left:12px;margin-bottom:1px;}.artist-follow{vertical-align:middle;margin-left:10px;cursor:pointer;background:none transparent;&::before{font-family:\"artsy-icons\";content:\"\uE629\";vertical-align:-8.5px;line-height:32px;font-size:32px;}&::after{content:\"Follow\";", " text-transform:none;}}", ""], function (props) {
  return props.postscript ? "2em" : "";
}, function (props) {
  return props.color;
}, function (props) {
  return props.color;
}, function (props) {
  return props.color === "black" ? (0, _palette.color)("black80") : props.color;
}, function (props) {
  return props.color === "black" ? (0, _palette.color)("black30") : props.color;
}, function (props) {
  return props.color === "black" ? "1" : ".65";
}, function (props) {
  return props.layout === "classic" ? (0, _Fonts.garamond)("s19") : (0, _Fonts.garamond)("s23");
}, function (props) {
  return props.layout === "classic" ? ".75em" : "1em";
}, function (props) {
  return props.layout === "classic" ? ".75em" : "1em";
}, function (props) {
  return props.postscript ? "italic" : "inherit";
}, function (props) {
  return props.layout === "classic" ? (0, _Fonts.garamond)("s19") : (0, _Fonts.garamond)("s23");
}, (0, _Fonts.unica)("s40"), function (props) {
  return props.color;
}, function (props) {
  return props.layout === "classic" ? (0, _Fonts.garamond)("s28") : (0, _Fonts.unica)("s32");
}, _LinkWithTooltip.PrimaryLink, function (props) {
  return props.layout === "classic" ? (0, _Fonts.avantgarde)("s13") : (0, _Fonts.unica)("s19");
}, function (props) {
  return props.layout !== "classic" ? (0, _Fonts.unica)("s19", "medium") : "";
}, function (props) {
  return props.layout === "classic" ? "normal" : "";
}, function (props) {
  return getBlockquoteSize(props.layout, "lg");
}, function (props) {
  return props.layout === "classic" ? "center" : "left";
}, function (props) {
  return props.layout === "news" && "\n        padding-top: 10px;\n        padding-bottom: 10px;\n        max-width: 560px;\n        margin: auto;\n      ";
}, function (props) {
  return props.layout === "news" && "\n        background-size: 1.25px 1px;\n      ";
}, function (props) {
  return props.isContentStart && props.layout === "feature" && (0, _Fonts.unica)("s67", "medium");
}, function (props) {
  return props.isContentStart && props.layout === "feature" && "\n      float: left;\n      line-height: .5em;\n      margin-right: 10px;\n      margin-top: .298em;\n      text-transform: uppercase;\n  ";
}, function (props) {
  return props.color;
}, (0, _Fonts.garamond)("s17"), function (props) {
  return _Helpers.pMedia.xs(_templateObject(), (0, _Fonts.garamond)("s19"), (0, _Fonts.garamond)("s19"), (0, _Fonts.unica)("s34"), props.layout === "classic" ? (0, _Fonts.garamond)("s28") : (0, _Fonts.unica)("s32"), props.layout === "classic" ? (0, _Fonts.avantgarde)("s11") : (0, _Fonts.unica)("s16"), props.layout !== "classic" ? "1.5em" : "", props.layout !== "classic" ? (0, _Fonts.unica)("s16", "medium") : "", getBlockquoteSize(props.layout, "sm"), props.layout === "news" ? "0 10px;" : "0");
});

exports.StyledText = StyledText;
StyledText.defaultProps = {
  color: "black"
};
//# sourceMappingURL=StyledText.js.map