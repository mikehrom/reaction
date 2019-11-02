"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */
var node = {
  "kind": "Fragment",
  "name": "CollectionsHubRails_linkedCollections",
  "type": "MarketingCollectionGroup",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [{
    "kind": "ScalarField",
    "alias": null,
    "name": "groupType",
    "args": null,
    "storageKey": null
  }, {
    "kind": "FragmentSpread",
    "name": "FeaturedCollectionsRails_collectionGroup",
    "args": null
  }, {
    "kind": "FragmentSpread",
    "name": "OtherCollectionsRail_collectionGroup",
    "args": null
  }, {
    "kind": "FragmentSpread",
    "name": "ArtistSeriesRail_collectionGroup",
    "args": null
  }]
};
node.hash = 'a7285e8c4087e97b3282b8c929f612be';
var _default = node;
exports.default = _default;
//# sourceMappingURL=CollectionsHubRails_linkedCollections.graphql.js.map