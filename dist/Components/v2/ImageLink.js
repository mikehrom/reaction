"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageLink = void 0;

var _palette = require("@artsy/palette");

var _RouterLink = require("../../Artsy/Router/RouterLink");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _Responsive = require("../../Utils/Responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageContainer = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "ImageLink__ImageContainer",
  componentId: "uvra82-0"
})(["position:relative;"]);
var HubImage = (0, _styledComponents.default)(_palette.ResponsiveImage).withConfig({
  displayName: "ImageLink__HubImage",
  componentId: "uvra82-1"
})(["vertical-align:middle;"]);
var ImageOverlay = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "ImageLink__ImageOverlay",
  componentId: "uvra82-2"
})(["&::before{position:absolute;top:0;left:0;width:100%;height:100%;display:none;color:#fff;content:\"\";background:rgba(0,0,0,0.3);}"]);
var OuterLink = (0, _styledComponents.default)(_RouterLink.RouterLink).withConfig({
  displayName: "ImageLink__OuterLink",
  componentId: "uvra82-3"
})(["text-decoration:none;&:hover{.title{text-decoration:underline;}", "{&::before{display:block;}}}", ""], ImageOverlay, _styledSystem.space);

var ImageLink = function ImageLink(_ref) {
  var to = _ref.to,
      src = _ref.src,
      title = _ref.title,
      subtitle = _ref.subtitle,
      ratio = _ref.ratio,
      onClick = _ref.onClick;
  return _react.default.createElement(OuterLink, {
    to: to,
    onClick: onClick
  }, _react.default.createElement(ImageContainer, null, _react.default.createElement(ImageOverlay, null, _react.default.createElement(HubImage, {
    src: src,
    width: "100%",
    ratio: ratio
  }))), _react.default.cloneElement(title, {
    // kind of like "default props" for a cloned element.
    element: title.props.element || "h3",
    mt: "1",
    mb: "0.5",
    textAlign: "center",
    className: "title"
  }), _react.default.createElement(_Responsive.Media, {
    greaterThan: "xs"
  }, subtitle && _react.default.cloneElement(subtitle, {
    // kind of like "default props" for a cloned element.
    element: title.props.element || "h4",
    textAlign: "center"
  })));
};

exports.ImageLink = ImageLink;
//# sourceMappingURL=ImageLink.js.map