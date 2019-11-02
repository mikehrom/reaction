"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Embed = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Helpers = require("../../Helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    height: ", "px;\n    width: 100%;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: ", ";\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Embed = function Embed(props) {
  var _props$section = props.section,
      url = _props$section.url,
      height = _props$section.height,
      mobile_height = _props$section.mobile_height;
  return _react.default.createElement(IFrame, {
    src: url,
    scrolling: "no",
    frameBorder: "0",
    height: height,
    mobileHeight: mobile_height
  });
};

exports.Embed = Embed;
var iframe = _styledComponents.default.iframe;
var IFrame = iframe(_templateObject(), function (props) {
  return props.height + "px";
}, function (props) {
  return _Helpers.pMedia.sm(_templateObject2(), props.mobileHeight);
});
//# sourceMappingURL=Embed.js.map