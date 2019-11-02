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
    "name": "ArtworkSidebarMetadata_artwork",
    "type": "Artwork",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "is_biddable",
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
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "__typename",
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
        "name": "lot_label",
        "args": null,
        "storageKey": null
      }, v0]
    }, {
      "kind": "FragmentSpread",
      "name": "ArtworkSidebarTitleInfo_artwork",
      "args": null
    }, {
      "kind": "FragmentSpread",
      "name": "ArtworkSidebarSizeInfo_piece",
      "args": null
    }, {
      "kind": "FragmentSpread",
      "name": "ArtworkSidebarClassification_artwork",
      "args": null
    }, v0]
  };
}();

node.hash = 'c5e1fd530fcb8c986c96047befa0496f';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtworkSidebarMetadata_artwork.graphql.js.map