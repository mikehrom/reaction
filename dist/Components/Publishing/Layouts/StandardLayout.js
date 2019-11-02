"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StandardLayoutParent = exports.StandardLayout = void 0;

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

var _palette = require("@artsy/palette");

var _Analytics = require("../../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../../Artsy/Analytics/Schema"));

var _Constants = require("../Constants");

var _DisplayAd = require("../Display/DisplayAd");

var _DisplayTargeting = require("../Display/DisplayTargeting");

var _Typings = require("../Typings");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Responsive = require("../../../Utils/Responsive");

var _Helpers = require("../../Helpers");

var _Header = require("../Header/Header");

var _ReadMoreButton = require("../ReadMore/ReadMoreButton");

var _ReadMoreWrapper = require("../ReadMore/ReadMoreWrapper");

var _Sections = require("../Sections/Sections");

var _CanvasFooter = require("./Components/CanvasFooter");

var _Sidebar = require("./Components/Sidebar");

var _dec, _dec2, _class, _class2, _class3, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    margin: 0 0 100px 0;\n  "]);

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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

var StandardLayout = (_dec = (0, _Analytics.track)(), _dec2 = (0, _Analytics.track)(function (props) {
  // Track here and on ReadMoreButton so pageview & action both fire
  var _props$article = props.article,
      layout = _props$article.layout,
      slug = _props$article.slug,
      infiniteScrollEntrySlug = props.infiniteScrollEntrySlug;
  var referrer = infiniteScrollEntrySlug ? "/article/".concat(infiniteScrollEntrySlug) : undefined;
  return {
    action_type: Schema.ActionType.Click,
    context_module: Schema.ContextModule.ReadMore,
    destination_path: (0, _Constants.getEditorialHref)(layout, slug),
    subject: Schema.Subject.ReadMore,
    referrer: referrer
  };
}), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StandardLayout, _React$Component);

  function StandardLayout(props) {
    var _this;

    _classCallCheck(this, StandardLayout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StandardLayout).call(this, props));
    _this.state = {
      isTruncated: props.isTruncated || false
    };
    return _this;
  }

  _createClass(StandardLayout, [{
    key: "removeTruncation",
    value: function removeTruncation() {
      this.setState({
        isTruncated: false
      });
    }
  }, {
    key: "renderSideRailDisplayAd",
    value: function renderSideRailDisplayAd(isMobileAd) {
      var _this$props = this.props,
          article = _this$props.article,
          isSuper = _this$props.isSuper;

      if (isSuper) {
        return;
      }

      return _react.default.createElement(_DisplayAd.DisplayAd, {
        adUnit: isMobileAd ? _Typings.AdUnit.Mobile_InContentMR1 : _Typings.AdUnit.Desktop_RightRail1,
        adDimension: isMobileAd ? _Typings.AdDimension.Mobile_InContentMR1 : _Typings.AdDimension.Desktop_RightRail1,
        targetingData: (0, _DisplayTargeting.targetingData)(article, "article")
      });
    }
  }, {
    key: "renderTopRailDisplayAd",
    value: function renderTopRailDisplayAd(isMobileAd) {
      var _this$props2 = this.props,
          article = _this$props2.article,
          isSuper = _this$props2.isSuper;
      var adDimension = isMobileAd ? _Typings.AdDimension.Mobile_InContentMR1 : _Typings.AdDimension.Desktop_TopLeaderboard;

      if (isSuper) {
        return;
      }

      return _react.default.createElement(_DisplayAd.DisplayAd, {
        adUnit: isMobileAd ? _Typings.AdUnit.Mobile_InContentMR1 : _Typings.AdUnit.Desktop_TopLeaderboard,
        adDimension: adDimension,
        targetingData: (0, _DisplayTargeting.targetingData)(article, "article")
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          article = _this$props3.article,
          emailSignupUrl = _this$props3.emailSignupUrl,
          infiniteScrollEntrySlug = _this$props3.infiniteScrollEntrySlug,
          isMobile = _this$props3.isMobile,
          relatedArticlesForCanvas = _this$props3.relatedArticlesForCanvas,
          relatedArticlesForPanel = _this$props3.relatedArticlesForPanel,
          showTooltips = _this$props3.showTooltips,
          showCollectionsRail = _this$props3.showCollectionsRail,
          isSuper = _this$props3.isSuper;
      var isTruncated = this.state.isTruncated;
      var seriesArticle = article.seriesArticle;
      var seriesOrSuper = isSuper || seriesArticle;
      return _react.default.createElement(_Responsive.Responsive, null, function (_ref) {
        var xs = _ref.xs,
            sm = _ref.sm,
            md = _ref.md;
        var isMobileAd = Boolean(isMobile || xs || sm || md);

        var sideRailDisplayAd = function sideRailDisplayAd() {
          return _react.default.createElement(_react.default.Fragment, null, _this2.renderSideRailDisplayAd(isMobileAd));
        };

        return _react.default.createElement(ArticleWrapper, {
          isInfiniteScroll: _this2.props.isTruncated
        }, _this2.renderTopRailDisplayAd(isMobileAd), _react.default.createElement(_ReadMoreWrapper.ReadMoreWrapper, {
          isTruncated: isTruncated,
          hideButton: function hideButton() {
            return _this2.setState({
              isTruncated: false
            });
          }
        }, _react.default.createElement(_Header.Header, {
          article: article
        }), _react.default.createElement(StandardLayoutParent, null, _react.default.createElement(StandardLayoutContainer, null, _react.default.createElement(_Sections.Sections, {
          DisplayPanel: sideRailDisplayAd,
          article: article,
          isMobile: isMobile,
          showTooltips: showTooltips
        }), _react.default.createElement(_Sidebar.Sidebar, {
          emailSignupUrl: emailSignupUrl,
          DisplayPanel: sideRailDisplayAd,
          relatedArticlesForPanel: relatedArticlesForPanel
        })))), isTruncated && _react.default.createElement(_ReadMoreButton.ReadMoreButton, {
          onClick: _this2.removeTruncation.bind(_this2),
          referrer: "/article/".concat(infiniteScrollEntrySlug)
        }), relatedArticlesForCanvas && !seriesOrSuper && _react.default.createElement(_CanvasFooter.CanvasFooter, {
          article: article,
          relatedArticles: relatedArticlesForCanvas,
          showCollectionsRail: showCollectionsRail
        }));
      });
    }
  }]);

  return StandardLayout;
}(_react.default.Component), _defineProperty(_class3, "defaultProps", {
  isMobile: false,
  isSuper: false,
  article: {},
  isTruncated: false
}), _temp), (_applyDecoratedDescriptor(_class2.prototype, "removeTruncation", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "removeTruncation"), _class2.prototype)), _class2)) || _class);
exports.StandardLayout = StandardLayout;

var StandardLayoutParent = _styledComponents.default.div.withConfig({
  displayName: "StandardLayout__StandardLayoutParent",
  componentId: "sc-9dvpk1-0"
})(["margin:0 40px 100px 40px;", ";"], _Helpers.pMedia.sm(_templateObject()));

exports.StandardLayoutParent = StandardLayoutParent;

var ArticleWrapper = _styledComponents.default.div.attrs({}).withConfig({
  displayName: "StandardLayout__ArticleWrapper",
  componentId: "sc-9dvpk1-1"
})(["", ";"], function (props) {
  return props.isInfiniteScroll && "\n    padding-top: ".concat((0, _palette.space)(4), "px;\n    border-top: 1px solid ").concat((0, _palette.color)("black10"), ";\n  ");
});

var StandardLayoutContainer = _styledComponents.default.div.withConfig({
  displayName: "StandardLayout__StandardLayoutContainer",
  componentId: "sc-9dvpk1-2"
})(["max-width:1250px;display:flex;margin:auto;justify-content:space-between;"]);
//# sourceMappingURL=StandardLayout.js.map