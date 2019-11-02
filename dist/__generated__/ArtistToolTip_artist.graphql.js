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
    "name": "name",
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
    "name": "ArtistToolTip_artist",
    "type": "Artist",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [v0, {
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
      "kind": "ScalarField",
      "alias": null,
      "name": "blurb",
      "args": null,
      "storageKey": null
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
      "kind": "LinkedField",
      "alias": null,
      "name": "genes",
      "storageKey": null,
      "args": null,
      "concreteType": "Gene",
      "plural": true,
      "selections": [v0, v1]
    }, v1]
  };
}();

node.hash = 'b66365bad87a0ff55816fd0106213acb';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtistToolTip_artist.graphql.js.map