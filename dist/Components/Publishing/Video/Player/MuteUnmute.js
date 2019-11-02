"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MuteUnmuteContainer = exports.MuteUnmute = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _IconVideoMute = require("../../Icon/IconVideoMute");

var _IconVideoUnmute = require("../../Icon/IconVideoUnmute");

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

var MuteUnmute =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(MuteUnmute, _React$PureComponent);

  function MuteUnmute() {
    _classCallCheck(this, MuteUnmute);

    return _possibleConstructorReturn(this, _getPrototypeOf(MuteUnmute).apply(this, arguments));
  }

  _createClass(MuteUnmute, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isMuted = _this$props.isMuted,
          toggleMute = _this$props.toggleMute;
      return _react.default.createElement(MuteUnmuteContainer, {
        onClick: toggleMute
      }, isMuted ? _react.default.createElement(_IconVideoUnmute.IconVideoUnmute, {
        color: "white"
      }) : _react.default.createElement(_IconVideoMute.IconVideoMute, {
        color: "white"
      }));
    }
  }]);

  return MuteUnmute;
}(_react.default.PureComponent);

exports.MuteUnmute = MuteUnmute;

var MuteUnmuteContainer = _styledComponents.default.div.withConfig({
  displayName: "MuteUnmute__MuteUnmuteContainer",
  componentId: "sc-1brk4e5-0"
})(["height:28px;cursor:pointer;"]);

exports.MuteUnmuteContainer = MuteUnmuteContainer;
//# sourceMappingURL=MuteUnmute.js.map