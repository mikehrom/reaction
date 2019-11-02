"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoLayout = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.function.bind");

var _palette = require("@artsy/palette");

var _Constants = require("../Constants");

var _DisplayAd = require("../Display/DisplayAd");

var _DisplayTargeting = require("../Display/DisplayTargeting");

var _Nav = require("../Nav/Nav");

var _Block = require("../RelatedArticles/ArticleCards/Block");

var _Typings = require("../Typings");

var _Sponsored = require("../utils/Sponsored");

var _VideoPlayer = require("../Video/Player/VideoPlayer");

var _VideoAbout = require("../Video/VideoAbout");

var _VideoCover = require("../Video/VideoCover");

var _react = _interopRequireWildcard(require("react"));

var _reactTracking = _interopRequireDefault(require("react-tracking"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Events = _interopRequireDefault(require("../../../Utils/Events"));

var _dec, _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VideoLayout = (_dec = (0, _reactTracking.default)(function (props) {
  return {
    page: "Article",
    entity_type: "article",
    entity_id: props.article.id
  };
}, {
  dispatch: function dispatch(data) {
    return _Events.default.postEvent(data);
  }
}), _dec(_class = (_temp =
/*#__PURE__*/
function (_Component) {
  _inherits(VideoLayout, _Component);

  function VideoLayout() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, VideoLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(VideoLayout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isPlaying: false,
      hideCover: false
    });

    _defineProperty(_assertThisInitialized(_this), "playVideo", function () {
      _this.setState({
        isPlaying: true,
        hideCover: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onPlayToggle", function (isPlaying) {
      if (!isPlaying) {
        _this.setState({
          isPlaying: isPlaying
        });

        setTimeout(_this.setHideCover.bind(_assertThisInitialized(_this)), 30000);
      } else {
        _this.setState({
          isPlaying: isPlaying,
          hideCover: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setHideCover", function () {
      if (!_this.state.isPlaying) {
        _this.setState({
          hideCover: false
        });
      }
    });

    return _this;
  }

  _createClass(VideoLayout, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          article = _this$props.article,
          isMobile = _this$props.isMobile,
          relatedArticles = _this$props.relatedArticles;
      var media = article.media,
          seriesArticle = article.seriesArticle;
      var sponsor = seriesArticle ? seriesArticle.sponsor : article.sponsor;
      var isSponsored = (0, _Sponsored.isEditorialSponsored)(sponsor);
      var seriesLink = seriesArticle && (0, _Constants.getEditorialHref)("series", seriesArticle.slug);
      var adDimension = isMobile ? _Typings.AdDimension.Mobile_SponsoredSeriesLandingPageAndVideoPage_Bottom : _Typings.AdDimension.Desktop_SponsoredSeriesLandingPageAndVideoPage_LeaderboardBottom;
      return _react.default.createElement(VideoLayoutContainer, null, _react.default.createElement(_Nav.Nav, {
        transparent: true,
        sponsor: sponsor,
        canFix: false
      }), _react.default.createElement(VideoPlayerContainer, null, media.url && _react.default.createElement(_VideoPlayer.VideoPlayer, {
        url: media.url,
        title: media.title,
        forcePlay: this.state.isPlaying,
        notifyPlayToggle: this.onPlayToggle
      }), _react.default.createElement(_VideoCover.VideoCover, {
        article: article,
        media: media,
        seriesTitle: seriesArticle && seriesArticle.title,
        seriesLink: seriesLink,
        playVideo: this.playVideo,
        hideCover: this.state.hideCover
      })), _react.default.createElement(_palette.Box, {
        px: 20,
        maxWidth: 1200,
        mx: "auto"
      }, _react.default.createElement(_palette.Box, {
        pt: [40, 40, 60]
      }, _react.default.createElement(_VideoAbout.VideoAbout, {
        article: article,
        color: "white"
      })), (relatedArticles || seriesArticle) && _react.default.createElement(_palette.Box, {
        pt: [60, 60, 100]
      }, _react.default.createElement(_Block.ArticleCardsBlock, _extends({}, this.props, {
        color: "white"
      })))), _react.default.createElement(_DisplayAd.DisplayAd, {
        adUnit: isMobile ? _Typings.AdUnit.Mobile_SponsoredSeriesLandingPageAndVideoPage_Bottom : _Typings.AdUnit.Desktop_SponsoredSeriesLandingPageAndVideoPage_LeaderboardBottom,
        adDimension: adDimension,
        targetingData: (0, _DisplayTargeting.targetingData)(article, isSponsored ? "sponsorfeature" : "video"),
        isSeries: true
      }));
    }
  }]);

  return VideoLayout;
}(_react.Component), _temp)) || _class);
exports.VideoLayout = VideoLayout;

var VideoLayoutContainer = _styledComponents.default.div.withConfig({
  displayName: "VideoLayout__VideoLayoutContainer",
  componentId: "sc-1b6hdnr-0"
})(["background:black;color:white;margin:auto;", "{position:absolute;top:0;}"], _Nav.NavContainer);

var VideoPlayerContainer = _styledComponents.default.div.withConfig({
  displayName: "VideoLayout__VideoPlayerContainer",
  componentId: "sc-1b6hdnr-1"
})(["position:relative;width:100vw;height:100vh;", "{position:absolute;top:0;}"], _VideoPlayer.VideoContainer);
//# sourceMappingURL=VideoLayout.js.map