"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BannerWrapper = exports.CtaCopy = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

var _debounce2 = _interopRequireDefault(require("lodash/debounce"));

var _querystring = _interopRequireDefault(require("querystring"));

var _react = _interopRequireWildcard(require("react"));

var _MinimalCtaBanner = require("../../MinimalCtaBanner");

var _Constants = require("../Constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var CtaCopy;
exports.CtaCopy = CtaCopy;

(function (CtaCopy) {
  CtaCopy["news"] = "Sign up for the best in art world news";
  CtaCopy["default"] = "Sign up to get our best stories everyday";
})(CtaCopy || (exports.CtaCopy = CtaCopy = {}));

var BannerWrapper =
/*#__PURE__*/
function (_Component) {
  _inherits(BannerWrapper, _Component);

  function BannerWrapper() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BannerWrapper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BannerWrapper)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      showCtaBanner: false
    });

    _defineProperty(_assertThisInitialized(_this), "lastScrollPosition", 0);

    return _this;
  }

  _createClass(BannerWrapper, [{
    key: "handleScroll",
    value: function handleScroll() {
      var newScrollPosition = window.scrollY;
      var showCtaBanner = this.state.showCtaBanner;

      if (newScrollPosition <= this.lastScrollPosition) {
        // scrolling up the page
        if (this.state.showCtaBanner) {
          showCtaBanner = false;
        }
      } else {
        // scrolling down the page
        if (!this.state.showCtaBanner) {
          showCtaBanner = true;
        }
      }

      if (this.state.showCtaBanner !== showCtaBanner) {
        this.setState({
          showCtaBanner: showCtaBanner
        });
      }

      this.lastScrollPosition = newScrollPosition;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (window) {
        window.addEventListener("scroll", (0, _debounce2.default)(function () {
          return _this2.handleScroll();
        }, 10));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$article = this.props.article,
          layout = _this$props$article.layout,
          slug = _this$props$article.slug;
      var copy = layout === "news" ? CtaCopy.news : CtaCopy.default;
      var backgroundColor = layout === "video" ? "white" : "black";
      var textColor = layout === "video" ? "black" : "white";
      return _react.default.createElement(_MinimalCtaBanner.MinimalCtaBanner, {
        href: "/sign_up?".concat(_querystring.default.stringify({
          action: "editorialSignup",
          intent: "viewed editorial",
          trigger: "click",
          contextModule: "auth minimal cta banner",
          "redirect-to": (0, _Constants.getArticleFullHref)(slug)
        })),
        height: "55px",
        copy: copy,
        position: "bottom",
        textColor: textColor,
        backgroundColor: backgroundColor,
        show: this.state.showCtaBanner
      });
    }
  }]);

  return BannerWrapper;
}(_react.Component);

exports.BannerWrapper = BannerWrapper;
//# sourceMappingURL=Banner.js.map