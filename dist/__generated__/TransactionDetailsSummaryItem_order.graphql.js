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
    "name": "taxTotalCents",
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
    "alias": null,
    "name": "shippingTotal",
    "args": v1,
    "storageKey": "shippingTotal(precision:2)"
  },
      v3 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "shippingTotalCents",
    "args": null,
    "storageKey": null
  },
      v4 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "taxTotal",
    "args": v1,
    "storageKey": "taxTotal(precision:2)"
  },
      v5 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "buyerTotal",
    "args": v1,
    "storageKey": "buyerTotal(precision:2)"
  },
      v6 = {
    "kind": "ScalarField",
    "alias": "__id",
    "name": "id",
    "args": null,
    "storageKey": null
  },
      v7 = [v0, {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "name": "amountCents",
    "args": null,
    "storageKey": null
  }, v2, v3, v4, {
    "kind": "ScalarField",
    "alias": null,
    "name": "amount",
    "args": v1,
    "storageKey": "amount(precision:2)"
  }, v5, {
    "kind": "ScalarField",
    "alias": null,
    "name": "buyerTotalCents",
    "args": null,
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "name": "fromParticipant",
    "args": null,
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "name": "note",
    "args": null,
    "storageKey": null
  }, v6];
  return {
    "kind": "Fragment",
    "name": "TransactionDetailsSummaryItem_order",
    "type": "CommerceOrder",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [v0, {
      "kind": "ScalarField",
      "alias": null,
      "name": "__typename",
      "args": null,
      "storageKey": null
    }, v2, v3, v4, {
      "kind": "ScalarField",
      "alias": null,
      "name": "mode",
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
      "name": "totalListPrice",
      "args": v1,
      "storageKey": "totalListPrice(precision:2)"
    }, v5, v6, {
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
        "selections": v7
      }, {
        "kind": "LinkedField",
        "alias": null,
        "name": "myLastOffer",
        "storageKey": null,
        "args": null,
        "concreteType": "CommerceOffer",
        "plural": false,
        "selections": v7
      }]
    }]
  };
}();

node.hash = 'e207bab0483d25f4386054ee2b0365c6';
var _default = node;
exports.default = _default;
//# sourceMappingURL=TransactionDetailsSummaryItem_order.graphql.js.map