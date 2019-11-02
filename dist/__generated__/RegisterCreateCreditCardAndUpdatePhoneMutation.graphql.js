"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
mutation RegisterCreateCreditCardAndUpdatePhoneMutation(
  $creditCardInput: CreditCardInput!
  $profileInput: UpdateMyProfileInput!
) {
  updateMyUserProfile(input: $profileInput) {
    user {
      id
      __id
    }
  }
  createCreditCard(input: $creditCardInput) {
    creditCardOrError {
      __typename
      ... on CreditCardMutationSuccess {
        creditCardEdge {
          node {
            last_digits
            __id
          }
        }
      }
      ... on CreditCardMutationFailure {
        mutationError {
          type
          message
          detail
        }
      }
    }
  }
}
*/
var node = function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "creditCardInput",
    "type": "CreditCardInput!",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "profileInput",
    "type": "UpdateMyProfileInput!",
    "defaultValue": null
  }],
      v1 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  },
      v2 = {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateMyUserProfile",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "profileInput",
      "type": "UpdateMyProfileInput!"
    }],
    "concreteType": "UpdateMyProfilePayload",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "user",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }, v1]
    }]
  },
      v3 = [{
    "kind": "Variable",
    "name": "input",
    "variableName": "creditCardInput",
    "type": "CreditCardInput!"
  }],
      v4 = {
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
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "message",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "detail",
        "args": null,
        "storageKey": null
      }]
    }]
  },
      v5 = {
    "kind": "InlineFragment",
    "type": "CreditCardMutationSuccess",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "creditCardEdge",
      "storageKey": null,
      "args": null,
      "concreteType": "CreditCardEdge",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": "CreditCard",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "last_digits",
          "args": null,
          "storageKey": null
        }, v1]
      }]
    }]
  };
  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "RegisterCreateCreditCardAndUpdatePhoneMutation",
    "id": null,
    "text": "mutation RegisterCreateCreditCardAndUpdatePhoneMutation(\n  $creditCardInput: CreditCardInput!\n  $profileInput: UpdateMyProfileInput!\n) {\n  updateMyUserProfile(input: $profileInput) {\n    user {\n      id\n      __id\n    }\n  }\n  createCreditCard(input: $creditCardInput) {\n    creditCardOrError {\n      __typename\n      ... on CreditCardMutationSuccess {\n        creditCardEdge {\n          node {\n            last_digits\n            __id\n          }\n        }\n      }\n      ... on CreditCardMutationFailure {\n        mutationError {\n          type\n          message\n          detail\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "RegisterCreateCreditCardAndUpdatePhoneMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": [v2, {
        "kind": "LinkedField",
        "alias": null,
        "name": "createCreditCard",
        "storageKey": null,
        "args": v3,
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
          "selections": [v4, v5]
        }]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "RegisterCreateCreditCardAndUpdatePhoneMutation",
      "argumentDefinitions": v0,
      "selections": [v2, {
        "kind": "LinkedField",
        "alias": null,
        "name": "createCreditCard",
        "storageKey": null,
        "args": v3,
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
          }, v4, v5]
        }]
      }]
    }
  };
}();

node.hash = '00a2498f3a22aea39c5d39bdcb14aaee';
var _default = node;
exports.default = _default;
//# sourceMappingURL=RegisterCreateCreditCardAndUpdatePhoneMutation.graphql.js.map