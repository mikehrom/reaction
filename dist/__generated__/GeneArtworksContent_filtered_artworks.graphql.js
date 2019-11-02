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
    "name": "GeneArtworksContent_filtered_artworks",
    "type": "FilterArtworks",
    "metadata": {
      "connection": [{
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": ["artworks"]
      }]
    },
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "count",
      "type": "Int",
      "defaultValue": 10
    }, {
      "kind": "LocalArgument",
      "name": "cursor",
      "type": "String",
      "defaultValue": ""
    }, {
      "kind": "RootArgument",
      "name": "sort",
      "type": "String"
    }],
    "selections": [v0, {
      "kind": "LinkedField",
      "alias": "artworks",
      "name": "__GeneArtworksContent_filtered_artworks_connection",
      "storageKey": null,
      "args": [{
        "kind": "Variable",
        "name": "sort",
        "variableName": "sort",
        "type": "String"
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
          "selections": [v0, {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          }]
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "cursor",
          "args": null,
          "storageKey": null
        }]
      }]
    }]
  };
}();

node.hash = 'd30d59f658dfd8265d9991f69697e6f5';
var _default = node;
exports.default = _default;
//# sourceMappingURL=GeneArtworksContent_filtered_artworks.graphql.js.map