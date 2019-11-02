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
    "name": "MarketInsights_artist",
    "type": "Artist",
    "metadata": null,
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "partner_category",
      "type": "[String]",
      "defaultValue": ["blue-chip", "top-established", "top-emerging"]
    }],
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "_id",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "collections",
      "args": null,
      "storageKey": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "highlights",
      "storageKey": null,
      "args": null,
      "concreteType": "ArtistHighlights",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "partners",
        "storageKey": null,
        "args": [{
          "kind": "Literal",
          "name": "display_on_partner_profile",
          "value": true,
          "type": "Boolean"
        }, {
          "kind": "Literal",
          "name": "first",
          "value": 10,
          "type": "Int"
        }, {
          "kind": "Variable",
          "name": "partner_category",
          "variableName": "partner_category",
          "type": "[String]"
        }, {
          "kind": "Literal",
          "name": "represented_by",
          "value": true,
          "type": "Boolean"
        }],
        "concreteType": "PartnerArtistConnection",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "PartnerArtistEdge",
          "plural": true,
          "selections": [{
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Partner",
            "plural": false,
            "selections": [{
              "kind": "LinkedField",
              "alias": null,
              "name": "categories",
              "storageKey": null,
              "args": null,
              "concreteType": "Category",
              "plural": true,
              "selections": [{
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }, v0]
            }, v0]
          }, v0]
        }]
      }]
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "auctionResults",
      "storageKey": "auctionResults(first:1,recordsTrusted:true,sort:\"PRICE_AND_DATE_DESC\")",
      "args": [{
        "kind": "Literal",
        "name": "first",
        "value": 1,
        "type": "Int"
      }, {
        "kind": "Literal",
        "name": "recordsTrusted",
        "value": true,
        "type": "Boolean"
      }, {
        "kind": "Literal",
        "name": "sort",
        "value": "PRICE_AND_DATE_DESC",
        "type": "AuctionResultSorts"
      }],
      "concreteType": "AuctionResultConnection",
      "plural": false,
      "selections": [{
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
            "kind": "LinkedField",
            "alias": null,
            "name": "price_realized",
            "storageKey": null,
            "args": null,
            "concreteType": "AuctionResultPriceRealized",
            "plural": false,
            "selections": [{
              "kind": "ScalarField",
              "alias": null,
              "name": "display",
              "args": [{
                "kind": "Literal",
                "name": "format",
                "value": "0a",
                "type": "String"
              }],
              "storageKey": "display(format:\"0a\")"
            }]
          }, v0]
        }]
      }]
    }, v0]
  };
}();

node.hash = 'bc1709cbe4b0a9523e937f00dbd67ede';
var _default = node;
exports.default = _default;
//# sourceMappingURL=MarketInsights_artist.graphql.js.map