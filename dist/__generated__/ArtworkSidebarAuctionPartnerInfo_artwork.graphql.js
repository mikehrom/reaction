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
  };
  return {
    "kind": "Fragment",
    "name": "ArtworkSidebarAuctionPartnerInfo_artwork",
    "type": "Artwork",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "partner",
      "storageKey": null,
      "args": null,
      "concreteType": "Partner",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
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
        "kind": "ScalarField",
        "alias": null,
        "name": "estimate",
        "args": null,
        "storageKey": null
      }, v0]
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
        "name": "_id",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "is_closed",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "is_with_buyers_premium",
        "args": null,
        "storageKey": null
      }, v0]
    }, v0]
  };
}();

node.hash = 'c6a39c92e2e559c89b1e7b31adf242a8';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtworkSidebarAuctionPartnerInfo_artwork.graphql.js.map