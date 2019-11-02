"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StepMarker = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.array.map");

var _Fonts = require("../../Assets/Fonts");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Assets/Colors"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Text = _interopRequireDefault(require("../Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var StepMarker =
/*#__PURE__*/
function (_Component) {
  _inherits(StepMarker, _Component);

  function StepMarker(props) {
    var _this;

    _classCallCheck(this, StepMarker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StepMarker).call(this, props));
    _this.state = _this.computeStepState(props);
    return _this;
  }

  _createClass(StepMarker, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.currentStepIndex !== this.props.currentStepIndex) {
        this.setState(this.computeStepState(nextProps));
      }
    }
  }, {
    key: "computeStepState",
    value: function computeStepState(props) {
      var currentStepIndex = props.currentStepIndex,
          steps = props.steps;
      var stepState = steps.map(function (step, i) {
        var isActive = i === currentStepIndex;
        var isComplete = i < currentStepIndex;
        return _objectSpread({}, step, {
          isActive: isActive,
          isComplete: isComplete
        });
      });
      return {
        steps: stepState,
        currentStepIndex: currentStepIndex
      };
    }
  }, {
    key: "render",
    value: function render() {
      var style = this.props.style;
      var steps = this.state.steps;
      return _react.default.createElement(Container, {
        style: style
      }, _react.default.createElement(Markers, null, steps.map(function (step, key) {
        return _react.default.createElement(Mark, _extends({}, step, {
          key: key
        }), step.isComplete && _react.default.createElement(StyledIcon, {
          name: "check",
          color: "white"
        }), _react.default.createElement(StyledText, {
          onClick: step.onClick,
          align: "center"
        }, step.label));
      })));
    }
  }]);

  return StepMarker;
}(_react.Component);

exports.StepMarker = StepMarker;

var Container = _styledComponents.default.div.withConfig({
  displayName: "StepMarker__Container",
  componentId: "s7e55q-0"
})(["padding:20px;"]);

var Markers = _styledComponents.default.div.withConfig({
  displayName: "StepMarker__Markers",
  componentId: "s7e55q-1"
})(["display:flex;"]);

var Mark = _styledComponents.default.div.withConfig({
  displayName: "StepMarker__Mark",
  componentId: "s7e55q-2"
})(["", ";"], function (props) {
  var isActive = props.isActive,
      isComplete = props.isComplete;
  var circleSize = "10px"; // + 2px border

  var bgColor = _Colors.default.white;
  var circleBorderColor = _Colors.default.grayRegular;
  var connectingBorderColor = _Colors.default.grayRegular;

  if (isActive) {
    bgColor = _Colors.default.white;
    circleBorderColor = _Colors.default.black;
  }

  if (isComplete) {
    bgColor = _Colors.default.black;
    circleBorderColor = _Colors.default.black;
    connectingBorderColor = _Colors.default.black;
  }

  return "\n      position: relative;\n      padding: 12px;\n      text-align: center;\n      width: 100%;\n\n      &::before {\n        background: ".concat(bgColor, ";\n        border-radius: 50%;\n        border: 2px solid ").concat(circleBorderColor, ";\n        top: calc(-").concat(circleSize, " / 2);\n        left: calc(50% - calc(").concat(circleSize, " / 2));\n        width: ").concat(circleSize, ";\n        height: ").concat(circleSize, ";\n        position: absolute;\n        content: \" \";\n        z-index: 2;\n      }\n\n      &::after {\n        border-top: 2px solid ").concat(connectingBorderColor, ";\n        width: 100%;\n        left: 50%;\n        top: 1px;\n        position: absolute;\n        content: \" \";\n      }\n\n      &:last-child:after {\n        border-top: none;\n      }\n    ");
});

var StyledText = (0, _styledComponents.default)(_Text.default).withConfig({
  displayName: "StepMarker__StyledText",
  componentId: "s7e55q-3"
})(["", ";margin-top:0;margin-bottom:0;"], (0, _Fonts.unica)("s12", "regular"));
var StyledIcon = (0, _styledComponents.default)(_Icon.default).withConfig({
  displayName: "StepMarker__StyledIcon",
  componentId: "s7e55q-4"
})(["width:100%;text-align:center;font-size:6px;color:white;position:absolute;top:-1px;left:-3px;z-index:3;"]);
//# sourceMappingURL=index.js.map