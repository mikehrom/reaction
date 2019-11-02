"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
query collectRoutes_MarketingCollectionsAppQuery {
  categories: marketingCategories @principalField {
    ...Collections_categories
  }
}

fragment Collections_categories on MarketingCollectionCategory {
  name
  collections {
    slug
    headerImage
    title
    __id: id
  }
}
*/
var node = {
  "kind": "Request",
  "operationKind": "query",
  "name": "collectRoutes_MarketingCollectionsAppQuery",
  "id": null,
  "text": "query collectRoutes_MarketingCollectionsAppQuery {\n  categories: marketingCategories @principalField {\n    ...Collections_categories\n  }\n}\n\nfragment Collections_categories on MarketingCollectionCategory {\n  name\n  collections {\n    slug\n    headerImage\n    title\n    __id: id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "collectRoutes_MarketingCollectionsAppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "LinkedField",
      "alias": "categories",
      "name": "marketingCategories",
      "storageKey": null,
      "args": null,
      "concreteType": "MarketingCollectionCategory",
      "plural": true,
      "selections": [{
        "kind": "FragmentSpread",
        "name": "Collections_categories",
        "args": null
      }]
    }]
  },
  "operation": {
    "kind": "Operation",
    "name": "collectRoutes_MarketingCollectionsAppQuery",
    "argumentDefinitions": [],
    "selections": [{
      "kind": "LinkedField",
      "alias": "categories",
      "name": "marketingCategories",
      "storageKey": null,
      "args": null,
      "concreteType": "MarketingCollectionCategory",
      "plural": true,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      }, {
        "kind": "LinkedField",
        "alias": null,
        "name": "collections",
        "storageKey": null,
        "args": null,
        "concreteType": "MarketingCollection",
        "plural": true,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "slug",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "headerImage",
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
          "alias": "__id",
          "name": "id",
          "args": null,
          "storageKey": null
        }]
      }]
    }]
  }
};
node.hash = '81db5fa0b5f99948b02522c13d2f9278';
var _default = node;
exports.default = _default;
//# sourceMappingURL=collectRoutes_MarketingCollectionsAppQuery.graphql.js.map