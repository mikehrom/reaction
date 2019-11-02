"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZeroState = void 0;

require("core-js/modules/es6.function.name");

var _palette = require("@artsy/palette");

var _Artsy = require("../../../../../Artsy");

var _FollowArtistButton = require("../../../../../Components/FollowButton/FollowArtistButton");

var _react = _interopRequireDefault(require("react"));

var _openAuthModal = require("../../../../../Utils/openAuthModal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZeroState = function ZeroState(props) {
  var _useSystemContext = (0, _Artsy.useSystemContext)(),
      mediator = _useSystemContext.mediator,
      user = _useSystemContext.user;

  var is_followed = props.is_followed,
      artist = props.artist;

  function handleOpenAuth() {
    (0, _openAuthModal.openAuthModal)(mediator, {
      entity: artist,
      contextModule: _Artsy.AnalyticsSchema.ContextModule.ArtworkFilter,
      intent: _openAuthModal.AuthModalIntent.FollowArtist
    });
  }

  return _react.default.createElement(_palette.Message, {
    justifyContent: "center",
    textSize: "5"
  }, "There aren\u2019t any works available by the artist at this time.", " ", !is_followed && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_FollowArtistButton.FollowArtistButtonFragmentContainer, {
    artist: artist,
    useDeprecatedButtonStyle: false,
    user: user,
    onOpenAuthModal: function onOpenAuthModal() {
      return handleOpenAuth();
    },
    render: function render(_ref) {
      var name = _ref.name;
      return _react.default.createElement("span", null, "Follow ", _react.default.createElement(_palette.Link, null, name));
    }
  }), " ", "to receive notifications when new works are added."));
};

exports.ZeroState = ZeroState;
//# sourceMappingURL=ZeroState.js.map