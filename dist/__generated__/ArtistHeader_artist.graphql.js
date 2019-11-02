"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */
var node = {
  "kind": "Fragment",
  "name": "ArtistHeader_artist",
  "type": "Artist",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [{
    "kind": "ScalarField",
    "alias": null,
    "name": "_id",
    "args": null,
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
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
    "name": "nationality",
    "args": null,
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "name": "years",
    "args": null,
    "storageKey": null
  }, {
    "kind": "LinkedField",
    "alias": null,
    "name": "counts",
    "storageKey": null,
    "args": null,
    "concreteType": "ArtistCounts",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "follows",
      "args": null,
      "storageKey": null
    }]
  }, {
    "kind": "LinkedField",
    "alias": null,
    "name": "carousel",
    "storageKey": null,
    "args": null,
    "concreteType": "ArtistCarousel",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "images",
      "storageKey": null,
      "args": null,
      "concreteType": "Image",
      "plural": true,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "href",
        "args": null,
        "storageKey": null
      }, {
        "kind": "LinkedField",
        "alias": null,
        "name": "resized",
        "storageKey": "resized(height:200)",
        "args": [{
          "kind": "Literal",
          "name": "height",
          "value": 200,
          "type": "Int"
        }],
        "concreteType": "ResizedImageUrl",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "url",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "width",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "height",
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
    }]
  }, {
    "kind": "FragmentSpread",
    "name": "FollowArtistButton_artist",
    "args": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  }]
};
node.hash = '7c700420d84dd2fe567a9f2491518ea1';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtistHeader_artist.graphql.js.map