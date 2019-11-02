"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
mutation commitMutationTest1Mutation(
  $input: CommerceSetPaymentInput!
) {
  commerceSetPayment(input: $input) {
    orderOrError {
      __typename
      ... on CommerceOrderWithMutationFailure {
        error {
          code
        }
      }
    }
  }
}
*/
var node = function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "CommerceSetPaymentInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "CommerceSetPaymentInput!"
  }],
      v2 = {
    "kind": "InlineFragment",
    "type": "CommerceOrderWithMutationFailure",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "error",
      "storageKey": null,
      "args": null,
      "concreteType": "CommerceApplicationError",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "code",
        "args": null,
        "storageKey": null
      }]
    }]
  };
  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "commitMutationTest1Mutation",
    "id": null,
    "text": "mutation commitMutationTest1Mutation(\n  $input: CommerceSetPaymentInput!\n) {\n  commerceSetPayment(input: $input) {\n    orderOrError {\n      __typename\n      ... on CommerceOrderWithMutationFailure {\n        error {\n          code\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "commitMutationTest1Mutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "commerceSetPayment",
        "storageKey": null,
        "args": v1,
        "concreteType": "CommerceSetPaymentPayload",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "orderOrError",
          "storageKey": null,
          "args": null,
          "concreteType": null,
          "plural": false,
          "selections": [v2]
        }]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "commitMutationTest1Mutation",
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "commerceSetPayment",
        "storageKey": null,
        "args": v1,
        "concreteType": "CommerceSetPaymentPayload",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "orderOrError",
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
          }, v2]
        }]
      }]
    }
  };
}();

node.hash = '00dce5aa5f8ecdb281f7afb350b5d5b8';
var _default = node;
exports.default = _default;
//# sourceMappingURL=commitMutationTest1Mutation.graphql.js.map