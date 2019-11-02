"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ArtworkGridItem = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _palette = require("@artsy/palette");

var _Artsy = require("../../Artsy");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _sharify = require("sharify");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _user = require("../../Utils/user");

var _Badge = _interopRequireDefault(require("./Badge"));

var _Metadata = _interopRequireDefault(require("./Metadata"));

var _Save = _interopRequireDefault(require("./Save"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var IMAGE_LAZY_LOADING = true;

var Placeholder = _styledComponents.default.div.withConfig({
  displayName: "GridItem__Placeholder",
  componentId: "fp8wpb-0"
})(["background-color:", ";position:relative;width:100%;overflow:hidden;"], (0, _palette.color)("black10"));

var Image = (0, _styledComponents.default)(_palette.Image).withConfig({
  displayName: "GridItem__Image",
  componentId: "fp8wpb-1"
})(["width:100%;height:100%;position:absolute;top:0;left:0;"]);
var IMAGE_QUALITY = 80;

var ArtworkGridItemContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ArtworkGridItemContainer, _React$Component);

  function ArtworkGridItemContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ArtworkGridItemContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ArtworkGridItemContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isMounted: false
    });

    _defineProperty(_assertThisInitialized(_this), "canHover", void 0);

    return _this;
  }

  _createClass(ArtworkGridItemContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        isMounted: true
      }); // Satisfy test runner. See https://github.com/artsy/reaction/blob/master/src/setup_jest.ts#L28

      if ((0, _isFunction2.default)(window.matchMedia)) {
        this.canHover = !window.matchMedia("(hover: none)").matches;
      }

      IMAGE_LAZY_LOADING = _sharify.data.IMAGE_LAZY_LOADING || process.env.IMAGE_LAZY_LOADING === "true";
    }
  }, {
    key: "getImageUrl",
    value: function getImageUrl() {
      var imageURL = this.props.artwork.image.url;

      if (!imageURL) {
        return null;
      }

      var width = 400;
      var height = Math.floor(width / this.props.artwork.image.aspect_ratio);
      var type = this.props.artwork.image.aspect_ratio ? "fit" : "fill"; // Either scale or crop, based on if an aspect ratio is available.

      var geminiUrl = _sharify.data.GEMINI_CLOUDFRONT_URL || process.env.GEMINI_CLOUDFRONT_URL; // fallback, useful if we're yarn linking

      var url = "".concat(geminiUrl, "/?resize_to=").concat(type, "&width=").concat(width, "&height=").concat(height, "&quality=").concat(IMAGE_QUALITY, "&src=").concat(encodeURIComponent(imageURL)); // prettier-ignore

      return url;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          style = _this$props.style,
          className = _this$props.className,
          artwork = _this$props.artwork,
          user = _this$props.user,
          _this$props$lazyLoad = _this$props.lazyLoad,
          lazyLoad = _this$props$lazyLoad === void 0 ? true : _this$props$lazyLoad;
      var userSpread = {};

      if (user) {
        userSpread = {
          user: user
        };
      }

      var isAdmin = (0, _user.userIsAdmin)(user); // the 'artwork-item' className and data-id={artwork._id} are required to
      // track Artwork impressions

      var trackableClassName = this.shouldTrackArtworkImpressions ? "artwork-item" : "";
      return _react.default.createElement("div", {
        className: "".concat(className, " ").concat(trackableClassName),
        "data-id": artwork._id,
        style: style
      }, _react.default.createElement(Placeholder, {
        style: {
          paddingBottom: artwork.image.placeholder
        }
      }, _react.default.createElement("a", {
        href: artwork.href,
        onClick: function onClick() {
          if (_this2.props.onClick) {
            _this2.props.onClick();
          }
        }
      }, _react.default.createElement(Image, {
        title: artwork.title,
        alt: artwork.image_title,
        src: this.getImageUrl(),
        lazyLoad: IMAGE_LAZY_LOADING && lazyLoad,
        preventRightClick: !isAdmin
      })), _react.default.createElement(_Badge.default, {
        artwork: artwork
      }), this.canHover && _react.default.createElement(_Save.default, _extends({
        className: "artwork-save",
        artwork: artwork,
        style: {
          position: "absolute",
          right: "10px",
          bottom: "10px"
        }
      }, userSpread, {
        mediator: this.props.mediator
      }))), _react.default.createElement(_Metadata.default, {
        artwork: artwork
      }));
    }
  }, {
    key: "shouldTrackArtworkImpressions",
    get: function get() {
      var track = false;

      if (this.state.isMounted) {
        track = window.location.pathname.includes("/collect");
      }

      return track;
    }
  }]);

  return ArtworkGridItemContainer;
}(_react.default.Component);

var ArtworkGridItem = (0, _styledComponents.default)(ArtworkGridItemContainer).withConfig({
  displayName: "GridItem__ArtworkGridItem",
  componentId: "fp8wpb-2"
})([".artwork-save{opacity:0;}&:hover .artwork-save{opacity:1;}"]);
exports.ArtworkGridItem = ArtworkGridItem;

var _default = (0, _reactRelay.createFragmentContainer)((0, _Artsy.withSystemContext)(ArtworkGridItem), {
  artwork: function artwork() {
    var node = require("../../__generated__/GridItem_artwork.graphql");

    if (node.hash && node.hash !== "ccef836f9a27c7aa2e345ce8cb678f68") {
      console.error("The definition of 'GridItem_artwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/GridItem_artwork.graphql");
  }
});

exports.default = _default;
//# sourceMappingURL=GridItem.js.map