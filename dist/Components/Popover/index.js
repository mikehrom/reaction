"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Popover = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Fonts = require("../../Assets/Fonts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var Popover =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Popover, _React$Component);

  function Popover() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Popover);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Popover)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "Arrows", {
      top: _react.default.createElement(PopoverTopArrow, null),
      right: _react.default.createElement(PopoverRightArrow, null),
      bottom: _react.default.createElement(PopoverBottomArrow, null),
      left: _react.default.createElement(PopoverLeftArrow, null)
    });

    return _this;
  }

  _createClass(Popover, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          placement = _this$props.placement,
          arrowOffsetLeft = _this$props.arrowOffsetLeft,
          arrowOffsetTop = _this$props.arrowOffsetTop,
          style = _this$props.style;
      return _react.default.createElement(PopoverContainer, {
        style: style
      }, (0, _react.cloneElement)(this.Arrows[placement], {
        arrowOffsetLeft: arrowOffsetLeft,
        arrowOffsetTop: arrowOffsetTop
      }), _react.default.createElement(PopoverInner, null, this.props.children));
    }
  }]);

  return Popover;
}(_react.default.Component);

exports.Popover = Popover;

var PopoverContainer = _styledComponents.default.div.withConfig({
  displayName: "Popover__PopoverContainer",
  componentId: "sc-7hbbf8-0"
})(["position:relative;padding:5px;display:inline-block;"]);

var PopoverArrow = _styledComponents.default.div.attrs({}).withConfig({
  displayName: "Popover__PopoverArrow",
  componentId: "sc-7hbbf8-1"
})(["position:absolute;width:0;height:0;border-color:transparent;border-style:solid;"]);

var PopoverTopArrow = (0, _styledComponents.default)(PopoverArrow).withConfig({
  displayName: "Popover__PopoverTopArrow",
  componentId: "sc-7hbbf8-2"
})(["bottom:0;left:", ";margin-left:-5px;border-width:5px 5px 0;border-top-color:#000;"], function (_ref) {
  var arrowOffsetLeft = _ref.arrowOffsetLeft;
  return arrowOffsetLeft || "50%";
});
var PopoverRightArrow = (0, _styledComponents.default)(PopoverArrow).withConfig({
  displayName: "Popover__PopoverRightArrow",
  componentId: "sc-7hbbf8-3"
})(["top:", ";left:0;margin-top:-5px;border-width:5px 5px 5px 0;border-right-color:#000;"], function (_ref2) {
  var arrowOffsetTop = _ref2.arrowOffsetTop;
  return arrowOffsetTop || "50%";
});
var PopoverBottomArrow = (0, _styledComponents.default)(PopoverArrow).withConfig({
  displayName: "Popover__PopoverBottomArrow",
  componentId: "sc-7hbbf8-4"
})(["top:0;left:", ";margin-left:-5px;border-width:0 5px 5px;border-bottom-color:#000;"], function (_ref3) {
  var arrowOffsetLeft = _ref3.arrowOffsetLeft;
  return arrowOffsetLeft || "50%";
});
var PopoverLeftArrow = (0, _styledComponents.default)(PopoverArrow).withConfig({
  displayName: "Popover__PopoverLeftArrow",
  componentId: "sc-7hbbf8-5"
})(["top:", ";right:0;margin-top:-5px;border-width:5px 0 5px 5px;border-left-color:#000;"], function (_ref4) {
  var arrowOffsetTop = _ref4.arrowOffsetTop;
  return arrowOffsetTop || "50%";
});

var PopoverInner = _styledComponents.default.div.withConfig({
  displayName: "Popover__PopoverInner",
  componentId: "sc-7hbbf8-6"
})(["padding:8px 10px;color:#fff;text-align:center;background-color:#000;", ";"], (0, _Fonts.garamond)("s11"));
//# sourceMappingURL=index.js.map