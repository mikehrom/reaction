"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoContainer = exports.VideoPlayer = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.reduce");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.function.bind");

var _memoize2 = _interopRequireDefault(require("lodash/memoize"));

var _react = _interopRequireWildcard(require("react"));

var _reactTracking = _interopRequireDefault(require("react-tracking"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _FullscreenHelpers = require("./FullscreenHelpers");

var _VideoControls = require("./VideoControls");

var _dec, _dec2, _class, _class2, _temp;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  position: relative;\n  background-color: black;\n  video {\n    object-fit: contain;\n    width: 100%;\n    height: 100%;\n  }\n  ", " {\n    opacity: ", ";\n  }\n"]);

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

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

var VideoPlayer = (_dec = (0, _reactTracking.default)(), _dec2 = (0, _reactTracking.default)(function (props) {
  return {
    action: "Click",
    label: "Fullscreen video"
  };
}), _dec(_class = (_class2 = (_temp =
/*#__PURE__*/
function (_Component) {
  _inherits(VideoPlayer, _Component);

  function VideoPlayer(props) {
    var _this;

    _classCallCheck(this, VideoPlayer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VideoPlayer).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "video", void 0);

    _defineProperty(_assertThisInitialized(_this), "videoPlayer", void 0);

    _defineProperty(_assertThisInitialized(_this), "timer", void 0);

    _defineProperty(_assertThisInitialized(_this), "state", {
      isMuted: false,
      isPlaying: _this.props.forcePlay,
      currentTime: 0,
      duration: 0,
      idleTime: 0,
      showControls: true
    });

    _defineProperty(_assertThisInitialized(_this), "resetTimer", function () {
      _this.setState({
        showControls: true,
        idleTime: 0
      });
    });

    _defineProperty(_assertThisInitialized(_this), "incrementTimer", function () {
      var newIdleTime = _this.state.idleTime + 1;

      _this.setState({
        idleTime: newIdleTime,
        showControls: newIdleTime > 3 ? false : true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setDuration", function (e) {
      _this.setState({
        duration: e.target.duration
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateTime", function (e) {
      _this.trackProgress();

      _this.setState({
        currentTime: e.target.currentTime
      });
    });

    _defineProperty(_assertThisInitialized(_this), "togglePlay", function () {
      if (_this.state.isPlaying) {
        _this.video.pause();
      } else {
        _this.video.play();
      }

      if (_this.props.notifyPlayToggle) {
        _this.props.notifyPlayToggle(!_this.state.isPlaying);
      }

      _this.setState({
        isPlaying: !_this.state.isPlaying
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleMute", function () {
      _this.setState({
        isMuted: !_this.state.isMuted
      });
    });

    _defineProperty(_assertThisInitialized(_this), "forcePlay", function () {
      _this.video.play();

      _this.setState({
        isPlaying: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "seekTo", function (value) {
      _this.video.currentTime = value;

      _this.setState({
        currentTime: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "pause", function () {
      _this.video.pause();

      _this.setState({
        isPlaying: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "play", function () {
      _this.video.play();

      _this.setState({
        isPlaying: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "trackProgress", function () {
      var secondsComplete = Math.floor(_this.video.currentTime);
      var percentComplete = Math.floor(_this.video.currentTime / _this.video.duration * 100);
      var percentCompleteInterval = Math.floor(percentComplete / 25) * 25; // Track 25% duration intervals

      if (percentCompleteInterval > 0) {
        _this.trackDuration(percentCompleteInterval);
      } // Track 3 & 10 seconds


      if (secondsComplete === 3 || secondsComplete === 10) {
        _this.trackSeconds(secondsComplete);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "trackDuration", (0, _memoize2.default)(function (percentComplete) {
      _this.props.tracking.trackEvent({
        action: "Video duration",
        label: "Video duration",
        percent_complete: percentComplete
      });
    }));

    _defineProperty(_assertThisInitialized(_this), "trackSeconds", (0, _memoize2.default)(function (secondsComplete) {
      _this.props.tracking.trackEvent({
        action: "Video seconds",
        label: "Video seconds",
        seconds_complete: secondsComplete
      });
    }));

    _this.toggleFullscreen = _this.toggleFullscreen.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(VideoPlayer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.video) {
        if ((0, _FullscreenHelpers.fullscreenEnabled)()) {
          (0, _FullscreenHelpers.addFSEventListener)(this.video);
        }

        this.video.addEventListener("timeupdate", this.updateTime);
        this.video.addEventListener("loadedmetadata", this.setDuration);
        document.addEventListener("mousemove", this.resetTimer);
        document.addEventListener("keypress", this.resetTimer);
        document.addEventListener("touchstart", this.resetTimer);
        this.timer = setInterval(this.incrementTimer, 1000);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if ((0, _FullscreenHelpers.fullscreenEnabled)()) {
        (0, _FullscreenHelpers.removeFSEventListener)(this.video);
      }

      this.video.removeEventListener("timeupdate", this.updateTime);
      document.removeEventListener("mousemove", this.resetTimer);
      document.removeEventListener("keypress", this.resetTimer);
      document.removeEventListener("touchstart", this.resetTimer);
      clearInterval(this.timer);
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.forcePlay) {
        this.forcePlay();
      }
    }
  }, {
    key: "toggleFullscreen",
    value: function toggleFullscreen() {
      if ((0, _FullscreenHelpers.fullscreenEnabled)()) {
        if ((0, _FullscreenHelpers.isFullscreen)()) {
          (0, _FullscreenHelpers.exitFullscreen)();
        } else {
          (0, _FullscreenHelpers.requestFullscreen)(this.videoPlayer);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          url = _this$props.url,
          title = _this$props.title;
      return _react.default.createElement(VideoContainer, {
        ref: function ref(container) {
          return _this2.videoPlayer = container;
        },
        showControls: this.state.showControls
      }, _react.default.createElement("video", {
        playsInline: true,
        src: url,
        ref: function ref(video) {
          return _this2.video = video;
        },
        muted: this.state.isMuted
      }), _react.default.createElement(VideoControlsParent, null, _react.default.createElement(_VideoControls.VideoControls, {
        title: title,
        duration: this.state.duration,
        currentTime: this.state.currentTime,
        toggleFullscreen: this.toggleFullscreen,
        toggleMute: this.toggleMute,
        togglePlay: this.togglePlay,
        pause: this.pause,
        play: this.play,
        seekTo: this.seekTo,
        isMuted: this.state.isMuted,
        isPlaying: this.state.isPlaying
      })));
    }
  }]);

  return VideoPlayer;
}(_react.Component), _temp), (_applyDecoratedDescriptor(_class2.prototype, "toggleFullscreen", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "toggleFullscreen"), _class2.prototype)), _class2)) || _class);
exports.VideoPlayer = VideoPlayer;

var VideoControlsParent = _styledComponents.default.div.withConfig({
  displayName: "VideoPlayer__VideoControlsParent",
  componentId: "sc-1j2on8x-0"
})(["position:absolute;bottom:0;left:0;right:0;margin:0 auto;max-width:1200px;width:100%;"]);

var Div = _styledComponents.default.div;
var VideoContainer = Div(_templateObject(), _VideoControls.VideoControlsContainer, function (props) {
  return props.showControls ? "1" : "0";
});
exports.VideoContainer = VideoContainer;
//# sourceMappingURL=VideoPlayer.js.map