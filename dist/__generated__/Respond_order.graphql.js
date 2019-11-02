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
    "name": "id",
    "args": null,
    "storageKey": null
  },
      v1 = [{
    "kind": "Literal",
    "name": "precision",
    "value": 2,
    "type": "Int"
  }],
      v2 = {
    "kind": "ScalarField",
    "alias": "__id",
    "name": "id",
    "args": null,
    "storageKey": null
  },
      v3 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "createdAt",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Fragment",
    "name": "Respond_order",
    "type": "CommerceOrder",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "stateExpiresAt",
      "args": null,
      "storageKey": null
    }, v0, {
      "kind": "ScalarField",
      "alias": null,
      "name": "state",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "currencyCode",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "itemsTotal",
      "args": v1,
      "storageKey": "itemsTotal(precision:2)"
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "itemsTotalCents",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "totalListPrice",
      "args": v1,
      "storageKey": "totalListPrice(precision:2)"
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "totalListPriceCents",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "mode",
      "args": null,
      "storageKey": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "lineItems",
      "storageKey": null,
      "args": null,
      "concreteType": "CommerceLineItemConnection",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "edges",
        "storageKey": null,
        "args": null,
        "concreteType": "CommerceLineItemEdge",
        "plural": true,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "CommerceLineItem",
          "plural": false,
          "selections": [{
            "kind": "LinkedField",
            "alias": null,
            "name": "artwork",
            "storageKey": null,
            "args": null,
            "concreteType": "Artwork",
            "plural": false,
            "selections": [v0, {
              "kind": "ScalarField",
              "alias": null,
              "name": "__id",
              "args": null,
              "storageKey": null
            }]
          }, v2]
        }]
      }]
    }, {
      "kind": "FragmentSpread",
      "name": "OfferHistoryItem_order",
      "args": null
    }, {
      "kind": "FragmentSpread",
      "name": "TransactionDetailsSummaryItem_order",
      "args": null
    }, {
      "kind": "FragmentSpread",
      "name": "ArtworkSummaryItem_order",
      "args": null
    }, {
      "kind": "FragmentSpread",
      "name": "ShippingSummaryItem_order",
      "args": null
    }, {
      "kind": "FragmentSpread",
      "name": "CreditCardSummaryItem_order",
      "args": null
    }, v2, {
      "kind": "InlineFragment",
      "type": "CommerceOfferOrder",
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "lastOffer",
        "storageKey": null,
        "args": null,
        "concreteType": "CommerceOffer",
        "plural": false,
        "selections": [v3, v0, {
          "kind": "ScalarField",
          "alias": null,
          "name": "note",
          "args": null,
          "storageKey": null
        }, v2]
      }, {
        "kind": "LinkedField",
        "alias": null,
        "name": "myLastOffer",
        "storageKey": null,
        "args": null,
        "concreteType": "CommerceOffer",
        "plural": false,
        "selections": [v3, v2]
      }]
    }]
  };
}();

node.hash = '65644c6096a6d6f35f3ae57670a4cca2';
var _default = node;
exports.default = _default;
//# sourceMappingURL=Respond_order.graphql.js.map