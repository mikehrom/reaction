"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoCoverContainer = exports.VideoCoverAsset = exports.VideoCover = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.function.name");

var _palette = require("@artsy/palette");

var _react = _interopRequireWildcard(require("react"));

var _reactTracking = _interopRequireDefault(require("react-tracking"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _IconVideoPlay = require("../Icon/IconVideoPlay");

var _VideoInfoBlock = require("./VideoInfoBlock");

var _dec, _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var VideoCover = (_dec = (0, _reactTracking.default)(), _dec(_class = (_temp =
/*#__PURE__*/
function (_Component) {
  _inherits(VideoCover, _Component);

  function VideoCover() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, VideoCover);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(VideoCover)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onPlayClick", function () {
      var _this$props = _this.props,
          tracking = _this$props.tracking,
          playVideo = _this$props.playVideo;
      tracking.trackEvent({
        action: "Click",
        label: "Play video"
      });
      playVideo();
    });

    return _this;
  }

  _createClass(VideoCover, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          article = _this$props2.article,
          editDescription = _this$props2.editDescription,
          editTitle = _this$props2.editTitle,
          hideCover = _this$props2.hideCover,
          media = _this$props2.media,
          seriesLink = _this$props2.seriesLink,
          seriesTitle = _this$props2.seriesTitle;
      return _react.default.createElement(VideoCoverContainer, {
        hideCover: hideCover
      }, _react.default.createElement(VideoCoverAsset, {
        src: media.cover_image_url
      }), _react.default.createElement(VideoCoverOverlay, null), _react.default.createElement(VideoCoverInfo, {
        width: "100%",
        alignItems: "flex-end",
        pb: [40, 60],
        px: 20
      }, _react.default.createElement(_palette.Box, {
        maxWidth: 1200,
        mx: "auto",
        pb: "12px"
      }, _react.default.createElement(_palette.Flex, null, _react.default.createElement(_palette.Box, {
        width: "60px",
        pr: 20,
        onClick: this.onPlayClick
      }, _react.default.createElement(_IconVideoPlay.IconVideoPlay, {
        color: "white"
      })), _react.default.createElement(_palette.Box, null, _react.default.createElement(_VideoInfoBlock.VideoInfoBlock, {
        media: media,
        subTitle: seriesTitle || article.vertical && article.vertical.name,
        subTitleLink: seriesLink,
        title: article.title,
        editTitle: editTitle
      }))), _react.default.createElement(_palette.Box, {
        maxWidth: ["100%", "60%"]
      }, _react.default.createElement(_palette.Serif, {
        size: ["4", "5", "5", "5"],
        pt: 30
      }, editDescription || article.description)))));
    }
  }]);

  return VideoCover;
}(_react.Component), _temp)) || _class);
exports.VideoCover = VideoCover;

var VideoCoverAsset = _styledComponents.default.div.withConfig({
  displayName: "VideoCover__VideoCoverAsset",
  componentId: "sc-1vrhqgi-0"
})(["background:url(", ") no-repeat center center;background-size:cover;background-color:black;position:absolute;width:100%;height:100%;"], function (props) {
  return props.src || "";
});

exports.VideoCoverAsset = VideoCoverAsset;

var VideoCoverOverlay = _styledComponents.default.div.withConfig({
  displayName: "VideoCover__VideoCoverOverlay",
  componentId: "sc-1vrhqgi-1"
})(["background:linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.6));position:absolute;width:100%;height:100%;"]);

var VideoCoverInfo = (0, _styledComponents.default)(_palette.Flex).withConfig({
  displayName: "VideoCover__VideoCoverInfo",
  componentId: "sc-1vrhqgi-2"
})(["box-sizing:border-box;z-index:1;position:absolute;width:100%;height:100%;", "{height:60px;width:44px;cursor:pointer;}"], _IconVideoPlay.IconVideoPlay);

var VideoCoverContainer = _styledComponents.default.div.withConfig({
  displayName: "VideoCover__VideoCoverContainer",
  componentId: "sc-1vrhqgi-3"
})(["position:absolute;top:0;left:0;width:100vw;height:100vh;color:white;opacity:", ";visibility:", ";transition:opacity 0.25s ease,visibility 0.25s ease;"], function (props) {
  return props.hideCover ? "0" : "1";
}, function (props) {
  return props.hideCover ? "hidden" : "visible";
});

exports.VideoCoverContainer = VideoCoverContainer;
//# sourceMappingURL=VideoCover.js.map