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
    "name": "initials",
    "args": null,
    "storageKey": null
  },
      v2 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  },
      v3 = {
    "kind": "Literal",
    "name": "version",
    "value": "square",
    "type": "[String]"
  },
      v4 = {
    "kind": "ScalarField",
    "alias": "__id",
    "name": "id",
    "args": null,
    "storageKey": null
  },
      v5 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "__typename",
    "args": null,
    "storageKey": null
  },
      v6 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "href",
    "args": null,
    "storageKey": null
  },
      v7 = [{
    "kind": "LinkedField",
    "alias": "img",
    "name": "resized",
    "storageKey": "resized(height:70,version:\"square\",width:70)",
    "args": [{
      "kind": "Literal",
      "name": "height",
      "value": 70,
      "type": "Int"
    }, v3, {
      "kind": "Literal",
      "name": "width",
      "value": 70,
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
  }, v4];
  return {
    "kind": "Fragment",
    "name": "ArtworkBanner_artwork",
    "type": "Artwork",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "partner",
      "storageKey": null,
      "args": null,
      "concreteType": "Partner",
      "plural": false,
      "selections": [v0, v1, v2]
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
        "name": "is_auction",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "isBenefit",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "isGalleryAuction",
        "args": null,
        "storageKey": null
      }, {
        "kind": "LinkedField",
        "alias": null,
        "name": "cover_image",
        "storageKey": null,
        "args": null,
        "concreteType": "Image",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "url",
          "args": [v3],
          "storageKey": "url(version:\"square\")"
        }, v4]
      }, v2]
    }, {
      "kind": "LinkedField",
      "alias": "artworkContextAuction",
      "name": "context",
      "storageKey": null,
      "args": null,
      "concreteType": null,
      "plural": false,
      "selections": [v5, v2, {
        "kind": "InlineFragment",
        "type": "ArtworkContextAuction",
        "selections": [v0, v6]
      }]
    }, {
      "kind": "LinkedField",
      "alias": "artworkContextFair",
      "name": "context",
      "storageKey": null,
      "args": null,
      "concreteType": null,
      "plural": false,
      "selections": [v5, v2, {
        "kind": "InlineFragment",
        "type": "ArtworkContextFair",
        "selections": [v0, v6, {
          "kind": "LinkedField",
          "alias": null,
          "name": "profile",
          "storageKey": null,
          "args": null,
          "concreteType": "Profile",
          "plural": false,
          "selections": [v1, {
            "kind": "LinkedField",
            "alias": null,
            "name": "icon",
            "storageKey": null,
            "args": null,
            "concreteType": "Image",
            "plural": false,
            "selections": v7
          }, v2]
        }]
      }]
    }, {
      "kind": "LinkedField",
      "alias": "artworkContextPartnerShow",
      "name": "context",
      "storageKey": null,
      "args": null,
      "concreteType": null,
      "plural": false,
      "selections": [v5, v2, {
        "kind": "InlineFragment",
        "type": "ArtworkContextPartnerShow",
        "selections": [v0, v6, {
          "kind": "ScalarField",
          "alias": null,
          "name": "status",
          "args": null,
          "storageKey": null
        }, {
          "kind": "LinkedField",
          "alias": "thumbnail",
          "name": "cover_image",
          "storageKey": null,
          "args": null,
          "concreteType": "Image",
          "plural": false,
          "selections": v7
        }]
      }]
    }, v2]
  };
}();

node.hash = '844cbaa515bdcdb004d87d2a42b1ee2e';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtworkBanner_artwork.graphql.js.map