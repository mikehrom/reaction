"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageSetPreviewClassic = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/es6.array.reduce");

require("core-js/modules/es6.array.map");

var _Fonts = require("../../../../Assets/Fonts");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _resizer = require("../../../../Utils/resizer");

var _IconImageSet = require("../../Icon/IconImageSet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  left: ", ";\n  top: 14px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "ImageSetPreviewClassic__Wrapper",
  componentId: "sc-101szyl-0"
})(["max-width:580px;width:100%;height:150px;display:flex;"]);

var Text = _styledComponents.default.div.withConfig({
  displayName: "ImageSetPreviewClassic__Text",
  componentId: "sc-101szyl-1"
})(["", ";line-height:1.35em;margin:0;"], (0, _Fonts.avantgarde)("s11"));

var Remaining = _styledComponents.default.div.withConfig({
  displayName: "ImageSetPreviewClassic__Remaining",
  componentId: "sc-101szyl-2"
})(["min-width:50px;padding:10px;flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;border:1px solid #e5e5e5;text-align:center;"]);

var IconContainer = _styledComponents.default.div.withConfig({
  displayName: "ImageSetPreviewClassic__IconContainer",
  componentId: "sc-101szyl-3"
})(["width:32px;margin-bottom:10px;position:relative;"]);

var container = 560;
var containerHeight = 150;
var iconContainer = 50;
var margin = 10;

var ImageSetPreviewClassic =
/*#__PURE__*/
function (_Component) {
  _inherits(ImageSetPreviewClassic, _Component);

  function ImageSetPreviewClassic(props) {
    var _this;

    _classCallCheck(this, ImageSetPreviewClassic);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImageSetPreviewClassic).call(this, props));
    _this.state = {
      visibleImages: _this.getVisibleImages(_this.props.images)
    };
    return _this;
  }

  _createClass(ImageSetPreviewClassic, [{
    key: "getVisibleImages",
    value: function getVisibleImages(images) {
      var widths = [];
      var hidden = 0;
      images.map(function (item, i) {
        var adjustedWidth = containerHeight * item.width / item.height;
        widths.push(adjustedWidth);
        var total = widths.reduce(function (a, b) {
          return a + b;
        }, 0);
        var margins = widths.length * margin;

        if (total + margins + iconContainer > container) {
          hidden = hidden + 1;
        }
      });
      return widths.length - hidden;
    }
  }, {
    key: "renderImages",
    value: function renderImages(images) {
      var _this2 = this;

      var items = images.slice(0, 4).map(function (item, i) {
        var src = (0, _resizer.resize)(item.image || item.url || "", {
          width: 500
        });
        var alt = item.caption ? item.caption.replace(/<[^>]*>/g, "") : item.title || "";

        if (i < _this2.state.visibleImages) {
          return _react.default.createElement("img", {
            key: "imageset-" + i,
            src: src,
            height: containerHeight,
            className: "imageset-preview__image",
            style: {
              marginRight: margin
            },
            alt: alt
          });
        }
      }, this);
      return items;
    }
  }, {
    key: "render",
    value: function render() {
      var images = this.props.images;
      return _react.default.createElement(Wrapper, {
        className: "imageset-preview"
      }, _react.default.createElement("div", {
        className: "imageset-preview__container",
        style: {
          display: "flex"
        }
      }, this.renderImages(images)), _react.default.createElement(Remaining, {
        className: "imageset-preview__remaining"
      }, _react.default.createElement(IconContainer, {
        className: "imageset-preview__icon-container"
      }, _react.default.createElement(_IconImageSet.IconImageSet, null), _react.default.createElement(Length, {
        className: "imageset-preview__length",
        imgLength: images.length
      }, _react.default.createElement(Text, null, images.length))), _react.default.createElement(Text, {
        className: "imageset-preview__text"
      }, "Enter Slideshow")));
    }
  }]);

  return ImageSetPreviewClassic;
}(_react.Component);

exports.ImageSetPreviewClassic = ImageSetPreviewClassic;
var Div = _styledComponents.default.div;
var Length = Div(_templateObject(), function (props) {
  return props.imgLength > 9 ? "4px" : "8px";
});
//# sourceMappingURL=ImageSetPreviewClassic.js.map