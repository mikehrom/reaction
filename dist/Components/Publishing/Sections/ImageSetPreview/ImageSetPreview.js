"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImgContainer = exports.Img = exports.FullLabel = exports.ImageSetContainer = exports.ImageSetPreview = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.find-index");

var _palette = require("@artsy/palette");

var _withFullScreen = require("../FullscreenViewer/withFullScreen");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _resizer = require("../../../../Utils/resizer");

var _ImageSetLabel = require("./ImageSetLabel");

var _class, _temp;

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

var ImageSetPreview = (0, _withFullScreen.withFullScreen)(_class = (_temp =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ImageSetPreview, _React$PureComponent);

  function ImageSetPreview() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ImageSetPreview);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ImageSetPreview)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onClick", function () {
      var _this$props = _this.props,
          fullscreenImages = _this$props.fullscreenImages,
          images = _this$props.section.images;
      var slideshowIndex = fullscreenImages && fullscreenImages.findIndex(function (img) {
        return img.type === "artwork" ? img.image === images[0].image : img.url === images[0].url;
      });

      _this.props.onViewFullscreen(slideshowIndex);
    });

    return _this;
  }

  _createClass(ImageSetPreview, [{
    key: "getImageUrl",
    value: function getImageUrl() {
      var _this$props$section = this.props.section,
          images = _this$props$section.images,
          layout = _this$props$section.layout;
      var image = images[0];
      var src = image.url ? image.url : image.image;
      var width = layout === "full" ? 800 : 200;
      return (0, _resizer.resize)(src, {
        width: width
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          color = _this$props2.color,
          _this$props2$section = _this$props2.section,
          layout = _this$props2$section.layout,
          title = _this$props2$section.title;
      var alt = title || "Open Slideshow";
      var src = this.getImageUrl();

      if (layout === "full") {
        return _react.default.createElement(ImageSetContainer, null, _react.default.createElement(FullLabel, {
          onClick: this.onClick
        }, _react.default.createElement(_ImageSetLabel.ImageSetLabel, this.props), children), _react.default.createElement(ImgContainer, null, _react.default.createElement(Img, {
          src: src,
          alt: alt
        })));
      } else {
        return _react.default.createElement(ImageSetContainer, null, _react.default.createElement(MiniWrapper, {
          alignItems: "center",
          onClick: this.onClick,
          color: color
        }, _react.default.createElement(Img, {
          src: src,
          alt: alt
        }), _react.default.createElement(_ImageSetLabel.ImageSetLabel, this.props)));
      }
    }
  }]);

  return ImageSetPreview;
}(_react.default.PureComponent), _temp)) || _class;

exports.ImageSetPreview = ImageSetPreview;

var ImageSetContainer = _styledComponents.default.div.withConfig({
  displayName: "ImageSetPreview__ImageSetContainer",
  componentId: "sc-1pp4y1-0"
})(["position:relative;width:100%;"]);

exports.ImageSetContainer = ImageSetContainer;

var FullLabel = _styledComponents.default.div.withConfig({
  displayName: "ImageSetPreview__FullLabel",
  componentId: "sc-1pp4y1-1"
})(["position:absolute;bottom:20px;left:20px;min-height:50px;width:auto;max-width:calc(100% - 80px);border-radius:2px;background:rgba(255,255,255,0.8);box-shadow:0 0 10px 0 rgba(0,0,0,0.3);cursor:pointer;&:hover{background:rgba(0,0,0,0.6);color:white;path,polygon{fill:white;}}"]);

exports.FullLabel = FullLabel;

var Img = _styledComponents.default.img.withConfig({
  displayName: "ImageSetPreview__Img",
  componentId: "sc-1pp4y1-2"
})(["height:auto;width:100%;"]);

exports.Img = Img;

var ImgContainer = _styledComponents.default.div.withConfig({
  displayName: "ImageSetPreview__ImgContainer",
  componentId: "sc-1pp4y1-3"
})([""]);

exports.ImgContainer = ImgContainer;
var MiniWrapper = (0, _styledComponents.default)(_palette.Flex).withConfig({
  displayName: "ImageSetPreview__MiniWrapper",
  componentId: "sc-1pp4y1-4"
})(["height:100px;padding:10px 0 10px 10px;border:1px solid ", ";cursor:pointer;", "{height:100%;width:auto;}"], function (props) {
  return props.color ? props.color : (0, _palette.color)("black10");
}, Img);
//# sourceMappingURL=ImageSetPreview.js.map