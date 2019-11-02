"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */
var node = {
  "kind": "Fragment",
  "name": "ArtworkGrid_artist",
  "type": "Artist",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [{
    "kind": "LinkedField",
    "alias": null,
    "name": "artworks_connection",
    "storageKey": "artworks_connection(first:4)",
    "args": [{
      "kind": "Literal",
      "name": "first",
      "value": 4,
      "type": "Int"
    }],
    "concreteType": "ArtworkConnection",
    "plural": false,
    "selections": [{
      "kind": "FragmentSpread",
      "name": "ArtworkGrid_artworks",
      "args": null
    }]
  }, {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  }]
};
node.hash = 'd6f44c36bb29cb02e0ef54f09915070f';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtworkGrid_artist.graphql.js.map