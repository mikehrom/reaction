"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Eoy2018Culture = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.map");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

var _palette = require("@artsy/palette");

var _Fonts = require("../../../../Assets/Fonts");

var _Helpers = require("../../../Helpers");

var _Author = require("../../Byline/Author");

var _Date = require("../../Byline/Date");

var _Share = require("../../Byline/Share");

var _Constants = require("../../Constants");

var _Nav = require("../../Nav/Nav");

var _ArticleCards = require("../../RelatedArticles/ArticleCards/ArticleCards");

var _Caption = require("../../Sections/Caption");

var _ImageCollection = require("../../Sections/ImageCollection");

var _ImageSetPreview = require("../../Sections/ImageSetPreview");

var _ImageSetLabel = require("../../Sections/ImageSetPreview/ImageSetLabel");

var _SocialEmbed = require("../../Sections/SocialEmbed");

var _StyledText = require("../../Sections/StyledText");

var _Text = require("../../Sections/Text");

var _ToolTip = require("../../ToolTip/ToolTip");

var _react = _interopRequireDefault(require("react"));

var _reactWaypoint = _interopRequireDefault(require("react-waypoint"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    h1 {\n      font-size: 30px;;\n    }\n    h2 {\n      font-size: 20px;\n    }\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      width: 100%;\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      margin-bottom: 0;\n      min-height: unset;\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      min-height: unset;\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    h1 {\n      font-size: 30px;;\n    }\n    h2 {\n      font-size: 20px;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    h1 {\n      font-size: 45px;;\n    }\n    h2 {\n      font-size: 30px;\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    blockquote {\n      font-size: 24px;\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      width: max-content;\n    "]);

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

var Eoy2018Culture =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Eoy2018Culture, _React$Component);

  function Eoy2018Culture() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Eoy2018Culture);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Eoy2018Culture)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      stickyHeader: null
    });

    _defineProperty(_assertThisInitialized(_this), "sectionText", function (section, i, isDark) {
      var _this$props = _this.props,
          showTooltips = _this$props.showTooltips,
          layout = _this$props.article.layout;
      return _react.default.createElement(TextContainer, {
        key: i,
        px: [10, 10, 55],
        py: 30,
        mx: "auto"
      }, _react.default.createElement(_palette.Box, {
        width: ["100%", "100%", "70%"],
        mx: "auto",
        maxWidth: 1000
      }, _react.default.createElement(_palette.Serif, {
        size: "5"
      }, _react.default.createElement(_Text.Text, {
        html: section.body,
        layout: layout,
        showTooltips: showTooltips,
        color: isDark ? "white" : (0, _palette.color)("black100")
      }))));
    });

    _defineProperty(_assertThisInitialized(_this), "sectionHeaderText", function (section, i) {
      return _react.default.createElement(SectionHeader, {
        key: i,
        pt: 10,
        pb: [10, 10, 20],
        px: [10, 10, 55]
      }, _react.default.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: section.body
        }
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "sectionSocialEmbed", function (section, i) {
      return _react.default.createElement(SectionWrapper, {
        key: i,
        px: [10, 10, 55],
        py: 40
      }, _react.default.createElement(_SocialEmbed.SocialEmbed, {
        section: section
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "sectionImageCollection", function (section, i) {
      return _react.default.createElement(ImageWrapper, {
        key: i
      }, _react.default.createElement(_ImageCollection.ImageCollection, {
        sectionLayout: section.layout,
        articleLayout: "feature",
        images: section.images,
        targetHeight: 500,
        gutter: 10
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "sectionImageSet", function (section, i) {
      return _react.default.createElement(ImageSetWrapper, {
        key: i,
        px: [0, 0, 55]
      }, _react.default.createElement(_ImageSetPreview.ImageSetPreview, {
        section: section
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "sectionIsHeader", function (section) {
      var isText = section.type === "text";
      var isHeader = isText && section.body.includes("<h1>");
      return isHeader;
    });

    _defineProperty(_assertThisInitialized(_this), "makeSectionArrays", function (sections) {
      var chapters = [];
      var currentChapter = null;
      sections.map(function (section, i) {
        if (_this.sectionIsHeader(section)) {
          if (currentChapter === null) {
            currentChapter = 0;
          } else {
            currentChapter += 1;
          }
        }

        if (i !== 0) {
          if (chapters.length && chapters[currentChapter]) {
            chapters[currentChapter].push(section);
          } else {
            chapters[currentChapter] = [section];
          }
        }
      });
      return chapters;
    });

    _defineProperty(_assertThisInitialized(_this), "getSections", function (sections, isDark) {
      return sections.map(function (section, i) {
        if (_this.sectionIsHeader(section)) {
          return _this.sectionHeaderText(section, i);
        } else {
          switch (section.type) {
            case "text":
              {
                return _this.sectionText(section, i, isDark);
              }

            case "image_collection":
              {
                return _this.sectionImageCollection(section, i);
              }

            case "image_set":
              {
                return _this.sectionImageSet(section, i);
              }

            case "social_embed":
              {
                return _this.sectionSocialEmbed(section, i);
              }

            default:
              {
                return null;
              }
          }
        }
      });
    });

    return _this;
  }

  _createClass(Eoy2018Culture, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var article = this.props.article;
      var chapters = this.makeSectionArrays(article.sections);
      var introText = article.sections && article.sections[0] && article.sections[0].body;
      return _react.default.createElement(ArticleWrapper, null, _react.default.createElement(_Nav.Nav, {
        canFix: true,
        color: "black",
        backgroundColor: "white"
      }, this.state.stickyHeader && _react.default.createElement(StickyHeader, null, this.sectionHeaderText(this.state.stickyHeader, 0))), _react.default.createElement(SectionWrapper, null, _react.default.createElement(ArticleTitle, {
        size: "16",
        weight: "medium",
        px: [10, 10, 55],
        pb: 10,
        pt: 20
      }, _react.default.createElement("div", null, "Year In Visual Culture"), _react.default.createElement("div", null, "2018")), _react.default.createElement(HeaderImg, {
        src: article.hero_section.url
      })), _react.default.createElement(TextContainer, {
        px: [10, 10, 55],
        py: 30,
        mx: "auto"
      }, _react.default.createElement(_palette.Box, {
        maxWidth: 1400,
        mx: "auto"
      }, _react.default.createElement(_palette.Flex, {
        pb: 20,
        alignItems: "center",
        flexDirection: ["row-reverse", "row"]
      }, _react.default.createElement(_palette.Box, {
        width: ["100%", "100%", "15%"]
      }, _react.default.createElement(_Share.Share, {
        url: (0, _Constants.getArticleFullHref)(article.slug),
        title: article.social_title || article.thumbnail_title
      })), _react.default.createElement(_palette.Flex, {
        width: ["100%", "100%", "70%"],
        maxWidth: 1000
      }, _react.default.createElement(_Author.Author, {
        authors: article.authors
      }), _react.default.createElement(_Date.Date, {
        date: article.published_at
      }))), _react.default.createElement(_palette.Box, {
        width: ["100%", "100%", "70%"],
        maxWidth: 1000,
        mx: "auto"
      }, introText && _react.default.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: introText
        }
      }))), _react.default.createElement(_reactWaypoint.default, {
        onEnter: function onEnter(_ref) {
          var previousPosition = _ref.previousPosition;

          if (previousPosition === "above") {
            _this2.setState({
              stickyHeader: null
            });
          }
        }
      })), chapters.map(function (chapter, i) {
        var isDark = i % 2 === 0;
        return _react.default.createElement(ChapterWrapper, {
          isDark: isDark,
          key: i
        }, _react.default.createElement(_reactWaypoint.default, {
          onLeave: function onLeave(_ref2) {
            var currentPosition = _ref2.currentPosition,
                previousPosition = _ref2.previousPosition;

            if (previousPosition === "inside" && currentPosition === "above") {
              _this2.setState({
                stickyHeader: chapter[0]
              });
            }
          }
        }), _this2.getSections(chapter, isDark), _react.default.createElement(_reactWaypoint.default, {
          onEnter: function onEnter(_ref3) {
            var previousPosition = _ref3.previousPosition;

            if (previousPosition === "above") {
              _this2.setState({
                stickyHeader: chapter[0]
              });
            }
          }
        }));
      }), article.relatedArticles && _react.default.createElement(_palette.Box, {
        px: [10, 10, 55],
        my: 40,
        mx: "auto"
      }, _react.default.createElement(_ArticleCards.ArticleCards, {
        relatedArticles: article.relatedArticles
      })));
    }
  }]);

  return Eoy2018Culture;
}(_react.default.Component);

exports.Eoy2018Culture = Eoy2018Culture;
var BORDER_WIDTH = 6;

var ArticleWrapper = _styledComponents.default.div.withConfig({
  displayName: "Eoy2018Culture__ArticleWrapper",
  componentId: "sc-14ga9qk-0"
})(["", "{border-bottom-width:", "px;border-top:", "px solid black;}", "{margin-top:0;}", "{margin-top:0;", ";}"], _Nav.NavContainer, BORDER_WIDTH, BORDER_WIDTH, _Date.DateContainer, _Author.StyledAuthor, _Helpers.media.xs(_templateObject()));

var ChapterWrapper = _styledComponents.default.div.withConfig({
  displayName: "Eoy2018Culture__ChapterWrapper",
  componentId: "sc-14ga9qk-1"
})(["", ";", "{color:", ";}"], function (props) {
  return props.isDark && "\n      color: white;\n      background-color: ".concat((0, _palette.color)("black100"), ";\n  ");
}, _ToolTip.ToolTipContainer, (0, _palette.color)("black100"));

var SectionWrapper = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "Eoy2018Culture__SectionWrapper",
  componentId: "sc-14ga9qk-2"
})(["border-bottom:", "px solid;position:relative;"], BORDER_WIDTH);
var TextContainer = (0, _styledComponents.default)(SectionWrapper).withConfig({
  displayName: "Eoy2018Culture__TextContainer",
  componentId: "sc-14ga9qk-3"
})(["blockquote{", ";padding:20px 0;line-height:1.25em;margin:0;font-weight:inherit;}", "{p,.paragraph{font-size:24px;text-indent:2em;padding:0;&:first-child{text-indent:0;}}}", ";"], (0, _Fonts.unica)("s34"), _StyledText.StyledText, _Helpers.media.sm(_templateObject2()));
var ArticleTitle = (0, _styledComponents.default)(_palette.Sans).withConfig({
  displayName: "Eoy2018Culture__ArticleTitle",
  componentId: "sc-14ga9qk-4"
})(["text-transform:uppercase;border-bottom:", "px solid;font-size:7.5vw;line-height:1em;"], BORDER_WIDTH);
var SectionHeader = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "Eoy2018Culture__SectionHeader",
  componentId: "sc-14ga9qk-5"
})(["border-bottom:", "px solid;> div{max-width:1600px;margin:0 auto;width:100%;display:flex;align-items:flex-end;}h1{", ";text-transform:uppercase;flex:2;margin:0;font-weight:inherit;}h2{font-size:50px;width:fit-content;line-height:1em;text-align:right;margin:0;font-weight:inherit;}", ";", ";"], BORDER_WIDTH, (0, _Fonts.unica)("s65", "medium"), _Helpers.media.md(_templateObject3()), _Helpers.media.xs(_templateObject4()));

var HeaderImg = _styledComponents.default.img.withConfig({
  displayName: "Eoy2018Culture__HeaderImg",
  componentId: "sc-14ga9qk-6"
})(["height:calc(100vh - 50px);min-height:400px;object-fit:cover;object-position:center;width:100%;"]);

var ImageWrapper = (0, _styledComponents.default)(SectionWrapper).withConfig({
  displayName: "Eoy2018Culture__ImageWrapper",
  componentId: "sc-14ga9qk-7"
})(["img{max-height:calc(100vh - 50px);min-height:400px;object-fit:cover;object-position:center;", ";}", "{", ";}", "{position:absolute;bottom:0;left:5px;p{font-size:10px;color:white;opacity:0.6;text-shadow:0 0 5px black;}}"], _Helpers.media.md(_templateObject5()), _ImageCollection.ImageCollectionItem, _Helpers.pMedia.xs(_templateObject6()), _Caption.CaptionContainer);
var ImageSetWrapper = (0, _styledComponents.default)(SectionWrapper).withConfig({
  displayName: "Eoy2018Culture__ImageSetWrapper",
  componentId: "sc-14ga9qk-8"
})(["", "{width:70%;max-width:1000px;margin:0 auto;color:black;img{width:100%;}", "{display:none;}", "{flex-direction:column;> div{padding:0;}}", ";}"], _ImageSetPreview.ImageSetContainer, _ImageSetLabel.SlideshowTitle, _ImageSetLabel.SlideshowCta, _Helpers.media.md(_templateObject7()));

var StickyHeader = _styledComponents.default.div.withConfig({
  displayName: "Eoy2018Culture__StickyHeader",
  componentId: "sc-14ga9qk-9"
})(["position:absolute;top:100%;width:100%;background:white;border-top:", "px solid;h1{font-size:40px;}h2{font-size:35px;}", "{padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:14px;}", ";"], BORDER_WIDTH, SectionHeader, _Helpers.media.sm(_templateObject8()));
//# sourceMappingURL=Eoy2018Culture.js.map