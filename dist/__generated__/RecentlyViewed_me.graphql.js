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
    "name": "RecentlyViewed_me",
    "type": "Me",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "recentlyViewedArtworks",
      "storageKey": "recentlyViewedArtworks(first:20)",
      "args": [{
        "kind": "Literal",
        "name": "first",
        "value": 20,
        "type": "Int"
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
          "selections": [v0, {
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
            }, {
              "kind": "ScalarField",
              "alias": "__id",
              "name": "id",
              "args": null,
              "storageKey": null
            }, {
              "kind": "ScalarField",
              "alias": null,
              "name": "url",
              "args": [{
                "kind": "Literal",
                "name": "version",
                "value": "large",
                "type": "[String]"
              }],
              "storageKey": "url(version:\"large\")"
            }]
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "href",
            "args": null,
            "storageKey": null
          }, {
            "kind": "FragmentSpread",
            "name": "Metadata_artwork",
            "args": null
          }, {
            "kind": "FragmentSpread",
            "name": "Save_artwork",
            "args": null
          }, {
            "kind": "FragmentSpread",
            "name": "Badge_artwork",
            "args": null
          }]
        }]
      }]
    }, v0]
  };
}();

node.hash = '46e488d1fa37b7fa9c4ce73cbbd0c694';
var _default = node;
exports.default = _default;
//# sourceMappingURL=RecentlyViewed_me.graphql.js.map