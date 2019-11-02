"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopularArtists = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.array.map");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.set");

var _Artsy = require("../../../../Artsy");

var _SystemQueryRenderer = require("../../../../Artsy/Relay/SystemQueryRenderer");

var React = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _reactTracking = _interopRequireDefault(require("react-tracking"));

var _get = require("../../../../Utils/get");

var _Events = _interopRequireDefault(require("../../../../Utils/Events"));

var _ReplaceTransition = _interopRequireDefault(require("../../../Animation/ReplaceTransition"));

var _ItemLink = _interopRequireWildcard(require("../../ItemLink"));

var _graphql, _graphql2, _dec, _class, _temp;

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

var PopularArtistsContent = (_dec = (0, _reactTracking.default)({}, {
  dispatch: function dispatch(data) {
    return _Events.default.postEvent(data);
  }
}), _dec(_class = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PopularArtistsContent, _React$Component);

  function PopularArtistsContent(props, context) {
    var _this;

    _classCallCheck(this, PopularArtistsContent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PopularArtistsContent).call(this, props, context));

    _defineProperty(_assertThisInitialized(_this), "excludedArtistIds", void 0);

    _defineProperty(_assertThisInitialized(_this), "followCount", 0);

    _this.excludedArtistIds = new Set(_this.props.popular_artists.artists.filter(Boolean).map(function (item) {
      return item._id;
    }));
    return _this;
  }

  _createClass(PopularArtistsContent, [{
    key: "onArtistFollowed",
    value: function onArtistFollowed(artist, store, data) {
      var suggestedArtistEdge = data.followArtist.artist.related.suggested.edges[0];
      var popularArtist = data.followArtist.popular_artists.artists[0];
      var artistToSuggest = store.get((suggestedArtistEdge && suggestedArtistEdge.node || popularArtist).__id);
      this.excludedArtistIds.add(artistToSuggest.getValue("_id"));
      var popularArtistsRootField = store.get("client:root").getLinkedRecord("popular_artists", {
        exclude_followed_artists: true
      });
      var updatedPopularArtists = popularArtistsRootField.getLinkedRecords("artists").filter(Boolean).map(function (artistItem) {
        return artistItem.getDataID() === artist.__id ? artistToSuggest : artistItem;
      });
      popularArtistsRootField.setLinkedRecords(updatedPopularArtists, "artists");
      this.followCount += 1;
      this.props.updateFollowCount(this.followCount);
      this.props.tracking.trackEvent({
        action: "Followed Artist",
        entity_id: artist._id,
        entity_slug: artist.id,
        context_module: "onboarding recommended"
      });
    }
  }, {
    key: "onFollowedArtist",
    value: function onFollowedArtist(artist) {
      var _this2 = this;

      (0, _reactRelay.commitMutation)(this.props.relay.environment, {
        mutation: _graphql || (_graphql = function _graphql() {
          var node = require("../../../../__generated__/PopularArtistsFollowArtistMutation.graphql");

          if (node.hash && node.hash !== "e4118fabe762390fe9a4d9510a83afad") {
            console.error("The definition of 'PopularArtistsFollowArtistMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
          }

          return require("../../../../__generated__/PopularArtistsFollowArtistMutation.graphql");
        }),
        variables: {
          input: {
            artist_id: artist.id,
            unfollow: false
          },
          excludedArtistIds: Array.from(this.excludedArtistIds)
        },
        updater: function updater(store, data) {
          return _this2.onArtistFollowed(artist, store, data);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var artistItems = this.props.popular_artists.artists.filter(Boolean).map(function (artist, index) {
        var imageUrl = (0, _get.get)(artist, function (a) {
          return a.image.cropped.url;
        });
        return React.createElement(_ItemLink.LinkContainer, {
          key: "popular-artists-".concat(index)
        }, React.createElement(_ReplaceTransition.default, {
          transitionEnterTimeout: 1000,
          transitionLeaveTimeout: 400
        }, React.createElement(_ItemLink.default, {
          href: "#",
          item: artist,
          key: artist.id,
          id: artist.id,
          name: artist.name,
          image_url: imageUrl,
          onClick: function onClick() {
            return _this3.onFollowedArtist(artist);
          }
        })));
      });
      return React.createElement("div", null, artistItems);
    }
  }]);

  return PopularArtistsContent;
}(React.Component), _temp)) || _class);
var PopularArtistContentContainer = (0, _reactRelay.createFragmentContainer)(PopularArtistsContent, {
  popular_artists: function popular_artists() {
    var node = require("../../../../__generated__/PopularArtists_popular_artists.graphql");

    if (node.hash && node.hash !== "1c49138ba6baf7973c1aa1e59f1f0825") {
      console.error("The definition of 'PopularArtists_popular_artists' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/PopularArtists_popular_artists.graphql");
  }
});

var PopularArtistsComponent = function PopularArtistsComponent(_ref) {
  var relayEnvironment = _ref.relayEnvironment,
      updateFollowCount = _ref.updateFollowCount;
  return React.createElement(_SystemQueryRenderer.SystemQueryRenderer, {
    environment: relayEnvironment,
    query: _graphql2 || (_graphql2 = function _graphql2() {
      var node = require("../../../../__generated__/PopularArtistsQuery.graphql");

      if (node.hash && node.hash !== "252659854caf4b33586405725754b5a3") {
        console.error("The definition of 'PopularArtistsQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("../../../../__generated__/PopularArtistsQuery.graphql");
    }),
    variables: {},
    render: function render(_ref2) {
      var error = _ref2.error,
          props = _ref2.props;

      if (props) {
        return React.createElement(PopularArtistContentContainer, {
          popular_artists: props.popular_artists,
          updateFollowCount: updateFollowCount
        });
      } else {
        return null;
      }
    }
  });
};

var PopularArtists = (0, _Artsy.withSystemContext)(PopularArtistsComponent);
exports.PopularArtists = PopularArtists;
//# sourceMappingURL=PopularArtists.js.map