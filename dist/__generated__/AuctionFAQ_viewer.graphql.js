"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */
var node = function () {
  var v0 = [{
    "kind": "ScalarField",
    "alias": null,
    "name": "content",
    "args": null,
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  }];
  return {
    "kind": "Fragment",
    "name": "AuctionFAQ_viewer",
    "type": "Viewer",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "LinkedField",
      "alias": "bidding",
      "name": "staticContent",
      "storageKey": "staticContent(id:\"how-auctions-work-bidding\")",
      "args": [{
        "kind": "Literal",
        "name": "id",
        "value": "how-auctions-work-bidding",
        "type": "String!"
      }],
      "concreteType": "StaticContent",
      "plural": false,
      "selections": v0
    }, {
      "kind": "LinkedField",
      "alias": "buyersPremiumTaxesAndFees",
      "name": "staticContent",
      "storageKey": "staticContent(id:\"how-auctions-work-buyers-premium-taxes-and-fees\")",
      "args": [{
        "kind": "Literal",
        "name": "id",
        "value": "how-auctions-work-buyers-premium-taxes-and-fees",
        "type": "String!"
      }],
      "concreteType": "StaticContent",
      "plural": false,
      "selections": v0
    }, {
      "kind": "LinkedField",
      "alias": "paymentsAndShipping",
      "name": "staticContent",
      "storageKey": "staticContent(id:\"how-auctions-work-payments-and-shipping\")",
      "args": [{
        "kind": "Literal",
        "name": "id",
        "value": "how-auctions-work-payments-and-shipping",
        "type": "String!"
      }],
      "concreteType": "StaticContent",
      "plural": false,
      "selections": v0
    }, {
      "kind": "LinkedField",
      "alias": "emailsAndAlerts",
      "name": "staticContent",
      "storageKey": "staticContent(id:\"how-auctions-work-emails-and-alerts\")",
      "args": [{
        "kind": "Literal",
        "name": "id",
        "value": "how-auctions-work-emails-and-alerts",
        "type": "String!"
      }],
      "concreteType": "StaticContent",
      "plural": false,
      "selections": v0
    }, {
      "kind": "LinkedField",
      "alias": "conditionsOfSale",
      "name": "staticContent",
      "storageKey": "staticContent(id:\"how-auctions-work-conditions-of-sale\")",
      "args": [{
        "kind": "Literal",
        "name": "id",
        "value": "how-auctions-work-conditions-of-sale",
        "type": "String!"
      }],
      "concreteType": "StaticContent",
      "plural": false,
      "selections": v0
    }]
  };
}();

node.hash = 'e29df207450f132c887a37fde758a3ac';
var _default = node;
exports.default = _default;
//# sourceMappingURL=AuctionFAQ_viewer.graphql.js.map