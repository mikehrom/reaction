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
  };
  return {
    "kind": "Fragment",
    "name": "ArtworkActions_artwork",
    "type": "Artwork",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "image",
      "storageKey": null,
      "args": null,
      "concreteType": "Image",
      "plural": false,
      "selections": [v0, {
        "kind": "ScalarField",
        "alias": null,
        "name": "url",
        "args": [{
          "kind": "Literal",
          "name": "version",
          "value": "larger",
          "type": "[String]"
        }],
        "storageKey": "url(version:\"larger\")"
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "height",
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
        "alias": "__id",
        "name": "id",
        "args": null,
        "storageKey": null
      }]
    }, {
      "kind": "FragmentSpread",
      "name": "Save_artwork",
      "args": null
    }, {
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
        "name": "name",
        "args": null,
        "storageKey": null
      }, v1]
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "date",
      "args": null,
      "storageKey": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "dimensions",
      "storageKey": null,
      "args": null,
      "concreteType": "dimensions",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "cm",
        "args": null,
        "storageKey": null
      }]
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "href",
      "args": null,
      "storageKey": null
    }, v0, {
      "kind": "FragmentSpread",
      "name": "ArtworkSharePanel_artwork",
      "args": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "is_downloadable",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "is_hangable",
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
      "selections": [v0, v1]
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "sale",
      "storageKey": null,
      "args": null,
      "concreteType": "Sale",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "is_closed",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "is_auction",
        "args": null,
        "storageKey": null
      }, v1]
    }, v1]
  };
}();

node.hash = '7dcdaa4e1723fdc7fadf2e4be5a08360';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtworkActions_artwork.graphql.js.map