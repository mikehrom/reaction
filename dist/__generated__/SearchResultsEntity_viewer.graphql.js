"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */
var node = {
  "kind": "Fragment",
  "name": "SearchResultsEntity_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [{
    "kind": "LocalArgument",
    "name": "term",
    "type": "String!",
    "defaultValue": ""
  }, {
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int",
    "defaultValue": 10
  }, {
    "kind": "LocalArgument",
    "name": "last",
    "type": "Int",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "after",
    "type": "String",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "before",
    "type": "String",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "page",
    "type": "Int",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "entities",
    "type": "[SearchEntity]",
    "defaultValue": null
  }],
  "selections": [{
    "kind": "LinkedField",
    "alias": null,
    "name": "search",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "after",
      "variableName": "after",
      "type": "String"
    }, {
      "kind": "Variable",
      "name": "before",
      "variableName": "before",
      "type": "String"
    }, {
      "kind": "Variable",
      "name": "entities",
      "variableName": "entities",
      "type": "[SearchEntity]"
    }, {
      "kind": "Variable",
      "name": "first",
      "variableName": "first",
      "type": "Int"
    }, {
      "kind": "Variable",
      "name": "last",
      "variableName": "last",
      "type": "Int"
    }, {
      "kind": "Variable",
      "name": "page",
      "variableName": "page",
      "type": "Int"
    }, {
      "kind": "Variable",
      "name": "query",
      "variableName": "term",
      "type": "String!"
    }],
    "concreteType": "SearchableConnection",
    "plural": false,
    "selections": [{
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
        "name": "hasNextPage",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "endCursor",
        "args": null,
        "storageKey": null
      }]
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "pageCursors",
      "storageKey": null,
      "args": null,
      "concreteType": "PageCursors",
      "plural": false,
      "selections": [{
        "kind": "FragmentSpread",
        "name": "Pagination_pageCursors",
        "args": null
      }]
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "SearchableEdge",
      "plural": true,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "__id",
          "args": null,
          "storageKey": null
        }, {
          "kind": "InlineFragment",
          "type": "SearchableItem",
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "name": "description",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "displayLabel",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "href",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "_id",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "imageUrl",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "displayType",
            "args": null,
            "storageKey": null
          }]
        }]
      }]
    }]
  }]
};
node.hash = 'cccbb874f746a8593c0610c2b3debd0e';
var _default = node;
exports.default = _default;
//# sourceMappingURL=SearchResultsEntity_viewer.graphql.js.map