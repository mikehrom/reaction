"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */
var node = {
  "kind": "Fragment",
  "name": "Fillwidth_artworks",
  "type": "ArtworkConnection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [{
    "kind": "LinkedField",
    "alias": null,
    "name": "edges",
    "storageKey": null,
    "args": null,
    "concreteType": "ArtworkEdge",
    "plural": true,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "node",
      "storageKey": null,
      "args": null,
      "concreteType": "Artwork",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "__id",
        "args": null,
        "storageKey": null
      }, {
        "kind": "LinkedField",
        "alias": null,
        "name": "image",
        "storageKey": null,
        "args": null,
        "concreteType": "Image",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "aspect_ratio",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": "__id",
          "name": "id",
          "args": null,
          "storageKey": null
        }]
      }, {
        "kind": "FragmentSpread",
        "name": "FillwidthItem_artwork",
        "args": null
      }]
    }]
  }]
};
node.hash = '2c137b96505cd1aae9b4750ecf6bacc7';
var _default = node;
exports.default = _default;
//# sourceMappingURL=Fillwidth_artworks.graphql.js.map