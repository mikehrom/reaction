"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.QuickInput = void 0;

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

require("core-js/modules/es6.function.name");

var _palette = require("@artsy/palette");

var _Animations = require("../Assets/Animations");

var _Colors = _interopRequireDefault(require("../Assets/Colors"));

var _Fonts = require("../Assets/Fonts");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Mixins = require("./Mixins");

var _Input = require("./Input");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
 * Quick input. Renders the label inside of the textbox.
 *
 */
var QuickInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(QuickInput, _React$Component);

  function QuickInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, QuickInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(QuickInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      focused: false,
      value: _this.props.value || "",
      touchedOnChange: true
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (e) {
      _this.setState({
        focused: true
      });

      if (_this.props.onFocus) {
        _this.props.onFocus(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function (e) {
      if (_this.props.setTouched) {
        _this.props.setTouched(_defineProperty({}, _this.props.name, true));
      }

      _this.setState({
        focused: false
      });

      if (_this.props.onBlur) {
        _this.props.onBlur(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      if (_this.props.touchedOnChange && _this.props.setTouched) {
        _this.props.setTouched(_defineProperty({}, _this.props.name, true));
      }

      _this.setState({
        value: e.currentTarget.value
      });

      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    });

    return _this;
  }

  _createClass(QuickInput, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(newProps) {
      if (this.props.name !== newProps.name) {
        this.setState({
          value: ""
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          error = _this$props.error,
          className = _this$props.className,
          label = _this$props.label,
          _ref = _this$props.ref,
          onChange = _this$props.onChange,
          setTouched = _this$props.setTouched,
          rightAddOn = _this$props.rightAddOn,
          note = _this$props.note,
          newProps = _objectWithoutProperties(_this$props, ["error", "className", "label", "ref", "onChange", "setTouched", "rightAddOn", "note"]);

      var showLabel = (!!this.state.focused || !!this.state.value) && !!label;
      return _react.default.createElement(Container, null, _react.default.createElement(InputContainer, {
        hasLabel: !!label,
        hasError: !!error,
        className: this.state.focused ? "focused" : ""
      }, _react.default.createElement(Label, {
        out: !showLabel
      }, label), _react.default.createElement(InputComponent, _extends({}, newProps, {
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onChange: this.onChange,
        value: this.state.value,
        showLabel: showLabel
      })), rightAddOn), note && _react.default.createElement(InputNote, null, note), error && _react.default.createElement(_Input.InputError, null, error));
    }
  }]);

  return QuickInput;
}(_react.default.Component);

exports.QuickInput = QuickInput;

var Container = _styledComponents.default.div.withConfig({
  displayName: "QuickInput__Container",
  componentId: "sc-1ptwpt9-0"
})(["padding-bottom:", "px;"], (0, _palette.space)(0.5));

var InputComponent = _styledComponents.default.input.withConfig({
  displayName: "QuickInput__InputComponent",
  componentId: "sc-1ptwpt9-1"
})(["", ";border:0;outline:none;flex:1;transition:all 0.25s;position:absolute;top:0;left:0;width:100%;height:100%;padding:0 ", "px;line-height:initial;", ";"], (0, _Fonts.garamond)("s17"), (0, _palette.space)(1), function (props) {
  return props.showLabel && "padding: ".concat((0, _palette.space)(1), "px ").concat((0, _palette.space)(1), "px 0 ").concat((0, _palette.space)(1), "px");
});

var InputContainer = _styledComponents.default.div.attrs({}).withConfig({
  displayName: "QuickInput__InputContainer",
  componentId: "sc-1ptwpt9-2"
})(["", ";margin-right:0;margin-top:", "px;margin-bottom:", "px;display:flex;position:relative;height:", ";flex-direction:row;align-items:center;box-sizing:content-box;"], _Mixins.borderedInput, (0, _palette.space)(0.5), (0, _palette.space)(1), function (p) {
  return p.hasLabel ? "".concat((0, _palette.space)(4), "px") : "".concat((0, _palette.space)(2), "px");
});

var Label = _styledComponents.default.label.attrs({}).withConfig({
  displayName: "QuickInput__Label",
  componentId: "sc-1ptwpt9-3"
})(["", ";position:absolute;left:", "px;top:", "px;visibility:", ";animation:", " 0.2s linear;transition:visibility 0.2s linear;z-index:1;"], (0, _Fonts.unica)("s12", "medium"), (0, _palette.space)(1), (0, _palette.space)(1), function (p) {
  return p.out ? "hidden" : "visible";
}, function (p) {
  return p.out ? _Animations.fadeOut : _Animations.fadeIn;
});

var InputNote = _styledComponents.default.div.withConfig({
  displayName: "QuickInput__InputNote",
  componentId: "sc-1ptwpt9-4"
})(["", ";margin-top:", "px;color:", ";height:16px;"], (0, _Fonts.unica)("s12"), (0, _palette.space)(1), _Colors.default.graySemibold);

var _default = QuickInput;
exports.default = _default;
//# sourceMappingURL=QuickInput.js.map