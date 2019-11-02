"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtistHeaderSection = exports.Eoy2018Artists = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es6.array.map");

var _map2 = _interopRequireDefault(require("lodash/map"));

var _find3 = _interopRequireDefault(require("lodash/find"));

var _compact2 = _interopRequireDefault(require("lodash/compact"));

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Fonts = require("../../../../../Assets/Fonts");

var _Byline = require("../../../Byline/Byline");

var _Nav = require("../../../Nav/Nav");

var _ArticleCard = require("../../../RelatedArticles/ArticleCards/ArticleCard");

var _ArticleCards = require("../../../RelatedArticles/ArticleCards/ArticleCards");

var _ImageSetPreview = require("../../../Sections/ImageSetPreview");

var _ImageSetLabel = require("../../../Sections/ImageSetPreview/ImageSetLabel");

var _StyledText = require("../../../Sections/StyledText");

var _Text = require("../../../Sections/Text");

var _resizer = require("../../../../../Utils/resizer");

var _ArticleHeader = require("./ArticleHeader");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n      border-right: none;\n      border-bottom: ", "px solid ", ";\n    "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n      flex-direction: row-reverse;\n\n      ", " {\n        max-width: 50%;\n      }\n    "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n      flex-direction: column-reverse;\n    "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    border-bottom: none;\n    border-right: ", "px solid ", ";\n  "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    min-width: 50%;\n  "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n      padding: 0 20px 20px;\n    "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    min-height: 70vw;\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    height: 65vh;\n    border-right: none;\n    border-bottom: ", "px solid ", ";\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      ", ";\n      width: 50%;\n      float: none;\n      &:last-child {\n        border-left: ", "px solid ", ";\n        border-top: none;\n      }\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      width: 40%;\n      float: left;\n      &:last-child {\n        border-left: none;\n        border-top: ", "px solid ", ";\n      }\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      ", ";\n      border-bottom: ", "px solid ", ";\n      border-left: none;\n      width: 100%;\n      height: 50%;\n      float: none;\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      width: 60%;\n      float: right;\n      height: 100%;\n      border-bottom: none;\n      border-left: ", "px solid ", ";\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    height: fit-content;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      ", ";\n      line-height: 1.3em;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    left: 10px;\n    right: 10px;\n  "]);

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

var Eoy2018Artists =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Eoy2018Artists, _React$Component);

  function Eoy2018Artists() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Eoy2018Artists);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Eoy2018Artists)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getHeaderSections", function () {
      var sections = _this.props.article.sections;
      var headers = [];
      sections.map(function (section, index) {
        var headerSection;
        var sectionAfter = sections[index + 1];
        var sectionAfterisImage = sectionAfter && sectionAfter.type === "image_collection";

        if (_this.sectionIsHeader(section)) {
          headerSection = {
            index: index,
            section: section
          };

          if (sectionAfterisImage) {
            headerSection.imageSection = sectionAfter;
          }

          headers.push(headerSection);
        }
      });
      return headers;
    });

    _defineProperty(_assertThisInitialized(_this), "sectionIsHeader", function (section) {
      var isText = section.type === "text";
      var isHeader = isText && section.body.includes("<h1>");
      return isHeader;
    });

    _defineProperty(_assertThisInitialized(_this), "sectionArtistHeader", function (section, i) {
      var headerSections = _this.getHeaderSections();

      var _find2 = (0, _find3.default)(headerSections, ["section", section]),
          imageSection = _find2.imageSection;

      var src = imageSection && imageSection.images[0].url;
      var caption = imageSection && imageSection.images[0].caption;
      return _react.default.createElement(ArtistHeaderSection, {
        key: i,
        mb: 40,
        flexDirection: ["column", "column", "row", "row"]
      }, _react.default.createElement(ArtistHeaderTitle, {
        dangerouslySetInnerHTML: {
          __html: section.body
        }
      }), _react.default.createElement(ArtistHeaderImg, {
        src: src && (0, _resizer.resize)(src, {
          width: 700
        }),
        alignItems: "flex-end"
      }, caption && _react.default.createElement(_palette.Sans, {
        size: "1",
        color: "white",
        px: 10,
        py: 5
      }, _react.default.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: caption
        }
      }))));
    });

    _defineProperty(_assertThisInitialized(_this), "sectionText", function (section, i) {
      var _this$props = _this.props,
          _this$props$article = _this$props.article,
          sections = _this$props$article.sections,
          layout = _this$props$article.layout,
          showTooltips = _this$props.showTooltips;
      var isChapterStart = sections[i - 1] && sections[i - 1].type === "image_collection";
      return _react.default.createElement(_palette.Box, {
        maxWidth: ["100%", "75%", "75%"],
        ml: "auto",
        px: [20, 0],
        key: i
      }, _react.default.createElement(TextSection, {
        size: "5",
        pb: [40, 60],
        isChapterStart: isChapterStart
      }, _react.default.createElement(_Text.Text, {
        html: section.body,
        layout: layout,
        showTooltips: showTooltips
      })));
    });

    _defineProperty(_assertThisInitialized(_this), "sectionImageSet", function (section, i) {
      return _react.default.createElement(ImageSetWrapper, {
        key: i,
        mb: 60,
        maxWidth: ["100%", "100%", "100%", "75%"]
      }, _react.default.createElement(_ImageSetPreview.ImageSetPreview, {
        section: section
      }, _react.default.createElement(CaptionWrapper, {
        size: ["3", "4"]
      }, _react.default.createElement(ImageSetCaption, {
        dangerouslySetInnerHTML: {
          __html: section.images[0].caption
        }
      }))));
    });

    _defineProperty(_assertThisInitialized(_this), "getSections", function () {
      var sections = _this.props.article.sections;

      var headerSections = _this.getHeaderSections();

      var headerTextIndexes = (0, _map2.default)(headerSections, "index");
      var headerImages = (0, _map2.default)(headerSections, "image");
      var renderedSections = sections.map(function (section, i) {
        var isHeader = headerTextIndexes.includes(i);
        var isHeaderImage = headerImages.includes(section);

        if (isHeader) {
          return _this.sectionArtistHeader(section, i);
        } else if (isHeaderImage) {
          return null;
        } else {
          if (section.type === "text" && i !== 0) {
            return _this.sectionText(section, i);
          } else if (section.type === "image_set") {
            return _this.sectionImageSet(section, i);
          } else {
            return null;
          }
        }
      });
      return renderedSections;
    });

    return _this;
  }

  _createClass(Eoy2018Artists, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          article = _this$props2.article,
          isMobile = _this$props2.isMobile,
          isTablet = _this$props2.isTablet,
          isTest = _this$props2.isTest;
      var introText = this.sectionText(article.sections[0], 0);
      var headerImages = (0, _map2.default)((0, _compact2.default)((0, _map2.default)(this.getHeaderSections(), "imageSection")), "images");
      return _react.default.createElement(AricleWrapper, null, _react.default.createElement(_Nav.Nav, {
        canFix: true,
        color: (0, _palette.color)("black100"),
        backgroundColor: "white"
      }, _react.default.createElement(NavBorder, null)), _react.default.createElement(_palette.Box, {
        px: [10, 10, 55],
        maxWidth: 1600,
        mx: "auto"
      }, _react.default.createElement(_ArticleHeader.Eoy2018ArticleHeader, {
        images: headerImages,
        isMobile: isMobile,
        isTablet: isTablet,
        isTest: isTest
      }), _react.default.createElement(ArticleContent, {
        py: 40
      }, _react.default.createElement(IntroSection, {
        alignItems: "flex-start",
        flexDirection: ["column", "row"],
        pl: [0, 20]
      }, _react.default.createElement(_Byline.Byline, {
        article: article
      }), introText), this.getSections())), article.relatedArticles && _react.default.createElement(_palette.Box, {
        px: [10, 10, 55],
        mb: 40,
        mx: "auto"
      }, _react.default.createElement(RelatedArticleWrapper, null, _react.default.createElement(_ArticleCards.ArticleCards, {
        relatedArticles: article.relatedArticles
      }))));
    }
  }]);

  return Eoy2018Artists;
}(_react.default.Component);

exports.Eoy2018Artists = Eoy2018Artists;
var BORDER_WIDTH = 6;

var AricleWrapper = _styledComponents.default.div.withConfig({
  displayName: "Eoy2018Artists__AricleWrapper",
  componentId: "apetgy-0"
})(["", "{border-bottom:none;}"], _Nav.NavContainer);

var NavBorder = _styledComponents.default.div.withConfig({
  displayName: "Eoy2018Artists__NavBorder",
  componentId: "apetgy-1"
})(["border-bottom:", "px solid ", ";position:absolute;top:100%;left:55px;right:55px;max-width:calc(1600px - 110px);margin:0 auto;", ";"], BORDER_WIDTH, (0, _palette.color)("purple100"), _palette.media.md(_templateObject()));

var ArticleContent = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "Eoy2018Artists__ArticleContent",
  componentId: "apetgy-2"
})(["border-left:", "px solid ", ";border-bottom:", "px solid ", ";blockquote{", ";line-height:1.3em;margin:0;font-weight:inherit;", ";}"], BORDER_WIDTH, (0, _palette.color)("purple100"), BORDER_WIDTH, (0, _palette.color)("purple100"), (0, _Fonts.unica)("s34"), _palette.media.sm(_templateObject2(), (0, _Fonts.unica)("s25")));
var ArtistHeaderSection = (0, _styledComponents.default)(_palette.Flex).withConfig({
  displayName: "Eoy2018Artists__ArtistHeaderSection",
  componentId: "apetgy-3"
})(["height:60vh;min-height:450px;border:", "px solid ", ";border-left-width:0;", ";"], BORDER_WIDTH, (0, _palette.color)("purple100"), _palette.media.md(_templateObject3()));
exports.ArtistHeaderSection = ArtistHeaderSection;

var ArtistHeaderTitle = _styledComponents.default.div.withConfig({
  displayName: "Eoy2018Artists__ArtistHeaderTitle",
  componentId: "apetgy-4"
})(["flex:1;border-right:", "px solid ", ";overflow:hidden;min-height:min-content;h1{", ";width:100%;height:50%;min-height:fit-content;padding:", "px;border-bottom:", "px solid ", ";margin:0;font-weight:inherit;", ";", ";}h2{", ";width:50%;height:50%;min-height:fit-content;display:inline-flex;padding:", "px;margin:0;font-weight:inherit;&:last-child{border-left:", "px solid ", ";}", ";", ";}", ";"], BORDER_WIDTH, (0, _palette.color)("purple100"), (0, _Fonts.unica)("s65"), (0, _palette.space)(2), BORDER_WIDTH, (0, _palette.color)("purple100"), _palette.media.md(_templateObject4(), BORDER_WIDTH, (0, _palette.color)("purple100")), _palette.media.xs(_templateObject5(), (0, _Fonts.unica)("s45"), BORDER_WIDTH, (0, _palette.color)("purple100")), (0, _Fonts.unica)("s25"), (0, _palette.space)(2), BORDER_WIDTH, (0, _palette.color)("purple100"), _palette.media.md(_templateObject6(), BORDER_WIDTH, (0, _palette.color)("purple100")), _palette.media.xs(_templateObject7(), (0, _Fonts.unica)("s19"), BORDER_WIDTH, (0, _palette.color)("purple100")), _palette.media.md(_templateObject8(), BORDER_WIDTH, (0, _palette.color)("purple100")));

var ArtistHeaderImg = (0, _styledComponents.default)(_palette.Flex).withConfig({
  displayName: "Eoy2018Artists__ArtistHeaderImg",
  componentId: "apetgy-5"
})(["flex:1;background:", ";p{text-shadow:0 0 5px black;opacity:0.6;}", ";", ";"], (0, _palette.color)("purple100"), function (props) {
  return props.src && "\n    background: url(".concat(props.src, ");\n    background-size: cover;\n    background-position: center;\n  ");
}, _palette.media.md(_templateObject9()));
var IntroSection = (0, _styledComponents.default)(_palette.Flex).withConfig({
  displayName: "Eoy2018Artists__IntroSection",
  componentId: "apetgy-6"
})(["", "{flex-direction:column;align-items:flex-start;", ";}"], _Byline.BylineContainer, _palette.media.md(_templateObject10()));
var TextSection = (0, _styledComponents.default)(_palette.Serif).withConfig({
  displayName: "Eoy2018Artists__TextSection",
  componentId: "apetgy-7"
})(["", "{blockquote{padding:0;}p,.paragraph{font-size:24px;text-indent:2em;padding:0;", ";}}"], _StyledText.StyledText, function (props) {
  return props.isChapterStart && "\n        &:first-child {\n          text-indent: 0;\n        }\n    ";
});
var CaptionWrapper = (0, _styledComponents.default)(_palette.Sans).withConfig({
  displayName: "Eoy2018Artists__CaptionWrapper",
  componentId: "apetgy-8"
})(["flex:1;", ";"], _palette.media.sm(_templateObject11()));

var ImageSetCaption = _styledComponents.default.div.withConfig({
  displayName: "Eoy2018Artists__ImageSetCaption",
  componentId: "apetgy-9"
})(["height:100%;padding:", "px;background:white;color:black;border-bottom:", "px solid ", ";", ";"], (0, _palette.space)(2), BORDER_WIDTH, (0, _palette.color)("purple100"), _palette.media.sm(_templateObject12(), BORDER_WIDTH, (0, _palette.color)("purple100")));

var ImageSetWrapper = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "Eoy2018Artists__ImageSetWrapper",
  componentId: "apetgy-10"
})(["border:", "px solid ", ";border-left:none;", "{display:flex;flex-direction:row-reverse;", ";}", "{position:relative;display:flex;flex-direction:column-reverse;flex:1;left:auto;bottom:auto;max-width:inherit;border-radius:0;box-shadow:none;&:hover{background-color:", ";}", ";}", "{display:none;}", "{flex-direction:column;> div{padding:0;}}", "{flex:3;border-right:", "px solid ", ";img{object-fit:cover;object-position:center;height:100%;}", ";}"], BORDER_WIDTH, (0, _palette.color)("purple100"), _ImageSetPreview.ImageSetContainer, _palette.media.sm(_templateObject13()), _ImageSetPreview.FullLabel, (0, _palette.color)("purple100"), _palette.media.sm(_templateObject14(), _ImageSetLabel.LabelWrapper), _ImageSetLabel.SlideshowTitle, _ImageSetLabel.SlideshowCta, _ImageSetPreview.ImgContainer, BORDER_WIDTH, (0, _palette.color)("purple100"), _palette.media.sm(_templateObject15(), BORDER_WIDTH, (0, _palette.color)("purple100")));

var RelatedArticleWrapper = _styledComponents.default.div.withConfig({
  displayName: "Eoy2018Artists__RelatedArticleWrapper",
  componentId: "apetgy-11"
})(["border-right:", "px solid ", ";border-bottom:", "px solid ", ";", "{margin-bottom:0;margin-top:0;}", "{border:none;}"], BORDER_WIDTH, (0, _palette.color)("purple100"), BORDER_WIDTH, (0, _palette.color)("purple100"), _ArticleCards.ArticlesWrapper, _ArticleCard.ArticleCardContainer);
//# sourceMappingURL=index.js.map