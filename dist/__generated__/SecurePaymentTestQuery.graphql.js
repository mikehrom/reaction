"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
query SecurePaymentTestQuery {
  artwork(id: "whatevs") {
    ...SecurePayment_artwork
    __id
  }
}

fragment SecurePayment_artwork on Artwork {
  is_acquireable
  is_offerable
  __id
}
*/
var node = function () {
  var v0 = [{
    "kind": "Literal",
    "name": "id",
    "value": "whatevs",
    "type": "String!"
  }],
      v1 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Request",
    "operationKind": "query",
    "name": "SecurePaymentTestQuery",
    "id": null,
    "text": "query SecurePaymentTestQuery {\n  artwork(id: \"whatevs\") {\n    ...SecurePayment_artwork\n    __id\n  }\n}\n\nfragment SecurePayment_artwork on Artwork {\n  is_acquireable\n  is_offerable\n  __id\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "SecurePaymentTestQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": [],
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "artwork",
        "storageKey": "artwork(id:\"whatevs\")",
        "args": v0,
        "concreteType": "Artwork",
        "plural": false,
        "selections": [{
          "kind": "FragmentSpread",
          "name": "SecurePayment_artwork",
          "args": null
        }, v1]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "SecurePaymentTestQuery",
      "argumentDefinitions": [],
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "artwork",
        "storageKey": "artwork(id:\"whatevs\")",
        "args": v0,
        "concreteType": "Artwork",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "is_acquireable",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "is_offerable",
          "args": null,
          "storageKey": null
        }, v1]
      }]
    }
  };
}();

node.hash = '165920d44caabb5774c28db0aa6f8de1';
var _default = node;
exports.default = _default;
//# sourceMappingURL=SecurePaymentTestQuery.graphql.js.map