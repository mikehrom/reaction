"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */
var node = {
  "kind": "Fragment",
  "name": "ArtistRow_artist",
  "type": "Artist",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [{
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
    "name": "Follow_artist",
    "args": null
  }, {
    "kind": "LinkedField",
    "alias": "artworks",
    "name": "artworks_connection",
    "storageKey": "artworks_connection(first:6)",
    "args": [{
      "kind": "Literal",
      "name": "first",
      "value": 6,
      "type": "Int"
    }],
    "concreteType": "ArtworkConnection",
    "plural": false,
    "selections": [{
      "kind": "FragmentSpread",
      "name": "Fillwidth_artworks",
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
node.hash = 'b65c87fce5097ae99473b0bbd008e4a1';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtistRow_artist.graphql.js.map