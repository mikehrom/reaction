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
      v1 = {
    "kind": "ScalarField",
    "alias": "__id",
    "name": "id",
    "args": null,
    "storageKey": null
  },
      v2 = [{
    "kind": "Literal",
    "name": "precision",
    "value": 2,
    "type": "Int"
  }];
  return {
    "kind": "Fragment",
    "name": "Counter_order",
    "type": "CommerceOrder",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
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
          }, v1]
        }]
      }]
    }, v0, {
      "kind": "ScalarField",
      "alias": null,
      "name": "state",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "itemsTotal",
      "args": v2,
      "storageKey": "itemsTotal(precision:2)"
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "totalListPrice",
      "args": v2,
      "storageKey": "totalListPrice(precision:2)"
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "stateExpiresAt",
      "args": null,
      "storageKey": null
    }, {
      "kind": "FragmentSpread",
      "name": "OfferHistoryItem_order",
      "args": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "mode",
      "args": null,
      "storageKey": null
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
    }, v1, {
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
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "createdAt",
          "args": null,
          "storageKey": null
        }, v1]
      }, {
        "kind": "LinkedField",
        "alias": null,
        "name": "myLastOffer",
        "storageKey": null,
        "args": null,
        "concreteType": "CommerceOffer",
        "plural": false,
        "selections": [v0, v1]
      }]
    }]
  };
}();

node.hash = 'b0b4179c6c4ffb147979de5456cb6563';
var _default = node;
exports.default = _default;
//# sourceMappingURL=Counter_order.graphql.js.map