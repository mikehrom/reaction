"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavContainer = exports.Nav = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

var _palette = require("@artsy/palette");

var _PartnerInline = require("../Partner/PartnerInline");

var _react = _interopRequireDefault(require("react"));

var _reactWaypoint = _interopRequireDefault(require("react-waypoint"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Responsive = require("../../../Utils/Responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Nav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Nav);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Nav)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isFixed: false
    });

    _defineProperty(_assertThisInitialized(_this), "setPosition", function (isFixed) {
      var canFix = _this.props.canFix;
      var currentPosition = _this.state.isFixed;

      if (canFix && isFixed !== currentPosition) {
        _this.setState({
          isFixed: isFixed
        });
      }
    });

    return _this;
  }

  _createClass(Nav, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          backgroundColor = _this$props.backgroundColor,
          children = _this$props.children,
          color = _this$props.color,
          sponsor = _this$props.sponsor,
          className = _this$props.className,
          canFix = _this$props.canFix,
          transparent = _this$props.transparent,
          title = _this$props.title,
          isSlideOpen = _this$props.isSlideOpen;
      var isFixed = this.state.isFixed;
      return _react.default.createElement("div", null, _react.default.createElement(NavContainer, {
        backgroundColor: backgroundColor,
        className: className,
        color: color,
        isFixed: canFix && isFixed,
        transparent: !isFixed && transparent,
        isSlideOpen: isSlideOpen
      }, _react.default.createElement(_PartnerInline.PartnerInline, {
        url: sponsor && sponsor.partner_logo_link,
        logo: sponsor && sponsor.partner_condensed_logo,
        color: color,
        margin: "0 10px"
      }), _react.default.createElement(_Responsive.Media, {
        greaterThan: "xs"
      }, _react.default.createElement(Title, {
        size: "5",
        color: color,
        weight: "semibold",
        textAlign: "center"
      }, title ? title : _react.default.createElement("a", {
        href: "/articles"
      }, "Artsy Editorial"))), children), _react.default.createElement(_reactWaypoint.default, {
        onEnter: function onEnter() {
          return _this2.setPosition(false);
        },
        onLeave: function onLeave() {
          return _this2.setPosition(true);
        }
      }));
    }
  }]);

  return Nav;
}(_react.default.Component);

exports.Nav = Nav;

_defineProperty(Nav, "defaultProps", {
  backgroundColor: "black",
  canFix: true,
  color: "white",
  transparent: false
});

var NavContainer = (0, _styledComponents.default)(_palette.Flex).withConfig({
  displayName: "Nav__NavContainer",
  componentId: "cd3j7j-0"
})(["background-color:", ";border-bottom:1px solid ", ";position:relative;height:52px;width:100%;z-index:", ";", ";", ";"], function (props) {
  return props.transparent ? "transparent" : props.backgroundColor;
}, function (props) {
  return props.color;
}, function (props) {
  return props.isSlideOpen ? -1 : 10;
}, function (props) {
  return props.transparent && !props.isFixed && "\n    position: absolute;\n    top: 0;\n  ";
}, function (props) {
  return props.isFixed && "\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n  ";
});
exports.NavContainer = NavContainer;
var Title = (0, _styledComponents.default)(_palette.Serif).withConfig({
  displayName: "Nav__Title",
  componentId: "cd3j7j-1"
})(["position:absolute;width:100%;left:0;top:0;right:0;bottom:0;align-items:center;display:flex;justify-content:center;color:", ";a{color:", ";text-decoration:none;z-index:10;}"], function (props) {
  return props.color;
}, function (props) {
  return props.color;
});
//# sourceMappingURL=Nav.js.map