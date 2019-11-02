"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalCta = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Helpers = require("../Helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding-bottom: ", "px;\n    ", "\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ModalCta = function ModalCta(props) {
  var _props$cta = props.cta,
      isFixed = _props$cta.isFixed,
      onClick = _props$cta.onClick,
      text = _props$cta.text,
      hasImage = props.hasImage,
      onClose = props.onClose;
  return _react.default.createElement(Cta, {
    isFixed: isFixed,
    hasImage: hasImage
  }, _react.default.createElement(_palette.Button, {
    onClick: onClick || onClose
  }, text));
};

exports.ModalCta = ModalCta;

var Cta = _styledComponents.default.div.attrs({}).withConfig({
  displayName: "ModalCta__Cta",
  componentId: "sc-17ncnnw-0"
})(["padding:", "px 0 ", "px 0;button{margin:0;width:100%;}", ";", ";"], (0, _palette.space)(2), (0, _palette.space)(3), function (props) {
  return props.isFixed && "\n    position: absolute;\n    bottom: 0;\n    right: ".concat((0, _palette.space)(4), "px;\n    left: ").concat(props.hasImage ? "calc(50% + 40px)" : (0, _palette.space)(4) + "px", ";\n    background: white;\n    border-top: 1px solid ").concat((0, _palette.color)("black10"), ";\n  ");
}, _Helpers.media.sm(_templateObject(), (0, _palette.space)(2), function (props) {
  return props.isFixed && "\n      right: ".concat((0, _palette.space)(2), "px;\n      left: ").concat((0, _palette.space)(2), "px\n    ");
}));
//# sourceMappingURL=ModalCta.js.map