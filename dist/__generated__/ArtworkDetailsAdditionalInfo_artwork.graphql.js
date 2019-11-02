"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */
var node = function () {
  var v0 = [{
    "kind": "ScalarField",
    "alias": null,
    "name": "label",
    "args": null,
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "name": "details",
    "args": null,
    "storageKey": null
  }];
  return {
    "kind": "Fragment",
    "name": "ArtworkDetailsAdditionalInfo_artwork",
    "type": "Artwork",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "series",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "publisher",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "manufacturer",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "image_rights",
      "args": null,
      "storageKey": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "framed",
      "storageKey": null,
      "args": null,
      "concreteType": "ArtworkInfoRow",
      "plural": false,
      "selections": v0
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "signatureInfo",
      "storageKey": null,
      "args": null,
      "concreteType": "ArtworkInfoRow",
      "plural": false,
      "selections": v0
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "conditionDescription",
      "storageKey": null,
      "args": null,
      "concreteType": "ArtworkInfoRow",
      "plural": false,
      "selections": v0
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "certificateOfAuthenticity",
      "storageKey": null,
      "args": null,
      "concreteType": "ArtworkInfoRow",
      "plural": false,
      "selections": v0
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "__id",
      "args": null,
      "storageKey": null
    }]
  };
}();

node.hash = '24faf5a518a2d1dd07edcaaf5872be3a';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtworkDetailsAdditionalInfo_artwork.graphql.js.map