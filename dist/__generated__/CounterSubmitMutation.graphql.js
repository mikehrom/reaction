"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
mutation CounterSubmitMutation(
  $input: CommerceSubmitPendingOfferInput!
) {
  commerceSubmitPendingOffer(input: $input) {
    orderOrError {
      __typename
      ... on CommerceOrderWithMutationSuccess {
        order {
          __typename
          state
          ... on CommerceOfferOrder {
            awaitingResponseFrom
          }
          __id: id
        }
      }
      ... on CommerceOrderWithMutationFailure {
        error {
          type
          code
          data
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
    "type": "CommerceSubmitPendingOfferInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "CommerceSubmitPendingOfferInput!"
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
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "code",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "data",
        "args": null,
        "storageKey": null
      }]
    }]
  },
      v3 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "state",
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
    "kind": "InlineFragment",
    "type": "CommerceOfferOrder",
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "awaitingResponseFrom",
      "args": null,
      "storageKey": null
    }]
  },
      v6 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "__typename",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "CounterSubmitMutation",
    "id": null,
    "text": "mutation CounterSubmitMutation(\n  $input: CommerceSubmitPendingOfferInput!\n) {\n  commerceSubmitPendingOffer(input: $input) {\n    orderOrError {\n      __typename\n      ... on CommerceOrderWithMutationSuccess {\n        order {\n          __typename\n          state\n          ... on CommerceOfferOrder {\n            awaitingResponseFrom\n          }\n          __id: id\n        }\n      }\n      ... on CommerceOrderWithMutationFailure {\n        error {\n          type\n          code\n          data\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "CounterSubmitMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "commerceSubmitPendingOffer",
        "storageKey": null,
        "args": v1,
        "concreteType": "CommerceSubmitPendingOfferPayload",
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
              "selections": [v3, v4, v5]
            }]
          }]
        }]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "CounterSubmitMutation",
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "commerceSubmitPendingOffer",
        "storageKey": null,
        "args": v1,
        "concreteType": "CommerceSubmitPendingOfferPayload",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "orderOrError",
          "storageKey": null,
          "args": null,
          "concreteType": null,
          "plural": false,
          "selections": [v6, v2, {
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
              "selections": [v6, v3, v4, v5]
            }]
          }]
        }]
      }]
    }
  };
}();

node.hash = '498e2167e61dc5b2ecbb9fa2738cf453';
var _default = node;
exports.default = _default;
//# sourceMappingURL=CounterSubmitMutation.graphql.js.map