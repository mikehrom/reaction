"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */
var node = {
  "kind": "Fragment",
  "name": "TotalCount_filter_artworks",
  "type": "FilterArtworks",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [{
    "kind": "LinkedField",
    "alias": null,
    "name": "counts",
    "storageKey": null,
    "args": null,
    "concreteType": "FilterArtworksCounts",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "total",
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
node.hash = 'ef252545faa2dcdc0445805a52f4e7c0';
var _default = node;
exports.default = _default;
//# sourceMappingURL=TotalCount_filter_artworks.graphql.js.map