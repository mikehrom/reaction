"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtworkImageBrowserQueryRenderer = exports.ArtworkImageBrowserFragmentContainer = exports.ArtworkImageBrowserContainer = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.find-index");

var _Artsy = require("../../../../Artsy");

var _renderWithLoadProgress = require("../../../../Artsy/Relay/renderWithLoadProgress");

var _SystemQueryRenderer = require("../../../../Artsy/Relay/SystemQueryRenderer");

var _react = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _ArtworkActions = require("./ArtworkActions");

var _ArtworkImageBrowser = require("./ArtworkImageBrowser");

var _graphql;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var ArtworkImageBrowserContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ArtworkImageBrowserContainer, _React$Component);

  function ArtworkImageBrowserContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ArtworkImageBrowserContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ArtworkImageBrowserContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "carousel", null);

    return _this;
  }

  _createClass(ArtworkImageBrowserContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$artwork = this.props.artwork,
          images = _this$props$artwork.images,
          image = _this$props$artwork.image,
          image_alt = _this$props$artwork.image_alt;

      if (!images.length) {
        return null;
      }

      var defaultImageIndex = images.findIndex(function (e) {
        return e.id === image.id;
      });
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ArtworkImageBrowser.ArtworkImageBrowser, {
        setCarouselRef: function setCarouselRef(f) {
          return _this2.carousel = f;
        },
        images: images,
        imageAlt: image_alt
      }), _react.default.createElement(_ArtworkActions.ArtworkActionsFragmentContainer, {
        selectDefaultSlide: function selectDefaultSlide() {
          _this2.carousel.select(defaultImageIndex, false, true);
        },
        artwork: this.props.artwork
      }));
    }
  }]);

  return ArtworkImageBrowserContainer;
}(_react.default.Component);

exports.ArtworkImageBrowserContainer = ArtworkImageBrowserContainer;
var ArtworkImageBrowserFragmentContainer = (0, _reactRelay.createFragmentContainer)(ArtworkImageBrowserContainer, {
  artwork: function artwork() {
    var node = require("../../../../__generated__/ArtworkImageBrowser_artwork.graphql");

    if (node.hash && node.hash !== "51377fc143d191b4dfefcfc5914e1f36") {
      console.error("The definition of 'ArtworkImageBrowser_artwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/ArtworkImageBrowser_artwork.graphql");
  }
});
exports.ArtworkImageBrowserFragmentContainer = ArtworkImageBrowserFragmentContainer;

var ArtworkImageBrowserQueryRenderer = function ArtworkImageBrowserQueryRenderer(_ref) {
  var artworkID = _ref.artworkID;

  var _useContext = (0, _react.useContext)(_Artsy.SystemContext),
      relayEnvironment = _useContext.relayEnvironment;

  return _react.default.createElement(_SystemQueryRenderer.SystemQueryRenderer, {
    environment: relayEnvironment,
    variables: {
      artworkID: artworkID
    },
    query: _graphql || (_graphql = function _graphql() {
      var node = require("../../../../__generated__/ArtworkImageBrowserQuery.graphql");

      if (node.hash && node.hash !== "04b2d8f0bd4762404aaeb70a4559db96") {
        console.error("The definition of 'ArtworkImageBrowserQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("../../../../__generated__/ArtworkImageBrowserQuery.graphql");
    }),
    render: (0, _renderWithLoadProgress.renderWithLoadProgress)(ArtworkImageBrowserFragmentContainer)
  });
};

exports.ArtworkImageBrowserQueryRenderer = ArtworkImageBrowserQueryRenderer;
//# sourceMappingURL=index.js.map