"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
mutation ShippingOrderAddressUpdateMutation(
  $input: CommerceSetShippingInput!
) {
  commerceSetShipping(input: $input) {
    orderOrError {
      __typename
      ... on CommerceOrderWithMutationSuccess {
        __typename
        order {
          __typename
          id
          state
          requestedFulfillment {
            __typename
            ... on CommerceShip {
              name
              addressLine1
              addressLine2
              city
              region
              country
              postalCode
              phoneNumber
            }
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
    "type": "CommerceSetShippingInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "CommerceSetShippingInput!"
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
    "name": "__typename",
    "args": null,
    "storageKey": null
  },
      v4 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  },
      v5 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "state",
    "args": null,
    "storageKey": null
  },
      v6 = {
    "kind": "LinkedField",
    "alias": null,
    "name": "requestedFulfillment",
    "storageKey": null,
    "args": null,
    "concreteType": null,
    "plural": false,
    "selections": [v3, {
      "kind": "InlineFragment",
      "type": "CommerceShip",
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "addressLine1",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "addressLine2",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "city",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "region",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "country",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "postalCode",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "phoneNumber",
        "args": null,
        "storageKey": null
      }]
    }]
  },
      v7 = {
    "kind": "ScalarField",
    "alias": "__id",
    "name": "id",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "ShippingOrderAddressUpdateMutation",
    "id": null,
    "text": "mutation ShippingOrderAddressUpdateMutation(\n  $input: CommerceSetShippingInput!\n) {\n  commerceSetShipping(input: $input) {\n    orderOrError {\n      __typename\n      ... on CommerceOrderWithMutationSuccess {\n        __typename\n        order {\n          __typename\n          id\n          state\n          requestedFulfillment {\n            __typename\n            ... on CommerceShip {\n              name\n              addressLine1\n              addressLine2\n              city\n              region\n              country\n              postalCode\n              phoneNumber\n            }\n          }\n          __id: id\n        }\n      }\n      ... on CommerceOrderWithMutationFailure {\n        error {\n          type\n          code\n          data\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "ShippingOrderAddressUpdateMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "commerceSetShipping",
        "storageKey": null,
        "args": v1,
        "concreteType": "CommerceSetShippingPayload",
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
            "selections": [v3, {
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
      "name": "ShippingOrderAddressUpdateMutation",
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "commerceSetShipping",
        "storageKey": null,
        "args": v1,
        "concreteType": "CommerceSetShippingPayload",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "orderOrError",
          "storageKey": null,
          "args": null,
          "concreteType": null,
          "plural": false,
          "selections": [v3, v2, {
            "kind": "InlineFragment",
            "type": "CommerceOrderWithMutationSuccess",
            "selections": [v3, {
              "kind": "LinkedField",
              "alias": null,
              "name": "order",
              "storageKey": null,
              "args": null,
              "concreteType": null,
              "plural": false,
              "selections": [v3, v4, v5, v6, v7]
            }]
          }]
        }]
      }]
    }
  };
}();

node.hash = '1bfae43b7ea5c08293230ffc1b06e0fc';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ShippingOrderAddressUpdateMutation.graphql.js.map