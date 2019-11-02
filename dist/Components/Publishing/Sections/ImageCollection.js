"use strict";

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageCollection = exports.ImageCollectionItem = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.array.find-index");

require("core-js/modules/es6.array.map");

var _find2 = _interopRequireDefault(require("lodash/find"));

var _react = _interopRequireDefault(require("react"));

var _reactSizeme = _interopRequireDefault(require("react-sizeme"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _fillwidth = _interopRequireDefault(require("../../../Utils/fillwidth"));

var _Helpers = require("../../Helpers");

var _Constants = require("../Constants");

var _Artwork = require("./Artwork");

var _Image = require("./Image");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    margin-bottom: 10px;\n    width: 100%;\n\n    img {\n      width: 100%;\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    flex-direction: column;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ImageCollectionComponent =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ImageCollectionComponent, _React$PureComponent);

  function ImageCollectionComponent() {
    _classCallCheck(this, ImageCollectionComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(ImageCollectionComponent).apply(this, arguments));
  }

  _createClass(ImageCollectionComponent, [{
    key: "renderImages",
    value: function renderImages(dimensions) {
      var _this$props = this.props,
          articleLayout = _this$props.articleLayout,
          color = _this$props.color,
          gutter = _this$props.gutter,
          images = _this$props.images,
          sectionLayout = _this$props.sectionLayout,
          width = _this$props.size.width,
          fullscreenImages = _this$props.fullscreenImages;
      var renderedImages = images.map(function (image, i) {
        var url = image.url || image.image;
        var imageSize;

        if (width <= 600 || dimensions.length === 1) {
          imageSize = {};
        } else {
          imageSize = (0, _find2.default)(dimensions, ["__id", url]);
        }

        var slideshowIndex = fullscreenImages && fullscreenImages.findIndex(function (img) {
          return img.url === image.url;
        });
        var renderedImage;

        if (image.type === "image") {
          renderedImage = _react.default.createElement(_Image.Image, {
            image: image,
            color: color,
            sectionLayout: sectionLayout,
            layout: articleLayout,
            width: imageSize.width,
            height: imageSize.height,
            slideshowIndex: slideshowIndex
          });
        } else if (image.type === "artwork") {
          renderedImage = _react.default.createElement(_Artwork.Artwork, {
            artwork: image,
            color: color,
            sectionLayout: sectionLayout,
            layout: articleLayout,
            width: imageSize.width,
            height: imageSize.height,
            slideshowIndex: slideshowIndex
          });
        } else {
          return false;
        }

        var margin = i === dimensions.length - 1 ? 0 : gutter;
        return _react.default.createElement(ImageCollectionItem, {
          key: i,
          margin: margin,
          width: imageSize.width
        }, renderedImage);
      });
      return renderedImages;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          gutter = _this$props2.gutter,
          images = _this$props2.images,
          size = _this$props2.size,
          targetHeight = _this$props2.targetHeight;
      var dimensions = (0, _fillwidth.default)(images, size.width, gutter, targetHeight);
      var renderedImages = this.renderImages(dimensions);
      return _react.default.createElement(ImageCollectionContainer, null, renderedImages);
    }
  }]);

  return ImageCollectionComponent;
}(_react.default.PureComponent);

_defineProperty(ImageCollectionComponent, "defaultProps", {
  size: {
    width: 680
  }
});

var ImageCollectionContainer = _styledComponents.default.div.withConfig({
  displayName: "ImageCollection__ImageCollectionContainer",
  componentId: "begb1k-0"
})(["display:flex;width:100%;justify-content:center;", ";"], _Helpers.pMedia.xs(_templateObject()));

var ImageCollectionItem = _styledComponents.default.div.withConfig({
  displayName: "ImageCollection__ImageCollectionItem",
  componentId: "begb1k-1"
})(["margin-right:", ";width:", ";max-width:100%;img{max-width:100%;height:auto;}", ";"], function (props) {
  return props.margin ? props.margin + "px" : "0px";
}, function (props) {
  return props.width ? props.width + "px" : "100%";
}, _Helpers.pMedia.xs(_templateObject2()));

exports.ImageCollectionItem = ImageCollectionItem;
var sizeMeOptions = {
  refreshRate: _Constants.SIZE_ME_REFRESH_RATE,
  noPlaceholder: true
};
var ImageCollection = (0, _reactSizeme.default)(sizeMeOptions)(ImageCollectionComponent);
exports.ImageCollection = ImageCollection;
//# sourceMappingURL=ImageCollection.js.map