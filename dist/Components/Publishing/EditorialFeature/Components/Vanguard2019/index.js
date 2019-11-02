"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Vanguard2019 = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es6.regexp.split");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.function.bind");

require("core-js/modules/es6.array.map");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

var _last2 = _interopRequireDefault(require("lodash/last"));

var _palette = require("@artsy/palette");

var _VanguardCredits = require("./Components/VanguardCredits");

var _Nav = require("../../../Nav/Nav");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _underscore = require("underscore.string");

var _ArtistWrapper = require("./Components/ArtistWrapper");

var _Footer = require("./Components/Footer");

var _FrameText = require("./Components/FrameText");

var _Introduction = require("./Components/Introduction");

var _SeriesWrapper = require("./Components/SeriesWrapper");

var _TableOfContents = require("./Components/TableOfContents");

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

var Vanguard2019 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Vanguard2019, _React$Component);

  function Vanguard2019() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Vanguard2019);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Vanguard2019)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isSlideOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "validSlugs", void 0);

    _defineProperty(_assertThisInitialized(_this), "onChangeSection", function (slug) {
      var scrollTarget = document.getElementById(slug);
      scrollTarget && scrollTarget.scrollIntoView({
        behavior: "smooth"
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getValidPaths", function () {
      var validPaths = [];

      _this.props.article.relatedArticles.forEach(function (series) {
        // get subSeries slug
        validPaths.push((0, _underscore.slugify)(series.title));
        series.relatedArticles.map(function (artist) {
          // get artist slug
          validPaths.push((0, _underscore.slugify)(artist.title));
        });
      });

      _this.validSlugs = validPaths;
    });

    _defineProperty(_assertThisInitialized(_this), "onFullScreenProviderStateChange", function (state) {
      _this.setState({
        isSlideOpen: !state
      });
    });

    return _this;
  }

  _createClass(Vanguard2019, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getValidPaths();
      window.addEventListener("load", this.handleScrollOnLoad.bind(this));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("load", this.handleScrollOnLoad);
    }
  }, {
    key: "handleScrollOnLoad",
    value: function handleScrollOnLoad() {
      var scrollSlugs = window.location.pathname.split("/series/artsy-vanguard-2019/").filter(function (_ref) {
        var length = _ref.length;
        return length;
      });
      var scrollToSlug = scrollSlugs.length && (0, _last2.default)(scrollSlugs);

      if (this.validSlugs.includes(scrollToSlug)) {
        this.onChangeSection(scrollToSlug);
      } // remove slug from pathname


      window.history.replaceState({}, "", "/series/artsy-vanguard-2019");
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          article = _this$props.article,
          isMobile = _this$props.isMobile,
          isTest = _this$props.isTest;
      var isSlideOpen = this.state.isSlideOpen;
      var relatedArticles = article.relatedArticles;
      return _react.default.createElement(VanguardWrapper, {
        isSlideOpen: isSlideOpen
      }, _react.default.createElement(_Nav.Nav, {
        canFix: true,
        color: "black",
        backgroundColor: "white",
        title: article.title,
        isSlideOpen: isSlideOpen
      }), _react.default.createElement(_FrameText.VanguardFrameText, {
        isSlideOpen: isSlideOpen
      }), _react.default.createElement(_Introduction.VanguardIntroduction, {
        article: article,
        isMobile: isMobile
      }), _react.default.createElement(_TableOfContents.VanguardTableOfContents, {
        article: article,
        onChangeSection: this.onChangeSection
      }), relatedArticles && relatedArticles.map(function (subSeries, i) {
        return _react.default.createElement(_SeriesWrapper.VanguardSeriesWrapper, {
          key: subSeries.id,
          article: subSeries,
          index: i,
          isMobile: isMobile,
          onSlideshowStateChange: _this2.onFullScreenProviderStateChange,
          isTest: isTest
        });
      }), isMobile && _react.default.createElement(_VanguardCredits.VanguardCredits, {
        isMobile: isMobile
      }), _react.default.createElement(_Footer.VanguardFooter, null));
    }
  }]);

  return Vanguard2019;
}(_react.default.Component);

exports.Vanguard2019 = Vanguard2019;
var VanguardWrapper = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "Vanguard2019__VanguardWrapper",
  componentId: "sc-18g2aj7-0"
})(["overflow:", ";", "{z-index:unset;}", "{position:fixed;}"], function (_ref2) {
  var isSlideOpen = _ref2.isSlideOpen;
  return isSlideOpen && "hidden";
}, _ArtistWrapper.ArtistWrapper, _Nav.NavContainer);
//# sourceMappingURL=index.js.map