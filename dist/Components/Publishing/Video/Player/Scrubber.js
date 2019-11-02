"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scrubber = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  background-size: ", "% 100%;\n  height: 18px;\n  margin-top: 15px;\n  appearance: none;\n  background: transparent;\n  ::-webkit-slider-thumb {\n    appearance: none;\n  }\n  ::-ms-track {\n    width: 100%;\n    height: 2px;\n    cursor: pointer;\n    background: transparent;\n    border: 0px;\n    color: transparent;\n  }\n  ::-webkit-slider-runnable-track {\n    height: 2px;\n    cursor: pointer;\n    animate: 0.2s;\n    background-color: white;\n    border: 0px;\n  }\n  ::-moz-range-track {\n    height: 2px;\n    cursor: pointer;\n    animate: 0.2s;\n    background-color: white;\n    border: 0px;\n  }\n  ::-webkit-slider-thumb {\n    color: white;\n    border: 0px;\n    height: 12px;\n    width: 12px;\n    border-radius: 50px;\n    background: white;\n    cursor: pointer;\n    margin-top: -5px;\n    appearance: none;\n  }\n  ::-moz-range-thumb {\n    color: white;\n    box-shadow: 0px 0px 0px white;\n    border: 0px;\n    height: 12px;\n    width: 12px;\n    border-radius: 50px;\n    background: white;\n    cursor: pointer;\n    margin-top: -5px;\n    appearance: none;\n  }\n  ::-ms-fill-lower {\n    background: white;\n    border: 0px;\n  }\n  ::-ms-fill-upper {\n    background: white;\n    border: 0px;\n  }\n  ::-ms-thumb {\n    color: white;\n    box-shadow: 0px 0px 0px white;\n    border: 0px;\n    height: 12px;\n    width: 12px;\n    border-radius: 50px;\n    background: white;\n    cursor: pointer;\n    margin-top: -5px;\n    appearance: none;\n  }\n  &:focus::-webkit-slider-runnable-track {\n    background: white;\n  }\n  &:focus {\n    outline: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Scrubber =
/*#__PURE__*/
function (_Component) {
  _inherits(Scrubber, _Component);

  function Scrubber() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Scrubber);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Scrubber)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isScrubbing: false,
      isPlayingOnMouseDown: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseDown", function () {
      _this.setState({
        isPlayingOnMouseDown: _this.props.isPlaying
      });

      _this.props.pause();
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseUp", function (e) {
      if (!_this.state.isScrubbing) {
        _this.props.seekTo(e.target.value);
      }

      if (_this.state.isPlayingOnMouseDown) {
        _this.props.play();
      }

      _this.setState({
        isScrubbing: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      _this.setState({
        isScrubbing: true
      });

      _this.props.seekTo(e.target.value);
    });

    return _this;
  }

  _createClass(Scrubber, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return this.props.currentTime !== nextProps.currentTime || this.props.duration !== nextProps.duration;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          duration = _this$props.duration,
          currentTime = _this$props.currentTime;
      return _react.default.createElement(ScrubberInput, {
        type: "range",
        step: "any",
        max: duration && duration.toFixed(4),
        value: currentTime,
        duration: duration,
        currentTime: currentTime,
        onMouseDown: this.handleMouseDown,
        onMouseUp: this.handleMouseUp,
        onChange: this.handleChange
      });
    }
  }]);

  return Scrubber;
}(_react.Component);

exports.Scrubber = Scrubber;
var Input = _styledComponents.default.input;
var ScrubberInput = Input(_templateObject(), function (props) {
  return props.currentTime * 100 / props.duration;
});
//# sourceMappingURL=Scrubber.js.map