"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubNav = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

var _Fonts = require("../../../Assets/Fonts");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Default = _interopRequireDefault(require("../../Buttons/Default"));

var _Inverted = _interopRequireDefault(require("../../Buttons/Inverted"));

var _Helpers = require("../../Helpers");

var _Icon = _interopRequireDefault(require("../../Icon"));

var _MobileMenu = require("../../Nav/MobileMenu");

var _IconHamburger = require("../Icon/IconHamburger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    ", ", ", " {\n      display: none;\n    }\n    ", " {\n      display: flex;\n      align-items: center;\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SubNav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SubNav, _React$Component);

  function SubNav(props) {
    var _this;

    _classCallCheck(this, SubNav);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SubNav).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "toggleMobileNav", function () {
      _this.setState({
        mobileNavIsOpen: !_this.state.mobileNavIsOpen
      });
    });

    _this.state = {
      mobileNavIsOpen: false
    };
    return _this;
  }

  _createClass(SubNav, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(SubNavContainer, null, _react.default.createElement(Link, {
        className: "mlh-login",
        href: "/log_in"
      }, _react.default.createElement(Login, null, "Login")), _react.default.createElement(Link, {
        className: "mlh-signup",
        href: "/sign_up"
      }, _react.default.createElement(Signup, null, "Signup")), _react.default.createElement(MobileNavToggle, null, this.state.mobileNavIsOpen ? _react.default.createElement(_Icon.default, {
        name: "close",
        color: "white",
        onClick: this.toggleMobileNav
      }) : _react.default.createElement(_IconHamburger.IconHamburger, {
        color: "white",
        onClick: this.toggleMobileNav
      })), this.state.mobileNavIsOpen && _react.default.createElement(_MobileMenu.MobileMenu, {
        navHeight: "46px"
      }));
    }
  }]);

  return SubNav;
}(_react.default.Component);

exports.SubNav = SubNav;
var Login = (0, _styledComponents.default)(_Inverted.default).withConfig({
  displayName: "SubNav__Login",
  componentId: "pwk1s5-0"
})(["", ";height:30px;width:80px;border-radius:2px;margin:8px;"], (0, _Fonts.avantgarde)("s11"));
var Signup = (0, _styledComponents.default)(_Default.default).withConfig({
  displayName: "SubNav__Signup",
  componentId: "pwk1s5-1"
})(["", ";height:30px;width:80px;background-color:white;border-radius:2px;margin:8px;"], (0, _Fonts.avantgarde)("s11"));

var Link = _styledComponents.default.a.withConfig({
  displayName: "SubNav__Link",
  componentId: "pwk1s5-2"
})(["text-decoration:none;"]);

var MobileNavToggle = _styledComponents.default.div.withConfig({
  displayName: "SubNav__MobileNavToggle",
  componentId: "pwk1s5-3"
})(["display:none;margin-right:5px;max-width:32px;"]);

var SubNavContainer = _styledComponents.default.div.withConfig({
  displayName: "SubNav__SubNavContainer",
  componentId: "pwk1s5-4"
})(["display:flex;height:100%;", ";"], _Helpers.pMedia.sm(_templateObject(), Login, Signup, MobileNavToggle));
//# sourceMappingURL=SubNav.js.map