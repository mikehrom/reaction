"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
query UserSettingsPaymentsQuery {
  me {
    ...UserSettingsPayments_me
    __id
  }
}

fragment UserSettingsPayments_me on Me {
  __id
  id
  creditCards(first: 100) {
    edges {
      node {
        __id
        id
        brand
        last_digits
        expiration_year
        expiration_month
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/
var node = function () {
  var v0 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  },
      v1 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Request",
    "operationKind": "query",
    "name": "UserSettingsPaymentsQuery",
    "id": null,
    "text": "query UserSettingsPaymentsQuery {\n  me {\n    ...UserSettingsPayments_me\n    __id\n  }\n}\n\nfragment UserSettingsPayments_me on Me {\n  __id\n  id\n  creditCards(first: 100) {\n    edges {\n      node {\n        __id\n        id\n        brand\n        last_digits\n        expiration_year\n        expiration_month\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "UserSettingsPaymentsQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": [],
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "me",
        "storageKey": null,
        "args": null,
        "concreteType": "Me",
        "plural": false,
        "selections": [{
          "kind": "FragmentSpread",
          "name": "UserSettingsPayments_me",
          "args": null
        }, v0]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "UserSettingsPaymentsQuery",
      "argumentDefinitions": [],
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "me",
        "storageKey": null,
        "args": null,
        "concreteType": "Me",
        "plural": false,
        "selections": [v0, v1, {
          "kind": "LinkedField",
          "alias": null,
          "name": "creditCards",
          "storageKey": "creditCards(first:100)",
          "args": [{
            "kind": "Literal",
            "name": "first",
            "value": 100,
            "type": "Int"
          }],
          "concreteType": "CreditCardConnection",
          "plural": false,
          "selections": [{
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "CreditCardEdge",
            "plural": true,
            "selections": [{
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "CreditCard",
              "plural": false,
              "selections": [v0, v1, {
                "kind": "ScalarField",
                "alias": null,
                "name": "brand",
                "args": null,
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "name": "last_digits",
                "args": null,
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "name": "expiration_year",
                "args": null,
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "name": "expiration_month",
                "args": null,
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "name": "__typename",
                "args": null,
                "storageKey": null
              }]
            }, {
              "kind": "ScalarField",
              "alias": null,
              "name": "cursor",
              "args": null,
              "storageKey": null
            }]
          }, {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "PageInfo",
            "plural": false,
            "selections": [{
              "kind": "ScalarField",
              "alias": null,
              "name": "endCursor",
              "args": null,
              "storageKey": null
            }, {
              "kind": "ScalarField",
              "alias": null,
              "name": "hasNextPage",
              "args": null,
              "storageKey": null
            }]
          }]
        }, {
          "kind": "LinkedHandle",
          "alias": null,
          "name": "creditCards",
          "args": [{
            "kind": "Literal",
            "name": "first",
            "value": 100,
            "type": "Int"
          }],
          "handle": "connection",
          "key": "UserSettingsPayments_creditCards",
          "filters": []
        }]
      }]
    }
  };
}();

node.hash = '979a38cba2d2f95be025a730d894ca44';
var _default = node;
exports.default = _default;
//# sourceMappingURL=UserSettingsPaymentsQuery.graphql.js.map