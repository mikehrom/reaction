"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OfferInput = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.number.constructor");

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/es6.regexp.match");

var _Input = _interopRequireDefault(require("../../../Components/Input"));

var _react = _interopRequireDefault(require("react"));

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

var OfferInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(OfferInput, _React$Component);

  function OfferInput() {
    _classCallCheck(this, OfferInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(OfferInput).apply(this, arguments));
  }

  _createClass(OfferInput, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          id = _this$props.id,
          showError = _this$props.showError,
          onFocus = _this$props.onFocus;
      return _react.default.createElement(_Input.default, {
        id: id,
        title: "Your offer",
        type: "text",
        pattern: "[0-9]",
        defaultValue: null,
        error: showError ? "Offer amount missing or invalid." : null,
        onFocus: onFocus,
        onChange: function onChange(ev) {
          var currentValue = ev.currentTarget.value;
          var nonDigitMatch = currentValue.match(/\D/);

          if (nonDigitMatch) {
            var cursorOffset = currentValue.indexOf(nonDigitMatch[0]);
            var nextValue = currentValue.replace(/\D/g, "");
            ev.currentTarget.value = nextValue;
            ev.currentTarget.setSelectionRange(cursorOffset, cursorOffset);
          }

          _this.props.onChange(Number(ev.currentTarget.value || "0"));
        },
        block: true
      });
    }
  }]);

  return OfferInput;
}(_react.default.Component);

exports.OfferInput = OfferInput;
//# sourceMappingURL=OfferInput.js.map