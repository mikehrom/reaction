"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Caption = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var _Colors = _interopRequireDefault(require("../../../../Assets/Colors"));

var _Fonts = require("../../../../Assets/Fonts");

var _Helpers = require("../../../Helpers");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ArtworkCaption = require("../ArtworkCaption");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    max-width: 100vh;\n    padding: 20px;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    ", "\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    display: ", ";\n    margin-top: ", ";\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  a {\n    color: black;\n  }\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    cursor: pointer;\n    display: inline-block;\n    span {\n      border-bottom: 1px solid black;\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Caption = function Caption(props) {
  var index = props.index,
      open = props.open,
      section = props.section,
      total = props.total;
  var isArtwork = section.type === "artwork";
  var indexText = "".concat(index, " of ").concat(total);
  return _react.default.createElement(CaptionContainer, null, _react.default.createElement(CaptionTextContainer, null, _react.default.createElement(CaptionToggle, {
    open: open
  }), _react.default.createElement(CaptionText, {
    open: open
  }, isArtwork ? _react.default.createElement(_ArtworkCaption.ArtworkCaption, {
    artwork: section,
    isFullscreenCaption: true,
    linked: true
  }) : _react.default.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: section.caption
    }
  }))), _react.default.createElement(Index, null, indexText));
};

exports.Caption = Caption;

var CaptionToggle = function CaptionToggle(props, context) {
  var toggleMessage = props.open ? "Hide" : "View Caption";
  return _react.default.createElement(StyledCaptionToggle, {
    onClick: context.onToggleCaption,
    className: "fullscreen-viewer__caption-toggle"
  }, _react.default.createElement("span", null, toggleMessage));
};

CaptionToggle.contextTypes = {
  onToggleCaption: _propTypes.default.func
};

var StyledCaptionToggle = _styledComponents.default.div.withConfig({
  displayName: "Caption__StyledCaptionToggle",
  componentId: "s0mmwk-0"
})(["display:none;", ";"], _Helpers.pMedia.sm(_templateObject(), (0, _Fonts.unica)("s14", "medium")));

var CaptionDiv = _styledComponents.default.div;
var CaptionText = CaptionDiv(_templateObject2(), (0, _Fonts.unica)("s16", "medium"), function (props) {
  return _Helpers.pMedia.sm(_templateObject3(), (0, _Fonts.unica)("s14", "medium"), props.open ? "block" : "none", props.open ? "20px" : "0px");
});

var Index = _styledComponents.default.div.withConfig({
  displayName: "Caption__Index",
  componentId: "s0mmwk-1"
})(["margin-left:20px;white-space:nowrap;", ";", ";"], (0, _Fonts.unica)("s16"), _Helpers.pMedia.sm(_templateObject4(), (0, _Fonts.unica)("s14")));

var CaptionContainer = _styledComponents.default.div.withConfig({
  displayName: "Caption__CaptionContainer",
  componentId: "s0mmwk-2"
})(["display:flex;justify-content:space-between;background-color:", ";padding:30px 60px;p{margin:0;}", ";"], _Colors.default.gray, _Helpers.pMedia.sm(_templateObject5()));

var CaptionTextContainer = _styledComponents.default.div.withConfig({
  displayName: "Caption__CaptionTextContainer",
  componentId: "s0mmwk-3"
})(["display:flex;flex-direction:column;"]);
//# sourceMappingURL=Caption.js.map