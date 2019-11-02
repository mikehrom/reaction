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
  },
      v1 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  },
      v2 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Fragment",
    "name": "ArtworkSidebarBidAction_artwork",
    "type": "Artwork",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "myLotStanding",
      "storageKey": "myLotStanding(live:true)",
      "args": [{
        "kind": "Literal",
        "name": "live",
        "value": true,
        "type": "Boolean"
      }],
      "concreteType": "LotStanding",
      "plural": true,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "most_recent_bid",
        "storageKey": null,
        "args": null,
        "concreteType": "BidderPosition",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "max_bid",
          "storageKey": null,
          "args": null,
          "concreteType": "BidderPositionMaxBid",
          "plural": false,
          "selections": [v0]
        }, v1]
      }]
    }, v2, {
      "kind": "ScalarField",
      "alias": null,
      "name": "_id",
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
      "selections": [v2, {
        "kind": "LinkedField",
        "alias": null,
        "name": "registrationStatus",
        "storageKey": null,
        "args": null,
        "concreteType": "Bidder",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "qualified_for_bidding",
          "args": null,
          "storageKey": null
        }, v1]
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "is_preview",
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
        "name": "is_live_open",
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
        "name": "is_registration_closed",
        "args": null,
        "storageKey": null
      }, v1]
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
        "name": "increments",
        "storageKey": null,
        "args": null,
        "concreteType": "BidIncrementsFormatted",
        "plural": true,
        "selections": [v0, {
          "kind": "ScalarField",
          "alias": null,
          "name": "display",
          "args": null,
          "storageKey": null
        }]
      }, v1]
    }, v1]
  };
}();

node.hash = '7362bd5c91f910a9d4d415a72114bbbb';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtworkSidebarBidAction_artwork.graphql.js.map