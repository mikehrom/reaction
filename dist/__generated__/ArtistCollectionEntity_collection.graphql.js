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
    "name": "title",
    "args": null,
    "storageKey": null
  },
      v1 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  },
      v2 = {
    "kind": "ScalarField",
    "alias": "__id",
    "name": "id",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Fragment",
    "name": "ArtistCollectionEntity_collection",
    "type": "MarketingCollection",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "headerImage",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "slug",
      "args": null,
      "storageKey": null
    }, v0, {
      "kind": "ScalarField",
      "alias": null,
      "name": "price_guidance",
      "args": null,
      "storageKey": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "artworks",
      "storageKey": "artworks(aggregations:[\"TOTAL\"],sort:\"-decayed_merch\")",
      "args": [{
        "kind": "Literal",
        "name": "aggregations",
        "value": ["TOTAL"],
        "type": "[ArtworkAggregation]"
      }, {
        "kind": "Literal",
        "name": "sort",
        "value": "-decayed_merch",
        "type": "String"
      }],
      "concreteType": "FilterArtworks",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "artworks_connection",
        "storageKey": "artworks_connection(first:3)",
        "args": [{
          "kind": "Literal",
          "name": "first",
          "value": 3,
          "type": "Int"
        }],
        "concreteType": "ArtworkConnection",
        "plural": false,
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
              "kind": "LinkedField",
              "alias": null,
              "name": "artist",
              "storageKey": null,
              "args": null,
              "concreteType": "Artist",
              "plural": false,
              "selections": [{
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
                "args": null,
                "storageKey": null
              }, v1]
            }, v0, {
              "kind": "LinkedField",
              "alias": null,
              "name": "image",
              "storageKey": null,
              "args": null,
              "concreteType": "Image",
              "plural": false,
              "selections": [{
                "kind": "LinkedField",
                "alias": null,
                "name": "resized",
                "storageKey": "resized(width:262)",
                "args": [{
                  "kind": "Literal",
                  "name": "width",
                  "value": 262,
                  "type": "Int"
                }],
                "concreteType": "ResizedImageUrl",
                "plural": false,
                "selections": [{
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "url",
                  "args": null,
                  "storageKey": null
                }]
              }, v2]
            }, v1]
          }]
        }]
      }, v1]
    }, v2]
  };
}();

node.hash = '80972a14c0109d823f6537d3e1e93002';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtistCollectionEntity_collection.graphql.js.map