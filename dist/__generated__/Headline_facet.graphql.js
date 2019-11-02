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
    "name": "name",
    "args": null,
    "storageKey": null
  }];
  return {
    "kind": "Fragment",
    "name": "Headline_facet",
    "type": "ArtworkFilterFacet",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "__id",
      "args": null,
      "storageKey": null
    }, {
      "kind": "InlineFragment",
      "type": "ArtworkFilterGene",
      "selections": v0
    }, {
      "kind": "InlineFragment",
      "type": "ArtworkFilterTag",
      "selections": v0
    }]
  };
}();

node.hash = 'fe0e6f752ce23f2a03e177de220f2ed6';
var _default = node;
exports.default = _default;
//# sourceMappingURL=Headline_facet.graphql.js.map