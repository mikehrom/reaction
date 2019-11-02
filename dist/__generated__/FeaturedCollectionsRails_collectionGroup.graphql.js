"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */
var node = {
  "kind": "Fragment",
  "name": "FeaturedCollectionsRails_collectionGroup",
  "type": "MarketingCollectionGroup",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [{
    "kind": "ScalarField",
    "alias": null,
    "name": "groupType",
    "args": null,
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  }, {
    "kind": "LinkedField",
    "alias": null,
    "name": "members",
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
      "name": "description",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "price_guidance",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "thumbnail",
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
};
node.hash = '3f45bd74d98c54ab9ee2bc47c5fc381b';
var _default = node;
exports.default = _default;
//# sourceMappingURL=FeaturedCollectionsRails_collectionGroup.graphql.js.map