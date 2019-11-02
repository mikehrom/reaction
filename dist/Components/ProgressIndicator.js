"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressIndicatorContainer = exports.ProgressIndicator = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

var _Colors = _interopRequireDefault(require("../Assets/Colors"));

var _Helpers = require("./Helpers");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    height: 3px;\n  "]);

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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @deprecated in favor of our Design System ProgressBar component in @artsy/palette
 * https://palette.artsy.net/elements/loaders/progressbar
 */
var ProgressIndicator =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProgressIndicator, _React$Component);

  function ProgressIndicator() {
    _classCallCheck(this, ProgressIndicator);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProgressIndicator).apply(this, arguments));
  }

  _createClass(ProgressIndicator, [{
    key: "render",
    value: function render() {
      var percentComplete = this.props.percentComplete;
      return _react.default.createElement(ProgressIndicatorContainer, null, _react.default.createElement(CompletionBar, {
        percentComplete: percentComplete
      }));
    }
  }]);

  return ProgressIndicator;
}(_react.default.Component);

exports.ProgressIndicator = ProgressIndicator;

_defineProperty(ProgressIndicator, "defaultProps", {
  percentComplete: 0
});

var ProgressIndicatorContainer = _styledComponents.default.div.withConfig({
  displayName: "ProgressIndicator__ProgressIndicatorContainer",
  componentId: "a38sjv-0"
})(["width:100%;height:6px;background-color:", ";", ";"], _Colors.default.grayRegular, _Helpers.media.sm(_templateObject()));

exports.ProgressIndicatorContainer = ProgressIndicatorContainer;

var CompletionBar = _styledComponents.default.div.withConfig({
  displayName: "ProgressIndicator__CompletionBar",
  componentId: "a38sjv-1"
})(["width:", ";height:100%;background-color:black;transition:width 0.25s ease-in;"], function (props) {
  return "calc(100% * ".concat(props.percentComplete, ")");
});

CompletionBar.displayName = "CompletionBar";
//# sourceMappingURL=ProgressIndicator.js.map