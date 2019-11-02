"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayPause = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _IconVideoPause = require("../../Icon/IconVideoPause");

var _IconVideoPlay = require("../../Icon/IconVideoPlay");

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

var PlayPause =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(PlayPause, _React$PureComponent);

  function PlayPause() {
    _classCallCheck(this, PlayPause);

    return _possibleConstructorReturn(this, _getPrototypeOf(PlayPause).apply(this, arguments));
  }

  _createClass(PlayPause, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isPlaying = _this$props.isPlaying,
          togglePlay = _this$props.togglePlay;
      return _react.default.createElement(PlayPauseContainer, {
        onClick: togglePlay
      }, isPlaying ? _react.default.createElement(_IconVideoPause.IconVideoPause, {
        color: "white"
      }) : _react.default.createElement(_IconVideoPlay.IconVideoPlay, {
        color: "white"
      }));
    }
  }]);

  return PlayPause;
}(_react.default.PureComponent);

exports.PlayPause = PlayPause;

var PlayPauseContainer = _styledComponents.default.div.withConfig({
  displayName: "PlayPause__PlayPauseContainer",
  componentId: "sc-6o5h8d-0"
})(["height:28px;width:28px;cursor:pointer;"]);
//# sourceMappingURL=PlayPause.js.map