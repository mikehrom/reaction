"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
mutation createTestEnvCreditCardMutation(
  $input: CreditCardInput!
) {
  createCreditCard: createCreditCard(input: $input) {
    creditCardOrError {
      __typename
      ... on CreditCardMutationSuccess {
        creditCard {
          brand
          __id
        }
      }
      ... on CreditCardMutationFailure {
        mutationError {
          type
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
    "type": "CreditCardInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "CreditCardInput!"
  }],
      v2 = {
    "kind": "InlineFragment",
    "type": "CreditCardMutationFailure",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "mutationError",
      "storageKey": null,
      "args": null,
      "concreteType": "GravityMutationError",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "type",
        "args": null,
        "storageKey": null
      }]
    }]
  },
      v3 = {
    "kind": "InlineFragment",
    "type": "CreditCardMutationSuccess",
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
        "name": "__id",
        "args": null,
        "storageKey": null
      }]
    }]
  };
  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "createTestEnvCreditCardMutation",
    "id": null,
    "text": "mutation createTestEnvCreditCardMutation(\n  $input: CreditCardInput!\n) {\n  createCreditCard: createCreditCard(input: $input) {\n    creditCardOrError {\n      __typename\n      ... on CreditCardMutationSuccess {\n        creditCard {\n          brand\n          __id\n        }\n      }\n      ... on CreditCardMutationFailure {\n        mutationError {\n          type\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "createTestEnvCreditCardMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": "createCreditCard",
        "name": "createCreditCard",
        "storageKey": null,
        "args": v1,
        "concreteType": "CreditCardPayload",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "creditCardOrError",
          "storageKey": null,
          "args": null,
          "concreteType": null,
          "plural": false,
          "selections": [v2, v3]
        }]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "createTestEnvCreditCardMutation",
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": "createCreditCard",
        "name": "createCreditCard",
        "storageKey": null,
        "args": v1,
        "concreteType": "CreditCardPayload",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "creditCardOrError",
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
          }, v2, v3]
        }]
      }]
    }
  };
}();

node.hash = '4a8e9a9778e885c2061bbb99d3f158d1';
var _default = node;
exports.default = _default;
//# sourceMappingURL=createTestEnvCreditCardMutation.graphql.js.map