"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.InquiryArtwork = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../Assets/Colors"));

var _Artwork = _interopRequireDefault(require("./Artwork"));

var _Icon = _interopRequireDefault(require("./Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 80px;\n  height: 80px;\n  border-radius: 100%;\n  border: 5px solid ", ";\n  background: transparent;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  transition: border-color 0.3s;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OverlayBackground = _styledComponents.default.div.withConfig({
  displayName: "InquiryArtwork__OverlayBackground",
  componentId: "vgxyaf-0"
})(["background-color:", ";height:100%;width:100%;position:absolute;z-index:10;top:0;left:0;opacity:0.8;text-align:center;pointer-events:none;display:flex;justify-content:center;align-items:center;"], _Colors.default.purpleRegular);

var Div = _styledComponents.default.div;
var Circle = Div(_templateObject(), function (props) {
  return props.selected ? "white" : "transparent";
});

var Overlay = function Overlay(props) {
  return _react.default.createElement(OverlayBackground, null, _react.default.createElement(Circle, {
    selected: props.selected
  }, _react.default.createElement(_Icon.default, {
    name: "check",
    color: "white"
  })));
};

var InquiryArtwork = function InquiryArtwork(props) {
  return _react.default.createElement(_Artwork.default, _extends({}, props, {
    extended: false,
    Overlay: Overlay,
    showOverlayOnHover: true
  }));
};

exports.InquiryArtwork = InquiryArtwork;

var _default = (0, _reactRelay.createFragmentContainer)(InquiryArtwork, {
  artwork: function artwork() {
    var node = require("../__generated__/InquiryArtwork_artwork.graphql");

    if (node.hash && node.hash !== "395ab37180661dd93a2a1ee189b363b5") {
      console.error("The definition of 'InquiryArtwork_artwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../__generated__/InquiryArtwork_artwork.graphql");
  }
});

exports.default = _default;
//# sourceMappingURL=InquiryArtwork.js.map