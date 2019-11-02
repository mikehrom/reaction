"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */
var node = {
  "kind": "Fragment",
  "name": "Artwork_artwork",
  "type": "Artwork",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [{
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
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
      "name": "url",
      "args": [{
        "kind": "Literal",
        "name": "version",
        "value": "large",
        "type": "[String]"
      }],
      "storageKey": "url(version:\"large\")"
    }, {
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
    "name": "Metadata_artwork",
    "args": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  }]
};
node.hash = '05646294ec1ef54a4ec29ece7e30681e';
var _default = node;
exports.default = _default;
//# sourceMappingURL=Artwork_artwork.graphql.js.map