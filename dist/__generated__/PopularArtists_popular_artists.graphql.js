"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */
var node = {
  "kind": "Fragment",
  "name": "PopularArtists_popular_artists",
  "type": "PopularArtists",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [{
    "kind": "LinkedField",
    "alias": null,
    "name": "artists",
    "storageKey": null,
    "args": null,
    "concreteType": "Artist",
    "plural": true,
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
      "name": "__id",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
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
      }, {
        "kind": "ScalarField",
        "alias": "__id",
        "name": "id",
        "args": null,
        "storageKey": null
      }]
    }]
  }]
};
node.hash = '1c49138ba6baf7973c1aa1e59f1f0825';
var _default = node;
exports.default = _default;
//# sourceMappingURL=PopularArtists_popular_artists.graphql.js.map