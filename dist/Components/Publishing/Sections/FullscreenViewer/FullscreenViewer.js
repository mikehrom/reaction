"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FullscreenViewerContainer = exports.FullscreenViewer = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

var _map2 = _interopRequireDefault(require("lodash/map"));

var _Helpers = require("../../../Helpers");

var _Icon = _interopRequireDefault(require("../../../Icon"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactSlick = _interopRequireDefault(require("react-slick"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Slide = require("./Slide");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  position: absolute;\n  height: 100vh;\n  top: 0;\n  box-sizing: border-box;\n  ", ";\n  ", ";\n  ", " {\n    z-index: 10;\n    cursor: pointer;\n    padding: 60px;\n  };\n  ", ";\n"]);

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

var FullscreenViewer =
/*#__PURE__*/
function (_Component) {
  _inherits(FullscreenViewer, _Component);

  function FullscreenViewer(props) {
    var _this;

    _classCallCheck(this, FullscreenViewer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FullscreenViewer).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "slider", void 0);

    _defineProperty(_assertThisInitialized(_this), "handleKeydown", function (e) {
      if (e.keyCode === 27) {
        _this.close(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toggleCaption", function () {
      _this.setState({
        isCaptionOpen: !_this.state.isCaptionOpen
      });
    });

    _defineProperty(_assertThisInitialized(_this), "close", function (e) {
      _this.props.onClose();
    });

    _defineProperty(_assertThisInitialized(_this), "renderImageComponents", function () {
      var images = _this.props.images;
      return (0, _map2.default)(images, function (section, i) {
        return _react.default.createElement(_Slide.Slide, {
          isCaptionOpen: _this.state.isCaptionOpen,
          section: section,
          index: i + 1,
          total: images.length,
          key: i
        });
      });
    });

    _this.state = {
      isCaptionOpen: false
    };
    return _this;
  }

  _createClass(FullscreenViewer, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.slider) {
        this.slider.innerSlider.list.setAttribute("tabindex", 0);
        this.slider.innerSlider.list.focus();
      }
    }
  }, {
    key: "getChildContext",
    value: function getChildContext() {
      return {
        onToggleCaption: this.toggleCaption
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var sliderSettings = {
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: true,
        lazyLoad: "ondemand",
        draggable: true,
        nextArrow: _react.default.createElement(RightArrow, null),
        prevArrow: _react.default.createElement(LeftArrow, null),
        initialSlide: this.props.slideIndex
      };
      return _react.default.createElement("div", null, this.props.show && _react.default.createElement(FullscreenViewerContainer, {
        onKeyDown: this.handleKeydown
      }, _react.default.createElement(_reactSlick.default, _extends({}, sliderSettings, {
        ref: function ref(slider) {
          return _this2.slider = slider;
        }
      }), this.renderImageComponents()), _react.default.createElement(Close, {
        onClick: this.close
      }, _react.default.createElement(_Icon.default, {
        name: "close",
        color: "gray",
        fontSize: "24px"
      }))));
    }
  }]);

  return FullscreenViewer;
}(_react.Component);

exports.FullscreenViewer = FullscreenViewer;

_defineProperty(FullscreenViewer, "childContextTypes", {
  onToggleCaption: _propTypes.default.func
});

var LeftArrow = function LeftArrow(props) {
  return _react.default.createElement(NavArrow, {
    direction: "left",
    onClick: props.onClick
  }, _react.default.createElement(_Icon.default, {
    name: "chevron-left",
    color: "black",
    fontSize: "24px"
  }));
};

var RightArrow = function RightArrow(props) {
  return _react.default.createElement(NavArrow, {
    direction: "right",
    onClick: props.onClick
  }, _react.default.createElement(_Icon.default, {
    name: "chevron-right",
    color: "black",
    fontSize: "24px"
  }));
};

var FullscreenViewerContainer = _styledComponents.default.div.withConfig({
  displayName: "FullscreenViewer__FullscreenViewerContainer",
  componentId: "wa7mcn-0"
})(["width:100vw;height:100vh;overflow:hidden;position:fixed;z-index:1070;top:0;left:0;background-color:white;"]);

exports.FullscreenViewerContainer = FullscreenViewerContainer;

var Close = _styledComponents.default.div.withConfig({
  displayName: "FullscreenViewer__Close",
  componentId: "wa7mcn-1"
})(["position:absolute;right:0;top:0;margin:20px;cursor:pointer;"]);

var div = _styledComponents.default.div;
var NavArrow = div(_templateObject(), function (props) {
  return props.direction === "left" ? "left: 0px;" : "";
}, function (props) {
  return props.direction === "right" ? "right: 0px;" : "";
}, _Icon.default, _Helpers.pMedia.sm(_templateObject2()));
//# sourceMappingURL=FullscreenViewer.js.map