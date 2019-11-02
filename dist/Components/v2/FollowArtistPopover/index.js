"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FollowArtistPopoverQueryRenderer = exports.FollowArtistPopoverFragmentContainer = void 0;

require("core-js/modules/es6.array.map");

var _palette = require("@artsy/palette");

var _Artsy = require("../../../Artsy");

var _SystemQueryRenderer = require("../../../Artsy/Relay/SystemQueryRenderer");

var _react = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _unstated = require("unstated");

var _FollowArtistPopoverRow = require("./FollowArtistPopoverRow");

var _state = require("./state");

var _graphql;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// TODO: Revisit possibility of creating an Artsy popover for it.
var BorderedContainer = (0, _styledComponents.default)(_palette.BorderBox).withConfig({
  displayName: "FollowArtistPopover__BorderedContainer",
  componentId: "ff2c89-0"
})(["background-color:white;border-radius:2px;box-shadow:0 1px 4px 0 rgba(0,0,0,0.2);"]);
var Container = _palette.Box;
var TitleContainer = _palette.Box;

var FollowArtistPopover = function FollowArtistPopover(props) {
  var suggested = props.artist,
      user = props.user;
  var related = suggested.related;
  var suggetionsCount = related.suggested.edges.length;
  if (suggetionsCount === 0) return null;
  var excludeArtistIds = related.suggested.edges.map(function (_ref) {
    var _id = _ref.node._id;
    return _id;
  });
  return _react.default.createElement(BorderedContainer, null, _react.default.createElement(Container, null, _react.default.createElement(TitleContainer, {
    mb: 1
  }, _react.default.createElement(_palette.Sans, {
    size: "3",
    weight: "medium",
    color: "black100"
  }, "Other artists you might like"), _react.default.createElement(_palette.Box, {
    position: "absolute",
    top: (0, _palette.space)(1),
    right: (0, _palette.space)(1)
  }, _react.default.createElement(_palette.Link, {
    onClick: props.onClose
  }, _react.default.createElement(_palette.CloseIcon, {
    fill: "black30"
  })))), _react.default.createElement(_palette.Flex, {
    flexDirection: "column"
  }, _react.default.createElement(_unstated.Provider, {
    inject: [new _state.FollowArtistPopoverState({
      excludeArtistIds: excludeArtistIds
    })]
  }, related.suggested.edges.map(function (_ref2, index) {
    var artist = _ref2.node;
    return _react.default.createElement(_react.default.Fragment, {
      key: artist.__id
    }, _react.default.createElement(_FollowArtistPopoverRow.FollowArtistPopoverRowFragmentContainer, {
      user: user,
      artist: artist
    }), index < suggetionsCount - 1 && _react.default.createElement(_palette.Separator, null));
  })))));
};

var FollowArtistPopoverFragmentContainer = (0, _reactRelay.createFragmentContainer)(FollowArtistPopover, {
  artist: function artist() {
    var node = require("../../../__generated__/FollowArtistPopover_artist.graphql");

    if (node.hash && node.hash !== "29a8394fc5cdd97be2738d4e745d322e") {
      console.error("The definition of 'FollowArtistPopover_artist' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../__generated__/FollowArtistPopover_artist.graphql");
  }
});
exports.FollowArtistPopoverFragmentContainer = FollowArtistPopoverFragmentContainer;

var FollowArtistPopoverQueryRenderer = function FollowArtistPopoverQueryRenderer(_ref3) {
  var artistID = _ref3.artistID;

  var _useContext = (0, _react.useContext)(_Artsy.SystemContext),
      relayEnvironment = _useContext.relayEnvironment,
      user = _useContext.user;

  return _react.default.createElement(_SystemQueryRenderer.SystemQueryRenderer, {
    environment: relayEnvironment,
    variables: {
      artistID: artistID
    },
    query: _graphql || (_graphql = function _graphql() {
      var node = require("../../../__generated__/FollowArtistPopoverQuery.graphql");

      if (node.hash && node.hash !== "364b417ae6a387a733637fd589434356") {
        console.error("The definition of 'FollowArtistPopoverQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("../../../__generated__/FollowArtistPopoverQuery.graphql");
    }),
    render: function render(_ref4) {
      var props = _ref4.props;
      return props && _react.default.createElement(FollowArtistPopoverFragmentContainer, {
        artist: props.artist,
        user: user
      });
    }
  });
};

exports.FollowArtistPopoverQueryRenderer = FollowArtistPopoverQueryRenderer;
//# sourceMappingURL=index.js.map