"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtistAppFragmentContainer = exports.ArtistApp = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _palette = require("@artsy/palette");

var _ArtistMeta = require("./Components/ArtistMeta");

var _NavigationTabs = require("./Components/NavigationTabs");

var _AppContainer = require("../Components/AppContainer");

var _HorizontalPadding = require("../Components/HorizontalPadding");

var _Analytics = require("../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../Artsy/Analytics/Schema"));

var _v = require("../../Components/v2");

var _react = _interopRequireDefault(require("react"));

var _reactLazyLoadImageComponent = require("react-lazy-load-image-component");

var _reactRelay = require("react-relay");

var _ArtistHeader = require("./Components/ArtistHeader");

var _dec, _class;

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

var ArtistApp = (_dec = (0, _Analytics.track)(function (props) {
  return {
    context_page: Schema.PageName.ArtistPage,
    context_page_owner_id: props.artist._id,
    context_page_owner_slug: props.artist.id,
    context_page_owner_type: Schema.OwnerType.Artist
  };
}), _dec(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ArtistApp, _React$Component);

  function ArtistApp() {
    _classCallCheck(this, ArtistApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(ArtistApp).apply(this, arguments));
  }

  _createClass(ArtistApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          artist = _this$props.artist,
          children = _this$props.children;
      return _react.default.createElement(_AppContainer.AppContainer, null, _react.default.createElement(_HorizontalPadding.HorizontalPadding, null, _react.default.createElement(_ArtistMeta.ArtistMetaFragmentContainer, {
        artist: artist
      }), _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, null, _react.default.createElement(_ArtistHeader.ArtistHeaderFragmentContainer, {
        artist: artist
      }))), _react.default.createElement(_palette.Spacer, {
        mb: 3
      }), _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, null, _react.default.createElement(_NavigationTabs.NavigationTabsFragmentContainer, {
        artist: artist
      }), _react.default.createElement(_palette.Spacer, {
        mb: 3
      }), _react.default.createElement(_palette.Box, {
        minHeight: "30vh"
      }, children))), typeof window !== "undefined" && _react.default.createElement(_reactLazyLoadImageComponent.LazyLoadComponent, {
        threshold: 1000
      }, _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, null, _react.default.createElement(_v.RecentlyViewedQueryRenderer, null)))), _react.default.createElement(_palette.Separator, {
        mt: 6,
        mb: 3
      }), _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, null, _react.default.createElement(_v.Footer, null)))));
    }
  }]);

  return ArtistApp;
}(_react.default.Component)) || _class);
exports.ArtistApp = ArtistApp;
var ArtistAppFragmentContainer = (0, _reactRelay.createFragmentContainer)(ArtistApp, {
  artist: function artist() {
    var node = require("../../__generated__/ArtistApp_artist.graphql");

    if (node.hash && node.hash !== "c180840c9d6e8a5c232f176429425255") {
      console.error("The definition of 'ArtistApp_artist' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/ArtistApp_artist.graphql");
  }
});
exports.ArtistAppFragmentContainer = ArtistAppFragmentContainer;
//# sourceMappingURL=ArtistApp.js.map