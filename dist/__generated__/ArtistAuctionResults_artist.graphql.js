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
    "name": "ArtistAuctionResults_artist",
    "type": "Artist",
    "metadata": null,
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "sort",
      "type": "AuctionResultSorts",
      "defaultValue": "DATE_DESC"
    }, {
      "kind": "LocalArgument",
      "name": "first",
      "type": "Int",
      "defaultValue": 10
    }, {
      "kind": "LocalArgument",
      "name": "last",
      "type": "Int",
      "defaultValue": null
    }, {
      "kind": "LocalArgument",
      "name": "after",
      "type": "String",
      "defaultValue": null
    }, {
      "kind": "LocalArgument",
      "name": "before",
      "type": "String",
      "defaultValue": null
    }],
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "auctionResults",
      "storageKey": null,
      "args": [{
        "kind": "Variable",
        "name": "after",
        "variableName": "after",
        "type": "String"
      }, {
        "kind": "Variable",
        "name": "before",
        "variableName": "before",
        "type": "String"
      }, {
        "kind": "Variable",
        "name": "first",
        "variableName": "first",
        "type": "Int"
      }, {
        "kind": "Variable",
        "name": "last",
        "variableName": "last",
        "type": "Int"
      }, {
        "kind": "Variable",
        "name": "sort",
        "variableName": "sort",
        "type": "AuctionResultSorts"
      }],
      "concreteType": "AuctionResultConnection",
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
        "kind": "ScalarField",
        "alias": null,
        "name": "totalCount",
        "args": null,
        "storageKey": null
      }, {
        "kind": "LinkedField",
        "alias": null,
        "name": "edges",
        "storageKey": null,
        "args": null,
        "concreteType": "AuctionResultEdge",
        "plural": true,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "AuctionResult",
          "plural": false,
          "selections": [{
            "kind": "FragmentSpread",
            "name": "ArtistAuctionResultItem_auctionResult",
            "args": null
          }, v0]
        }]
      }]
    }, v0]
  };
}();

node.hash = '65960d8121e20d8f76659179177c9be8';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtistAuctionResults_artist.graphql.js.map