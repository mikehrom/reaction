"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.totalSVGsForSection = totalSVGsForSection;
exports.ArtistWrapper = exports.ReadMoreButton = exports.InvertedSans = exports.InvertedSerif = exports.VanguardArtistWrapper = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.function.bind");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

var _random2 = _interopRequireDefault(require("lodash/random"));

var _palette = require("@artsy/palette");

var _Share = require("../../../../Byline/Share");

var _Emerging = require("../Blobs/Emerging");

var _GettingTheirDue = require("../Blobs/GettingTheirDue");

var _NewlyEstablished = require("../Blobs/NewlyEstablished");

var _ArticleWithFullScreen = _interopRequireDefault(require("../../../../Layouts/ArticleWithFullScreen"));

var _ArtworkCaption = require("../../../../Sections/ArtworkCaption");

var _Caption = require("../../../../Sections/Caption");

var _FullScreenProvider = require("../../../../Sections/FullscreenViewer/FullScreenProvider");

var _SectionContainer = require("../../../../Sections/SectionContainer");

var _Sections = require("../../../../Sections/Sections");

var _StyledText = require("../../../../Sections/StyledText");

var _react = _interopRequireDefault(require("react"));

var _sharify = require("sharify");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _underscore = require("underscore.string");

var _Responsive = require("../../../../../../Utils/Responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

// "Emerging" has 20 SVG possibilities while Newly Established
// and "Getting Their Due" have 15
function totalSVGsForSection(section) {
  return section === "emerging" ? 20 : 15;
}

var VanguardArtistWrapper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VanguardArtistWrapper, _React$Component);

  function VanguardArtistWrapper() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, VanguardArtistWrapper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(VanguardArtistWrapper)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isExpanded: _this.props.isExpanded || false
    });

    _defineProperty(_assertThisInitialized(_this), "artistWrapper", null);

    return _this;
  }

  _createClass(VanguardArtistWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var title = this.props.article.title;
      var slug = (0, _underscore.slugify)(title);

      if (window.location.pathname.includes(slug)) {
        this.onExpand();
      }
    }
  }, {
    key: "onExpand",
    value: function onExpand() {
      var isExpanded = this.state.isExpanded;

      if (isExpanded) {
        window.scrollTo({
          behavior: "smooth",
          top: this.artistWrapper.getBoundingClientRect().top + window.scrollY
        });
      }

      this.setState({
        isExpanded: !isExpanded
      });
    }
  }, {
    key: "getRandomSVG",
    value: function getRandomSVG(section) {
      return (0, _random2.default)(totalSVGsForSection(section));
    }
  }, {
    key: "getSVGBackground",
    value: function getSVGBackground(index, section, isTest) {
      var i = isTest ? 1 : index;

      switch (section) {
        case "emerging":
          return (0, _Emerging.Emerging)(i);

        case "newly-established":
          return (0, _NewlyEstablished.NewlyEstablished)(i);

        case "getting-their-due":
          return (0, _GettingTheirDue.GettingTheirDue)(i);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          article = _this$props.article,
          section = _this$props.section,
          isMobile = _this$props.isMobile,
          onSlideshowStateChange = _this$props.onSlideshowStateChange,
          isTest = _this$props.isTest;
      var hero_section = article.hero_section,
          title = article.title;
      var isExpanded = this.state.isExpanded;
      var background = this.getSVGBackground(this.getRandomSVG(section), section, isTest);
      var backgroundColor = isExpanded ? (0, _palette.color)("black100") : (0, _palette.color)("white100");
      var slugifiedTitle = (0, _underscore.slugify)(article.title);
      var shareTitle = article.social_title || article.thumbnail_title;
      return _react.default.createElement(_FullScreenProvider.FullScreenProvider, {
        onSlideshowStateChange: onSlideshowStateChange
      }, _react.default.createElement(ArtistWrapper, {
        background: backgroundColor,
        pt: 50,
        isExpanded: isExpanded,
        id: slugifiedTitle,
        ref: function ref(artistWrapper) {
          return _this2.artistWrapper = artistWrapper;
        }
      }, _react.default.createElement(BackgroundContainer, {
        backgroundColor: backgroundColor
      }, background), _react.default.createElement(_ArticleWithFullScreen.default, {
        article: article
      }, _react.default.createElement(ArtistContainer, {
        pb: 4,
        maxWidth: ["100vw", 1000],
        px: ["10vw", "10vw", "10vw", "10vw", 4],
        mx: "auto",
        isMobile: isMobile,
        isExpanded: isExpanded
      }, _react.default.createElement(_palette.Box, {
        textAlign: "center",
        pb: 30
      }, _react.default.createElement(_Responsive.Media, {
        greaterThanOrEqual: "xl"
      }, _react.default.createElement(ArtistTitle, {
        size: "12",
        element: "h3"
      }, title)), _react.default.createElement(_Responsive.Media, {
        lessThan: "xl"
      }, _react.default.createElement(InvertedSerif, {
        size: ["8", "10", "12", "12"],
        element: "h3",
        isMobile: isMobile,
        isExpanded: isExpanded,
        lineHeight: "1.1em",
        mb: 5
      }, title)), _react.default.createElement(_palette.Box, {
        position: "relative"
      }, hero_section && _react.default.createElement(InvertedSans, {
        size: ["3", "3", "4", "4", "4"],
        weight: "medium",
        isMobile: isMobile,
        isExpanded: isExpanded,
        lineHeight: "1.1em"
      }, hero_section.deck), _react.default.createElement(_palette.Flex, {
        justifyContent: ["center", "flex-start"]
      }, _react.default.createElement(_palette.Box, {
        position: ["relative", "absolute"],
        top: 0
      }, _react.default.createElement(_Share.Share, {
        url: "".concat(_sharify.data.APP_URL, "/artsy-vanguard-2019/").concat(slugifiedTitle),
        title: "Artsy Vanguard 2019: ".concat(shareTitle),
        color: (0, _palette.color)("white100")
      }))))), _react.default.createElement(_Sections.Sections, {
        hideAds: true,
        article: article,
        customWidth: 920,
        isTruncatedAt: !isExpanded && 2
      }), _react.default.createElement(ReadMoreButton, {
        size: "5",
        weight: "medium",
        textAlign: "center",
        onClick: this.onExpand.bind(this),
        isMobile: isMobile,
        isExpanded: isExpanded
      }, _react.default.createElement(ReadMoreText, null, isExpanded ? "Close" : "Read More"))))));
    }
  }]);

  return VanguardArtistWrapper;
}(_react.default.Component);

exports.VanguardArtistWrapper = VanguardArtistWrapper;
var InvertedSerif = (0, _styledComponents.default)(_palette.Serif).withConfig({
  displayName: "ArtistWrapper__InvertedSerif",
  componentId: "sc-1bsuwlh-0"
})(["mix-blend-mode:", ";color:", ";will-change:color;"], function (p) {
  return p.isMobile ? "normal" : "difference";
}, (0, _palette.color)("white100"));
exports.InvertedSerif = InvertedSerif;
var InvertedSans = (0, _styledComponents.default)(_palette.Sans).withConfig({
  displayName: "ArtistWrapper__InvertedSans",
  componentId: "sc-1bsuwlh-1"
})(["mix-blend-mode:", ";color:", ";will-change:color;"], function (p) {
  return p.isMobile ? "normal" : "difference";
}, (0, _palette.color)("white100"));
exports.InvertedSans = InvertedSans;
var ArtistTitle = (0, _styledComponents.default)(InvertedSerif).withConfig({
  displayName: "ArtistWrapper__ArtistTitle",
  componentId: "sc-1bsuwlh-2"
})(["font-size:95px;line-height:1em;"]);
var ReadMoreText = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "ArtistWrapper__ReadMoreText",
  componentId: "sc-1bsuwlh-3"
})(["display:inline-flex;border-bottom:solid;line-height:normal;"]);
var ReadMoreButton = (0, _styledComponents.default)(InvertedSans).withConfig({
  displayName: "ArtistWrapper__ReadMoreButton",
  componentId: "sc-1bsuwlh-4"
})(["text-transform:uppercase;cursor:pointer;color:", ";"], function (p) {
  return p.isMobile && p.isExpanded ? (0, _palette.color)("white100") : p.isMobile && !p.isExpanded ? (0, _palette.color)("black100") : (0, _palette.color)("white100");
});
exports.ReadMoreButton = ReadMoreButton;
var ArtistContainer = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "ArtistWrapper__ArtistContainer",
  componentId: "sc-1bsuwlh-5"
})(["position:relative;p:first-child::first-letter,.paragraph:first-child::first-letter{font-family:inherit;font-size:inherit;float:none;line-height:inherit;margin-right:0;margin-top:0;text-transform:none;}", "{margin-top:0;}", "{padding:", ";}", ",", "{mix-blend-mode:", ";will-change:color;color:", ";}", "{p{mix-blend-mode:", ";will-change:color;color:", ";}a{mix-blend-mode:", ";will-change:color;color:", ";background-image:linear-gradient( to bottom,transparent 0,#fff 1px,transparent 0 );background-size:1.25px 4px;background-repeat:repeat-x;background-position:bottom;}}", "{mix-blend-mode:", ";color:", ";will-change:color;max-width:100vw;overflow:hidden;a{mix-blend-mode:", ";will-change:color;color:", ";}}", "{a{mix-blend-mode:", ";will-change:color;color:", ";background-image:linear-gradient( to bottom,transparent 0,#fff 1px,transparent 0 );background-size:1.25px 4px;background-repeat:repeat-x;background-position:bottom;}}"], _Sections.StyledSections, _SectionContainer.SectionContainer, function (p) {
  return p.isMobile && 0;
}, _Share.ShareContainer, _StyledText.StyledText, function (p) {
  return p.isMobile ? "normal" : "difference";
}, function (p) {
  return p.isMobile && p.isExpanded ? (0, _palette.color)("white100") : p.isMobile && !p.isExpanded ? (0, _palette.color)("black100") : (0, _palette.color)("white100");
}, _Caption.CaptionContainer, function (p) {
  return p.isMobile ? "normal" : "difference";
}, function (p) {
  return p.isMobile && !p.isExpanded ? (0, _palette.color)("black100") : (0, _palette.color)("white100");
}, function (p) {
  return p.isMobile ? "normal" : "difference";
}, function (p) {
  return p.isMobile && !p.isExpanded ? (0, _palette.color)("black100") : (0, _palette.color)("white100");
}, _ArtworkCaption.StyledArtworkCaption, function (p) {
  return p.isMobile ? "normal" : "difference";
}, function (p) {
  return p.isMobile ? (0, _palette.color)("black100") : (0, _palette.color)("white100");
}, function (p) {
  return p.isMobile ? "normal" : "difference";
}, function (p) {
  return p.isMobile && !p.isExpanded ? (0, _palette.color)("black100") : (0, _palette.color)("white100");
}, _StyledText.StyledText, function (p) {
  return p.isMobile ? "normal" : "difference";
}, function (p) {
  return p.isMobile && p.isExpanded ? (0, _palette.color)("white100") : p.isMobile && !p.isExpanded ? (0, _palette.color)("black100") : (0, _palette.color)("white100");
});
var BackgroundContainer = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "ArtistWrapper__BackgroundContainer",
  componentId: "sc-1bsuwlh-6"
})(["height:100%;position:absolute;top:0;left:0;right:0;background:", ";"], function (_ref) {
  var backgroundColor = _ref.backgroundColor;
  return backgroundColor;
});
var ArtistWrapper = (0, _styledComponents.default)(_palette.Flex).withConfig({
  displayName: "ArtistWrapper",
  componentId: "sc-1bsuwlh-7"
})(["flex-direction:column;position:relative;padding-bottom:100px;min-height:100vh;z-index:0;", ""], function (_ref2) {
  var isExpanded = _ref2.isExpanded;
  return isExpanded && "\n    border-bottom: 100px solid ".concat((0, _palette.color)("white100"), ";\n  ");
});
exports.ArtistWrapper = ArtistWrapper;
//# sourceMappingURL=ArtistWrapper.js.map