"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSections = exports.Sections = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.regexp.split");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.array.reduce");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es6.array.find-index");

var _once2 = _interopRequireDefault(require("lodash/once"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _findLastIndex2 = _interopRequireDefault(require("lodash/findLastIndex"));

var _compact2 = _interopRequireDefault(require("lodash/compact"));

var _clone2 = _interopRequireDefault(require("lodash/clone"));

var _palette = require("@artsy/palette");

var _DisplayTargeting = require("../Display/DisplayTargeting");

var _ArticleWithFullScreen = require("../Layouts/ArticleWithFullScreen");

var _Typings = require("../Typings");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Helpers = require("../../Helpers");

var _DisplayAd = require("../Display/DisplayAd");

var _Authors = require("./Authors");

var _Embed = require("./Embed");

var _ImageCollection = require("./ImageCollection");

var _ImageSetPreview = require("./ImageSetPreview");

var _SectionContainer = require("./SectionContainer");

var _SocialEmbed = require("./SocialEmbed");

var _Text = require("./Text");

var _Video = require("./Video");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    max-width: ", ";\n    ", "\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    max-width: ", ";\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    max-width: ", ";\n    ", "\n  "]);

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

/**
 * When isMobile, hide sidebar and inject DisplayAd into the body of the
 * article at a specific paragraph index.
 */
var MOBILE_DISPLAY_INJECT_INDEX = 1;
var MOBILE_DISPLAY_INJECT_ID_PREFIX = "__mobile_display_inject__";

var Sections =
/*#__PURE__*/
function (_Component) {
  _inherits(Sections, _Component);

  function Sections() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Sections);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Sections)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "displayInjectId", void 0);

    _defineProperty(_assertThisInitialized(_this), "state", {
      shouldInjectMobileDisplay: false
    });

    _defineProperty(_assertThisInitialized(_this), "getContentStartIndex", function () {
      var _this$props$article = _this.props.article,
          layout = _this$props$article.layout,
          sections = _this$props$article.sections;

      if (layout === "feature") {
        var firstText = sections.findIndex(function (section) {
          return section.type === "text";
        });
        return firstText;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getContentEndIndex", function () {
      var _this$props$article2 = _this.props.article,
          layout = _this$props$article2.layout,
          sections = _this$props$article2.sections;

      if (["feature", "standard"].includes(layout)) {
        var lastText = (0, _findLastIndex2.default)(sections, function (section) {
          return section.type === "text";
        });
        return lastText;
      }
    });

    return _this;
  }

  _createClass(Sections, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      var _this$props = this.props,
          layout = _this$props.article.layout,
          isMobile = _this$props.isMobile;
      this.injectDisplayPanelMarker = (0, _once2.default)(this.injectDisplayPanelMarker);
      var shouldInjectMobileDisplay = isMobile && layout !== "feature";
      this.setState({
        shouldInjectMobileDisplay: shouldInjectMobileDisplay
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.shouldInjectMobileDisplay) {
        this.mountDisplayToMarker();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      var isMobile = this.props.isMobile;

      if (prevProps.isMobile !== isMobile) {
        this.setState({
          shouldInjectMobileDisplay: isMobile
        }, function () {
          if (isMobile && _this2.state.shouldInjectMobileDisplay) {
            _this2.mountDisplayToMarker();
          }
        });
      }
    }
    /**
     * Inject DisplayAd after a specific paragraph index
     */

  }, {
    key: "injectDisplayPanelMarker",
    value: function injectDisplayPanelMarker(body) {
      var _this3 = this;

      var articleId = this.props.article.id;
      var tag = "</p>";
      var updatedBody = (0, _compact2.default)(body.split(tag)).map(function (p) {
        return p + tag;
      }).reduce(function (arr, block, paragraphIndex) {
        if (paragraphIndex === MOBILE_DISPLAY_INJECT_INDEX) {
          _this3.displayInjectId = "".concat(MOBILE_DISPLAY_INJECT_ID_PREFIX).concat(articleId);
          return arr.concat([block, "<div id=\"".concat(_this3.displayInjectId, "\"></div>")]);
        } else {
          return arr.concat([block]);
        }
      }, []).join("");
      return updatedBody;
    }
  }, {
    key: "mountDisplayToMarker",
    value: function mountDisplayToMarker() {
      var DisplayPanel = this.props.DisplayPanel;
      var displayMountPoint = document.getElementById(this.displayInjectId);

      if (displayMountPoint) {
        _reactDom.default.render(_react.default.createElement(DisplayPanel, null), displayMountPoint);
      } else {
        console.error("(reaction/Sections.tsx) Error mounting Display: DOM node ", "not found", displayMountPoint);
      }
    }
  }, {
    key: "getSection",
    value: function getSection(section, index) {
      var _this$props2 = this.props,
          article = _this$props2.article,
          color = _this$props2.color,
          customWidth = _this$props2.customWidth,
          isMobile = _this$props2.isMobile,
          showTooltips = _this$props2.showTooltips;
      var targetHeight = customWidth && customWidth > 750 && !isMobile ? 750 : 500;
      var size = customWidth && {
        width: customWidth
      };
      var fullscreenImages = (0, _ArticleWithFullScreen.getSlideshowImagesFromArticle)(article);
      var sections = {
        image_collection: _react.default.createElement(_ImageCollection.ImageCollection, {
          color: color,
          sectionLayout: section.layout,
          articleLayout: article.layout,
          images: section.images,
          targetHeight: targetHeight,
          gutter: 10,
          size: size,
          fullscreenImages: fullscreenImages
        }),
        image_set: _react.default.createElement(_ImageSetPreview.ImageSetPreview, {
          section: section,
          color: color,
          fullscreenImages: fullscreenImages
        }),
        video: _react.default.createElement(_Video.Video, {
          section: section,
          color: color
        }),
        embed: _react.default.createElement(_Embed.Embed, {
          section: section
        }),
        social_embed: _react.default.createElement(_SocialEmbed.SocialEmbed, {
          section: section
        }),
        text: _react.default.createElement(_Text.Text, {
          color: color,
          html: section.body,
          layout: article.layout,
          isContentStart: index === this.getContentStartIndex(),
          isContentEnd: index === this.getContentEndIndex(),
          showTooltips: showTooltips
        }),
        default: false
      };
      var sectionComponent = sections[section.type] || sections.default;
      return sectionComponent;
    }
  }, {
    key: "getAdUnit",
    value: function getAdUnit(index, indexAtFirstAd) {
      var isMobile = this.props.isMobile;

      if (index === indexAtFirstAd) {
        return isMobile ? _Typings.AdUnit.Mobile_Feature_InContentLeaderboard1 : _Typings.AdUnit.Desktop_Feature_Leaderboard1;
      }

      if (index === 6) {
        return isMobile ? _Typings.AdUnit.Mobile_Feature_InContentLeaderboard2 : _Typings.AdUnit.Desktop_Feature_Leaderboard2;
      }

      return isMobile ? _Typings.AdUnit.Mobile_Feature_InContentLeaderboard3 : _Typings.AdUnit.Desktop_Feature_LeaderboardRepeat;
    }
    /**
     * Add a margin top when to the ad when the section is any of the following:
     * 1) Text section without <br> tags wrapping the <p> or <h2> content
     * 3) Image set section
     * 4) Image collection with a caption/title
     */

  }, {
    key: "getAdMarginTop",
    value: function getAdMarginTop(section) {
      var shouldAddTopMargin = function shouldAddTopMargin() {
        switch (section.type) {
          case "image_set":
            return true;

          case "image_collection":
            (0, _get2.default)(section, ["images", "[0]", "caption"]);
            return true;

          case "text":
            section.body.includes("<br>");
            return true;

          default:
            return false;
        }
      };

      return shouldAddTopMargin() ? "calc(100% - 96%)" : null;
    }
  }, {
    key: "renderSections",
    value: function renderSections() {
      var _this4 = this;

      var _this$props3 = this.props,
          article = _this$props3.article,
          customWidth = _this$props3.customWidth,
          isMobile = _this$props3.isMobile,
          isSponsored = _this$props3.isSponsored,
          isSuper = _this$props3.isSuper,
          isTruncatedAt = _this$props3.isTruncatedAt,
          hideAds = _this$props3.hideAds;
      var shouldInjectMobileDisplay = this.state.shouldInjectMobileDisplay;
      var quantityOfAdsRendered = 0;
      var firstAdInjected = false;
      var placementCount = 1;
      var displayMarkerInjected = false;
      var indexAtFirstAd = null;
      var articleSections = isTruncatedAt ? (0, _clone2.default)(article.sections).slice(0, isTruncatedAt) : article.sections;
      var renderedSections = articleSections.map(function (sectionItem, index) {
        var section = sectionItem;
        var ad = null;
        var shouldInject = shouldInjectMobileDisplay && sectionItem.type === "text" && !displayMarkerInjected;
        /**
         *  Possible data types for sectionItem.type are
         *  callout, embed, social_embed, text, slideshow, image_set, and image_collection.
         *  Here we want to inject the first ad after the first image_collection OR image_set data type.
         * */

        var shouldInjectNewAds = article.layout === "feature" && (sectionItem.type === "image_collection" || sectionItem.type === "image_set") && !firstAdInjected && !isSuper && !hideAds;

        if (firstAdInjected) {
          placementCount++;
        }

        if (placementCount % 6 === 0 && quantityOfAdsRendered < 2) {
          // only render 2 ads on Features
          shouldInjectNewAds = true;
        }

        if (shouldInjectNewAds) {
          quantityOfAdsRendered++;
          var adDimension = isMobile ? isSponsored ? _Typings.AdDimension.Mobile_Sponsored_Feature_InContentLeaderboard1 : _Typings.AdDimension.Mobile_Feature_InContentLeaderboard1 : _Typings.AdDimension.Desktop_NewsLanding_Leaderboard1;

          var marginTop = _this4.getAdMarginTop(section);

          firstAdInjected = true;
          indexAtFirstAd = indexAtFirstAd === null ? index : indexAtFirstAd; // only set this value once; after the index where 1st ad injection is found

          ad = _react.default.createElement(AdWrapper, {
            mt: marginTop
          }, _react.default.createElement(_DisplayAd.DisplayAd, {
            adUnit: _this4.getAdUnit(placementCount, indexAtFirstAd),
            adDimension: adDimension,
            targetingData: (0, _DisplayTargeting.targetingData)(article, isSponsored ? "sponsorfeature" : "feature")
          }));
        }

        if (shouldInject) {
          try {
            section = (0, _clone2.default)(sectionItem);
            section.body = _this4.injectDisplayPanelMarker(section.body);
            displayMarkerInjected = true;
          } catch (error) {
            console.error("(reaction/Sections.jsx) Error injecting Display:", error);
          }
        }

        var child = _this4.getSection(section, index);

        if (child) {
          return _react.default.createElement(_SectionContainer.SectionContainer, {
            key: index,
            articleLayout: article.layout,
            section: section,
            customWidth: customWidth
          }, child, ad);
        }
      });
      return renderedSections;
    }
  }, {
    key: "renderAuthors",
    value: function renderAuthors() {
      var _this$props4 = this.props,
          color = _this$props4.color,
          authors = _this$props4.article.authors;

      if (authors) {
        return _react.default.createElement(_SectionContainer.SectionContainer, null, _react.default.createElement(_Authors.Authors, {
          authors: authors,
          color: color
        }));
      }
    }
  }, {
    key: "renderPostScript",
    value: function renderPostScript() {
      var _this$props5 = this.props,
          article = _this$props5.article,
          color = _this$props5.color;
      var layout = article.layout,
          postscript = article.postscript;

      if (postscript) {
        return _react.default.createElement(_SectionContainer.SectionContainer, null, _react.default.createElement(_Text.Text, {
          color: color,
          html: postscript,
          layout: layout,
          postscript: Boolean(postscript)
        }));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var article = this.props.article;
      return _react.default.createElement(StyledSections, {
        layout: article.layout
      }, this.renderSections(), this.renderAuthors(), this.renderPostScript());
    }
  }]);

  return Sections;
}(_react.Component);

exports.Sections = Sections;

_defineProperty(Sections, "defaultProps", {
  isMobile: false
});

var chooseMargin = function chooseMargin(layout) {
  if (layout === "standard") {
    return "0;";
  } else if (layout === "feature") {
    return "80px auto 0 auto;";
  }
};

var StyledSections = _styledComponents.default.div.withConfig({
  displayName: "Sections__StyledSections",
  componentId: "sc-14gz2oe-0"
})(["display:flex;flex-direction:column;align-items:center;width:100%;margin:", ";max-width:", ";", " ", " ", ""], function (_ref) {
  var layout = _ref.layout;
  return chooseMargin(layout);
}, function (_ref2) {
  var layout = _ref2.layout;
  return layout === "standard" ? "780px" : "auto";
}, function (_ref3) {
  var layout = _ref3.layout;
  return _Helpers.pMedia.xl(_templateObject(), layout === "standard" ? "680px" : "auto", layout === "feature" ? "margin: 80px auto 0 auto" : "");
}, function (_ref4) {
  var layout = _ref4.layout;
  return _Helpers.pMedia.md(_templateObject2(), layout === "standard" ? "780px" : "auto");
}, function (_ref5) {
  var layout = _ref5.layout;
  return _Helpers.pMedia.xs(_templateObject3(), layout === "standard" ? "780px" : "auto", layout === "feature" ? "margin: 30px auto 0 auto" : "");
});

exports.StyledSections = StyledSections;
var AdWrapper = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "Sections__AdWrapper",
  componentId: "sc-14gz2oe-1"
})(["width:100vw;margin-left:calc(-50vw + 50%);"]);
//# sourceMappingURL=Sections.js.map