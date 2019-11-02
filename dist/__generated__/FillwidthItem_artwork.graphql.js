"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */
var node = {
  "kind": "Fragment",
  "name": "FillwidthItem_artwork",
  "type": "Artwork",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [{
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
    "kind": "ScalarField",
    "alias": null,
    "name": "href",
    "args": null,
    "storageKey": null
  }, {
    "kind": "FragmentSpread",
    "name": "Metadata_artwork",
    "args": null
  }, {
    "kind": "FragmentSpread",
    "name": "Save_artwork",
    "args": null
  }, {
    "kind": "FragmentSpread",
    "name": "Badge_artwork",
    "args": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  }]
};
node.hash = '5ad3f2a82c3429961a10c64ade017d3e';
var _default = node;
exports.default = _default;
//# sourceMappingURL=FillwidthItem_artwork.graphql.js.map