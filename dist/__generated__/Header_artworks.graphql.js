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
    "name": "Header_artworks",
    "type": "FilterArtworks",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "FragmentSpread",
      "name": "DefaultHeader_headerArtworks",
      "args": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "merchandisable_artists",
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
        "name": "name",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "imageUrl",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "birthday",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "nationality",
        "args": null,
        "storageKey": null
      }, {
        "kind": "FragmentSpread",
        "name": "FollowArtistButton_artist",
        "args": null
      }, v0]
    }, v0]
  };
}();

node.hash = '9f9af55c7e48a35977a2d4c5fa50c4e6';
var _default = node;
exports.default = _default;
//# sourceMappingURL=Header_artworks.graphql.js.map