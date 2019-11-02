"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
mutation RejectOfferMutation(
  $input: CommerceBuyerRejectOfferInput!
) {
  commerceBuyerRejectOffer(input: $input) {
    orderOrError {
      __typename
      ... on CommerceOrderWithMutationSuccess {
        __typename
        order {
          __typename
          id
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
    "type": "CommerceBuyerRejectOfferInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "CommerceBuyerRejectOfferInput!"
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
    "alias": "__id",
    "name": "id",
    "args": null,
    "storageKey": null
  },
      v6 = {
    "kind": "InlineFragment",
    "type": "CommerceOfferOrder",
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "awaitingResponseFrom",
      "args": null,
      "storageKey": null
    }]
  };
  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "RejectOfferMutation",
    "id": null,
    "text": "mutation RejectOfferMutation(\n  $input: CommerceBuyerRejectOfferInput!\n) {\n  commerceBuyerRejectOffer(input: $input) {\n    orderOrError {\n      __typename\n      ... on CommerceOrderWithMutationSuccess {\n        __typename\n        order {\n          __typename\n          id\n          ... on CommerceOfferOrder {\n            awaitingResponseFrom\n          }\n          __id: id\n        }\n      }\n      ... on CommerceOrderWithMutationFailure {\n        error {\n          type\n          code\n          data\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "RejectOfferMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "commerceBuyerRejectOffer",
        "storageKey": null,
        "args": v1,
        "concreteType": "CommerceBuyerRejectOfferPayload",
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
              "selections": [v4, v5, v6]
            }]
          }]
        }]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "RejectOfferMutation",
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "commerceBuyerRejectOffer",
        "storageKey": null,
        "args": v1,
        "concreteType": "CommerceBuyerRejectOfferPayload",
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
              "selections": [v3, v4, v5, v6]
            }]
          }]
        }]
      }]
    }
  };
}();

node.hash = '20d9b769df87764d8b7f69ab00bf3162';
var _default = node;
exports.default = _default;
//# sourceMappingURL=RejectOfferMutation.graphql.js.map