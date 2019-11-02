"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */
var node = {
  "kind": "Fragment",
  "name": "NavigationTabs_searchableConnection",
  "type": "SearchableConnection",
  "metadata": null,
  "argumentDefinitions": [],
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
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "__id",
        "args": null,
        "storageKey": null
      }]
    }]
  }]
};
node.hash = '76f1af5fa568892ae22f4ba4840ff358';
var _default = node;
exports.default = _default;
//# sourceMappingURL=NavigationTabs_searchableConnection.graphql.js.map