"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSectionMobilePadding = exports.getSectionWidth = exports.SectionContainer = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

var _Helpers = require("../../Helpers");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    padding: ", ";\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    ", "\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BlockquoteWidth = "900px";
var ColumnWidth = "680px";
var ColumnWidthClassic = "580px";
var Fillwidth = "100%";
var OverflowWidth = "780px";
var OverflowWidthClassic = "1100px";

var SectionContainer = _styledComponents.default.div.withConfig({
  displayName: "SectionContainer",
  componentId: "sc-1v7xsxq-0"
})(["box-sizing:border-box;margin:auto;margin-bottom:40px;width:", ";max-width:100%;", ";", ";"], function (props) {
  return getSectionWidth(props.section, props.articleLayout, props.customWidth);
}, function (props) {
  return _Helpers.pMedia.xl(_templateObject(), props.articleLayout === "standard" && "\n      width: ".concat(ColumnWidth, "\n    "));
}, function (props) {
  return _Helpers.pMedia.md(_templateObject2(), getSectionMobilePadding(props.section));
});

exports.SectionContainer = SectionContainer;

var getSectionWidth = function getSectionWidth(section, articleLayout, customWidth) {
  var layout = section && section.layout || "column_width";
  var maybeOverflow = layout === "overflow_fillwidth" ? OverflowWidth : ColumnWidth;
  var isText = section && section.type === "text";
  var isBlockquote = isText && section.body.includes("<blockquote>");

  if (customWidth) {
    return "".concat(customWidth, "px");
  }

  switch (articleLayout) {
    case "standard":
      {
        if (isBlockquote) {
          return OverflowWidth;
        } else {
          return maybeOverflow;
        }
      }

    case "feature":
      {
        if (isBlockquote) {
          return BlockquoteWidth;
        } else if (layout === "fillwidth") {
          return Fillwidth;
        } else {
          return maybeOverflow;
        }
      }

    case "classic":
      {
        return layout === "overflow_fillwidth" ? OverflowWidthClassic : ColumnWidthClassic;
      }

    default:
      return ColumnWidth;
  }
};

exports.getSectionWidth = getSectionWidth;

var getSectionMobilePadding = function getSectionMobilePadding(section) {
  var type = section && section.type;
  var isFillWidth = ["video", "image_collection", "image_set"].includes(type);
  var isMiniImageSet = type === "image_set" && section.layout === "mini";
  return !isFillWidth || isMiniImageSet ? "0 20px" : 0;
};

exports.getSectionMobilePadding = getSectionMobilePadding;
//# sourceMappingURL=SectionContainer.js.map