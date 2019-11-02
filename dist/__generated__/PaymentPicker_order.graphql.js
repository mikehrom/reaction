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
    "name": "state",
    "args": null,
    "storageKey": null
  },
      v2 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "country",
    "args": null,
    "storageKey": null
  },
      v3 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "city",
    "args": null,
    "storageKey": null
  },
      v4 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  },
      v5 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  },
      v6 = {
    "kind": "ScalarField",
    "alias": "__id",
    "name": "id",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Fragment",
    "name": "PaymentPicker_order",
    "type": "CommerceOrder",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [v0, {
      "kind": "ScalarField",
      "alias": null,
      "name": "mode",
      "args": null,
      "storageKey": null
    }, v1, {
      "kind": "LinkedField",
      "alias": null,
      "name": "creditCard",
      "storageKey": null,
      "args": null,
      "concreteType": "CreditCard",
      "plural": false,
      "selections": [v2, v0, {
        "kind": "ScalarField",
        "alias": null,
        "name": "street1",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "street2",
        "args": null,
        "storageKey": null
      }, v3, v1, v4, {
        "kind": "ScalarField",
        "alias": null,
        "name": "postal_code",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "expiration_month",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "expiration_year",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "last_digits",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "brand",
        "args": null,
        "storageKey": null
      }, v5]
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
      }, {
        "kind": "InlineFragment",
        "type": "CommercePickup",
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "fulfillmentType",
          "args": null,
          "storageKey": null
        }]
      }, {
        "kind": "InlineFragment",
        "type": "CommerceShip",
        "selections": [v4, {
          "kind": "ScalarField",
          "alias": null,
          "name": "addressLine1",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "addressLine2",
          "args": null,
          "storageKey": null
        }, v3, {
          "kind": "ScalarField",
          "alias": null,
          "name": "region",
          "args": null,
          "storageKey": null
        }, v2, {
          "kind": "ScalarField",
          "alias": null,
          "name": "postalCode",
          "args": null,
          "storageKey": null
        }]
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
            "selections": [v0, v5]
          }, v6]
        }]
      }]
    }, v6]
  };
}();

node.hash = '10de849c454fc14d282a16c6e00693aa';
var _default = node;
exports.default = _default;
//# sourceMappingURL=PaymentPicker_order.graphql.js.map