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
    "name": "ArtworkSidebarPartnerInfo_artwork",
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
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "href",
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
      }, v0]
    }, v0]
  };
}();

node.hash = '2d4008d718bc19a2034d96f2665bacf9';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtworkSidebarPartnerInfo_artwork.graphql.js.map