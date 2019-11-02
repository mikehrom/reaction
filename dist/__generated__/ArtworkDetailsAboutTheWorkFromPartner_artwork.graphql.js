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
  },
      v1 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Fragment",
    "name": "ArtworkDetailsAboutTheWorkFromPartner_artwork",
    "type": "Artwork",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "additional_information",
      "args": [{
        "kind": "Literal",
        "name": "format",
        "value": "HTML",
        "type": "Format"
      }],
      "storageKey": "additional_information(format:\"HTML\")"
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
        "name": "isBenefit",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "isGalleryAuction",
        "args": null,
        "storageKey": null
      }, v0]
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
        "name": "_id",
        "args": null,
        "storageKey": null
      }, v1, {
        "kind": "ScalarField",
        "alias": null,
        "name": "type",
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
        "name": "name",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "initials",
        "args": null,
        "storageKey": null
      }, {
        "kind": "LinkedField",
        "alias": null,
        "name": "locations",
        "storageKey": null,
        "args": null,
        "concreteType": "Location",
        "plural": true,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "city",
          "args": null,
          "storageKey": null
        }, v0]
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "is_default_profile_public",
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
          "kind": "FragmentSpread",
          "name": "FollowProfileButton_profile",
          "args": null
        }, v1, {
          "kind": "LinkedField",
          "alias": null,
          "name": "icon",
          "storageKey": null,
          "args": null,
          "concreteType": "Image",
          "plural": false,
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "name": "url",
            "args": [{
              "kind": "Literal",
              "name": "version",
              "value": "square140",
              "type": "[String]"
            }],
            "storageKey": "url(version:\"square140\")"
          }, {
            "kind": "ScalarField",
            "alias": "__id",
            "name": "id",
            "args": null,
            "storageKey": null
          }]
        }, v0]
      }, v0]
    }, v0]
  };
}();

node.hash = 'b10480d701a172845d0dccc414c0bd2f';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtworkDetailsAboutTheWorkFromPartner_artwork.graphql.js.map