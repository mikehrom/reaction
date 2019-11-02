"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoControls = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background: white;\n  width: ", ";\n  height: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 2;\n  cursor: pointer;\n  border: 0;\n  outline: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: black;\n  border-top: ", "px solid transparent;\n  border-bottom: ", "px solid transparent;\n  border-left: ", "px solid black;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var VideoControls = function VideoControls(props) {
  var mini = props.mini;
  return _react.default.createElement(PlayButton, {
    mini: mini,
    className: "PlayButton"
  }, _react.default.createElement(PlayButtonCaret, {
    className: "PlayButton__PlayButtonCaret",
    mini: mini
  }));
};

exports.VideoControls = VideoControls;
var Div = _styledComponents.default.div;
var PlayButtonCaret = Div(_templateObject(), function (props) {
  return props.mini ? "13" : "20";
}, function (props) {
  return props.mini ? "13" : "20";
}, function (props) {
  return props.mini ? "20" : "30";
});
var PlayButton = Div(_templateObject2(), function (props) {
  return props.mini ? "50px" : "70px";
}, function (props) {
  return props.mini ? "50px" : "70px";
});
//# sourceMappingURL=VideoControls.js.map