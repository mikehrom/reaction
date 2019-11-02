"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
query AuctionTimerQuery(
  $saleID: String!
) {
  sale(id: $saleID) {
    ...AuctionTimer_sale
    __id
  }
}

fragment AuctionTimer_sale on Sale {
  live_start_at
  end_at
  __id
}
*/
var node = function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "saleID",
    "type": "String!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "Variable",
    "name": "id",
    "variableName": "saleID",
    "type": "String!"
  }],
      v2 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Request",
    "operationKind": "query",
    "name": "AuctionTimerQuery",
    "id": null,
    "text": "query AuctionTimerQuery(\n  $saleID: String!\n) {\n  sale(id: $saleID) {\n    ...AuctionTimer_sale\n    __id\n  }\n}\n\nfragment AuctionTimer_sale on Sale {\n  live_start_at\n  end_at\n  __id\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "AuctionTimerQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "sale",
        "storageKey": null,
        "args": v1,
        "concreteType": "Sale",
        "plural": false,
        "selections": [{
          "kind": "FragmentSpread",
          "name": "AuctionTimer_sale",
          "args": null
        }, v2]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "AuctionTimerQuery",
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "sale",
        "storageKey": null,
        "args": v1,
        "concreteType": "Sale",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "live_start_at",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "end_at",
          "args": null,
          "storageKey": null
        }, v2]
      }]
    }
  };
}();

node.hash = '67de4ea3de2f4ebe608f8bd2df2d6b88';
var _default = node;
exports.default = _default;
//# sourceMappingURL=AuctionTimerQuery.graphql.js.map