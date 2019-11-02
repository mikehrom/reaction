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
      v1 = [{
    "kind": "ScalarField",
    "alias": null,
    "name": "display",
    "args": null,
    "storageKey": null
  }];
  return {
    "kind": "Fragment",
    "name": "ArtworkSidebarCurrentBidInfo_artwork",
    "type": "Artwork",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
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
        "kind": "ScalarField",
        "alias": null,
        "name": "is_live_open",
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
        "name": "is_with_reserve",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "reserve_message",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "reserve_status",
        "args": null,
        "storageKey": null
      }, {
        "kind": "LinkedField",
        "alias": null,
        "name": "current_bid",
        "storageKey": null,
        "args": null,
        "concreteType": "SaleArtworkCurrentBid",
        "plural": false,
        "selections": v1
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
    }, {
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
        "name": "active_bid",
        "storageKey": null,
        "args": null,
        "concreteType": "BidderPosition",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "is_winning",
          "args": null,
          "storageKey": null
        }, v0]
      }, {
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
          "selections": v1
        }, v0]
      }]
    }, v0]
  };
}();

node.hash = 'fedde3c8966b405132cca1af168ee580';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtworkSidebarCurrentBidInfo_artwork.graphql.js.map