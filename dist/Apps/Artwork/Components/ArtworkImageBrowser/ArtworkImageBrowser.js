"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmallArtworkImageBrowser = exports.LargeArtworkImageBrowser = exports.ArtworkImageBrowser = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _v = require("../../../../Components/v2");

var _Carousel = require("../../../../Components/v2/Carousel");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Responsive = require("../../../../Utils/Responsive");

var _palette = require("@artsy/palette");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ArtworkImageBrowser = function ArtworkImageBrowser(props) {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Responsive.Media, {
    at: "xs"
  }, _react.default.createElement(SmallArtworkImageBrowser, props)), _react.default.createElement(_Responsive.Media, {
    greaterThan: "xs"
  }, _react.default.createElement(LargeArtworkImageBrowser, props)));
};

exports.ArtworkImageBrowser = ArtworkImageBrowser;

var LargeArtworkImageBrowser =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LargeArtworkImageBrowser, _React$Component);

  function LargeArtworkImageBrowser() {
    _classCallCheck(this, LargeArtworkImageBrowser);

    return _possibleConstructorReturn(this, _getPrototypeOf(LargeArtworkImageBrowser).apply(this, arguments));
  }

  _createClass(LargeArtworkImageBrowser, [{
    key: "render",
    value: function render() {
      var hasMultipleImages = this.props.images.length > 1;
      var _this$props = this.props,
          imageAlt = _this$props.imageAlt,
          images = _this$props.images,
          setCarouselRef = _this$props.setCarouselRef; // FIXME: During SSR pass want to hide other images. Work around for lack
      // of SSR support in Flickity.

      var carouselImages = typeof window === "undefined" ? [images[0]] : images;
      var options = {
        prevNextButtons: false,
        wrapAround: true,
        pageDots: hasMultipleImages,
        cellAlign: "left",
        draggable: false,
        lazyLoad: true // The maxHeight was added in order to fix how Google bot renders the page

      };
      return _react.default.createElement(Container, null, _react.default.createElement(_Carousel.BaseCarousel, {
        showArrows: hasMultipleImages,
        options: options,
        oneSlideVisible: true,
        height: "auto",
        setCarouselRef: setCarouselRef,
        data: carouselImages,
        renderLeftArrow: function renderLeftArrow(_ref) {
          var flickity = _ref.flickity;
          return _react.default.createElement(_palette.Col, {
            sm: 1
          }, _react.default.createElement(ArrowButton, {
            direction: "left",
            onClick: function onClick() {
              // FIXME: Flickity.prototype.previous typing is missing second
              // `isInstant` method.
              // @ts-ignore
              flickity.previous(false, true);
            }
          }));
        },
        renderRightArrow: function renderRightArrow(_ref2) {
          var flickity = _ref2.flickity;
          return _react.default.createElement(_palette.Col, {
            sm: 1
          }, _react.default.createElement(ArrowButton, {
            direction: "right",
            onClick: function onClick() {
              // FIXME: Flickity.prototype.next typing is missing second
              // `isInstant` method.
              // @ts-ignore
              flickity.next(false, true);
            }
          }));
        } // maxHeight is needed for google search indexing
        ,
        render: function render(image) {
          return _react.default.createElement(_palette.Flex, {
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            px: hasMultipleImages ? [2, 2, 0] : 0,
            height: "60vh",
            maxHeight: "2000px"
          }, _react.default.createElement(_v.Lightbox, {
            imageAlt: imageAlt,
            deepZoom: image.deepZoom,
            enabled: image.is_zoomable,
            isDefault: image.is_default,
            src: image.uri,
            initialHeight: "60vh",
            maxHeight: "2000px"
          }));
        }
      }));
    }
  }]);

  return LargeArtworkImageBrowser;
}(_react.default.Component);

exports.LargeArtworkImageBrowser = LargeArtworkImageBrowser;

var SmallArtworkImageBrowser =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(SmallArtworkImageBrowser, _React$Component2);

  function SmallArtworkImageBrowser() {
    _classCallCheck(this, SmallArtworkImageBrowser);

    return _possibleConstructorReturn(this, _getPrototypeOf(SmallArtworkImageBrowser).apply(this, arguments));
  }

  _createClass(SmallArtworkImageBrowser, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          images = _this$props2.images,
          imageAlt = _this$props2.imageAlt,
          setCarouselRef = _this$props2.setCarouselRef; // FIXME: During SSR pass want to hide other images. Work around for lack
      // of SSR support in Flickity.

      var carouselImages = typeof window === "undefined" ? [images[0]] : images;
      var hasMultipleImages = this.props.images.length > 1;
      var options = {
        prevNextButtons: false,
        wrapAround: true,
        draggable: hasMultipleImages,
        groupCells: 1,
        pageDots: hasMultipleImages // The maxHeight was added in order to fix how Google bot renders the page

      };
      return _react.default.createElement(Container, null, _react.default.createElement(_Carousel.BaseCarousel, {
        options: options,
        data: carouselImages,
        oneSlideVisible: true,
        setCarouselRef: setCarouselRef,
        render: function render(image) {
          return _react.default.createElement(_palette.Flex, {
            flexDirection: "column",
            justifyContent: "center",
            px: 1,
            width: "100%"
          }, _react.default.createElement(_v.Lightbox, {
            imageAlt: imageAlt,
            deepZoom: image.deepZoom,
            enabled: image.is_zoomable,
            isDefault: image.is_default,
            src: image.uri,
            maxHeight: "2000px",
            initialHeight: "45vh"
          }));
        }
      }));
    }
  }]);

  return SmallArtworkImageBrowser;
}(_react.default.Component);

exports.SmallArtworkImageBrowser = SmallArtworkImageBrowser;

var ArrowButton = function ArrowButton(_ref3) {
  var direction = _ref3.direction,
      onClick = _ref3.onClick;
  return _react.default.createElement(ArrowButtonContainer, {
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    alignItems: direction === "left" ? "flex-start" : "flex-end",
    onClick: onClick
  }, _react.default.createElement(_palette.ChevronIcon, {
    direction: direction,
    width: 30,
    height: 30
  }));
};

var ArrowButtonContainer = (0, _styledComponents.default)(_palette.Flex).withConfig({
  displayName: "ArtworkImageBrowser__ArrowButtonContainer",
  componentId: "m3k7ud-0"
})(["cursor:pointer;opacity:0.1;transition:opacity 0.25s;&:hover{opacity:1;}"]);
var Container = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "ArtworkImageBrowser__Container",
  componentId: "m3k7ud-1"
})(["user-select:none;.flickity-viewport{overflow:hidden;}.flickity-slider > div{margin-left:5px;margin-right:5px;width:100%;}.flickity-page-dots{text-align:center;height:0;padding-top:", "px;.dot{width:4px;height:4px;border-radius:100%;display:inline-block;margin:", "px;background-color:", ";}.dot.is-selected{background-color:", ";}}"], (0, _palette.space)(1), (0, _palette.space)(0.5), (0, _palette.color)("black10"), (0, _palette.color)("black100"));

var PageIndicator = _styledComponents.default.span.withConfig({
  displayName: "ArtworkImageBrowser__PageIndicator",
  componentId: "m3k7ud-2"
})(["&::after{content:\"\u2022\";}"]); // @ts-ignore


PageIndicator.displayName = "PageIndicator";
//# sourceMappingURL=ArtworkImageBrowser.js.map