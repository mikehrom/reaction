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
      v1 = [v0],
      v2 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  },
      v3 = {
    "kind": "ScalarField",
    "alias": "__id",
    "name": "id",
    "args": null,
    "storageKey": null
  },
      v4 = [{
    "kind": "Literal",
    "name": "precision",
    "value": 2,
    "type": "Int"
  }];
  return {
    "kind": "Fragment",
    "name": "Status_order",
    "type": "CommerceOrder",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "requestedFulfillment",
      "storageKey": null,
      "args": null,
      "concreteType": null,
      "plural": false,
      "selections": [{
        "kind": "InlineFragment",
        "type": "CommercePickup",
        "selections": v1
      }, {
        "kind": "InlineFragment",
        "type": "CommerceShip",
        "selections": v1
      }]
    }, v0, {
      "kind": "ScalarField",
      "alias": null,
      "name": "code",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "state",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "mode",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "stateReason",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "stateExpiresAt",
      "args": [{
        "kind": "Literal",
        "name": "format",
        "value": "MMM D",
        "type": "String"
      }],
      "storageKey": "stateExpiresAt(format:\"MMM D\")"
    }, v2, {
      "kind": "FragmentSpread",
      "name": "ArtworkSummaryItem_order",
      "args": null
    }, {
      "kind": "FragmentSpread",
      "name": "TransactionDetailsSummaryItem_order",
      "args": null
    }, {
      "kind": "FragmentSpread",
      "name": "ShippingSummaryItem_order",
      "args": null
    }, {
      "kind": "FragmentSpread",
      "name": "CreditCardSummaryItem_order",
      "args": null
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
            "name": "fulfillments",
            "storageKey": null,
            "args": null,
            "concreteType": "CommerceFulfillmentConnection",
            "plural": false,
            "selections": [{
              "kind": "LinkedField",
              "alias": null,
              "name": "edges",
              "storageKey": null,
              "args": null,
              "concreteType": "CommerceFulfillmentEdge",
              "plural": true,
              "selections": [{
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "CommerceFulfillment",
                "plural": false,
                "selections": [{
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "courier",
                  "args": null,
                  "storageKey": null
                }, {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "trackingId",
                  "args": null,
                  "storageKey": null
                }, {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "estimatedDelivery",
                  "args": [{
                    "kind": "Literal",
                    "name": "format",
                    "value": "MMM Do, YYYY",
                    "type": "String"
                  }],
                  "storageKey": "estimatedDelivery(format:\"MMM Do, YYYY\")"
                }, v3]
              }]
            }]
          }, v3]
        }]
      }]
    }, v3, {
      "kind": "InlineFragment",
      "type": "CommerceOfferOrder",
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "myLastOffer",
        "storageKey": null,
        "args": null,
        "concreteType": "CommerceOffer",
        "plural": false,
        "selections": [v2, {
          "kind": "ScalarField",
          "alias": null,
          "name": "amount",
          "args": v4,
          "storageKey": "amount(precision:2)"
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "amountCents",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "shippingTotal",
          "args": v4,
          "storageKey": "shippingTotal(precision:2)"
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "shippingTotalCents",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "taxTotal",
          "args": v4,
          "storageKey": "taxTotal(precision:2)"
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "taxTotalCents",
          "args": null,
          "storageKey": null
        }, v3]
      }]
    }]
  };
}();

node.hash = 'dc527973941511a05bed5036e544a6e5';
var _default = node;
exports.default = _default;
//# sourceMappingURL=Status_order.graphql.js.map