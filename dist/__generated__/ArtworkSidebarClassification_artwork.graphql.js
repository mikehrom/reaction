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
    "name": "ArtworkSidebarClassification_artwork",
    "type": "Artwork",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
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
        "name": "short_description",
        "args": null,
        "storageKey": null
      }, v0]
    }, v0]
  };
}();

node.hash = '0edd5c2a1b8b93a17d606367fe4c25ae';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtworkSidebarClassification_artwork.graphql.js.map