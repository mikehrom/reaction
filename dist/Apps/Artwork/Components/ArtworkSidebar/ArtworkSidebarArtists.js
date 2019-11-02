"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtworkSidebarArtistsFragmentContainer = exports.ArtworkSidebarArtists = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.function.name");

var _palette = require("@artsy/palette");

var _Artsy = require("../../../../Artsy");

var Schema = _interopRequireWildcard(require("../../../../Artsy/Analytics/Schema"));

var _v = require("../../../../Components/v2");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _FollowArtistButton = require("../../../../Components/FollowButton/FollowArtistButton");

var _openAuthModal = require("../../../../Utils/openAuthModal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var ArtworkSidebarArtists =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ArtworkSidebarArtists, _React$Component);

  function ArtworkSidebarArtists() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ArtworkSidebarArtists);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ArtworkSidebarArtists)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleOpenAuth", function (mediator, artist) {
      (0, _openAuthModal.openAuthModal)(mediator, {
        entity: artist,
        contextModule: Schema.ContextModule.ArtworkPage,
        intent: _openAuthModal.AuthModalIntent.FollowArtist
      });
    });

    return _this;
  }

  _createClass(ArtworkSidebarArtists, [{
    key: "renderArtistName",
    value: function renderArtistName(artist) {
      return artist.href ? _react.default.createElement(_palette.Serif, {
        size: "5t",
        display: "inline",
        weight: "semibold",
        element: "h1"
      }, _react.default.createElement("a", {
        href: artist.href
      }, artist.name)) : _react.default.createElement(_palette.Serif, {
        size: "5t",
        display: "inline",
        weight: "semibold",
        element: "h1"
      }, artist.name);
    }
  }, {
    key: "renderSingleArtist",
    value: function renderSingleArtist(artist, user, mediator) {
      var _this2 = this;

      return _react.default.createElement(_react.default.Fragment, null, this.renderArtistName(artist), _react.default.createElement(_FollowArtistButton.FollowArtistButtonFragmentContainer, {
        artist: artist,
        user: user,
        trackingData: {
          modelName: Schema.OwnerType.Artist,
          context_module: Schema.ContextModule.Sidebar,
          context_page: "Artwork page",
          entity_id: artist._id,
          entity_slug: artist.id
        },
        onOpenAuthModal: function onOpenAuthModal() {
          return _this2.handleOpenAuth(mediator, artist);
        },
        triggerSuggestions: true,
        render: function render(_ref) {
          var is_followed = _ref.is_followed;
          return _react.default.createElement(_v.FollowIcon, {
            isFollowed: is_followed
          });
        }
      }, "Follow"));
    }
  }, {
    key: "renderMultipleArtists",
    value: function renderMultipleArtists() {
      var _this3 = this;

      var artists = this.props.artwork.artists;
      return artists.map(function (artist, index) {
        return _react.default.createElement(_react.default.Fragment, {
          key: artist.__id
        }, _this3.renderArtistName(artist), index !== artists.length - 1 && ", ");
      });
    }
  }, {
    key: "renderCulturalMaker",
    value: function renderCulturalMaker(cultural_maker) {
      return _react.default.createElement(_palette.Serif, {
        size: "5t",
        display: "inline-block",
        weight: "semibold"
      }, cultural_maker);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props$artwork = this.props.artwork,
          artists = _this$props$artwork.artists,
          cultural_maker = _this$props$artwork.cultural_maker;
      return _react.default.createElement(_Artsy.SystemContextConsumer, null, function (_ref2) {
        var user = _ref2.user,
            mediator = _ref2.mediator;
        return _react.default.createElement(_palette.Box, null, artists.length === 1 ? _this4.renderSingleArtist(artists[0], user, mediator) : _this4.renderMultipleArtists(), artists.length === 0 && cultural_maker && _this4.renderCulturalMaker(cultural_maker));
      });
    }
  }]);

  return ArtworkSidebarArtists;
}(_react.default.Component);

exports.ArtworkSidebarArtists = ArtworkSidebarArtists;
var ArtworkSidebarArtistsFragmentContainer = (0, _reactRelay.createFragmentContainer)(ArtworkSidebarArtists, {
  artwork: function artwork() {
    var node = require("../../../../__generated__/ArtworkSidebarArtists_artwork.graphql");

    if (node.hash && node.hash !== "aa97da2dfc57f1cf06cc2eb9fba3bbf5") {
      console.error("The definition of 'ArtworkSidebarArtists_artwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/ArtworkSidebarArtists_artwork.graphql");
  }
});
exports.ArtworkSidebarArtistsFragmentContainer = ArtworkSidebarArtistsFragmentContainer;
//# sourceMappingURL=ArtworkSidebarArtists.js.map