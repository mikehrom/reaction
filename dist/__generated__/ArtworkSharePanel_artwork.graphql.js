"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */
var node = {
  "kind": "Fragment",
  "name": "ArtworkSharePanel_artwork",
  "type": "Artwork",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [{
    "kind": "ScalarField",
    "alias": null,
    "name": "href",
    "args": null,
    "storageKey": null
  }, {
    "kind": "LinkedField",
    "alias": null,
    "name": "images",
    "storageKey": null,
    "args": null,
    "concreteType": "Image",
    "plural": true,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "url",
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
    "kind": "LinkedField",
    "alias": "artworkMeta",
    "name": "meta",
    "storageKey": null,
    "args": null,
    "concreteType": "ArtworkMeta",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "share",
      "args": null,
      "storageKey": null
    }]
  }, {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  }]
};
node.hash = '1aa535d73c67f2bc420065b91e091f3c';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtworkSharePanel_artwork.graphql.js.map