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
    "name": "__typename",
    "args": null,
    "storageKey": null
  },
      v1 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  },
      v2 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Fragment",
    "name": "OtherWorks_artwork",
    "type": "Artwork",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "contextGrids",
      "storageKey": null,
      "args": null,
      "concreteType": null,
      "plural": true,
      "selections": [v0, {
        "kind": "ScalarField",
        "alias": null,
        "name": "title",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "ctaTitle",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "ctaHref",
        "args": null,
        "storageKey": null
      }, {
        "kind": "LinkedField",
        "alias": null,
        "name": "artworks",
        "storageKey": "artworks(first:8)",
        "args": [{
          "kind": "Literal",
          "name": "first",
          "value": 8,
          "type": "Int"
        }],
        "concreteType": "ArtworkConnection",
        "plural": false,
        "selections": [{
          "kind": "FragmentSpread",
          "name": "ArtworkGrid_artworks",
          "args": null
        }, {
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
            "selections": [v1, v2]
          }]
        }]
      }]
    }, {
      "kind": "FragmentSpread",
      "name": "RelatedWorksArtworkGrid_artwork",
      "args": null
    }, v1, {
      "kind": "ScalarField",
      "alias": null,
      "name": "_id",
      "args": null,
      "storageKey": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "sale",
      "storageKey": null,
      "args": null,
      "concreteType": "Sale",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "is_closed",
        "args": null,
        "storageKey": null
      }, v2]
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "context",
      "storageKey": null,
      "args": null,
      "concreteType": null,
      "plural": false,
      "selections": [v0, v2]
    }, v2]
  };
}();

node.hash = '269954e60ada0af3e2a551d25779a5d2';
var _default = node;
exports.default = _default;
//# sourceMappingURL=OtherWorks_artwork.graphql.js.map