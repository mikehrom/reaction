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
    "name": "url",
    "args": null,
    "storageKey": null
  },
      v1 = {
    "kind": "ScalarField",
    "alias": "__id",
    "name": "id",
    "args": null,
    "storageKey": null
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
    "name": "SeoDataForArtwork_artwork",
    "type": "Artwork",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "LinkedField",
      "alias": "meta_image",
      "name": "image",
      "storageKey": null,
      "args": null,
      "concreteType": "Image",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "resized",
        "storageKey": "resized(height:640,version:[\"large\",\"medium\",\"tall\"],width:640)",
        "args": [{
          "kind": "Literal",
          "name": "height",
          "value": 640,
          "type": "Int"
        }, {
          "kind": "Literal",
          "name": "version",
          "value": ["large", "medium", "tall"],
          "type": "[String]"
        }, {
          "kind": "Literal",
          "name": "width",
          "value": 640,
          "type": "Int"
        }],
        "concreteType": "ResizedImageUrl",
        "plural": false,
        "selections": [{
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
        }, v0]
      }, v1]
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "href",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "is_price_hidden",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "is_price_range",
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
      "name": "price_currency",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "sale_message",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "date",
      "args": null,
      "storageKey": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "meta",
      "storageKey": null,
      "args": null,
      "concreteType": "ArtworkMeta",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "title",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "description",
        "args": [{
          "kind": "Literal",
          "name": "limit",
          "value": 155,
          "type": "Int"
        }],
        "storageKey": "description(limit:155)"
      }]
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "partner",
      "storageKey": null,
      "args": null,
      "concreteType": "Partner",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "type",
        "args": null,
        "storageKey": null
      }, {
        "kind": "LinkedField",
        "alias": null,
        "name": "profile",
        "storageKey": null,
        "args": null,
        "concreteType": "Profile",
        "plural": false,
        "selections": [{
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
            "storageKey": "resized(height:320,version:[\"medium\"],width:320)",
            "args": [{
              "kind": "Literal",
              "name": "height",
              "value": 320,
              "type": "Int"
            }, {
              "kind": "Literal",
              "name": "version",
              "value": ["medium"],
              "type": "[String]"
            }, {
              "kind": "Literal",
              "name": "width",
              "value": 320,
              "type": "Int"
            }],
            "concreteType": "ResizedImageUrl",
            "plural": false,
            "selections": [v0]
          }, v1]
        }, v2]
      }, v2]
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "artist_names",
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
      "name": "category",
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
        "name": "in",
        "args": null,
        "storageKey": null
      }]
    }, v2]
  };
}();

node.hash = 'd478c663cc0c86c7e82da8c3342d1bf7';
var _default = node;
exports.default = _default;
//# sourceMappingURL=SeoDataForArtwork_artwork.graphql.js.map