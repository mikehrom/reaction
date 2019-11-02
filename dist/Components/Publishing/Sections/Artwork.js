"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Artwork = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _resizer = require("../../../Utils/resizer");

var _Constants = require("../Constants");

var _ArtworkCaption = require("./ArtworkCaption");

var _ImageWrapper = require("./ImageWrapper");

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Artwork =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Artwork, _React$PureComponent);

  function Artwork() {
    _classCallCheck(this, Artwork);

    return _possibleConstructorReturn(this, _getPrototypeOf(Artwork).apply(this, arguments));
  }

  _createClass(Artwork, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          artwork = _this$props.artwork,
          children = _this$props.children,
          editing = _this$props.editing,
          linked = _this$props.linked,
          height = _this$props.height,
          width = _this$props.width,
          layout = _this$props.layout,
          slideshowIndex = _this$props.slideshowIndex;
      var src = (0, _resizer.resize)(artwork.image, {
        width: 1200,
        quality: _Constants.GLOBAL_IMAGE_QUALITY
      });

      var Image = function Image() {
        return _react.default.createElement(_ImageWrapper.ImageWrapper, {
          editing: editing,
          layout: layout,
          linked: linked,
          src: src,
          width: width,
          height: height,
          alt: artwork.title,
          slideshowIndex: slideshowIndex
        });
      };

      return _react.default.createElement(ArtworkContainer, null, linked ? _react.default.createElement(ArtworkImageLink, {
        href: "/artwork/".concat(artwork.slug)
      }, _react.default.createElement(Image, null)) : _react.default.createElement(Image, null), _react.default.createElement(_ArtworkCaption.ArtworkCaption, this.props), children);
    }
  }]);

  return Artwork;
}(_react.default.PureComponent);

exports.Artwork = Artwork;

_defineProperty(Artwork, "defaultProps", {
  linked: true,
  width: "100%",
  height: "auto"
});

var ArtworkImageLink = _styledComponents.default.a.withConfig({
  displayName: "Artwork__ArtworkImageLink",
  componentId: "sc-1v84ce1-0"
})(["text-decoration:none;"]);

var ArtworkContainer = _styledComponents.default.div.withConfig({
  displayName: "Artwork__ArtworkContainer",
  componentId: "sc-1v84ce1-1"
})(["display:flex;flex-direction:column;"]);
//# sourceMappingURL=Artwork.js.map