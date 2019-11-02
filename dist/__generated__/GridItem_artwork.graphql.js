"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */
var node = {
  "kind": "Fragment",
  "name": "GridItem_artwork",
  "type": "Artwork",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [{
    "kind": "ScalarField",
    "alias": null,
    "name": "_id",
    "args": null,
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "name": "title",
    "args": null,
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "name": "image_title",
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
      "name": "placeholder",
      "args": null,
      "storageKey": null
    }, {
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
node.hash = 'ccef836f9a27c7aa2e345ce8cb678f68';
var _default = node;
exports.default = _default;
//# sourceMappingURL=GridItem_artwork.graphql.js.map