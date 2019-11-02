"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BorderedPulldown = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.array.map");

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../Assets/Colors"));

var _Fonts = require("../Assets/Fonts");

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

var BorderedPulldown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BorderedPulldown, _React$Component);

  function BorderedPulldown() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BorderedPulldown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BorderedPulldown)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      selected: null,
      isHovered: false
    });

    return _this;
  }

  _createClass(BorderedPulldown, [{
    key: "toggleHover",
    value: function toggleHover(value) {
      this.setState({
        isHovered: value
      });
    }
  }, {
    key: "onChange",
    value: function onChange(option) {
      this.setState({
        selected: option,
        isHovered: false
      });
      this.props.onChange(option);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          options = _this$props.options,
          defaultValue = _this$props.defaultValue,
          selectedName = _this$props.selectedName;
      var optionEls = options.map(function (option) {
        return _react.default.createElement("a", {
          key: option.val,
          onClick: function onClick() {
            return _this2.onChange(option);
          }
        }, option.name);
      });
      var displayValue = this.state.selected && this.state.selected.name || selectedName || defaultValue;
      var pulldownStyles = {};

      if (this.state.isHovered) {
        pulldownStyles = {
          display: "block"
        };
      }

      return _react.default.createElement("div", {
        className: this.props.className,
        onMouseEnter: function onMouseEnter() {
          return _this2.toggleHover(true);
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.toggleHover(false);
        }
      }, _react.default.createElement(Toggle, null, _react.default.createElement("span", null, displayValue), _react.default.createElement(CaretHolder, null, _react.default.createElement(_Icon.default, {
        name: "arrow-down",
        fontSize: "9px",
        color: _Colors.default.grayMedium
      }))), _react.default.createElement(PulldownOptions, {
        style: pulldownStyles
      }, optionEls));
    }
  }]);

  return BorderedPulldown;
}(_react.default.Component);

exports.BorderedPulldown = BorderedPulldown;
var StyledBorderedPulldown = (0, _styledComponents.default)(BorderedPulldown).withConfig({
  displayName: "BorderedPulldown__StyledBorderedPulldown",
  componentId: "sc-16yk0rp-0"
})(["", ";display:inline-block;width:200px;position:relative;border:2px solid ", ";text-align:left;&.is-disabled{.bordered-pulldown-toggle{cursor:default;color:", ";}}"], (0, _Fonts.garamond)("s17"), _Colors.default.grayMedium, _Colors.default.grayBold);

var Toggle = _styledComponents.default.div.withConfig({
  displayName: "BorderedPulldown__Toggle",
  componentId: "sc-16yk0rp-1"
})(["display:block;padding:8px 10px 6px;text-decoration:none;"]);

var CaretHolder = _styledComponents.default.div.withConfig({
  displayName: "BorderedPulldown__CaretHolder",
  componentId: "sc-16yk0rp-2"
})(["float:right;padding-left:5px;border-left:1px solid ", ";"], _Colors.default.grayMedium);

var PulldownOptions = _styledComponents.default.div.withConfig({
  displayName: "BorderedPulldown__PulldownOptions",
  componentId: "sc-16yk0rp-3"
})(["display:none;position:absolute;background:white;border:2px solid ", ";top:-2px;left:-2px;right:-2px;z-index:2;> a{text-decoration:none;overflow:ellipsis;display:block;padding:8px 10px 6px;cursor:pointer;&:hover{background-color:", ";}}"], _Colors.default.grayMedium, _Colors.default.gray);

var _default = StyledBorderedPulldown;
exports.default = _default;
//# sourceMappingURL=BorderedPulldown.js.map