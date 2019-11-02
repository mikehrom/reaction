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
    "name": "__id",
    "args": null,
    "storageKey": null
  },
      v1 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "display",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Fragment",
    "name": "Contact_artwork",
    "type": "Artwork",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "href",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "is_inquireable",
      "args": null,
      "storageKey": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "sale",
      "storageKey": null,
      "args": null,
      "concreteType": "Sale",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "is_auction",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "is_live_open",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "is_open",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "is_closed",
        "args": null,
        "storageKey": null
      }, v0]
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "partner",
      "storageKey": "partner(shallow:true)",
      "args": [{
        "kind": "Literal",
        "name": "shallow",
        "value": true,
        "type": "Boolean"
      }],
      "concreteType": "Partner",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "type",
        "args": null,
        "storageKey": null
      }, v0]
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "sale_artwork",
      "storageKey": null,
      "args": null,
      "concreteType": "SaleArtwork",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "highest_bid",
        "storageKey": null,
        "args": null,
        "concreteType": "SaleArtworkHighestBid",
        "plural": false,
        "selections": [v1, {
          "kind": "ScalarField",
          "alias": "__id",
          "name": "id",
          "args": null,
          "storageKey": null
        }]
      }, {
        "kind": "LinkedField",
        "alias": null,
        "name": "opening_bid",
        "storageKey": null,
        "args": null,
        "concreteType": "SaleArtworkOpeningBid",
        "plural": false,
        "selections": [v1]
      }, {
        "kind": "LinkedField",
        "alias": null,
        "name": "counts",
        "storageKey": null,
        "args": null,
        "concreteType": "SaleArtworkCounts",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "bidder_positions",
          "args": null,
          "storageKey": null
        }]
      }, v0]
    }, v0]
  };
}();

node.hash = 'eae0e1181f8c3d8e63e2e9d53be065d3';
var _default = node;
exports.default = _default;
//# sourceMappingURL=Contact_artwork.graphql.js.map