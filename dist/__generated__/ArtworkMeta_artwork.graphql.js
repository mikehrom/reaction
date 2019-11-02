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
    "name": "ArtworkMeta_artwork",
    "type": "Artwork",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "is_in_auction",
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
      "name": "date",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "artist_names",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "sale_message",
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
      "name": "image_rights",
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
      "name": "is_acquireable",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "is_shareable",
      "args": null,
      "storageKey": null
    }, {
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
        }, {
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
      }, {
        "kind": "ScalarField",
        "alias": "long_description",
        "name": "description",
        "args": [{
          "kind": "Literal",
          "name": "limit",
          "value": 200,
          "type": "Int"
        }],
        "storageKey": "description(limit:200)"
      }]
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "context",
      "storageKey": null,
      "args": null,
      "concreteType": null,
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "__typename",
        "args": null,
        "storageKey": null
      }, v1, {
        "kind": "InlineFragment",
        "type": "ArtworkContextFair",
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        }, v0]
      }]
    }, {
      "kind": "FragmentSpread",
      "name": "SeoDataForArtwork_artwork",
      "args": null
    }, v1]
  };
}();

node.hash = 'e1bf74578133fc8ebf24b1ea06329d38';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtworkMeta_artwork.graphql.js.map