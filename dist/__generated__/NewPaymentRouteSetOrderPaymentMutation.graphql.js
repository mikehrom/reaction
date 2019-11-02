"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
mutation NewPaymentRouteSetOrderPaymentMutation(
  $input: CommerceFixFailedPaymentInput!
) {
  commerceFixFailedPayment(input: $input) {
    orderOrError {
      __typename
      ... on CommerceOrderWithMutationSuccess {
        order {
          __typename
          state
          creditCard {
            id
            name
            street1
            street2
            city
            state
            country
            postal_code
            __id
          }
          ... on CommerceOfferOrder {
            awaitingResponseFrom
          }
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
    "type": "CommerceFixFailedPaymentInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "CommerceFixFailedPaymentInput!"
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
      "name": "id",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "street1",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "street2",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "city",
      "args": null,
      "storageKey": null
    }, v4, {
      "kind": "ScalarField",
      "alias": null,
      "name": "country",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "postal_code",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "__id",
      "args": null,
      "storageKey": null
    }]
  },
      v6 = {
    "kind": "ScalarField",
    "alias": "__id",
    "name": "id",
    "args": null,
    "storageKey": null
  },
      v7 = {
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
      v8 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "__typename",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "NewPaymentRouteSetOrderPaymentMutation",
    "id": null,
    "text": "mutation NewPaymentRouteSetOrderPaymentMutation(\n  $input: CommerceFixFailedPaymentInput!\n) {\n  commerceFixFailedPayment(input: $input) {\n    orderOrError {\n      __typename\n      ... on CommerceOrderWithMutationSuccess {\n        order {\n          __typename\n          state\n          creditCard {\n            id\n            name\n            street1\n            street2\n            city\n            state\n            country\n            postal_code\n            __id\n          }\n          ... on CommerceOfferOrder {\n            awaitingResponseFrom\n          }\n          __id: id\n        }\n      }\n      ... on CommerceOrderRequiresAction {\n        actionData {\n          clientSecret\n        }\n      }\n      ... on CommerceOrderWithMutationFailure {\n        error {\n          type\n          code\n          data\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "NewPaymentRouteSetOrderPaymentMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "commerceFixFailedPayment",
        "storageKey": null,
        "args": v1,
        "concreteType": "CommerceFixFailedPaymentPayload",
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
              "selections": [v4, v5, v6, v7]
            }]
          }]
        }]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "NewPaymentRouteSetOrderPaymentMutation",
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "commerceFixFailedPayment",
        "storageKey": null,
        "args": v1,
        "concreteType": "CommerceFixFailedPaymentPayload",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "orderOrError",
          "storageKey": null,
          "args": null,
          "concreteType": null,
          "plural": false,
          "selections": [v8, v2, v3, {
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
              "selections": [v8, v4, v5, v6, v7]
            }]
          }]
        }]
      }]
    }
  };
}();

node.hash = '32baca22a4e80acb3aed8485dac30a8b';
var _default = node;
exports.default = _default;
//# sourceMappingURL=NewPaymentRouteSetOrderPaymentMutation.graphql.js.map