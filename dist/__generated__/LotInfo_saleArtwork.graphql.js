"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */
var node = {
  "kind": "Fragment",
  "name": "LotInfo_saleArtwork",
  "type": "SaleArtwork",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [{
    "kind": "LinkedField",
    "alias": null,
    "name": "counts",
    "storageKey": null,
    "args": null,
    "concreteType": "SaleArtworkCounts",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": "bidderPositions",
      "name": "bidder_positions",
      "args": null,
      "storageKey": null
    }]
  }, {
    "kind": "ScalarField",
    "alias": "lotLabel",
    "name": "lot_label",
    "args": null,
    "storageKey": null
  }, {
    "kind": "LinkedField",
    "alias": "minimumNextBid",
    "name": "minimum_next_bid",
    "storageKey": null,
    "args": null,
    "concreteType": "SaleArtworkMinimumNextBid",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "amount",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "cents",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "display",
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
node.hash = '78ba547619a8a2d5ab0d32ec8acf85aa';
var _default = node;
exports.default = _default;
//# sourceMappingURL=LotInfo_saleArtwork.graphql.js.map