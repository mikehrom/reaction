"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */
var node = function () {
  var v0 = [{
    "kind": "Literal",
    "name": "precision",
    "value": 2,
    "type": "Int"
  }];
  return {
    "kind": "Fragment",
    "name": "TransactionDetailsSummaryItemOfferProperties",
    "type": "CommerceOffer",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "taxTotalCents",
      "args": null,
      "storageKey": null
    }, {
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
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "shippingTotal",
      "args": v0,
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
      "args": v0,
      "storageKey": "taxTotal(precision:2)"
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "amount",
      "args": v0,
      "storageKey": "amount(precision:2)"
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "buyerTotal",
      "args": v0,
      "storageKey": "buyerTotal(precision:2)"
    }, {
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
    }, {
      "kind": "ScalarField",
      "alias": "__id",
      "name": "id",
      "args": null,
      "storageKey": null
    }]
  };
}();

node.hash = 'ef8122fa1ce0cfb3e82d1bdfbfcd4d68';
var _default = node;
exports.default = _default;
//# sourceMappingURL=TransactionDetailsSummaryItemOfferProperties.graphql.js.map