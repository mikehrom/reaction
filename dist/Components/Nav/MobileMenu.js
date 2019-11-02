"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobileMenu = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var _Fonts = require("../../Assets/Fonts");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _TextLink = _interopRequireDefault(require("../TextLink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  box-sizing: border-box;\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  background-color: black;\n  left: 0;\n  padding: 20px;\n  margin-top: ", ";\n  ", " {\n    display: inline-block;\n    width: 50%;\n    line-height: 2;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MobileMenu = function MobileMenu(props) {
  return _react.default.createElement(MobileMenuContainer, props, _react.default.createElement(_TextLink.default, {
    color: "white",
    href: "/"
  }, "Home"), _react.default.createElement(_TextLink.default, {
    color: "white",
    href: "/institutions"
  }, "Museums"), _react.default.createElement(_TextLink.default, {
    color: "white",
    href: "/artists"
  }, "Artists"), _react.default.createElement(_TextLink.default, {
    color: "white",
    href: "/articles"
  }, "Articles"), _react.default.createElement(_TextLink.default, {
    color: "white",
    href: "/shows"
  }, "Show Guide"), _react.default.createElement(_TextLink.default, {
    color: "white",
    href: "/art-fairs"
  }, "Art Fairs"), _react.default.createElement(_TextLink.default, {
    color: "white",
    href: "/galleries"
  }, "Galleries"), _react.default.createElement(_TextLink.default, {
    color: "white",
    href: "/auctions"
  }, "Auctions"));
};

exports.MobileMenu = MobileMenu;
MobileMenu.defaultProps = {
  navHeight: "0px"
};
var Div = _styledComponents.default.div;
var MobileMenuContainer = Div(_templateObject(), (0, _Fonts.garamond)("s19"), function (props) {
  return props.navHeight;
}, _TextLink.default);
//# sourceMappingURL=MobileMenu.js.map