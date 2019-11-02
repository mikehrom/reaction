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
    "kind": "FragmentSpread",
    "name": "ArtistInfo_artist",
    "args": null
  },
      v2 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Fragment",
    "name": "ArtworkApp_artwork",
    "type": "Artwork",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "FragmentSpread",
      "name": "ArtworkRelatedArtists_artwork",
      "args": null
    }, v0, {
      "kind": "ScalarField",
      "alias": null,
      "name": "is_acquireable",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "is_offerable",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "availability",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "price",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "is_in_auction",
      "args": null,
      "storageKey": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "artists",
      "storageKey": null,
      "args": null,
      "concreteType": "Artist",
      "plural": true,
      "selections": [v0, v1, v2]
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "artist",
      "storageKey": null,
      "args": null,
      "concreteType": "Artist",
      "plural": false,
      "selections": [v1, v2]
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "_id",
      "args": null,
      "storageKey": null
    }, {
      "kind": "FragmentSpread",
      "name": "ArtworkMeta_artwork",
      "args": null
    }, {
      "kind": "FragmentSpread",
      "name": "ArtworkBanner_artwork",
      "args": null
    }, {
      "kind": "FragmentSpread",
      "name": "ArtworkSidebar_artwork",
      "args": null
    }, {
      "kind": "FragmentSpread",
      "name": "ArtworkDetails_artwork",
      "args": null
    }, {
      "kind": "FragmentSpread",
      "name": "ArtworkImageBrowser_artwork",
      "args": null
    }, {
      "kind": "FragmentSpread",
      "name": "OtherWorks_artwork",
      "args": null
    }, {
      "kind": "FragmentSpread",
      "name": "PricingContext_artwork",
      "args": null
    }, v2]
  };
}();

node.hash = '5097a7c9d398cce1abd797fc91661166';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtworkApp_artwork.graphql.js.map