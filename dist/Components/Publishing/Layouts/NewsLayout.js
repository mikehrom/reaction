"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsArticleContainer = exports.ExpandButton = exports.NewsLayout = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.function.bind");

var _once2 = _interopRequireDefault(require("lodash/once"));

var _palette = require("@artsy/palette");

var _Fonts = require("../../../Assets/Fonts");

var _DisplayTargeting = require("../Display/DisplayTargeting");

var _react = _interopRequireWildcard(require("react"));

var _reactTracking = _interopRequireDefault(require("react-tracking"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Helpers = require("../../Helpers");

var _DisplayAd = require("../Display/DisplayAd");

var _NewsHeadline = require("../News/NewsHeadline");

var _NewsSections = require("../News/NewsSections");

var _Typings = require("../Typings");

var _CanvasFooter = require("./Components/CanvasFooter");

var _dec, _class, _temp;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    margin: 40px 5px;\n    padding: 10px 15px 20px;\n    ", ";\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    bottom: 15px;\n    right: 15px;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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

var NewsLayout = (_dec = (0, _reactTracking.default)(), _dec(_class = (_temp =
/*#__PURE__*/
function (_Component) {
  _inherits(NewsLayout, _Component);

  function NewsLayout(props) {
    var _this;

    _classCallCheck(this, NewsLayout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NewsLayout).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "trackExpand", function () {
      var _this$props = _this.props,
          article = _this$props.article,
          tracking = _this$props.tracking;

      if (tracking) {
        tracking.trackEvent({
          action: "Clicked read more",
          pathname: "/news/".concat(article.slug)
        });
      }
    });

    _this.state = {
      isTruncated: _this.props.isTruncated || false,
      isHovered: _this.props.isHovered || false
    };
    _this.onExpand = _this.onExpand.bind(_assertThisInitialized(_this));
    _this.trackExpand = (0, _once2.default)(_this.trackExpand);
    return _this;
  }

  _createClass(NewsLayout, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.isHovered !== this.props.isHovered) {
        this.setState({
          isHovered: nextProps.isHovered
        });
      }
    }
  }, {
    key: "onExpand",
    value: function onExpand() {
      var onExpand = this.props.onExpand;
      this.trackExpand();

      if (onExpand) {
        onExpand();
      }

      this.setState({
        isTruncated: false
      });
    }
  }, {
    key: "getAdUnit",

    /**
     * Ad unit code "Mobile/Desktop_InContentLB1" is for ads that appear after the 3rd article,
     * "<Mobile/Desktop_InContentLB2" for ads that appear after the 9th article,
     * and Mobile/Desktop_InContentLBRepeat is for all subsequent ads
     */
    value: function getAdUnit() {
      var _this$props2 = this.props,
          articleSerial = _this$props2.articleSerial,
          isMobile = _this$props2.isMobile;

      if (articleSerial === 3) {
        return isMobile ? _Typings.AdUnit.Mobile_NewsLanding_InContent1 : _Typings.AdUnit.Desktop_NewsLanding_Leaderboard1;
      }

      if (articleSerial === 9) {
        return isMobile ? _Typings.AdUnit.Mobile_NewsLanding_InContent2 : _Typings.AdUnit.Desktop_NewsLanding_Leaderboard2;
      }

      return isMobile ? _Typings.AdUnit.Mobile_NewsLanding_InContent3 : _Typings.AdUnit.Desktop_NewsLanding_LeaderboardRepeat;
    }
  }, {
    key: "renderFooterContent",
    value: function renderFooterContent() {
      var _this$props3 = this.props,
          isMobile = _this$props3.isMobile,
          article = _this$props3.article,
          relatedArticlesForCanvas = _this$props3.relatedArticlesForCanvas,
          showCollectionsRail = _this$props3.showCollectionsRail,
          shouldAdRender = _this$props3.shouldAdRender;
      var adUnit = this.getAdUnit();
      var adDimension = isMobile ? _Typings.AdDimension.Mobile_NewsLanding_InContent1 : _Typings.AdDimension.Desktop_NewsLanding_Leaderboard1;
      return _react.default.createElement(_react.default.Fragment, null, shouldAdRender && _react.default.createElement(_DisplayAd.DisplayAd, {
        adUnit: adUnit,
        adDimension: adDimension,
        targetingData: (0, _DisplayTargeting.targetingData)(article, "newslanding")
      }), relatedArticlesForCanvas && _react.default.createElement(_CanvasFooter.CanvasFooter, {
        article: article,
        relatedArticles: relatedArticlesForCanvas,
        showCollectionsRail: showCollectionsRail
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          article = _this$props4.article,
          isMobile = _this$props4.isMobile;
      var _this$state = this.state,
          isTruncated = _this$state.isTruncated,
          isHovered = _this$state.isHovered;
      return _react.default.createElement(NewsContainer, null, _react.default.createElement(NewsArticleContainer, {
        isTruncated: isTruncated,
        isHovered: isHovered,
        onClick: function onClick() {
          if (isTruncated) {
            _this2.onExpand();
          }
        },
        onMouseEnter: function onMouseEnter() {
          if (!isMobile) {
            _this2.setState({
              isHovered: true
            });
          }
        },
        onMouseLeave: function onMouseLeave() {
          if (!isMobile) {
            _this2.setState({
              isHovered: false
            });
          }
        }
      }, _react.default.createElement(_NewsHeadline.NewsHeadline, {
        article: article
      }), _react.default.createElement(_NewsSections.NewsSections, _extends({}, this.props, {
        isTruncated: isTruncated
      })), _react.default.createElement(ExpandButton, {
        isHovered: isHovered,
        isTruncated: isTruncated,
        onClick: this.onExpand
      }, "Expand")), this.renderFooterContent());
    }
  }]);

  return NewsLayout;
}(_react.Component), _temp)) || _class);
exports.NewsLayout = NewsLayout;

var NewsContainer = _styledComponents.default.div.withConfig({
  displayName: "NewsLayout__NewsContainer",
  componentId: "mcl3rm-0"
})(["", "{border-bottom:1px solid ", ";}"], _CanvasFooter.CanvasFooterContainer, (0, _palette.color)("black10"));

var ExpandButton = _styledComponents.default.button.withConfig({
  displayName: "NewsLayout__ExpandButton",
  componentId: "mcl3rm-1"
})(["width:80px;height:30px;background-color:black;position:absolute;bottom:30px;right:30px;color:white;border-radius:2px;border:none;display:block;opacity:0;cursor:pointer;padding:0;transition:opacity 0.25s ease;", ";line-height:1em;&:focus{outline:0;}&:hover{color:", ";}", ";", ";"], (0, _Fonts.unica)("s14", "medium"), (0, _palette.color)("black10"), function (props) {
  return props.isHovered && props.isTruncated && "\n      opacity: 1;\n    ";
}, _Helpers.pMedia.sm(_templateObject()));

exports.ExpandButton = ExpandButton;

var NewsArticleContainer = _styledComponents.default.div.withConfig({
  displayName: "NewsLayout__NewsArticleContainer",
  componentId: "mcl3rm-2"
})(["position:relative;max-width:780px;padding:20px 30px 30px;margin:40px auto;transition:all 0.25s ease;border:1px solid transparent;", ";", ";", ";"], function (props) {
  return props.marginTop && "\n    margin-top: ".concat(props.marginTop, ";\n  ");
}, function (props) {
  return props.isTruncated && props.isHovered && "\n    border-radius: 4px;\n    border: 1px solid ".concat((0, _palette.color)("black10"), ";\n    cursor: pointer;\n  ");
}, _Helpers.pMedia.sm(_templateObject2(), function (props) {
  return props.marginTop && "\n      margin-top: ".concat(props.marginTop, ";\n    ");
}));

exports.NewsArticleContainer = NewsArticleContainer;
//# sourceMappingURL=NewsLayout.js.map