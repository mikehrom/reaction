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
  },
      v1 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Fragment",
    "name": "UserSettingsPayments_me",
    "type": "Me",
    "metadata": {
      "connection": [{
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": ["creditCards"]
      }]
    },
    "argumentDefinitions": [],
    "selections": [v0, v1, {
      "kind": "LinkedField",
      "alias": "creditCards",
      "name": "__UserSettingsPayments_creditCards_connection",
      "storageKey": null,
      "args": null,
      "concreteType": "CreditCardConnection",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "edges",
        "storageKey": null,
        "args": null,
        "concreteType": "CreditCardEdge",
        "plural": true,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "CreditCard",
          "plural": false,
          "selections": [v0, v1, {
            "kind": "ScalarField",
            "alias": null,
            "name": "brand",
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
            "name": "expiration_year",
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
            "name": "__typename",
            "args": null,
            "storageKey": null
          }]
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "cursor",
          "args": null,
          "storageKey": null
        }]
      }, {
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
          "name": "endCursor",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "hasNextPage",
          "args": null,
          "storageKey": null
        }]
      }]
    }]
  };
}();

node.hash = '7f6b3cc640e79e84d066e0424e95aa7e';
var _default = node;
exports.default = _default;
//# sourceMappingURL=UserSettingsPayments_me.graphql.js.map