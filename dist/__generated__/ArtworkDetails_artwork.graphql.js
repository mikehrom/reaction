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
      v1 = [{
    "kind": "Literal",
    "name": "format",
    "value": "HTML",
    "type": "Format"
  }];
  return {
    "kind": "Fragment",
    "name": "ArtworkDetails_artwork",
    "type": "Artwork",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "FragmentSpread",
      "name": "ArtworkDetailsAboutTheWorkFromArtsy_artwork",
      "args": null
    }, {
      "kind": "FragmentSpread",
      "name": "ArtworkDetailsAboutTheWorkFromPartner_artwork",
      "args": null
    }, {
      "kind": "FragmentSpread",
      "name": "ArtworkDetailsAdditionalInfo_artwork",
      "args": null
    }, {
      "kind": "FragmentSpread",
      "name": "ArtworkDetailsArticles_artwork",
      "args": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "articles",
      "storageKey": "articles(size:10)",
      "args": [{
        "kind": "Literal",
        "name": "size",
        "value": 10,
        "type": "Int"
      }],
      "concreteType": "Article",
      "plural": true,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }, v0]
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "literature",
      "args": v1,
      "storageKey": "literature(format:\"HTML\")"
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "exhibition_history",
      "args": v1,
      "storageKey": "exhibition_history(format:\"HTML\")"
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "provenance",
      "args": v1,
      "storageKey": "provenance(format:\"HTML\")"
    }, v0]
  };
}();

node.hash = '13d5539efa074030bd4c1860ac720be0';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtworkDetails_artwork.graphql.js.map