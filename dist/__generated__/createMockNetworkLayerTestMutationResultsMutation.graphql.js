"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
mutation createMockNetworkLayerTestMutationResultsMutation(
  $input: CommerceBuyerAcceptOfferInput!
) {
  commerceBuyerAcceptOffer(input: $input) {
    orderOrError {
      __typename
      ... on CommerceOrderWithMutationFailure {
        error {
          type
          code
          data
        }
      }
      ... on CommerceOrderWithMutationSuccess {
        order {
          __typename
          id
          state
          __id: id
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
    "type": "CommerceBuyerAcceptOfferInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "CommerceBuyerAcceptOfferInput!"
  }],
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
    "name": "createMockNetworkLayerTestMutationResultsMutation",
    "id": null,
    "text": "mutation createMockNetworkLayerTestMutationResultsMutation(\n  $input: CommerceBuyerAcceptOfferInput!\n) {\n  commerceBuyerAcceptOffer(input: $input) {\n    orderOrError {\n      __typename\n      ... on CommerceOrderWithMutationFailure {\n        error {\n          type\n          code\n          data\n        }\n      }\n      ... on CommerceOrderWithMutationSuccess {\n        order {\n          __typename\n          id\n          state\n          __id: id\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "createMockNetworkLayerTestMutationResultsMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "commerceBuyerAcceptOffer",
        "storageKey": null,
        "args": v1,
        "concreteType": "CommerceBuyerAcceptOfferPayload",
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
              "selections": [v2, v3, v4]
            }]
          }, v5]
        }]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "createMockNetworkLayerTestMutationResultsMutation",
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "commerceBuyerAcceptOffer",
        "storageKey": null,
        "args": v1,
        "concreteType": "CommerceBuyerAcceptOfferPayload",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "orderOrError",
          "storageKey": null,
          "args": null,
          "concreteType": null,
          "plural": false,
          "selections": [v6, {
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
              "selections": [v6, v2, v3, v4]
            }]
          }, v5]
        }]
      }]
    }
  };
}();

node.hash = '2f4a85ff7c5813007e0b365f29b02e0c';
var _default = node;
exports.default = _default;
//# sourceMappingURL=createMockNetworkLayerTestMutationResultsMutation.graphql.js.map