"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollectionEntityFragmentContainer = exports.CollectionEntity = exports.StyledLink = exports.Background = void 0;

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

require("core-js/modules/es6.function.bind");

var _palette = require("@artsy/palette");

var _Analytics = require("../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../Artsy/Analytics/Schema"));

var _currency = _interopRequireDefault(require("currency.js"));

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _sharify = require("sharify");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _resizer = require("../../Utils/resizer");

var _dec, _dec2, _class, _class2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var Background = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "CollectionEntity__Background",
  componentId: "sc-1y8e3y3-0"
})(["height:175px;width:100%;background:", ";background-image:url(", ");display:inline-flex;position:relative;background-size:cover;background-position:center;"], (0, _palette.color)("black30"), function (props) {
  return props.collectionImage;
});
exports.Background = Background;
var CollectionTitle = (0, _styledComponents.default)(_palette.Serif).withConfig({
  displayName: "CollectionEntity__CollectionTitle",
  componentId: "sc-1y8e3y3-1"
})(["width:max-content;"]);
var StyledLink = (0, _styledComponents.default)(_palette.Link).withConfig({
  displayName: "CollectionEntity__StyledLink",
  componentId: "sc-1y8e3y3-2"
})(["text-decoration:none;&:hover{text-decoration:none;}"]);
exports.StyledLink = StyledLink;
var CollectionEntity = (_dec = (0, _Analytics.track)(), _dec2 = (0, _Analytics.track)(function (_ref) {
  var collection = _ref.collection;
  return {
    action_type: Schema.ActionType.Click,
    context_module: Schema.ContextModule.CollectionsRail,
    context_page_owner_type: Schema.OwnerType.Article,
    destination_path: "".concat(_sharify.data.APP_URL, "/collection/").concat(collection.slug),
    type: Schema.Type.Thumbnail
  };
}), _dec(_class = (_class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CollectionEntity, _React$Component);

  function CollectionEntity() {
    _classCallCheck(this, CollectionEntity);

    return _possibleConstructorReturn(this, _getPrototypeOf(CollectionEntity).apply(this, arguments));
  }

  _createClass(CollectionEntity, [{
    key: "onLinkClick",
    value: function onLinkClick() {// noop
    }
  }, {
    key: "render",
    value: function render() {
      var collection = this.props.collection;
      return _react.default.createElement(_palette.Box, {
        mb: 3,
        width: "100%"
      }, _react.default.createElement(StyledLink, {
        href: "".concat(_sharify.data.APP_URL, "/collection/").concat(collection.slug),
        onClick: this.onLinkClick.bind(this)
      }, _react.default.createElement(Background, {
        collectionImage: (0, _resizer.resize)(collection.headerImage, {
          width: 645,
          height: 275,
          quality: 80
        })
      }), _react.default.createElement(CollectionTitle, {
        size: "4"
      }, collection.title), _react.default.createElement(_palette.Sans, {
        size: "2"
      }, "Works from $", (0, _currency.default)(collection.price_guidance, {
        separator: ",",
        precision: 0
      }).format())));
    }
  }]);

  return CollectionEntity;
}(_react.default.Component), (_applyDecoratedDescriptor(_class2.prototype, "onLinkClick", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "onLinkClick"), _class2.prototype)), _class2)) || _class);
exports.CollectionEntity = CollectionEntity;
var CollectionEntityFragmentContainer = (0, _reactRelay.createFragmentContainer)(CollectionEntity, {
  collection: function collection() {
    var node = require("../../__generated__/CollectionEntity_collection.graphql");

    if (node.hash && node.hash !== "645090a25be570f93a76835e1bf44423") {
      console.error("The definition of 'CollectionEntity_collection' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/CollectionEntity_collection.graphql");
  }
});
exports.CollectionEntityFragmentContainer = CollectionEntityFragmentContainer;
//# sourceMappingURL=CollectionEntity.js.map