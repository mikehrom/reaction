"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrowButton = exports.BaseCarousel = exports.SmallCarousel = exports.LargeCarousel = exports.Carousel = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.map");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

var _palette = require("@artsy/palette");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _Responsive = require("../../Utils/Responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var Carousel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Carousel, _React$Component);

  function Carousel() {
    _classCallCheck(this, Carousel);

    return _possibleConstructorReturn(this, _getPrototypeOf(Carousel).apply(this, arguments));
  }

  _createClass(Carousel, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_palette.Box, {
        width: "100%"
      }, _react.default.createElement(_Responsive.Media, {
        greaterThan: "xs"
      }, _react.default.createElement(LargeCarousel, this.props)), _react.default.createElement(_Responsive.Media, {
        at: "xs"
      }, _react.default.createElement(SmallCarousel, this.props)));
    }
  }]);

  return Carousel;
}(_react.default.Component);

exports.Carousel = Carousel;

_defineProperty(Carousel, "defaultProps", {
  height: "300px",
  oneSlideVisible: false
});

var LargeCarousel = function LargeCarousel(props) {
  return _react.default.createElement(BaseCarousel, _extends({
    showArrows: true
  }, props, {
    options: _objectSpread({
      cellAlign: "left",
      contain: true,
      draggable: false,
      freeScroll: false,
      groupCells: true,
      pageDots: false,
      wrapAround: false
    }, props.options)
  }));
};

exports.LargeCarousel = LargeCarousel;

var SmallCarousel = function SmallCarousel(props) {
  // Only render pageDots and enable draggable if more than one slide
  var hasMultipleSlides = props.data.length > 1;
  return _react.default.createElement(BaseCarousel, _extends({
    showArrows: false
  }, props, {
    options: _objectSpread({
      cellAlign: "left",
      draggable: hasMultipleSlides,
      freeScroll: true,
      contain: true,
      friction: 0.3,
      pageDots: hasMultipleSlides,
      prevNextButtons: false,
      wrapAround: false
    }, props.options)
  }));
};

exports.SmallCarousel = SmallCarousel;

var BaseCarousel =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(BaseCarousel, _React$Component2);

  /**
   * Options to pass to underlying flickity component
   */
  function BaseCarousel(props) {
    var _this;

    _classCallCheck(this, BaseCarousel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BaseCarousel).call(this, props)); // Flickity carousel options can be overriden via `props.options`

    _defineProperty(_assertThisInitialized(_this), "state", {
      currentSlideIndex: 0,
      lastItemVisible: true,
      isMounted: false
      /**
       * A reference to the Flickity instance
       */

    });

    _defineProperty(_assertThisInitialized(_this), "flickity", null);

    _defineProperty(_assertThisInitialized(_this), "carouselRef", null);

    _defineProperty(_assertThisInitialized(_this), "options", {
      prevNextButtons: false
    });

    _defineProperty(_assertThisInitialized(_this), "allowPreventDefault", function () {
      // Fix for flickity bug introduced in iOS 13 https://github.com/metafizzy/flickity/issues/740
      var startX;

      _this.carouselRef.ontouchstart = function (e) {
        startX = e.touches[0].clientX;
      };

      _this.carouselRef.ontouchmove = function (e) {
        if (Math.abs(e.touches[0].clientX - startX) > 5 && e.cancelable) {
          e.preventDefault();
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleSlideChange", function (index) {
      _this.setState({
        currentSlideIndex: index
      });
    });

    _defineProperty(_assertThisInitialized(_this), "checkLastItemVisible", function () {
      if (_this.flickity && _this.flickity.selectedElements) {
        var _lastItemVisible = _this.flickity.selectedElements.includes( // FIXME: Undocumented API. Is there a way this can be achieved with
        // something public and commonly available?
        _this.flickity.getLastCell().element);

        return _lastItemVisible;
      } else {
        return true;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderLeftArrow", function () {
      var _this$props = _this.props,
          arrowPosition = _this$props.arrowPosition,
          onArrowClick = _this$props.onArrowClick,
          renderLeftArrow = _this$props.renderLeftArrow,
          showArrows = _this$props.showArrows,
          height = _this$props.height;

      if (!showArrows) {
        return null;
      }

      var leftPosition = arrowPosition != null ? arrowPosition : -(0, _palette.space)(4);
      var showLeftArrow = _this.state.currentSlideIndex !== 0 || _this.options.wrapAround === true;

      var Arrow = function Arrow() {
        return _react.default.createElement(ArrowWrapper, {
          left: leftPosition,
          showArrow: showLeftArrow
        }, _react.default.createElement(ArrowButton, {
          height: height,
          onClick: function onClick() {
            _this.flickity.previous();

            if (onArrowClick) {
              onArrowClick({
                state: _this.state,
                props: _this.props,
                flickity: _this.flickity
              });
            }
          }
        }, _react.default.createElement(_palette.ChevronIcon, {
          height: 30,
          direction: "left",
          fill: "black100",
          width: 30
        })));
      }; // Override default arrow display if custom render callback has been passed


      if (renderLeftArrow) {
        return renderLeftArrow({
          Arrow: Arrow,
          currentSlideIndex: _this.state.currentSlideIndex,
          flickity: _this.flickity
        });
      }

      return _react.default.createElement(Arrow, null);
    });

    _defineProperty(_assertThisInitialized(_this), "renderRightArrow", function () {
      var _this$props2 = _this.props,
          arrowPosition = _this$props2.arrowPosition,
          onArrowClick = _this$props2.onArrowClick,
          renderRightArrow = _this$props2.renderRightArrow,
          showArrows = _this$props2.showArrows,
          height = _this$props2.height;

      if (!showArrows) {
        return null;
      }

      var rightPosition = arrowPosition != null ? arrowPosition : -(0, _palette.space)(4);
      var showRightArrow = !_this.checkLastItemVisible() || _this.options.wrapAround === true;

      var Arrow = function Arrow() {
        return _react.default.createElement(ArrowWrapper, {
          right: rightPosition,
          showArrow: showRightArrow
        }, _react.default.createElement(ArrowButton, {
          height: height,
          onClick: function onClick() {
            _this.flickity.next();

            if (onArrowClick) {
              onArrowClick({
                state: _this.state,
                props: _this.props,
                flickity: _this.flickity
              });
            }
          }
        }, _react.default.createElement(_palette.ChevronIcon, {
          height: 30,
          direction: "right",
          fill: "black100",
          width: 30
        })));
      }; // Override default arrow display if custom render callback has been passed


      if (renderRightArrow) {
        return renderRightArrow({
          Arrow: Arrow,
          currentSlideIndex: _this.state.currentSlideIndex,
          flickity: _this.flickity
        });
      }

      return _react.default.createElement(Arrow, null);
    });

    _this.options = _objectSpread({}, _this.options, props.options);
    return _this;
  }

  _createClass(BaseCarousel, [{
    key: "componentDidMount",

    /**
     * Since Flickity doesn't support SSR rendering, we need to load it once the
     * client has mounted. During the server-side pass we use a Flex wrapper.
     *
     * In fact, the flickity library can't even be loaded in environments that do
     * not have a global `window` object. Thus we need to lazy load it here with
     * an inline `require` statement.
     */
    value: function componentDidMount() {
      var _this2 = this;

      var setCarouselRef = this.props.setCarouselRef;

      var Flickity = require("flickity");

      this.flickity = new Flickity(this.carouselRef, this.options);
      this.setState({
        isMounted: true
      }, function () {
        if (setCarouselRef) {
          setCarouselRef(_this2.flickity);
        }

        _this2.flickity.on("select", _this2.handleSlideChange);

        _this2.allowPreventDefault();
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.flickity) {
        this.flickity.off("select", this.handleSlideChange);
        this.flickity.destroy();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var isMounted = this.state.isMounted;
      var _this$props3 = this.props,
          data = _this$props3.data,
          height = _this$props3.height,
          oneSlideVisible = _this$props3.oneSlideVisible,
          render = _this$props3.render; // FIXME: During SSR pass want to hide other images. Work around for lack
      // of SSR support in Flickity. This will only render the first 6 slides on SRR pass.

      var isServer = typeof window === "undefined";
      var carouselImages;

      if (isServer && oneSlideVisible) {
        carouselImages = [data[0]];
      } else if (isServer && data.length > 5) {
        carouselImages = data.slice(0, 6);
      } else {
        carouselImages = data;
      }

      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Flex, {
        flexDirection: "row",
        position: "relative",
        justifyContent: "space-around",
        alignItems: "center",
        height: height
      }, this.renderLeftArrow(), _react.default.createElement(CarouselContainer, {
        height: height,
        isMounted: isMounted
      }, _react.default.createElement(FlickityCarousel, {
        isMounted: isMounted,
        ref: function ref(c) {
          return _this3.carouselRef = c;
        }
      }, carouselImages.map(function (slide, slideIndex) {
        return _react.default.createElement(_react.Fragment, {
          key: slideIndex
        }, render(slide, slideIndex));
      }))), this.renderRightArrow()));
    }
  }]);

  return BaseCarousel;
}(_react.default.Component);

exports.BaseCarousel = BaseCarousel;

var FlickityCarousel = _styledComponents.default.div.withConfig({
  displayName: "Carousel__FlickityCarousel",
  componentId: "sc-1swuwer-0"
})(["display:", ";"], function (props) {
  return props.isMounted ? "block" : "flex";
});

var CarouselContainer = _styledComponents.default.div.withConfig({
  displayName: "Carousel__CarouselContainer",
  componentId: "sc-1swuwer-1"
})(["width:100%;position:relative;overflow:", ";.flickity-viewport{overflow:hidden;width:100%;}.flickity-slider{img{user-select:none;}}.flickity-page-dots{text-align:center;height:0;padding-top:", "px;.dot{width:4px;height:4px;border-radius:100%;display:inline-block;margin:", "px;background-color:", ";}.dot.is-selected{background-color:", ";}}", ";"], function (props) {
  return props.isMounted ? "visible" : "hidden";
}, (0, _palette.space)(1), (0, _palette.space)(0.5), (0, _palette.color)("black10"), (0, _palette.color)("black100"), function (props) {
  if (props.height) {
    return "\n        height: ".concat(props.height, ";\n      ");
  }
});

var ArrowButton = (0, _styledComponents.default)(_palette.Flex).withConfig({
  displayName: "Carousel__ArrowButton",
  componentId: "sc-1swuwer-2"
})(["position:relative;cursor:pointer;display:flex;align-items:center;user-select:none;opacity:0.3;transition:opacity 0.25s;height:", ";&:hover{opacity:1;}"], function (p) {
  return p.height || "200px";
});
exports.ArrowButton = ArrowButton;

var ArrowWrapper = _styledComponents.default.div.withConfig({
  displayName: "Carousel__ArrowWrapper",
  componentId: "sc-1swuwer-3"
})(["position:absolute;top:50%;transform:translateY(-50%);min-width:30px;z-index:10;transition:opacity 0.25s;opacity:", ";pointer-events:", ";height:100%;", ";", ";"], function (props) {
  return props.showArrow ? 1 : 0;
}, function (props) {
  return props.showArrow ? "auto" : "none";
}, _styledSystem.left, _styledSystem.right);
//# sourceMappingURL=Carousel.js.map