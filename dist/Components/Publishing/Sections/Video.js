"use strict";

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidVideoUrl = isValidVideoUrl;
exports.getPlayerUrl = getPlayerUrl;
exports.Video = exports.CoverImage = exports.IFrame = exports.VIDEO_RATIO = void 0;

require("core-js/modules/es6.array.index-of");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.regexp.split");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.function.bind");

var _react = _interopRequireDefault(require("react"));

var _reactSizeme = _interopRequireDefault(require("react-sizeme"));

var _reactTracking = _interopRequireDefault(require("react-tracking"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _url = _interopRequireDefault(require("url"));

var _Events = _interopRequireDefault(require("../../../Utils/Events"));

var _resizer = require("../../../Utils/resizer");

var _Helpers = require("../../Helpers");

var _Constants = require("../Constants");

var _Caption = require("./Caption");

var _VideoControls = require("./VideoControls");

var _dec, _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n          height: 300px;\n          padding-bottom: 20px;\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n          height: 450px;\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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

var BLACKLIST = ["gif", "jpg", "jpeg", "png"];
var QUERYSTRING = "?title=0&portrait=0&badge=0&byline=0&showinfo=0&rel=0&controls=2&modestbranding=1&iv_load_policy=3&color=E5E5E5";
var VIDEO_RATIO = 0.5625;
exports.VIDEO_RATIO = VIDEO_RATIO;
var VideoComponent = (_dec = (0, _reactTracking.default)(function (props) {
  return props.trackingData ? props.trackingData : {};
}, {
  dispatch: function dispatch(data) {
    return _Events.default.postEvent(data);
  }
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VideoComponent, _React$Component);

  function VideoComponent(props) {
    var _this;

    _classCallCheck(this, VideoComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VideoComponent).call(this, props));
    var url = _this.props.section.url;
    var isValid = url && isValidVideoUrl(url);

    if (isValid) {
      var parsedUrl = _url.default.parse(url, true);

      var playerUrl = getPlayerUrl(parsedUrl);
      var id = getId(parsedUrl);
      var playerSrc = playerUrl + id + QUERYSTRING;
      _this.state = {
        src: playerSrc,
        hidden: false
      };
    } else {
      console.error("(@artsy/reaction) Video.tsx: A url is required for video.", _this.props);
      _this.state = {
        hidden: true
      };
    }

    _this.playVideo = _this.playVideo.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(VideoComponent, [{
    key: "trackVideoClick",
    value: function trackVideoClick() {
      this.props.tracking.trackEvent({
        action: "Click",
        label: "Play video"
      });
    }
  }, {
    key: "playVideo",
    value: function playVideo() {
      var playerSrc = this.state.src + "&autoplay=1";
      this.setState({
        src: playerSrc,
        hidden: true
      });
      this.trackVideoClick();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          color = _this$props.color,
          layout = _this$props.layout,
          _this$props$section = _this$props.section,
          caption = _this$props$section.caption,
          cover_image_url = _this$props$section.cover_image_url,
          width = _this$props.size.width;
      var showCaption = layout !== "feature";
      return _react.default.createElement(VideoContainer, {
        layout: layout,
        className: "VideoContainer"
      }, cover_image_url && _react.default.createElement(CoverImage, {
        className: "VideoCover",
        src: (0, _resizer.resize)(cover_image_url, {
          width: 1200
        }),
        height: width && width * VIDEO_RATIO,
        onClick: this.playVideo,
        hidden: this.state.hidden
      }, _react.default.createElement(_VideoControls.VideoControls, null)), _react.default.createElement(IFrame, {
        src: this.state.src,
        frameBorder: "0",
        allowFullScreen: true,
        height: width && width * VIDEO_RATIO
      }), showCaption && _react.default.createElement(_Caption.Caption, {
        caption: caption,
        layout: layout,
        color: color
      }, this.props.children));
    }
  }]);

  return VideoComponent;
}(_react.default.Component), _defineProperty(_class2, "defaultProps", {
  size: {
    width: 500
  },
  tracking: {
    trackEvent: function trackEvent(x) {
      return x;
    }
  }
}), _temp)) || _class); // Utils

function isValidVideoUrl(url) {
  var urlExtension = url && url.split(".").pop();
  var isValid = BLACKLIST.every(function (bad) {
    return urlExtension !== bad;
  });
  return isValid;
}

function getPlayerUrl(url) {
  var hostname = url.hostname;

  if (hostname) {
    if (hostname.indexOf("vimeo.com") > -1) {
      return "https://player.vimeo.com/video/";
    } else if (hostname.indexOf("youtu") > -1) {
      return "https://www.youtube.com/embed/";
    }
  } else {
    return ""; // FIXME: check for errors
  }
}

function getId(url) {
  var hostname = url.hostname,
      pathname = url.pathname;

  if (hostname && pathname) {
    if (url.hostname.indexOf("youtube.com") > 0) {
      return url.query.v;
    } else {
      return url.pathname.split("/").pop();
    }
  } else {
    return ""; // FIXME: error
  }
} // Styles


var IFrame = _styledComponents.default.iframe.withConfig({
  displayName: "Video__IFrame",
  componentId: "c0eb3v-0"
})(["width:100%;height:", ";"], function (props) {
  return props.height ? "".concat(props.height, "px") : "100%";
});

exports.IFrame = IFrame;

var VideoContainer = _styledComponents.default.div.withConfig({
  displayName: "Video__VideoContainer",
  componentId: "c0eb3v-1"
})(["width:100%;position:relative;", ";"], function (p) {
  if (p.layout === "feature") {
    return "\n        text-align: center;\n        padding-bottom: 53px;\n        max-width: 1200px;\n        margin: 0 auto;\n        ".concat(_Helpers.pMedia.md(_templateObject()), "\n\n        ").concat(_Helpers.pMedia.xs(_templateObject2()), "\n      ");
  }
});

var CoverImage = _styledComponents.default.div.withConfig({
  displayName: "Video__CoverImage",
  componentId: "c0eb3v-2"
})(["display:", ";justify-content:center;align-items:center;width:100%;height:", ";position:absolute;background:url(", ") no-repeat center center;background-size:cover;cursor:pointer;"], function (props) {
  return props.hidden || !props.src ? "none" : "flex";
}, function (props) {
  return props.height ? "".concat(props.height, "px") : "100%";
}, function (props) {
  return props.src || "";
});

exports.CoverImage = CoverImage;
var sizeMeOptions = {
  refreshRate: _Constants.SIZE_ME_REFRESH_RATE,
  noPlaceholder: true
};
var Video = (0, _reactSizeme.default)(sizeMeOptions)(VideoComponent);
exports.Video = Video;
//# sourceMappingURL=Video.js.map