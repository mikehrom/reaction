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
  }],
      v1 = {
    "kind": "ScalarField",
    "alias": "__id",
    "name": "id",
    "args": null,
    "storageKey": null
  },
      v2 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  },
      v3 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "amount",
    "args": v0,
    "storageKey": "amount(precision:2)"
  },
      v4 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "fromParticipant",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Fragment",
    "name": "OfferHistoryItem_order",
    "type": "CommerceOrder",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "totalListPrice",
      "args": v0,
      "storageKey": "totalListPrice(precision:2)"
    }, v1, {
      "kind": "InlineFragment",
      "type": "CommerceOfferOrder",
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "offers",
        "storageKey": null,
        "args": null,
        "concreteType": "CommerceOfferConnection",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "CommerceOfferEdge",
          "plural": true,
          "selections": [{
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "CommerceOffer",
            "plural": false,
            "selections": [v2, v3, {
              "kind": "ScalarField",
              "alias": null,
              "name": "createdAt",
              "args": [{
                "kind": "Literal",
                "name": "format",
                "value": "MMM D",
                "type": "String"
              }],
              "storageKey": "createdAt(format:\"MMM D\")"
            }, v4, v1]
          }]
        }]
      }, {
        "kind": "LinkedField",
        "alias": null,
        "name": "lastOffer",
        "storageKey": null,
        "args": null,
        "concreteType": "CommerceOffer",
        "plural": false,
        "selections": [v2, v4, v3, {
          "kind": "ScalarField",
          "alias": null,
          "name": "shippingTotal",
          "args": v0,
          "storageKey": "shippingTotal(precision:2)"
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "taxTotal",
          "args": v0,
          "storageKey": "taxTotal(precision:2)"
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "note",
          "args": null,
          "storageKey": null
        }, v1]
      }]
    }]
  };
}();

node.hash = '9d72783a423b991ef7aa55d4ffcfb39b';
var _default = node;
exports.default = _default;
//# sourceMappingURL=OfferHistoryItem_order.graphql.js.map