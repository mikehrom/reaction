"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Fonts = require("../Assets/Fonts");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledLink = _styledComponents.default.a.withConfig({
  displayName: "NavItem__StyledLink",
  componentId: "at204c-0"
})(["align-self:center;font-family:", ";line-height:12px;text-decoration:none;color:black;text-transform:uppercase;-webkit-font-smoothing:antialiased;letter-spacing:0.8;"], (0, _Fonts.avantgarde)("s13"));

var NavItem = function NavItem(props) {
  return _react.default.createElement(StyledLink, {
    href: props.href
  }, props.children);
};

var _default = NavItem;
exports.default = _default;
//# sourceMappingURL=NavItem.js.map