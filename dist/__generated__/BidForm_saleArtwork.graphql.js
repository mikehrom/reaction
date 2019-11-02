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
    "name": "cents",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Fragment",
    "name": "BidForm_saleArtwork",
    "type": "SaleArtwork",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "LinkedField",
      "alias": "minimumNextBid",
      "name": "minimum_next_bid",
      "storageKey": null,
      "args": null,
      "concreteType": "SaleArtworkMinimumNextBid",
      "plural": false,
      "selections": [v0]
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "increments",
      "storageKey": "increments(useMyMaxBid:true)",
      "args": [{
        "kind": "Literal",
        "name": "useMyMaxBid",
        "value": true,
        "type": "Boolean"
      }],
      "concreteType": "BidIncrementsFormatted",
      "plural": true,
      "selections": [v0, {
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
}();

node.hash = 'f63146f06b2eeaabe48250b3d9b72cac';
var _default = node;
exports.default = _default;
//# sourceMappingURL=BidForm_saleArtwork.graphql.js.map