"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slide = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var _omit2 = _interopRequireDefault(require("lodash/omit"));

var _Fonts = require("../../../../Assets/Fonts");

var _Helpers = require("../../../Helpers");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _resizer = require("../../../../Utils/resizer");

var _Caption = require("./Caption");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    padding: 20px 60px 0 20px;\n    ", "\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    margin: 20px 0 80px 0;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  background: url(", ") no-repeat center;\n  background-size: contain;\n  flex: 1;\n  margin: 50px 60px;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Slide = function Slide(props) {
  var newProps = (0, _omit2.default)(props, ["section", "index", "total", "isCaptionOpen"]);
  var section = props.section;
  var src = (0, _resizer.resize)(section.url || section.image, {
    width: 1200
  });
  return _react.default.createElement("div", newProps, _react.default.createElement(SlideContainer, null, _react.default.createElement(Title, null, section.setTitle || ""), _react.default.createElement(Image, {
    src: src
  }), _react.default.createElement(_Caption.Caption, {
    open: props.isCaptionOpen,
    section: section,
    total: props.total,
    index: props.index
  })));
};

exports.Slide = Slide;

var SlideContainer = _styledComponents.default.div.withConfig({
  displayName: "Slide__SlideContainer",
  componentId: "sc-12bzkdw-0"
})(["width:100vw;height:100vh;display:flex;flex-direction:column;position:relative;"]);

var Img = _styledComponents.default.div;
var Image = Img(_templateObject(), function (props) {
  return props.src;
}, _Helpers.pMedia.sm(_templateObject2()));

var Title = _styledComponents.default.div.withConfig({
  displayName: "Slide__Title",
  componentId: "sc-12bzkdw-1"
})(["min-height:25px;padding:30px 60px 0 60px;", ";", ";"], (0, _Fonts.unica)("s40"), _Helpers.pMedia.sm(_templateObject3(), (0, _Fonts.unica)("s19")));
//# sourceMappingURL=Slide.js.map