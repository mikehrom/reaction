"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */
var node = {
  "kind": "Fragment",
  "name": "ArtistCard_artist",
  "type": "Artist",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [{
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
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
      "storageKey": "cropped(height:300,width:400)",
      "args": [{
        "kind": "Literal",
        "name": "height",
        "value": 300,
        "type": "Int!"
      }, {
        "kind": "Literal",
        "name": "width",
        "value": 400,
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
    "name": "formatted_nationality_and_birthday",
    "args": null,
    "storageKey": null
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
node.hash = 'db4618c7e342a5b7c654fb638a771150';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtistCard_artist.graphql.js.map