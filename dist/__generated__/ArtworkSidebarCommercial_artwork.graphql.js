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
    "name": "is_acquireable",
    "args": null,
    "storageKey": null
  },
      v2 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "is_offerable",
    "args": null,
    "storageKey": null
  },
      v3 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "sale_message",
    "args": null,
    "storageKey": null
  },
      v4 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Fragment",
    "name": "ArtworkSidebarCommercial_artwork",
    "type": "Artwork",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "price",
      "args": null,
      "storageKey": null
    }, v0, {
      "kind": "ScalarField",
      "alias": null,
      "name": "is_for_sale",
      "args": null,
      "storageKey": null
    }, v1, {
      "kind": "ScalarField",
      "alias": null,
      "name": "is_inquireable",
      "args": null,
      "storageKey": null
    }, v2, {
      "kind": "ScalarField",
      "alias": null,
      "name": "_id",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "priceIncludesTaxDisplay",
      "args": null,
      "storageKey": null
    }, v3, {
      "kind": "ScalarField",
      "alias": null,
      "name": "shippingInfo",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "shippingOrigin",
      "args": null,
      "storageKey": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "edition_sets",
      "storageKey": null,
      "args": null,
      "concreteType": "EditionSet",
      "plural": true,
      "selections": [v0, v4, v1, v2, v3, {
        "kind": "FragmentSpread",
        "name": "ArtworkSidebarSizeInfo_piece",
        "args": null
      }]
    }, v4]
  };
}();

node.hash = 'c5fddefc6389f7c15acb550655da02f8';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtworkSidebarCommercial_artwork.graphql.js.map