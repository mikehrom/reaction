"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtistCollectionEntityFragmentContainer = exports.ArtworkImage = exports.StyledLink = exports.ArtistCollectionEntity = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.reduce");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.function.bind");

require("core-js/modules/es6.regexp.split");

require("core-js/modules/es6.array.map");

var _compact2 = _interopRequireDefault(require("lodash/compact"));

var _palette = require("@artsy/palette");

var _Analytics = require("../../../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../../../Artsy/Analytics/Schema"));

var _currency = _interopRequireDefault(require("currency.js"));

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _sharify = require("sharify");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _get = require("../../../../Utils/get");

var _dec, _dec2, _class, _class2;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

var ArtistCollectionEntity = (_dec = (0, _Analytics.track)(), _dec2 = (0, _Analytics.track)(function (_ref) {
  var collection = _ref.collection;
  return {
    action_type: Schema.ActionType.Click,
    context_module: Schema.ContextModule.CollectionsRail,
    context_page_owner_type: Schema.OwnerType.Artist,
    destination_path: "".concat(_sharify.data.APP_URL, "/collection/").concat(collection.slug),
    type: Schema.Type.Thumbnail
  };
}), _dec(_class = (_class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ArtistCollectionEntity, _React$Component);

  function ArtistCollectionEntity() {
    _classCallCheck(this, ArtistCollectionEntity);

    return _possibleConstructorReturn(this, _getPrototypeOf(ArtistCollectionEntity).apply(this, arguments));
  }

  _createClass(ArtistCollectionEntity, [{
    key: "onLinkClick",
    value: function onLinkClick() {// noop
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props$collectio = this.props.collection,
          headerImage = _this$props$collectio.headerImage,
          price_guidance = _this$props$collectio.price_guidance,
          slug = _this$props$collectio.slug,
          title = _this$props$collectio.title,
          artworks_connection = _this$props$collectio.artworks.artworks_connection;
      var artworks = artworks_connection.edges.map(function (_ref2) {
        var node = _ref2.node;
        return node;
      });
      var formattedTitle = title && title.split(": ")[1] || title;
      var bgImages = (0, _compact2.default)(artworks.map(function (_ref3) {
        var image = _ref3.image;
        return image && image.resized && image.resized.url;
      }));
      var imageSize = bgImages.length === 1 ? 262 : bgImages.length === 2 ? 130 : 86;
      return _react.default.createElement(_palette.Box, {
        pr: 2
      }, _react.default.createElement(StyledLink, {
        href: "".concat(_sharify.data.APP_URL, "/collection/").concat(slug),
        onClick: this.onLinkClick.bind(this)
      }, _react.default.createElement(ImgWrapper, {
        pb: 1
      }, bgImages.length ? bgImages.map(function (url, i) {
        var artistName = (0, _get.get)(artworks[i].artist, function (a) {
          return a.name;
        });
        var alt = "".concat(artistName ? artistName + ", " : "").concat(artworks[i].title);
        return _react.default.createElement(SingleImgContainer, {
          key: i
        }, _react.default.createElement(ImgOverlay, {
          width: imageSize
        }), _react.default.createElement(ArtworkImage, {
          key: i,
          src: url,
          width: imageSize,
          alt: alt,
          lazyLoad: _this.props.lazyLoad,
          style: {
            objectFit: "cover",
            objectPosition: "center"
          }
        }));
      }) : _react.default.createElement(ArtworkImage, {
        src: headerImage,
        lazyLoad: this.props.lazyLoad,
        width: 262,
        style: {
          objectFit: "cover",
          objectPosition: "center"
        }
      })), _react.default.createElement(CollectionTitle, {
        size: "3"
      }, formattedTitle), price_guidance && _react.default.createElement(_palette.Sans, {
        size: "2",
        color: "black60"
      }, "From $", (0, _currency.default)(price_guidance, {
        separator: ",",
        precision: 0
      }).format())));
    }
  }]);

  return ArtistCollectionEntity;
}(_react.default.Component), (_applyDecoratedDescriptor(_class2.prototype, "onLinkClick", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "onLinkClick"), _class2.prototype)), _class2)) || _class);
exports.ArtistCollectionEntity = ArtistCollectionEntity;
var CollectionTitle = (0, _styledComponents.default)(_palette.Serif).withConfig({
  displayName: "ArtistCollectionEntity__CollectionTitle",
  componentId: "vu6emf-0"
})(["width:max-content;"]);
var StyledLink = (0, _styledComponents.default)(_palette.Link).withConfig({
  displayName: "ArtistCollectionEntity__StyledLink",
  componentId: "vu6emf-1"
})(["text-decoration:none;-webkit-tap-highlight-color:rgba(0,0,0,0);&:hover{text-decoration:none;", "{text-decoration:underline;}}"], CollectionTitle);
exports.StyledLink = StyledLink;
var SingleImgContainer = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "ArtistCollectionEntity__SingleImgContainer",
  componentId: "vu6emf-2"
})(["position:relative;margin-right:2px;&:last-child{margin-right:0;}"]);
var ImgOverlay = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "ArtistCollectionEntity__ImgOverlay",
  componentId: "vu6emf-3"
})(["height:125px;background-color:", ";opacity:0.1;position:absolute;top:0;left:0;z-index:7;"], (0, _palette.color)("black30"));
var ArtworkImage = (0, _styledComponents.default)(_palette.Image).withConfig({
  displayName: "ArtistCollectionEntity__ArtworkImage",
  componentId: "vu6emf-4"
})(["width:", "px;height:125px;background-color:", ";opacity:0.9;"], function (_ref4) {
  var width = _ref4.width;
  return width;
}, (0, _palette.color)("black10"));
exports.ArtworkImage = ArtworkImage;
var ImgWrapper = (0, _styledComponents.default)(_palette.Flex).withConfig({
  displayName: "ArtistCollectionEntity__ImgWrapper",
  componentId: "vu6emf-5"
})(["width:262px;"]);
var ArtistCollectionEntityFragmentContainer = (0, _reactRelay.createFragmentContainer)(ArtistCollectionEntity, {
  collection: function collection() {
    var node = require("../../../../__generated__/ArtistCollectionEntity_collection.graphql");

    if (node.hash && node.hash !== "80972a14c0109d823f6537d3e1e93002") {
      console.error("The definition of 'ArtistCollectionEntity_collection' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/ArtistCollectionEntity_collection.graphql");
  }
});
exports.ArtistCollectionEntityFragmentContainer = ArtistCollectionEntityFragmentContainer;
//# sourceMappingURL=ArtistCollectionEntity.js.map