"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */
var node = {
  "kind": "Fragment",
  "name": "CreditCardSummaryItem_order",
  "type": "CommerceOrder",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [{
    "kind": "LinkedField",
    "alias": null,
    "name": "creditCard",
    "storageKey": null,
    "args": null,
    "concreteType": "CreditCard",
    "plural": false,
    "selections": [{
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
      "name": "__id",
      "args": null,
      "storageKey": null
    }]
  }, {
    "kind": "ScalarField",
    "alias": "__id",
    "name": "id",
    "args": null,
    "storageKey": null
  }]
};
node.hash = '281587f1020c8ac58c8d214993f3c581';
var _default = node;
exports.default = _default;
//# sourceMappingURL=CreditCardSummaryItem_order.graphql.js.map