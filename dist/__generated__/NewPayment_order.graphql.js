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
    "name": "NewPayment_order",
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
      "name": "stateExpiresAt",
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
      "name": "PaymentPicker_order",
      "args": null
    }, {
      "kind": "FragmentSpread",
      "name": "ArtworkSummaryItem_order",
      "args": null
    }, {
      "kind": "FragmentSpread",
      "name": "TransactionDetailsSummaryItem_order",
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
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "createdAt",
          "args": null,
          "storageKey": null
        }, v0, {
          "kind": "ScalarField",
          "alias": null,
          "name": "note",
          "args": null,
          "storageKey": null
        }, v2]
      }]
    }]
  };
}();

node.hash = 'ddfe05210aee3d54bd790a789cf3d31c';
var _default = node;
exports.default = _default;
//# sourceMappingURL=NewPayment_order.graphql.js.map