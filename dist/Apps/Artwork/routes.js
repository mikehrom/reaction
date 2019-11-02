"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

var _reactRelay = require("react-relay");

var _ArtworkApp = require("./ArtworkApp");

// TODO: Investigate better error boundaries for runtime errors
var routes = [{
  path: "/artwork/:artworkID/(confirm-bid)?",
  Component: _ArtworkApp.ArtworkAppFragmentContainer,
  query: function query() {
    var node = require("../../__generated__/routes_ArtworkQuery.graphql");

    if (node.hash && node.hash !== "3ceafa46f35e034784f764ec5b9bb8fd") {
      console.error("The definition of 'routes_ArtworkQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/routes_ArtworkQuery.graphql");
  }
}];
exports.routes = routes;
//# sourceMappingURL=routes.js.map