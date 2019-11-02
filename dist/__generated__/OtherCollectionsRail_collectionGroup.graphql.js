"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */
var node = {
  "kind": "Fragment",
  "name": "OtherCollectionsRail_collectionGroup",
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
      "kind": "FragmentSpread",
      "name": "OtherCollectionEntity_member",
      "args": null
    }, {
      "kind": "ScalarField",
      "alias": "__id",
      "name": "id",
      "args": null,
      "storageKey": null
    }]
  }]
};
node.hash = '6f17d980c261d156126a25c34bacc8d7';
var _default = node;
exports.default = _default;
//# sourceMappingURL=OtherCollectionsRail_collectionGroup.graphql.js.map