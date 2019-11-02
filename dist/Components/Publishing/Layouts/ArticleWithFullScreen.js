"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSlideshowImagesFromArticle = exports.default = exports.ArticleWithFullScreen = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es6.array.map");

var _FullscreenViewer = require("../Sections/FullscreenViewer/FullscreenViewer");

var _withFullScreen = require("../Sections/FullscreenViewer/withFullScreen");

var _react = _interopRequireDefault(require("react"));

var _reactTracking = _interopRequireDefault(require("react-tracking"));

var _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ArticleWithFullScreen = (0, _withFullScreen.withFullScreen)(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ArticleWithFullScreen, _React$Component);

  function ArticleWithFullScreen(props) {
    var _this;

    _classCallCheck(this, ArticleWithFullScreen);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ArticleWithFullScreen).call(this, props));
    var fullscreenImages = getSlideshowImagesFromArticle(props.article);
    _this.state = {
      fullscreenImages: fullscreenImages
    };
    return _this;
  }

  _createClass(ArticleWithFullScreen, [{
    key: "render",
    value: function render() {
      var fullscreenImages = this.state.fullscreenImages;
      var _this$props = this.props,
          closeViewer = _this$props.closeViewer,
          slideIndex = _this$props.slideIndex,
          viewerIsOpen = _this$props.viewerIsOpen;
      return _react.default.createElement("div", null, this.props.children, _react.default.createElement(_FullscreenViewer.FullscreenViewer, {
        onClose: closeViewer,
        show: viewerIsOpen,
        slideIndex: slideIndex,
        images: fullscreenImages
      }));
    }
  }]);

  return ArticleWithFullScreen;
}(_react.default.Component), _defineProperty(_class2, "defaultProps", {
  isMobile: false,
  isSuper: false,
  article: {},
  isTruncated: false,
  showTooltips: false
}), _temp)) || _class;

exports.ArticleWithFullScreen = ArticleWithFullScreen;

var _default = (0, _reactTracking.default)()(ArticleWithFullScreen);

exports.default = _default;

var getSlideshowImagesFromArticle = function getSlideshowImagesFromArticle(article) {
  var fullscreenImages = [];
  var sectionIndex = 0;
  article.sections.map(function (section) {
    if (["image_collection", "image_set"].includes(section.type)) {
      section.images.map(function (image) {
        var img = _objectSpread({}, image, {
          setTitle: section.title,
          index: sectionIndex
        });

        fullscreenImages.push(img);
        sectionIndex = sectionIndex + 1;
      });
    }
  });
  return fullscreenImages;
};

exports.getSlideshowImagesFromArticle = getSlideshowImagesFromArticle;
//# sourceMappingURL=ArticleWithFullScreen.js.map