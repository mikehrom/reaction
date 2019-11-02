"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Checkbox = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

var _palette = require("@artsy/palette");

var _Fonts = require("../Assets/Fonts");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../Assets/Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @deprecated in favor of our Design System Checkbox component in @artsy/palette
 * https://palette.artsy.net/elements/inputs/checkbox
 */
var Checkbox =
/*#__PURE__*/
function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox(props) {
    var _this;

    _classCallCheck(this, Checkbox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Checkbox).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onChange", function (event) {
      if (_this.props.onChange) {
        _this.props.onChange(event);
      }

      _this.setState({
        checked: event.currentTarget.checked
      });
    });

    _this.state = {
      checked: props.checked || false
    };
    return _this;
  }

  _createClass(Checkbox, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          disabled = _this$props.disabled,
          error = _this$props.error,
          ref = _this$props.ref,
          remainderProps = _objectWithoutProperties(_this$props, ["children", "className", "disabled", "error", "ref"]);

      var checked = this.state.checked;
      var fill = disabled && checked ? "black30" : "white100";
      return _react.default.createElement(Label, {
        className: className,
        error: error
      }, _react.default.createElement(CheckmarkContainer, null, _react.default.createElement(CheckboxInput, _extends({}, remainderProps, {
        type: "checkbox",
        onChange: this.onChange,
        checked: checked,
        disabled: disabled,
        error: error
      })), (!disabled || checked) && _react.default.createElement(PositionedCheckmark, {
        fill: fill
      })), children);
    }
  }]);

  return Checkbox;
}(_react.Component);

exports.Checkbox = Checkbox;

var CheckmarkContainer = _styledComponents.default.div.withConfig({
  displayName: "Checkbox__CheckmarkContainer",
  componentId: "o5gfn0-0"
})(["width:20px;height:20px;top:-1px;margin-right:0.5rem;position:relative;display:flex;justify-content:center;align-items:center;"]);

var PositionedCheckmark = (0, _styledComponents.default)(_palette.CheckIcon).withConfig({
  displayName: "Checkbox__PositionedCheckmark",
  componentId: "o5gfn0-1"
})(["z-index:1;"]);

var CheckboxInput = _styledComponents.default.input.withConfig({
  displayName: "Checkbox__CheckboxInput",
  componentId: "o5gfn0-2"
})(["width:20px;height:20px;position:absolute;margin:0;left:0;border:none;&::after{transition:all 0.25s;content:\"\";position:absolute;width:20px;height:20px;left:0;top:0;box-sizing:border-box;background-color:", ";border:2px solid ", ";}&:checked::after{background-color:", ";border-color:", ";}&:disabled::after{background-color:", ";border-color:", ";}"], _Colors.default.white, function (_ref) {
  var error = _ref.error;
  return error ? _Colors.default.redMedium : _Colors.default.grayRegular;
}, _Colors.default.black, _Colors.default.black, _Colors.default.gray, _Colors.default.grayRegular);

var Label = _styledComponents.default.label.attrs({}).withConfig({
  displayName: "Checkbox__Label",
  componentId: "o5gfn0-3"
})(["", ";position:relative;line-height:135%;cursor:pointer;display:flex;align-items:center;", ";&:hover{", "{&::after{background-color:", ";border-color:", ";}&:checked::after{background-color:", ";border-color:", ";}}}"], (0, _Fonts.garamond)("s16"), function (_ref2) {
  var error = _ref2.error;
  return error && "color: ".concat(_Colors.default.redMedium);
}, CheckboxInput, _Colors.default.grayRegular, _Colors.default.grayRegular, _Colors.default.black, _Colors.default.black);

var _default = Checkbox;
exports.default = _default;
//# sourceMappingURL=Checkbox.js.map