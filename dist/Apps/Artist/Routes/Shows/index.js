"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShowsRouteFragmentContainer = exports.ShowsRoute = void 0;

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _ArtistShows = require("./ArtistShows");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShowsRoute = function ShowsRoute(props) {
  var viewer = props.viewer;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Spacer, {
    mb: -1
  }), _react.default.createElement(_ArtistShows.ArtistShowsRefetchContainer, {
    sort: "end_at_asc",
    status: "running",
    artist: viewer.artist_currentShows,
    scrollTo: "#jumpto-ArtistHeader",
    heading: "Currently on view",
    my: 4
  }), _react.default.createElement("span", {
    id: "jumpto-Shows-Upcoming"
  }), _react.default.createElement(_ArtistShows.ArtistShowsRefetchContainer, {
    sort: "start_at_asc",
    status: "upcoming",
    artist: viewer.artist_upcomingShows,
    scrollTo: "#jumpto-Shows-Upcoming",
    heading: "Upcoming",
    my: 4
  }), _react.default.createElement("span", {
    id: "jumpto-Shows-Past"
  }), _react.default.createElement(_ArtistShows.ArtistShowsRefetchContainer, {
    sort: "end_at_desc",
    status: "closed",
    artist: viewer.artist_pastShows,
    scrollTo: "#jumpto-Shows-Past",
    heading: "Past"
  }));
};

exports.ShowsRoute = ShowsRoute;
var ShowsRouteFragmentContainer = (0, _reactRelay.createFragmentContainer)(ShowsRoute, {
  viewer: function viewer() {
    var node = require("../../../../__generated__/Shows_viewer.graphql");

    if (node.hash && node.hash !== "1c2b0cd1dcbb666851b282948c0c7d56") {
      console.error("The definition of 'Shows_viewer' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/Shows_viewer.graphql");
  }
});
exports.ShowsRouteFragmentContainer = ShowsRouteFragmentContainer;
//# sourceMappingURL=index.js.map