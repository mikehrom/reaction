"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtistCollectionsRailContent = void 0;

var _palette = require("@artsy/palette");

var _Artsy = require("../../../../Artsy");

var _renderWithLoadProgress = require("../../../../Artsy/Relay/renderWithLoadProgress");

var _SystemQueryRenderer = require("../../../../Artsy/Relay/SystemQueryRenderer");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _ArtistCollectionsRail = require("./ArtistCollectionsRail");

var _graphql;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArtistCollectionsRailContent = function ArtistCollectionsRailContent(passedProps) {
  var _useSystemContext = (0, _Artsy.useSystemContext)(),
      relayEnvironment = _useSystemContext.relayEnvironment;

  return _react.default.createElement(_palette.Box, {
    mb: 3
  }, _react.default.createElement(_SystemQueryRenderer.SystemQueryRenderer, {
    environment: relayEnvironment,
    variables: {
      isFeaturedArtistContent: true,
      size: 16,
      artistID: passedProps.artistID
    },
    query: _graphql || (_graphql = function _graphql() {
      var node = require("../../../../__generated__/ArtistCollectionsRailQuery.graphql");

      if (node.hash && node.hash !== "4c7b73a48f28a78a4282cf8026947c54") {
        console.error("The definition of 'ArtistCollectionsRailQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("../../../../__generated__/ArtistCollectionsRailQuery.graphql");
    }),
    render: (0, _renderWithLoadProgress.renderWithLoadProgress)(_ArtistCollectionsRail.ArtistCollectionsRailFragmentContainer),
    cacheConfig: {
      force: true
    }
  }));
};

exports.ArtistCollectionsRailContent = ArtistCollectionsRailContent;
//# sourceMappingURL=index.js.map