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
    "name": "Review_order",
    "type": "CommerceOrder",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "FragmentSpread",
      "name": "ArtworkSummaryItem_order",
      "args": null
    }, v0, {
      "kind": "ScalarField",
      "alias": null,
      "name": "itemsTotal",
      "args": [{
        "kind": "Literal",
        "name": "precision",
        "value": 2,
        "type": "Int"
      }],
      "storageKey": "itemsTotal(precision:2)"
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
            "kind": "FragmentSpread",
            "name": "ItemReview_lineItem",
            "args": null
          }, {
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
              "name": "_id",
              "args": null,
              "storageKey": null
            }, {
              "kind": "LinkedField",
              "alias": null,
              "name": "artists",
              "storageKey": null,
              "args": null,
              "concreteType": "Artist",
              "plural": true,
              "selections": [v0, v1]
            }, v1]
          }, v2]
        }]
      }]
    }, {
      "kind": "FragmentSpread",
      "name": "OfferSummaryItem_order",
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
        "name": "myLastOffer",
        "storageKey": null,
        "args": null,
        "concreteType": "CommerceOffer",
        "plural": false,
        "selections": [v0, v2]
      }]
    }]
  };
}();

node.hash = 'b2f1f8fd334de38526bf166c54eccae9';
var _default = node;
exports.default = _default;
//# sourceMappingURL=Review_order.graphql.js.map