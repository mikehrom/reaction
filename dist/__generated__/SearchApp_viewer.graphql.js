"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */
var node = function () {
  var v0 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Fragment",
    "name": "SearchApp_viewer",
    "type": "Viewer",
    "metadata": null,
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "term",
      "type": "String!",
      "defaultValue": ""
    }],
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "search",
      "storageKey": null,
      "args": [{
        "kind": "Literal",
        "name": "aggregations",
        "value": ["TYPE"],
        "type": "[SearchAggregation]"
      }, {
        "kind": "Literal",
        "name": "first",
        "value": 1,
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
        "name": "aggregations",
        "storageKey": null,
        "args": null,
        "concreteType": "SearchAggregationResults",
        "plural": true,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "slice",
          "args": null,
          "storageKey": null
        }, {
          "kind": "LinkedField",
          "alias": null,
          "name": "counts",
          "storageKey": null,
          "args": null,
          "concreteType": "AggregationCount",
          "plural": true,
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "name": "count",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          }, v0]
        }]
      }, {
        "kind": "FragmentSpread",
        "name": "NavigationTabs_searchableConnection",
        "args": null
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
          "selections": [v0, {
            "kind": "InlineFragment",
            "type": "SearchableItem",
            "selections": [{
              "kind": "ScalarField",
              "alias": null,
              "name": "id",
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
              "name": "displayType",
              "args": null,
              "storageKey": null
            }]
          }]
        }]
      }]
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "filter_artworks",
      "storageKey": null,
      "args": [{
        "kind": "Literal",
        "name": "aggregations",
        "value": ["TOTAL"],
        "type": "[ArtworkAggregation]"
      }, {
        "kind": "Variable",
        "name": "keyword",
        "variableName": "term",
        "type": "String"
      }, {
        "kind": "Literal",
        "name": "size",
        "value": 0,
        "type": "Int"
      }],
      "concreteType": "FilterArtworks",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "counts",
        "storageKey": null,
        "args": null,
        "concreteType": "FilterArtworksCounts",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "total",
          "args": null,
          "storageKey": null
        }]
      }, v0]
    }]
  };
}();

node.hash = '671536b76e6625d241658d8cf32d9d68';
var _default = node;
exports.default = _default;
//# sourceMappingURL=SearchApp_viewer.graphql.js.map