"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
mutation OfferMutation(
  $input: CommerceAddInitialOfferToOrderInput!
) {
  commerceAddInitialOfferToOrder(input: $input) {
    orderOrError {
      __typename
      ... on CommerceOrderWithMutationSuccess {
        __typename
        order {
          __typename
          id
          mode
          totalListPrice
          totalListPriceCents
          ... on CommerceOfferOrder {
            myLastOffer {
              id
              amountCents
              note
              __id: id
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
    "type": "CommerceAddInitialOfferToOrderInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "CommerceAddInitialOfferToOrderInput!"
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
    "name": "mode",
    "args": null,
    "storageKey": null
  },
      v6 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "totalListPrice",
    "args": null,
    "storageKey": null
  },
      v7 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "totalListPriceCents",
    "args": null,
    "storageKey": null
  },
      v8 = {
    "kind": "ScalarField",
    "alias": "__id",
    "name": "id",
    "args": null,
    "storageKey": null
  },
      v9 = {
    "kind": "InlineFragment",
    "type": "CommerceOfferOrder",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "myLastOffer",
      "storageKey": null,
      "args": null,
      "concreteType": "CommerceOffer",
      "plural": false,
      "selections": [v4, {
        "kind": "ScalarField",
        "alias": null,
        "name": "amountCents",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "note",
        "args": null,
        "storageKey": null
      }, v8]
    }]
  };
  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "OfferMutation",
    "id": null,
    "text": "mutation OfferMutation(\n  $input: CommerceAddInitialOfferToOrderInput!\n) {\n  commerceAddInitialOfferToOrder(input: $input) {\n    orderOrError {\n      __typename\n      ... on CommerceOrderWithMutationSuccess {\n        __typename\n        order {\n          __typename\n          id\n          mode\n          totalListPrice\n          totalListPriceCents\n          ... on CommerceOfferOrder {\n            myLastOffer {\n              id\n              amountCents\n              note\n              __id: id\n            }\n          }\n          __id: id\n        }\n      }\n      ... on CommerceOrderWithMutationFailure {\n        error {\n          type\n          code\n          data\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "OfferMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "commerceAddInitialOfferToOrder",
        "storageKey": null,
        "args": v1,
        "concreteType": "CommerceAddInitialOfferToOrderPayload",
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
              "selections": [v4, v5, v6, v7, v8, v9]
            }]
          }]
        }]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "OfferMutation",
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "commerceAddInitialOfferToOrder",
        "storageKey": null,
        "args": v1,
        "concreteType": "CommerceAddInitialOfferToOrderPayload",
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
              "selections": [v3, v4, v5, v6, v7, v8, v9]
            }]
          }]
        }]
      }]
    }
  };
}();

node.hash = 'd132eefb517283adf59065d0786727d1';
var _default = node;
exports.default = _default;
//# sourceMappingURL=OfferMutation.graphql.js.map