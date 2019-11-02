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
    "name": "display",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Fragment",
    "name": "ArtistAuctionResultItem_auctionResult",
    "type": "AuctionResult",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "dimension_text",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "organization",
      "args": null,
      "storageKey": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "images",
      "storageKey": null,
      "args": null,
      "concreteType": "AuctionLotImages",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "thumbnail",
        "storageKey": null,
        "args": null,
        "concreteType": "Image",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "url",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": "__id",
          "name": "id",
          "args": null,
          "storageKey": null
        }]
      }]
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "description",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "date_text",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "sale_date_text",
      "args": null,
      "storageKey": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "price_realized",
      "storageKey": null,
      "args": null,
      "concreteType": "AuctionResultPriceRealized",
      "plural": false,
      "selections": [v0, {
        "kind": "ScalarField",
        "alias": null,
        "name": "cents_usd",
        "args": null,
        "storageKey": null
      }]
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "estimate",
      "storageKey": null,
      "args": null,
      "concreteType": "AuctionLotEstimate",
      "plural": false,
      "selections": [v0]
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "__id",
      "args": null,
      "storageKey": null
    }]
  };
}();

node.hash = 'e39f2dfa5fe24995539e0e0324ac20be';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtistAuctionResultItem_auctionResult.graphql.js.map