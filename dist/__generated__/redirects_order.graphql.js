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
      v1 = [v0, {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  }],
      v2 = {
    "kind": "ScalarField",
    "alias": "__id",
    "name": "id",
    "args": null,
    "storageKey": null
  },
      v3 = [v0, {
    "kind": "ScalarField",
    "alias": null,
    "name": "createdAt",
    "args": null,
    "storageKey": null
  }, v2];
  return {
    "kind": "Fragment",
    "name": "redirects_order",
    "type": "CommerceOrder",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [v0, {
      "kind": "ScalarField",
      "alias": null,
      "name": "mode",
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
      "name": "lastTransactionFailed",
      "args": null,
      "storageKey": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "requestedFulfillment",
      "storageKey": null,
      "args": null,
      "concreteType": null,
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "__typename",
        "args": null,
        "storageKey": null
      }]
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
            "selections": v1
          }, v2]
        }]
      }]
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "creditCard",
      "storageKey": null,
      "args": null,
      "concreteType": "CreditCard",
      "plural": false,
      "selections": v1
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
        "selections": v3
      }, {
        "kind": "LinkedField",
        "alias": null,
        "name": "lastOffer",
        "storageKey": null,
        "args": null,
        "concreteType": "CommerceOffer",
        "plural": false,
        "selections": v3
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "awaitingResponseFrom",
        "args": null,
        "storageKey": null
      }]
    }]
  };
}();

node.hash = 'c01a4a399cd325004d47280b43c4ef84';
var _default = node;
exports.default = _default;
//# sourceMappingURL=redirects_order.graphql.js.map