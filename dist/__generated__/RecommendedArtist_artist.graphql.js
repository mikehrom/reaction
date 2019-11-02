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
    "alias": "__id",
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
  };
  return {
    "kind": "Fragment",
    "name": "RecommendedArtist_artist",
    "type": "Artist",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "_id",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "formatted_nationality_and_birthday",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "href",
      "args": null,
      "storageKey": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "image",
      "storageKey": null,
      "args": null,
      "concreteType": "Image",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "cropped",
        "storageKey": "cropped(height:100,width:100)",
        "args": [{
          "kind": "Literal",
          "name": "height",
          "value": 100,
          "type": "Int!"
        }, {
          "kind": "Literal",
          "name": "width",
          "value": 100,
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
      }, v0]
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "artworks_connection",
      "storageKey": "artworks_connection(filter:\"IS_FOR_SALE\",first:20,sort:\"PUBLISHED_AT_DESC\")",
      "args": [{
        "kind": "Literal",
        "name": "filter",
        "value": "IS_FOR_SALE",
        "type": "[ArtistArtworksFilters]"
      }, {
        "kind": "Literal",
        "name": "first",
        "value": 20,
        "type": "Int"
      }, {
        "kind": "Literal",
        "name": "sort",
        "value": "PUBLISHED_AT_DESC",
        "type": "ArtworkSorts"
      }],
      "concreteType": "ArtworkConnection",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "edges",
        "storageKey": null,
        "args": null,
        "concreteType": "ArtworkEdge",
        "plural": true,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "Artwork",
          "plural": false,
          "selections": [v1, {
            "kind": "LinkedField",
            "alias": null,
            "name": "image",
            "storageKey": null,
            "args": null,
            "concreteType": "Image",
            "plural": false,
            "selections": [{
              "kind": "ScalarField",
              "alias": null,
              "name": "aspect_ratio",
              "args": null,
              "storageKey": null
            }, v0]
          }, {
            "kind": "FragmentSpread",
            "name": "FillwidthItem_artwork",
            "args": null
          }]
        }]
      }]
    }, {
      "kind": "FragmentSpread",
      "name": "FollowArtistButton_artist",
      "args": null
    }, v1]
  };
}();

node.hash = '6fefba32685b9654f7a1648a8de05f36';
var _default = node;
exports.default = _default;
//# sourceMappingURL=RecommendedArtist_artist.graphql.js.map