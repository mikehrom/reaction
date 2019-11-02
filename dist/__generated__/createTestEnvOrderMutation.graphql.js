"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
mutation createTestEnvOrderMutation(
  $input: CommerceCreateOrderWithArtworkInput!
) {
  commerceCreateOrderWithArtwork(input: $input) {
    orderOrError {
      __typename
      ... on CommerceOrderWithMutationSuccess {
        order {
          __typename
          id
          __id: id
        }
      }
      ... on CommerceOrderWithMutationFailure {
        error {
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
    "type": "CommerceCreateOrderWithArtworkInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "CommerceCreateOrderWithArtworkInput!"
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
        "name": "type",
        "args": null,
        "storageKey": null
      }]
    }]
  },
      v3 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  },
      v4 = {
    "kind": "ScalarField",
    "alias": "__id",
    "name": "id",
    "args": null,
    "storageKey": null
  },
      v5 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "__typename",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "createTestEnvOrderMutation",
    "id": null,
    "text": "mutation createTestEnvOrderMutation(\n  $input: CommerceCreateOrderWithArtworkInput!\n) {\n  commerceCreateOrderWithArtwork(input: $input) {\n    orderOrError {\n      __typename\n      ... on CommerceOrderWithMutationSuccess {\n        order {\n          __typename\n          id\n          __id: id\n        }\n      }\n      ... on CommerceOrderWithMutationFailure {\n        error {\n          type\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "createTestEnvOrderMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "commerceCreateOrderWithArtwork",
        "storageKey": null,
        "args": v1,
        "concreteType": "CommerceCreateOrderWithArtworkPayload",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "orderOrError",
          "storageKey": null,
          "args": null,
          "concreteType": null,
          "plural": false,
          "selections": [v2, {
            "kind": "InlineFragment",
            "type": "CommerceOrderWithMutationSuccess",
            "selections": [{
              "kind": "LinkedField",
              "alias": null,
              "name": "order",
              "storageKey": null,
              "args": null,
              "concreteType": null,
              "plural": false,
              "selections": [v3, v4]
            }]
          }]
        }]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "createTestEnvOrderMutation",
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "commerceCreateOrderWithArtwork",
        "storageKey": null,
        "args": v1,
        "concreteType": "CommerceCreateOrderWithArtworkPayload",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "orderOrError",
          "storageKey": null,
          "args": null,
          "concreteType": null,
          "plural": false,
          "selections": [v5, v2, {
            "kind": "InlineFragment",
            "type": "CommerceOrderWithMutationSuccess",
            "selections": [{
              "kind": "LinkedField",
              "alias": null,
              "name": "order",
              "storageKey": null,
              "args": null,
              "concreteType": null,
              "plural": false,
              "selections": [v5, v3, v4]
            }]
          }]
        }]
      }]
    }
  };
}();

node.hash = '82ac309100879cf4d1a056ffa3cfe5c3';
var _default = node;
exports.default = _default;
//# sourceMappingURL=createTestEnvOrderMutation.graphql.js.map