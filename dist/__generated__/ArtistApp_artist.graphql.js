"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */
var node = {
  "kind": "Fragment",
  "name": "ArtistApp_artist",
  "type": "Artist",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [{
    "kind": "ScalarField",
    "alias": null,
    "name": "_id",
    "args": null,
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  }, {
    "kind": "FragmentSpread",
    "name": "ArtistMeta_artist",
    "args": null
  }, {
    "kind": "FragmentSpread",
    "name": "ArtistHeader_artist",
    "args": null
  }, {
    "kind": "FragmentSpread",
    "name": "NavigationTabs_artist",
    "args": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  }]
};
node.hash = 'c180840c9d6e8a5c232f176429425255';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtistApp_artist.graphql.js.map