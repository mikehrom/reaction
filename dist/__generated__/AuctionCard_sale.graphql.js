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
    "name": "id",
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
    "name": "name",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Fragment",
    "name": "AuctionCard_sale",
    "type": "Sale",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "live_start_at",
      "args": null,
      "storageKey": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "cover_image",
      "storageKey": null,
      "args": null,
      "concreteType": "Image",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "cropped",
        "storageKey": "cropped(height:180,width:200)",
        "args": [{
          "kind": "Literal",
          "name": "height",
          "value": 180,
          "type": "Int!"
        }, {
          "kind": "Literal",
          "name": "width",
          "value": 200,
          "type": "Int!"
        }],
        "concreteType": "CroppedImageUrl",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "url",
          "args": null,
          "storageKey": null
        }]
      }, {
        "kind": "ScalarField",
        "alias": "__id",
        "name": "id",
        "args": null,
        "storageKey": null
      }]
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "isGalleryAuction",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "end_at",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "href",
      "args": null,
      "storageKey": null
    }, v0, {
      "kind": "ScalarField",
      "alias": null,
      "name": "is_live_open",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "is_preview",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "isBenefit",
      "args": null,
      "storageKey": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "registrationStatus",
      "storageKey": null,
      "args": null,
      "concreteType": "Bidder",
      "plural": false,
      "selections": [v0, v1]
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "is_registration_closed",
      "args": null,
      "storageKey": null
    }, v2, {
      "kind": "ScalarField",
      "alias": null,
      "name": "start_at",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "is_closed",
      "args": null,
      "storageKey": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "partner",
      "storageKey": null,
      "args": null,
      "concreteType": "Partner",
      "plural": false,
      "selections": [v2, v1]
    }, v1]
  };
}();

node.hash = 'a1eab9e49dd9c34fc9aa575c65cddf7b';
var _default = node;
exports.default = _default;
//# sourceMappingURL=AuctionCard_sale.graphql.js.map