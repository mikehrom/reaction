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
    "name": "ArtworkSidebar_artwork",
    "type": "Artwork",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "FragmentSpread",
      "name": "ArtworkSidebarPartnerInfo_artwork",
      "args": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "is_in_auction",
      "args": null,
      "storageKey": null
    }, {
      "kind": "FragmentSpread",
      "name": "ArtworkSidebarMetadata_artwork",
      "args": null
    }, {
      "kind": "FragmentSpread",
      "name": "ArtworkSidebarAuctionPartnerInfo_artwork",
      "args": null
    }, {
      "kind": "FragmentSpread",
      "name": "ArtworkSidebarCurrentBidInfo_artwork",
      "args": null
    }, {
      "kind": "FragmentSpread",
      "name": "ArtworkSidebarBidAction_artwork",
      "args": null
    }, {
      "kind": "FragmentSpread",
      "name": "ArtworkSidebarCommercial_artwork",
      "args": null
    }, {
      "kind": "FragmentSpread",
      "name": "ArtworkSidebarArtists_artwork",
      "args": null
    }, {
      "kind": "FragmentSpread",
      "name": "ArtworkSidebarExtraLinks_artwork",
      "args": null
    }, {
      "kind": "FragmentSpread",
      "name": "SecurePayment_artwork",
      "args": null
    }, {
      "kind": "FragmentSpread",
      "name": "VerifiedSeller_artwork",
      "args": null
    }, {
      "kind": "FragmentSpread",
      "name": "AuthenticityCertificate_artwork",
      "args": null
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
        "name": "is_closed",
        "args": null,
        "storageKey": null
      }, {
        "kind": "FragmentSpread",
        "name": "AuctionTimer_sale",
        "args": null
      }, v0]
    }, v0]
  };
}();

node.hash = 'dfe2a81caa32c07aa46a382f0b8cc2cb';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtworkSidebar_artwork.graphql.js.map