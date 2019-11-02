"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoControlsContainer = exports.VideoControls = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _Fonts = require("../../../../Assets/Fonts");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _IconVideoFullscreen = require("../../Icon/IconVideoFullscreen");

var _MuteUnmute = require("./MuteUnmute");

var _PlayPause = require("./PlayPause");

var _Scrubber = require("./Scrubber");

var _Timestamp = require("./Timestamp");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var VideoControls =
/*#__PURE__*/
function (_Component) {
  _inherits(VideoControls, _Component);

  function VideoControls() {
    _classCallCheck(this, VideoControls);

    return _possibleConstructorReturn(this, _getPrototypeOf(VideoControls).apply(this, arguments));
  }

  _createClass(VideoControls, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isMuted = _this$props.isMuted,
          isPlaying = _this$props.isPlaying,
          title = _this$props.title,
          duration = _this$props.duration,
          currentTime = _this$props.currentTime,
          toggleFullscreen = _this$props.toggleFullscreen,
          toggleMute = _this$props.toggleMute,
          togglePlay = _this$props.togglePlay,
          pause = _this$props.pause,
          play = _this$props.play,
          seekTo = _this$props.seekTo;
      return _react.default.createElement(VideoControlsContainer, null, _react.default.createElement(TopControls, null, _react.default.createElement(Block, null, _react.default.createElement(_PlayPause.PlayPause, {
        togglePlay: togglePlay,
        isPlaying: isPlaying
      }), _react.default.createElement(Title, null, title)), _react.default.createElement(Block, null, _react.default.createElement(_Timestamp.Timestamp, {
        currentTime: currentTime,
        duration: duration
      }), _react.default.createElement(_MuteUnmute.MuteUnmute, {
        toggleMute: toggleMute,
        isMuted: isMuted
      }), _react.default.createElement(_IconVideoFullscreen.IconVideoFullscreen, {
        onClick: toggleFullscreen,
        color: "white"
      }))), _react.default.createElement(_Scrubber.Scrubber, {
        duration: duration,
        currentTime: currentTime,
        pause: pause,
        play: play,
        seekTo: seekTo,
        isPlaying: isPlaying
      }));
    }
  }]);

  return VideoControls;
}(_react.Component);

exports.VideoControls = VideoControls;

var TopControls = _styledComponents.default.div.withConfig({
  displayName: "VideoControls__TopControls",
  componentId: "sc-1lk7qcs-0"
})(["display:flex;justify-content:space-between;width:100%;"]);

var VideoControlsContainer = _styledComponents.default.div.withConfig({
  displayName: "VideoControls__VideoControlsContainer",
  componentId: "sc-1lk7qcs-1"
})(["color:white;display:flex;flex-direction:column;align-items:center;box-sizing:border-box;border:1px solid white;border-radius:2px;padding:20px;margin:20px;opacity:0;transition:opacity 0.25s ease;", "{margin-right:30px;}", "{margin-right:20px;}", "{cursor:pointer;}"], _Timestamp.Timestamp, _MuteUnmute.MuteUnmuteContainer, _IconVideoFullscreen.IconVideoFullscreen);

exports.VideoControlsContainer = VideoControlsContainer;

var Title = _styledComponents.default.div.withConfig({
  displayName: "VideoControls__Title",
  componentId: "sc-1lk7qcs-2"
})(["", ";margin-left:20px;"], (0, _Fonts.garamond)("s23"));

var Block = _styledComponents.default.div.withConfig({
  displayName: "VideoControls__Block",
  componentId: "sc-1lk7qcs-3"
})(["display:flex;"]);
//# sourceMappingURL=VideoControls.js.map