"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
query CollectionsHubsNavQuery {
  marketingHubCollections {
    ...CollectionsHubsNav_marketingHubCollections
    __id: id
  }
}

fragment CollectionsHubsNav_marketingHubCollections on MarketingCollection {
  id
  slug
  title
  thumbnail
  __id: id
}
*/
var node = function () {
  var v0 = {
    "kind": "ScalarField",
    "alias": "__id",
    "name": "id",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Request",
    "operationKind": "query",
    "name": "CollectionsHubsNavQuery",
    "id": null,
    "text": "query CollectionsHubsNavQuery {\n  marketingHubCollections {\n    ...CollectionsHubsNav_marketingHubCollections\n    __id: id\n  }\n}\n\nfragment CollectionsHubsNav_marketingHubCollections on MarketingCollection {\n  id\n  slug\n  title\n  thumbnail\n  __id: id\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "CollectionsHubsNavQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": [],
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "marketingHubCollections",
        "storageKey": null,
        "args": null,
        "concreteType": "MarketingCollection",
        "plural": true,
        "selections": [{
          "kind": "FragmentSpread",
          "name": "CollectionsHubsNav_marketingHubCollections",
          "args": null
        }, v0]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "CollectionsHubsNavQuery",
      "argumentDefinitions": [],
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "marketingHubCollections",
        "storageKey": null,
        "args": null,
        "concreteType": "MarketingCollection",
        "plural": true,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "slug",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "title",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "thumbnail",
          "args": null,
          "storageKey": null
        }, v0]
      }]
    }
  };
}();

node.hash = 'e5ed35dc266541269a05a2a638814af6';
var _default = node;
exports.default = _default;
//# sourceMappingURL=CollectionsHubsNavQuery.graphql.js.map