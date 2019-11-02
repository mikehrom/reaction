"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FillwidthItem = exports.FillwidthItemContainer = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _sharify = require("sharify");

var _Badge = _interopRequireDefault(require("./Badge"));

var _Metadata = _interopRequireDefault(require("./Metadata"));

var _Save = _interopRequireDefault(require("./Save"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _get = require("../../Utils/get");

var _logger = _interopRequireDefault(require("../../Utils/logger"));

var _user = require("../../Utils/user");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var logger = (0, _logger.default)("FillwidthItem.tsx");
var IMAGE_QUALITY = 80;

var ImageLink = _styledComponents.default.a.withConfig({
  displayName: "FillwidthItem__ImageLink",
  componentId: "sc-1jj8qkz-0"
})(["width:100%;position:absolute;top:0;left:0;"]);

var Placeholder = _styledComponents.default.div.withConfig({
  displayName: "FillwidthItem__Placeholder",
  componentId: "sc-1jj8qkz-1"
})(["position:relative;width:100%;"]);

var FillwidthItemContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FillwidthItemContainer, _React$Component);

  function FillwidthItemContainer() {
    _classCallCheck(this, FillwidthItemContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(FillwidthItemContainer).apply(this, arguments));
  }

  _createClass(FillwidthItemContainer, [{
    key: "getImageUrl",
    value: function getImageUrl() {
      var imageURL = this.props.artwork.image.url;

      if (!imageURL) {
        return null;
      }

      var aspect_ratio = this.props.artwork.image.aspect_ratio; // Either scale or crop, based on if an aspect ratio is available.

      var type = aspect_ratio ? "fit" : "fill"; // tslint:disable-next-line:max-line-length

      return "".concat(_sharify.data.GEMINI_CLOUDFRONT_URL, "/?resize_to=").concat(type, "&width=").concat(this.imageWidth, "&height=").concat(this.imageHeight, "&quality=").concat(IMAGE_QUALITY, "&src=").concat(encodeURIComponent(imageURL));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          artwork = _this$props.artwork,
          className = _this$props.className,
          targetHeight = _this$props.targetHeight,
          imageHeight = _this$props.imageHeight,
          user = _this$props.user,
          mediator = _this$props.mediator,
          lazyLoad = _this$props.lazyLoad;
      var userSpread = {};

      if (user) {
        userSpread = {
          user: user
        };
      }

      var isAdmin = (0, _user.userIsAdmin)(user);
      var image = (0, _get.get)(this.props, function (p) {
        return p.artwork.image;
      });

      if (!image) {
        var href = (0, _get.get)(this.props, function (p) {
          return p.artwork.href;
        }, "(unknown href)");
        logger.error("Artwork at ".concat(href, " does not have an image!"));
        return null;
      }

      return _react.default.createElement("div", {
        className: className
      }, _react.default.createElement(Placeholder, {
        style: {
          height: targetHeight
        }
      }, _react.default.createElement(ImageLink, {
        href: artwork.href,
        onClick: function onClick() {
          if (_this.props.onClick) {
            _this.props.onClick();
          }
        }
      }, _react.default.createElement(_palette.Image, {
        src: this.getImageUrl(),
        width: "100%",
        height: imageHeight,
        lazyLoad: lazyLoad,
        preventRightClick: !isAdmin
      })), _react.default.createElement(_Badge.default, {
        artwork: artwork,
        width: this.imageWidth
      }), _react.default.createElement(_Save.default, _extends({}, userSpread, {
        mediator: mediator,
        className: "artwork-save",
        artwork: artwork,
        style: {
          position: "absolute",
          right: "5px",
          bottom: "5px"
        }
      }))), _react.default.createElement(_Metadata.default, {
        artwork: artwork,
        extended: true
      }));
    }
  }, {
    key: "imageWidth",
    get: function get() {
      var aspect_ratio = this.props.artwork.image.aspect_ratio;
      return Math.floor(this.imageHeight * aspect_ratio);
    }
  }, {
    key: "imageHeight",
    get: function get() {
      return this.props.imageHeight * window.devicePixelRatio;
    }
  }]);

  return FillwidthItemContainer;
}(_react.default.Component);

exports.FillwidthItemContainer = FillwidthItemContainer;
var FillwidthItem = (0, _styledComponents.default)(FillwidthItemContainer).attrs({}).withConfig({
  displayName: "FillwidthItem",
  componentId: "sc-1jj8qkz-2"
})(["display:inline-block;width:", "px;vertical-align:top;margin-right:", "px;.artwork-save{opacity:0;}&:hover .artwork-save{opacity:1;}"], function (props) {
  return props.width;
}, function (props) {
  return props.margin;
});
exports.FillwidthItem = FillwidthItem;

var _default = (0, _reactRelay.createFragmentContainer)(FillwidthItem, {
  artwork: function artwork() {
    var node = require("../../__generated__/FillwidthItem_artwork.graphql");

    if (node.hash && node.hash !== "5ad3f2a82c3429961a10c64ade017d3e") {
      console.error("The definition of 'FillwidthItem_artwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/FillwidthItem_artwork.graphql");
  }
});

exports.default = _default;
//# sourceMappingURL=FillwidthItem.js.map