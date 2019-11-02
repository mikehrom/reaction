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
    "name": "Genes_artist",
    "type": "Artist",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "related",
      "storageKey": null,
      "args": null,
      "concreteType": "ArtistRelatedData",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "genes",
        "storageKey": null,
        "args": null,
        "concreteType": "GeneConnection",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "GeneEdge",
          "plural": true,
          "selections": [{
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Gene",
            "plural": false,
            "selections": [{
              "kind": "ScalarField",
              "alias": null,
              "name": "href",
              "args": null,
              "storageKey": null
            }, {
              "kind": "ScalarField",
              "alias": null,
              "name": "name",
              "args": null,
              "storageKey": null
            }, v0]
          }]
        }]
      }]
    }, v0]
  };
}();

node.hash = '77c969718be8a858b2f72009ac05dbc7';
var _default = node;
exports.default = _default;
//# sourceMappingURL=Genes_artist.graphql.js.map