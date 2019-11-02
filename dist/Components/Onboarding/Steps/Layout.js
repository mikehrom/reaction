"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Layout = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var _Colors = _interopRequireDefault(require("../../../Assets/Colors"));

var _Fonts = require("../../../Assets/Fonts");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _MultiStateButton = _interopRequireDefault(require("../../Buttons/MultiStateButton"));

var _Helpers = require("../../Helpers");

var _Title = _interopRequireDefault(require("../../Title"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    margin: 25px 0 0;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    text-align: left;\n    margin-bottom: 15px;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    text-align: left;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    margin: 20px;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div.withConfig({
  displayName: "Layout__Container",
  componentId: "xek0dr-0"
})(["max-width:930px;margin-left:auto;margin-right:auto;", ";"], _Helpers.media.sm(_templateObject()));

var MainTitle = (0, _styledComponents.default)(_Title.default).withConfig({
  displayName: "Layout__MainTitle",
  componentId: "xek0dr-1"
})(["text-align:center;line-height:normal;margin-bottom:6px;", ";"], _Helpers.media.sm(_templateObject2()));
var Subtitle = (0, _styledComponents.default)(_Title.default).withConfig({
  displayName: "Layout__Subtitle",
  componentId: "xek0dr-2"
})(["", ";color:", ";margin-top:6px;margin-bottom:30px;text-align:center;line-height:normal;", ";"], (0, _Fonts.avantgarde)("s13"), _Colors.default.grayDark, _Helpers.media.sm(_templateObject3()));

var ItemContainer = _styledComponents.default.div.withConfig({
  displayName: "Layout__ItemContainer",
  componentId: "xek0dr-3"
})(["padding-bottom:50px;"]);
/* MS IE11 and Edge don't support for the sticky position property */


var FixedButttonContainer = _styledComponents.default.div.withConfig({
  displayName: "Layout__FixedButttonContainer",
  componentId: "xek0dr-4"
})(["width:100%;position:fixed;bottom:0;left:0;"]);
/* Mobile safari doesn't support for the fixed position property:
 *   https://www.eventbrite.com/engineering/mobile-safari-why/
 **/


var StickyButtonContainer = _styledComponents.default.div.withConfig({
  displayName: "Layout__StickyButtonContainer",
  componentId: "xek0dr-5"
})(["position:-webkit-sticky;bottom:0;background:linear-gradient( rgba(255,255,255,0) 0%,rgba(255,255,255,0.5) 17%,white 35%,white );display:flex;justify-content:center;"]);

var NextButton = (0, _styledComponents.default)(_MultiStateButton.default).withConfig({
  displayName: "Layout__NextButton",
  componentId: "xek0dr-6"
})(["margin:50px 0;display:block;width:250px;&:disabled{border:1px solid ", ";}", ";"], _Colors.default.grayRegular, _Helpers.media.sm(_templateObject4()));

var Layout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, _getPrototypeOf(Layout).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      var disabled = !this.props.onNextButtonPressed;
      var buttonText = this.props.isLastStep ? "finished" : "next";
      return _react.default.createElement(Container, null, _react.default.createElement(MainTitle, null, this.props.title, " "), _react.default.createElement(Subtitle, {
        titleSize: "xxsmall"
      }, this.props.subtitle), _react.default.createElement(ItemContainer, null, this.props.children), _react.default.createElement(FixedButttonContainer, null, _react.default.createElement(StickyButtonContainer, null, _react.default.createElement(NextButton, {
        disabled: disabled,
        onClick: this.props.onNextButtonPressed,
        state: this.props.buttonState
      }, buttonText))));
    }
  }]);

  return Layout;
}(_react.default.Component);

exports.Layout = Layout;
//# sourceMappingURL=Layout.js.map