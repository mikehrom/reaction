"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */
var node = function () {
  var v0 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Fragment",
    "name": "ArtworkSidebarArtists_artwork",
    "type": "Artwork",
    "metadata": null,
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "showFollowSuggestions",
      "type": "Boolean",
      "defaultValue": true
    }],
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "cultural_maker",
      "args": null,
      "storageKey": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "artists",
      "storageKey": null,
      "args": null,
      "concreteType": "Artist",
      "plural": true,
      "selections": [v0, {
        "kind": "ScalarField",
        "alias": null,
        "name": "_id",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "href",
        "args": null,
        "storageKey": null
      }, {
        "kind": "FragmentSpread",
        "name": "FollowArtistButton_artist",
        "args": [{
          "kind": "Variable",
          "name": "showFollowSuggestions",
          "variableName": "showFollowSuggestions",
          "type": null
        }]
      }]
    }, v0]
  };
}();

node.hash = 'aa97da2dfc57f1cf06cc2eb9fba3bbf5';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtworkSidebarArtists_artwork.graphql.js.map