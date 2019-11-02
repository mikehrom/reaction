"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorPage = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _palette = require("@artsy/palette");

var _HorizontalPadding = require("../Apps/Components/HorizontalPadding");

var _Fonts = require("../Assets/Fonts");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

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

var ErrorPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ErrorPage, _React$Component);

  function ErrorPage() {
    _classCallCheck(this, ErrorPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(ErrorPage).apply(this, arguments));
  }

  _createClass(ErrorPage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          code = _this$props.code,
          message = _this$props.message,
          detail = _this$props.detail;
      var defaultMessage = code === 404 ? "Sorry, the page you were looking for doesn’t exist at this URL." : "Internal Error";
      var detailMessage = message ? "Error Message: ".concat(message) : detail;
      return _react.default.createElement(_HorizontalPadding.HorizontalPadding, null, _react.default.createElement(ErrorCodeBackground, {
        code: code
      }, _react.default.createElement(ErrorDefaultMessage, null, defaultMessage), code !== 404 && _react.default.createElement(ErrorInner, null, detailMessage), _react.default.createElement(_palette.Serif, {
        size: "4",
        color: "black60"
      }, "Please contact", " ", _react.default.createElement(Link, {
        href: "mailto:support@artsy.net"
      }, "support@artsy.net"), " with any questions."), _react.default.createElement(_palette.Spacer, {
        mb: 4
      }), _react.default.createElement(Link, {
        href: "/"
      }, _react.default.createElement(_palette.Button, {
        size: "large"
      }, "Go to Artsy homepage"))));
    }
  }]);

  return ErrorPage;
}(_react.default.Component);

exports.ErrorPage = ErrorPage;

var Link = _styledComponents.default.a.withConfig({
  displayName: "ErrorPage__Link",
  componentId: "sc-1myfza3-0"
})(["color:", ";"], (0, _palette.color)("black100"));

var ErrorDefaultMessage = _styledComponents.default.div.withConfig({
  displayName: "ErrorPage__ErrorDefaultMessage",
  componentId: "sc-1myfza3-1"
})(["max-width:60%;margin:40px auto;", ";"], (0, _Fonts.garamond)("s40"));

var ErrorInner = _styledComponents.default.div.withConfig({
  displayName: "ErrorPage__ErrorInner",
  componentId: "sc-1myfza3-2"
})(["background:", ";border:0;border:3px solid ", ";color:", ";font-size:13px;line-height:1.6em;margin:20px auto;max-height:115px;max-width:75%;font-family:\"Menlo\",\"Monaco\",\"Andale Mono\",\"lucida console\",\"Courier New\",monospace;overflow-x:auto;padding:5px 9px;text-align:left;word-break:break-word;"], (0, _palette.color)("white100"), (0, _palette.color)("black10"), (0, _palette.color)("black60"));

var ErrorCodeBackground = (0, _styledComponents.default)("div").withConfig({
  displayName: "ErrorPage__ErrorCodeBackground",
  componentId: "sc-1myfza3-3"
})(["position:absolute;text-align:center;width:100%;margin:0;padding:0 20px;top:calc(50% - 70px);left:50%;transform:translate(-50%,-50%);&::before{content:\"", "\";display:block;position:absolute;top:calc(50% + 30px);left:50%;transform:translate(-50%,-50%);text-align:center;font-size:535px;line-height:1;z-index:-1;color:", ";}"], function (props) {
  return "".concat(props.code);
}, (0, _palette.color)("black5"));
//# sourceMappingURL=ErrorPage.js.map