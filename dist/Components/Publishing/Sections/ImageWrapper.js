"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageWrapper = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Helpers = require("../../Helpers");

var _ViewFullscreen = require("./ViewFullscreen");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    ", " {\n      opacity: 1;\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ImageWrapper =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ImageWrapper, _React$PureComponent);

  function ImageWrapper() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ImageWrapper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ImageWrapper)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "image", undefined);

    _defineProperty(_assertThisInitialized(_this), "mounted", false);

    _defineProperty(_assertThisInitialized(_this), "state", {
      isLoaded: false
    });

    _defineProperty(_assertThisInitialized(_this), "onImageLoad", function () {
      if (_this.mounted) {
        _this.setState({
          isLoaded: true
        });
      }
    });

    return _this;
  }

  _createClass(ImageWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var img = new Image();
      /**
       * TODO: Clean this up
       * Guard against snapshot tests See: https://reactjs.org/blog/2016/11/16/react-v15.4.0.html#mocking-refs-for-snapshot-testing
       */

      try {
        var imgTag = _reactDom.default.findDOMNode(this.image);

        var imgSrc = imgTag.getAttribute("src");
        img.src = imgSrc;
      } catch (error) {
        img.src = "";
      } finally {
        img.onload = this.onImageLoad;
        this.mounted = true;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          editing = _this$props.editing,
          layout = _this$props.layout,
          linked = _this$props.linked,
          slideshowIndex = _this$props.slideshowIndex,
          imageProps = _objectWithoutProperties(_this$props, ["editing", "layout", "linked", "slideshowIndex"]);

      var className = "BlockImage__container";

      if (this.state.isLoaded || editing) {
        className = className + " image-loaded";
      }

      return _react.default.createElement(StyledImageWrapper, null, _react.default.createElement(BlockImage, _extends({
        className: className,
        ref: function ref(_ref) {
          return _this2.image = _ref;
        }
      }, imageProps)), layout !== "classic" && layout !== "news" && linked && _react.default.createElement(Fullscreen, null, _react.default.createElement(_ViewFullscreen.ViewFullscreen, {
        index: slideshowIndex
      })));
    }
  }]);

  return ImageWrapper;
}(_react.default.PureComponent);

exports.ImageWrapper = ImageWrapper;

var Fullscreen = _styledComponents.default.div.withConfig({
  displayName: "ImageWrapper__Fullscreen",
  componentId: "sc-87c4qo-0"
})(["opacity:0;transition:opacity 0.3s;"]);

var StyledImageWrapper = _styledComponents.default.div.withConfig({
  displayName: "ImageWrapper__StyledImageWrapper",
  componentId: "sc-87c4qo-1"
})(["position:relative;&:hover{", "{opacity:1;}}", ";.BlockImage__container{opacity:0;transition:opacity 1s;}.image-loaded{opacity:1;}"], Fullscreen, _Helpers.pMedia.sm(_templateObject(), Fullscreen));

var BlockImage = _styledComponents.default.img.withConfig({
  displayName: "ImageWrapper__BlockImage",
  componentId: "sc-87c4qo-2"
})(["display:block;"]);
//# sourceMappingURL=ImageWrapper.js.map