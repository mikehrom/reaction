"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */
var node = function () {
  var v0 = {
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
      "name": "in",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "cm",
      "args": null,
      "storageKey": null
    }]
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
    "alias": "__id",
    "name": "id",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Fragment",
    "name": "ItemReview_lineItem",
    "type": "CommerceLineItem",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "artwork",
      "storageKey": null,
      "args": null,
      "concreteType": "Artwork",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "artist_names",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "title",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "date",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "medium",
        "args": null,
        "storageKey": null
      }, v0, {
        "kind": "LinkedField",
        "alias": null,
        "name": "attribution_class",
        "storageKey": null,
        "args": null,
        "concreteType": "AttributionClass",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "shortDescription",
          "args": null,
          "storageKey": null
        }, v1]
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
          "name": "resized",
          "storageKey": "resized(width:185)",
          "args": [{
            "kind": "Literal",
            "name": "width",
            "value": 185,
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
          }]
        }, v2]
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
          "name": "id",
          "args": null,
          "storageKey": null
        }, v0, v1]
      }, v1]
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "editionSetId",
      "args": null,
      "storageKey": null
    }, v2]
  };
}();

node.hash = 'c07dc43284e1d589e8b252309ad5443a';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ItemReview_lineItem.graphql.js.map