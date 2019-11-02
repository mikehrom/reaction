"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */
var node = {
  "kind": "Fragment",
  "name": "NavigationTabs_artist",
  "type": "Artist",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [{
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  }, {
    "kind": "LinkedField",
    "alias": null,
    "name": "statuses",
    "storageKey": null,
    "args": null,
    "concreteType": "ArtistStatuses",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "shows",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "articles",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "cv",
      "args": [{
        "kind": "Literal",
        "name": "minShowCount",
        "value": 0,
        "type": "Int"
      }],
      "storageKey": "cv(minShowCount:0)"
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "auction_lots",
      "args": null,
      "storageKey": null
    }]
  }, {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  }]
};
node.hash = '943c43bf6ae1bb2fec555493cb9191d1';
var _default = node;
exports.default = _default;
//# sourceMappingURL=NavigationTabs_artist.graphql.js.map