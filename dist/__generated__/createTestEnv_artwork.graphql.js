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
    "name": "createTestEnv_artwork",
    "type": "Artwork",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "artist",
      "storageKey": null,
      "args": null,
      "concreteType": "Artist",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      }, v0]
    }, v0]
  };
}();

node.hash = '77748b446a7cb5332e22b3fc524700a1';
var _default = node;
exports.default = _default;
//# sourceMappingURL=createTestEnv_artwork.graphql.js.map