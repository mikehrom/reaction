"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */
var node = {
  "kind": "Fragment",
  "name": "SearchBar_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [{
    "kind": "LocalArgument",
    "name": "term",
    "type": "String!",
    "defaultValue": ""
  }, {
    "kind": "LocalArgument",
    "name": "hasTerm",
    "type": "Boolean!",
    "defaultValue": false
  }],
  "selections": [{
    "kind": "Condition",
    "passingValue": true,
    "condition": "hasTerm",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "search",
      "storageKey": null,
      "args": [{
        "kind": "Literal",
        "name": "first",
        "value": 7,
        "type": "Int"
      }, {
        "kind": "Literal",
        "name": "mode",
        "value": "AUTOSUGGEST",
        "type": "SearchMode"
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
            "name": "__id",
            "args": null,
            "storageKey": null
          }, {
            "kind": "InlineFragment",
            "type": "SearchableItem",
            "selections": [{
              "kind": "ScalarField",
              "alias": null,
              "name": "displayType",
              "args": null,
              "storageKey": null
            }, {
              "kind": "ScalarField",
              "alias": null,
              "name": "id",
              "args": null,
              "storageKey": null
            }]
          }]
        }]
      }]
    }]
  }]
};
node.hash = '7d0a79e6f397dc366681ef647a0a5d50';
var _default = node;
exports.default = _default;
//# sourceMappingURL=SearchBar_viewer.graphql.js.map