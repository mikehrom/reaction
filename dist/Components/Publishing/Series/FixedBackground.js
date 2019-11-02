"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FixedBackgroundContainer = exports.FixedBackground = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6));\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-image: ", ";\n  background-size: cover;\n  background-position: 50%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -2;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FixedBackground = function FixedBackground(props) {
  var backgroundColor = props.backgroundColor,
      backgroundUrl = props.backgroundUrl;

  if (backgroundUrl && !backgroundUrl.includes(".mp4")) {
    return _react.default.createElement(FixedBackgroundContainer, {
      backgroundColor: backgroundColor
    }, _react.default.createElement(BackgroundImage, {
      backgroundUrl: backgroundUrl
    }), _react.default.createElement(BackgroundGradient, null));
  }

  return _react.default.createElement(FixedBackgroundContainer, {
    backgroundColor: backgroundColor
  });
};

exports.FixedBackground = FixedBackground;
var Div = _styledComponents.default.div;
var FixedBackgroundContainer = Div(_templateObject(), function (props) {
  return props.backgroundColor;
});
exports.FixedBackgroundContainer = FixedBackgroundContainer;
var BackgroundImage = Div(_templateObject2(), function (props) {
  return "url(".concat(props.backgroundUrl, ")");
});
var BackgroundGradient = Div(_templateObject3());
//# sourceMappingURL=FixedBackground.js.map