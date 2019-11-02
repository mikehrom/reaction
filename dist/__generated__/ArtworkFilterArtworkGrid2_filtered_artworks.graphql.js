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
    "name": "ArtworkFilterArtworkGrid2_filtered_artworks",
    "type": "FilterArtworks",
    "metadata": null,
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "first",
      "type": "Int",
      "defaultValue": 30
    }, {
      "kind": "LocalArgument",
      "name": "after",
      "type": "String",
      "defaultValue": ""
    }],
    "selections": [v0, {
      "kind": "LinkedField",
      "alias": null,
      "name": "aggregations",
      "storageKey": null,
      "args": null,
      "concreteType": "ArtworksAggregationResults",
      "plural": true,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "slice",
        "args": null,
        "storageKey": null
      }, {
        "kind": "LinkedField",
        "alias": null,
        "name": "counts",
        "storageKey": null,
        "args": null,
        "concreteType": "AggregationCount",
        "plural": true,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "count",
          "args": null,
          "storageKey": null
        }, v0]
      }]
    }, {
      "kind": "LinkedField",
      "alias": "artworks",
      "name": "artworks_connection",
      "storageKey": null,
      "args": [{
        "kind": "Variable",
        "name": "after",
        "variableName": "after",
        "type": "String"
      }, {
        "kind": "Variable",
        "name": "first",
        "variableName": "first",
        "type": "Int"
      }],
      "concreteType": "ArtworkConnection",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "pageInfo",
        "storageKey": null,
        "args": null,
        "concreteType": "PageInfo",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "hasNextPage",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "endCursor",
          "args": null,
          "storageKey": null
        }]
      }, {
        "kind": "LinkedField",
        "alias": null,
        "name": "pageCursors",
        "storageKey": null,
        "args": null,
        "concreteType": "PageCursors",
        "plural": false,
        "selections": [{
          "kind": "FragmentSpread",
          "name": "Pagination_pageCursors",
          "args": null
        }]
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
          "selections": [v0]
        }]
      }, {
        "kind": "FragmentSpread",
        "name": "ArtworkGrid_artworks",
        "args": null
      }]
    }]
  };
}();

node.hash = 'a4bd893a278d6f5768ed5964137f09e1';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtworkFilterArtworkGrid2_filtered_artworks.graphql.js.map