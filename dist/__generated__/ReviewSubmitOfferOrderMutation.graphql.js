"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
mutation ReviewSubmitOfferOrderMutation(
  $input: CommerceSubmitOrderWithOfferInput!
) {
  commerceSubmitOrderWithOffer(input: $input) {
    orderOrError {
      __typename
      ... on CommerceOrderWithMutationSuccess {
        order {
          __typename
          state
          __id: id
        }
      }
      ... on CommerceOrderRequiresAction {
        actionData {
          clientSecret
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
    "type": "CommerceSubmitOrderWithOfferInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "CommerceSubmitOrderWithOfferInput!"
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
    "kind": "InlineFragment",
    "type": "CommerceOrderRequiresAction",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "actionData",
      "storageKey": null,
      "args": null,
      "concreteType": "CommerceOrderActionData",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "clientSecret",
        "args": null,
        "storageKey": null
      }]
    }]
  },
      v4 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "state",
    "args": null,
    "storageKey": null
  },
      v5 = {
    "kind": "ScalarField",
    "alias": "__id",
    "name": "id",
    "args": null,
    "storageKey": null
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
    "name": "ReviewSubmitOfferOrderMutation",
    "id": null,
    "text": "mutation ReviewSubmitOfferOrderMutation(\n  $input: CommerceSubmitOrderWithOfferInput!\n) {\n  commerceSubmitOrderWithOffer(input: $input) {\n    orderOrError {\n      __typename\n      ... on CommerceOrderWithMutationSuccess {\n        order {\n          __typename\n          state\n          __id: id\n        }\n      }\n      ... on CommerceOrderRequiresAction {\n        actionData {\n          clientSecret\n        }\n      }\n      ... on CommerceOrderWithMutationFailure {\n        error {\n          type\n          code\n          data\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "ReviewSubmitOfferOrderMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "commerceSubmitOrderWithOffer",
        "storageKey": null,
        "args": v1,
        "concreteType": "CommerceSubmitOrderWithOfferPayload",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "orderOrError",
          "storageKey": null,
          "args": null,
          "concreteType": null,
          "plural": false,
          "selections": [v2, v3, {
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
              "selections": [v4, v5]
            }]
          }]
        }]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "ReviewSubmitOfferOrderMutation",
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "commerceSubmitOrderWithOffer",
        "storageKey": null,
        "args": v1,
        "concreteType": "CommerceSubmitOrderWithOfferPayload",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "orderOrError",
          "storageKey": null,
          "args": null,
          "concreteType": null,
          "plural": false,
          "selections": [v6, v2, v3, {
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
              "selections": [v6, v4, v5]
            }]
          }]
        }]
      }]
    }
  };
}();

node.hash = 'cf5774c904680b91ec8f15d2bef60471';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ReviewSubmitOfferOrderMutation.graphql.js.map