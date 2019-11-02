"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtistInfoQueryRenderer = exports.ArtistInfoFragmentContainer = exports.ArtistInfo = void 0;

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

require("core-js/modules/es6.function.name");

var _palette = require("@artsy/palette");

var _Artsy = require("../../../Artsy");

var _Analytics = require("../../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../../Artsy/Analytics/Schema"));

var _renderWithLoadProgress = require("../../../Artsy/Relay/renderWithLoadProgress");

var _SystemQueryRenderer = require("../../../Artsy/Relay/SystemQueryRenderer");

var _FollowArtistButton = require("../../../Components/FollowButton/FollowArtistButton");

var _v = require("../../../Components/v2");

var _SelectedExhibitions = require("../../../Components/v2/SelectedExhibitions");

var _react = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _sharify = require("sharify");

var _Events = _interopRequireDefault(require("../../../Utils/Events"));

var _get = require("../../../Utils/get");

var _openAuthModal = require("../../../Utils/openAuthModal");

var _graphql, _dec, _dec2, _dec3, _class, _class2, _temp;

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

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

var Container = function Container(_ref) {
  var children = _ref.children;
  return _react.default.createElement(_palette.StackableBorderBox, {
    p: 2
  }, children);
};

var ArtistInfo = (_dec = (0, _Analytics.track)({
  context_module: Schema.ContextModule.Biography
}, {
  dispatch: function dispatch(data) {
    return _Events.default.postEvent(data);
  }
}), _dec2 = (0, _Analytics.track)({
  action_type: Schema.ActionType.Click,
  flow: Schema.Flow.ArtworkAboutTheArtist,
  subject: Schema.Subject.ReadMore,
  type: Schema.Type.Button
}), _dec3 = (0, _Analytics.track)({
  action_type: Schema.ActionType.Click,
  flow: Schema.Flow.ArtworkAboutTheArtist,
  subject: Schema.Subject.ShowArtistInsights,
  type: Schema.Type.Button
}), _dec(_class = (_class2 = (_temp =
/*#__PURE__*/
function (_Component) {
  _inherits(ArtistInfo, _Component);

  function ArtistInfo() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ArtistInfo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ArtistInfo)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      showArtistInsights: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleOpenAuth", function (mediator, artist) {
      (0, _openAuthModal.openAuthModal)(mediator, {
        entity: artist,
        contextModule: Schema.ContextModule.ArtworkPage,
        intent: _openAuthModal.AuthModalIntent.FollowArtist
      });
    });

    return _this;
  }

  _createClass(ArtistInfo, [{
    key: "trackArtistBioReadMoreClick",
    value: function trackArtistBioReadMoreClick() {// noop
    }
  }, {
    key: "openArtistInsights",
    value: function openArtistInsights() {
      this.setState({
        showArtistInsights: true
      });
    }
  }, {
    key: "closeArtistInsights",
    value: function closeArtistInsights() {
      this.setState({
        showArtistInsights: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var artist = this.props.artist;
      var _this$props$artist = this.props.artist,
          biography_blurb = _this$props$artist.biography_blurb,
          image = _this$props$artist.image,
          id = _this$props$artist.id,
          _id = _this$props$artist._id;
      var showArtistBio = !!biography_blurb.text;
      var imageUrl = (0, _get.get)(this.props, function (p) {
        return image.cropped.url;
      });
      var showArtistInsightsButton = artist.exhibition_highlights && artist.exhibition_highlights.length >= _SelectedExhibitions.MIN_EXHIBITIONS || artist.auctionResults && artist.auctionResults.edges.length > 0 || artist.collections && artist.collections.length > 0 || artist.highlights.partners && artist.highlights.partners.edges.length > 0;
      var buttonText = this.state.showArtistInsights ? "Hide artist insights" : "Show artist insights";
      return _react.default.createElement(_Artsy.SystemContextConsumer, null, function (_ref2) {
        var user = _ref2.user,
            mediator = _ref2.mediator;
        return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.StackableBorderBox, {
          p: 2,
          flexDirection: "column"
        }, _react.default.createElement(_palette.EntityHeader, {
          name: _this2.props.artist.name,
          meta: _this2.props.artist.formatted_nationality_and_birthday,
          imageUrl: imageUrl,
          href: _this2.props.artist.href,
          FollowButton: _react.default.createElement(_FollowArtistButton.FollowArtistButtonFragmentContainer, {
            artist: _this2.props.artist,
            user: user,
            trackingData: {
              modelName: Schema.OwnerType.Artist,
              context_module: Schema.ContextModule.Biography,
              entity_id: _id,
              entity_slug: id
            },
            onOpenAuthModal: function onOpenAuthModal() {
              return _this2.handleOpenAuth(mediator, _this2.props.artist);
            },
            render: function render(_ref3) {
              var is_followed = _ref3.is_followed;
              return _react.default.createElement(_palette.Sans, {
                size: "2",
                weight: "medium",
                color: "black",
                style: {
                  cursor: "pointer",
                  textDecoration: "underline"
                }
              }, is_followed ? "Following" : "Follow");
            }
          })
        }), showArtistBio && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Spacer, {
          mb: 1
        }), _react.default.createElement(_v.ArtistBioFragmentContainer, {
          bio: _this2.props.artist,
          onReadMoreClicked: _this2.trackArtistBioReadMoreClick.bind(_this2)
        })), showArtistInsightsButton && _react.default.createElement(_palette.Flex, {
          flexDirection: "column",
          alignItems: "flex-start"
        }, _react.default.createElement(_palette.Button, {
          onClick: _this2.state.showArtistInsights ? _this2.closeArtistInsights.bind(_this2) : _this2.openArtistInsights.bind(_this2),
          variant: "secondaryGray",
          size: "small",
          mt: 1
        }, buttonText))), _this2.state.showArtistInsights && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_v.ArtistMarketInsightsFragmentContainer, {
          artist: _this2.props.artist,
          border: false,
          Container: Container
        }), _react.default.createElement(_v.SelectedExhibitionFragmentContainer, {
          artistID: _this2.props.artist.id,
          border: false,
          totalExhibitions: _this2.props.artist.counts.partner_shows,
          exhibitions: _this2.props.artist.exhibition_highlights,
          ViewAllLink: _react.default.createElement("a", {
            href: "".concat(_sharify.data.APP_URL, "/artist/").concat(_this2.props.artist.id, "/cv")
          }, "View all"),
          Container: Container
        })));
      });
    }
  }]);

  return ArtistInfo;
}(_react.Component), _temp), (_applyDecoratedDescriptor(_class2.prototype, "trackArtistBioReadMoreClick", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "trackArtistBioReadMoreClick"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "openArtistInsights", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "openArtistInsights"), _class2.prototype)), _class2)) || _class); // ADDED COLLECTIONS, HIGHLIGHTS, AND AUCTION RESULTS TO FRAGMENT FOR SHOW ARTIST INSIGHTS BUTTON VISIBLILITY CHECK

exports.ArtistInfo = ArtistInfo;
var ArtistInfoFragmentContainer = (0, _reactRelay.createFragmentContainer)(ArtistInfo, {
  artist: function artist() {
    var node = require("../../../__generated__/ArtistInfo_artist.graphql");

    if (node.hash && node.hash !== "67fd2074bbedcb4a1adab1fe594b0edc") {
      console.error("The definition of 'ArtistInfo_artist' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../__generated__/ArtistInfo_artist.graphql");
  }
});
exports.ArtistInfoFragmentContainer = ArtistInfoFragmentContainer;

var ArtistInfoQueryRenderer = function ArtistInfoQueryRenderer(_ref4) {
  var artistID = _ref4.artistID;
  return _react.default.createElement(_Artsy.SystemContextConsumer, null, function (_ref5) {
    var relayEnvironment = _ref5.relayEnvironment;
    return _react.default.createElement(_SystemQueryRenderer.SystemQueryRenderer, {
      environment: relayEnvironment,
      variables: {
        artistID: artistID
      },
      query: _graphql || (_graphql = function _graphql() {
        var node = require("../../../__generated__/ArtistInfoQuery.graphql");

        if (node.hash && node.hash !== "f9168e1fde70d178c078c351f4a38c0b") {
          console.error("The definition of 'ArtistInfoQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
        }

        return require("../../../__generated__/ArtistInfoQuery.graphql");
      }),
      render: (0, _renderWithLoadProgress.renderWithLoadProgress)(ArtistInfoFragmentContainer)
    });
  });
};

exports.ArtistInfoQueryRenderer = ArtistInfoQueryRenderer;
//# sourceMappingURL=ArtistInfo.js.map