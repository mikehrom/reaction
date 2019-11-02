"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SeriesContainer = exports.SeriesContent = exports.SeriesLayout = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

var _palette = require("@artsy/palette");

var _DisplayTargeting = require("../Display/DisplayTargeting");

var _Nav = require("../Nav/Nav");

var _ArticleCards = require("../RelatedArticles/ArticleCards/ArticleCards");

var _FixedBackground = require("../Series/FixedBackground");

var _SeriesAbout = require("../Series/SeriesAbout");

var _SeriesTitle = require("../Series/SeriesTitle");

var _Typings = require("../Typings");

var _Sponsored = require("../utils/Sponsored");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _DisplayAd = require("../Display/DisplayAd");

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SeriesLayout =
/*#__PURE__*/
function (_Component) {
  _inherits(SeriesLayout, _Component);

  function SeriesLayout() {
    _classCallCheck(this, SeriesLayout);

    return _possibleConstructorReturn(this, _getPrototypeOf(SeriesLayout).apply(this, arguments));
  }

  _createClass(SeriesLayout, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          article = _this$props.article,
          backgroundColor = _this$props.backgroundColor,
          relatedArticles = _this$props.relatedArticles,
          isMobile = _this$props.isMobile;
      var hero_section = article.hero_section,
          sponsor = article.sponsor;
      var isSponsored = (0, _Sponsored.isEditorialSponsored)(sponsor);
      var backgroundUrl = hero_section && hero_section.url ? hero_section.url : "";
      var adDimension = isMobile ? _Typings.AdDimension.Mobile_SponsoredSeriesLandingPageAndVideoPage_Bottom : _Typings.AdDimension.Desktop_SponsoredSeriesLandingPageAndVideoPage_LeaderboardBottom;
      return _react.default.createElement(SeriesContainer, {
        color: this.props.color,
        backgroundColor: backgroundColor
      }, _react.default.createElement(_Nav.Nav, {
        transparent: true,
        sponsor: sponsor,
        canFix: false
      }), _react.default.createElement(_FixedBackground.FixedBackground, {
        backgroundColor: backgroundColor,
        backgroundUrl: backgroundUrl
      }), _react.default.createElement(SeriesContent, {
        sponsor: sponsor
      }, _react.default.createElement(_SeriesTitle.SeriesTitle, {
        article: article,
        color: this.props.color
      }), relatedArticles && _react.default.createElement(_ArticleCards.ArticleCards, {
        relatedArticles: relatedArticles,
        series: article,
        color: this.props.color
      }), _react.default.createElement(_palette.Box, {
        maxWidth: 1200,
        mx: "auto",
        pt: [40, 40, 60]
      }, _react.default.createElement(_SeriesAbout.SeriesAbout, {
        article: article,
        color: this.props.color
      }))), _react.default.createElement(_DisplayAd.DisplayAd, {
        adUnit: isMobile ? _Typings.AdUnit.Mobile_SponsoredSeriesLandingPageAndVideoPage_Bottom : _Typings.AdUnit.Desktop_SponsoredSeriesLandingPageAndVideoPage_LeaderboardBottom,
        adDimension: adDimension,
        targetingData: (0, _DisplayTargeting.targetingData)(article, isSponsored ? "sponsorlanding" : "standardseries"),
        isSeries: true
      }));
    }
  }]);

  return SeriesLayout;
}(_react.Component);

exports.SeriesLayout = SeriesLayout;

_defineProperty(SeriesLayout, "defaultProps", void 0);

SeriesLayout.defaultProps = {
  backgroundColor: (0, _palette.color)("black100"),
  color: "white"
};

var SeriesContent = _styledComponents.default.div.withConfig({
  displayName: "SeriesLayout__SeriesContent",
  componentId: "fjc12m-0"
})(["max-width:1200px;min-height:100vh;margin:0 auto;", "{margin-bottom:", ";}"], _SeriesTitle.SeriesTitleContainer, function (props) {
  return props.sponsor ? "60px" : "90px";
});

exports.SeriesContent = SeriesContent;

var SeriesContainer = _styledComponents.default.div.withConfig({
  displayName: "SeriesLayout__SeriesContainer",
  componentId: "fjc12m-1"
})(["color:", ";", "{padding:90px 20px 150px;}"], function (props) {
  return props.color;
}, SeriesContent);

exports.SeriesContainer = SeriesContainer;
//# sourceMappingURL=SeriesLayout.js.map