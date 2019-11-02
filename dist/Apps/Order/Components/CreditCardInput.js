"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreditCardInput = exports.StyledCardElement = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.function.bind");

var _palette = require("@artsy/palette");

var _fonts = require("@artsy/palette/dist/platform/fonts");

var _Mixins = require("../../../Components/Mixins");

var _react = _interopRequireDefault(require("react"));

var _reactStripeElements = require("react-stripe-elements");

var _styledComponents = _interopRequireDefault(require("styled-components"));

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

var StyledCardElement = (0, _styledComponents.default)(_reactStripeElements.CardElement).withConfig({
  displayName: "CreditCardInput__StyledCardElement",
  componentId: "sc-1buxrg1-0"
})(["width:100%;padding:9px 10px;"]); // Re-uses old input border behavior

exports.StyledCardElement = StyledCardElement;
var StyledBorderBox = (0, _styledComponents.default)(_palette.BorderBox).attrs({}).withConfig({
  displayName: "CreditCardInput__StyledBorderBox",
  componentId: "sc-1buxrg1-1"
})(["", ";padding:0;height:40px;"], _Mixins.border);

var CreditCardInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CreditCardInput, _React$Component);

  function CreditCardInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CreditCardInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CreditCardInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      focused: false
    });

    _defineProperty(_assertThisInitialized(_this), "cardInputElement", void 0);

    return _this;
  }

  _createClass(CreditCardInput, [{
    key: "onChange",
    value: function onChange(response) {
      if (this.props.onChange) {
        this.props.onChange(response);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _ref = this.props.error ? this.props.error : {
        message: null
      },
          message = _ref.message;

      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(StyledBorderBox, {
        className: "".concat(this.state.focused ? "focused" : ""),
        hasError: !!message,
        p: 1
      }, _react.default.createElement(StyledCardElement, {
        hidePostalCode: true,
        onChange: this.onChange.bind(this),
        onFocus: function onFocus() {
          return _this2.setState({
            focused: true
          });
        },
        onBlur: function onBlur() {
          return _this2.setState({
            focused: false
          });
        },
        onReady: function onReady(el) {
          return _this2.cardInputElement = el;
        },
        style: {
          base: {
            "::placeholder": {
              color: (0, _palette.color)("black30")
            },
            fontFamily: _fonts.fontFamily.serif.regular,
            fontSize: "".concat(_palette.themeProps.typeSizes.serif["3t"].fontSize, "px"),
            fontSmoothing: "antialiased",
            lineHeight: "20px"
          }
        }
      })), message && _react.default.createElement(_palette.Sans, {
        pt: 1,
        size: "2",
        color: "red100"
      }, message));
    }
  }]);

  return CreditCardInput;
}(_react.default.Component);

exports.CreditCardInput = CreditCardInput;
//# sourceMappingURL=CreditCardInput.js.map