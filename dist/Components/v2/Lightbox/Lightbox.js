"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Lightbox = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.reduce");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.function.bind");

require("core-js/modules/es6.promise");

var _throttle2 = _interopRequireDefault(require("lodash/throttle"));

var _once2 = _interopRequireDefault(require("lodash/once"));

var _bind2 = _interopRequireDefault(require("lodash/bind"));

var _palette = require("@artsy/palette");

var _Artsy = require("../../../Artsy");

var Schema = _interopRequireWildcard(require("../../../Artsy/Analytics/Schema"));

var _FadeTransition = _interopRequireDefault(require("../../Animation/FadeTransition"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactTracking = _interopRequireDefault(require("react-tracking"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _user = require("../../../Utils/user");

var _CloseButton = require("./CloseButton");

var _LightboxSlider = require("./LightboxSlider");

var _dec, _dec2, _class, _class2, _class3, _temp;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

var KEYBOARD_EVENT = "keyup";
var ZOOM_PER_CLICK = 1.4;
var HIDE_ZOOM_SLIDER_AFTER = 2500;

var DeepZoomContainer = _styledComponents.default.div.withConfig({
  displayName: "Lightbox__DeepZoomContainer",
  componentId: "vbymyl-0"
})(["position:fixed !important;top:0;right:0;bottom:0;left:0;z-index:1000;background-color:", ";"], (0, _palette.color)("black100"));

var StyledImage = (0, _styledComponents.default)(_palette.Image).withConfig({
  displayName: "Lightbox__StyledImage",
  componentId: "vbymyl-1"
})(["max-width:100%;max-height:100%;"]);
var LightboxComponent = (_dec = (0, _reactTracking.default)({
  context_module: Schema.ContextModule.Zoom
}), _dec2 = (0, _reactTracking.default)({
  type: Schema.Type.Button,
  flow: Schema.Flow.ArtworkZoom,
  action_type: Schema.ActionType.Click
}), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LightboxComponent, _React$Component);

  function LightboxComponent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LightboxComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LightboxComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      element: null,
      viewer: null,
      shown: false,
      activityTimer: null,
      showZoomSlider: true,
      deepZoomRef: _react.default.createRef(),
      slider: {
        min: 0,
        max: 1,
        step: 0.001,
        value: 0
      },
      promisedDragon: null
    });

    _defineProperty(_assertThisInitialized(_this), "hide", function () {
      _this.setState({
        shown: false
      });

      if (_this.state.viewer) {
        _this.state.viewer.destroy();

        _this.state.viewer = null;
      }

      document.removeEventListener(KEYBOARD_EVENT, _this.handleKeyPress);
      clearTimeout(_this.state.activityTimer);
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (event) {
      if (event && event.key === "Escape") {
        _this.hide();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "detectActivity", (0, _throttle2.default)(function () {
      clearTimeout(_this.state.activityTimer);

      _this.setState({
        showZoomSlider: true,
        activityTimer: setTimeout(function () {
          _this.setState({
            showZoomSlider: false
          });
        }, HIDE_ZOOM_SLIDER_AFTER)
      });
    }, 500));

    _defineProperty(_assertThisInitialized(_this), "zoomBy", function (amount) {
      if (_this.state.viewer.viewport) {
        _this.state.viewer.viewport.zoomBy(amount);

        _this.state.viewer.viewport.applyConstraints();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "zoomIn", function () {
      _this.zoomBy(ZOOM_PER_CLICK);
    });

    _defineProperty(_assertThisInitialized(_this), "zoomOut", function () {
      _this.zoomBy(1 / ZOOM_PER_CLICK);
    });

    _defineProperty(_assertThisInitialized(_this), "initSeaDragon", function () {
      _this.state.promisedDragon.then(function (OpenSeaDragon) {
        var viewer = OpenSeaDragon({
          element: _this.state.deepZoomRef.current,
          debugMode: false,
          showNavigationControl: false,
          immediateRender: false,
          useCanvas: true,
          constrainDuringPan: false,
          blendTime: 0.0,
          animationTime: 1.5,
          springStiffness: 15.0,
          maxZoomPixelRatio: 1.0,
          minZoomImageRatio: 0.9,
          zoomPerClick: ZOOM_PER_CLICK,
          zoomPerScroll: 1.4,
          clickDistThreshold: 5,
          clickTimeThreshold: 300,
          visibilityRatio: 1,
          tileSources: _this.props.deepZoom,
          gestureSettingsTouch: {
            scrolltozoom: false,
            clicktozoom: true,
            pinchtozoom: true,
            flickenabled: true,
            flickminspeed: 20,
            flickmomentum: 0.4
          }
        });
        document.addEventListener(KEYBOARD_EVENT, _this.handleKeyPress);

        _this.setState({
          viewer: viewer
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSliderChanged", function (event) {
      _this.state.viewer.viewport.zoomTo(event.target.value);
    });

    _defineProperty(_assertThisInitialized(_this), "onZoomChanged", function () {
      if (!_this.state.viewer) return;

      _this.setState({
        slider: _objectSpread({}, _this.state.slider, {
          min: _this.state.viewer.viewport.getMinZoom(),
          max: _this.state.viewer.viewport.getMaxZoom(),
          value: _this.state.viewer.viewport.getZoom()
        })
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderPortal", function () {
      return _this.state.element ? _reactDom.default.createPortal(_this.renderLightbox(), _this.state.element) : null;
    });

    _defineProperty(_assertThisInitialized(_this), "postRender", function () {
      _this.state.viewer.addHandler("zoom", (0, _bind2.default)((0, _throttle2.default)(_this.onZoomChanged, 50), _assertThisInitialized(_this)));

      _this.state.viewer.addHandler("tile-drawn", (0, _once2.default)(function () {
        _this.setState({
          slider: _objectSpread({}, _this.state.slider, {
            min: _this.state.viewer.viewport.getMinZoom(),
            max: _this.state.viewer.viewport.getMaxZoom(),
            value: _this.state.viewer.viewport.getHomeZoom()
          })
        });
      }));

      _this.detectActivity();
    });

    return _this;
  }

  _createClass(LightboxComponent, [{
    key: "show",
    value: function show(_event) {
      this.setState({
        shown: true,
        showZoomSlider: true
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var element = document.getElementById(this.props.lightboxId);

      if (element) {
        this.setState({
          element: element,
          // FIXME: convert to import('openseadragon) once force supports it
          promisedDragon: Promise.resolve(require("openseadragon"))
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.hide();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_prevProps, prevState) {
      if (this.state.shown === true && prevState.shown === false) {
        this.initSeaDragon();
      }

      if (this.state.viewer && !prevState.viewer) {
        this.postRender();
      }
    }
  }, {
    key: "renderLightbox",
    value: function renderLightbox() {
      var _this2 = this;

      var slider = this.state.slider;
      return _react.default.createElement(_FadeTransition.default, {
        in: this.state.shown,
        mountOnEnter: true,
        unmountOnExit: true,
        timeout: {
          enter: 250,
          exit: 300
        }
      }, _react.default.createElement(DeepZoomContainer, {
        onMouseMove: this.detectActivity,
        onWheel: this.detectActivity,
        onTouchStart: this.detectActivity,
        onTouchMove: this.detectActivity,
        ref: this.state.deepZoomRef
        /* TODO Update SC */

      }, _react.default.createElement(_palette.Box, {
        position: "absolute",
        top: (0, _palette.space)(3) / 2,
        right: (0, _palette.space)(3) / 2,
        zIndex: 1001
      }, _react.default.createElement(_CloseButton.CloseButton, {
        onClick: function onClick() {
          return _this2.hide();
        }
      })), _react.default.createElement(_palette.Flex, {
        position: "absolute",
        width: "100%",
        justifyContent: "center",
        zIndex: 1001,
        bottom: (0, _palette.space)(2)
      }, _react.default.createElement(_FadeTransition.default, {
        in: this.state.showZoomSlider,
        timeout: {
          enter: 50,
          exit: 150
        }
      }, _react.default.createElement(_LightboxSlider.Slider, {
        min: slider.min,
        max: slider.max,
        step: slider.step,
        value: slider.value,
        onChange: this.onSliderChanged,
        onZoomInClicked: function onZoomInClicked() {
          return _this2.zoomIn();
        },
        onZoomOutClicked: function onZoomOutClicked() {
          return _this2.zoomOut();
        }
      })))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          enabled = _this$props.enabled,
          isDefault = _this$props.isDefault,
          imageAlt = _this$props.imageAlt,
          src = _this$props.src,
          initialHeight = _this$props.initialHeight,
          user = _this$props.user;
      var height = initialHeight || "auto";
      var isAdmin = (0, _user.userIsAdmin)(user); // Only render client-side

      if (!this.state.element) {
        return _react.default.createElement(_palette.Flex, {
          justifyContent: "center",
          height: height,
          alignItems: "center"
        }, _react.default.createElement(StyledImage, {
          style: {
            cursor: enabled ? "zoom-in" : "auto"
          },
          alt: imageAlt,
          src: src,
          preventRightClick: true
        }));
      }

      return _react.default.createElement(_react.default.Fragment, null, this.renderPortal(), _react.default.createElement(_palette.Flex, {
        justifyContent: "center",
        alignItems: "center",
        height: height,
        onClick: enabled ? this.show.bind(this) : null
      }, _react.default.createElement(StyledImage, {
        style: {
          cursor: enabled ? "zoom-in" : "auto"
        },
        src: src,
        alt: imageAlt,
        "data-type": "artwork-image",
        "data-is-default": isDefault,
        preventRightClick: !isAdmin
      })));
    }
  }]);

  return LightboxComponent;
}(_react.default.Component), _defineProperty(_class3, "defaultProps", {
  enabled: true,
  lightboxId: "lightbox-container"
}), _temp), (_applyDecoratedDescriptor(_class2.prototype, "show", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "show"), _class2.prototype)), _class2)) || _class);
var Lightbox = (0, _Artsy.withSystemContext)(LightboxComponent);
exports.Lightbox = Lightbox;
//# sourceMappingURL=Lightbox.js.map