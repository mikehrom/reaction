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
    "name": "url",
    "args": null,
    "storageKey": null
  }, {
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
  }],
      v1 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Fragment",
    "name": "DefaultHeader_headerArtworks",
    "type": "FilterArtworks",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "hits",
      "storageKey": null,
      "args": null,
      "concreteType": "Artwork",
      "plural": true,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "href",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }, {
        "kind": "LinkedField",
        "alias": null,
        "name": "image",
        "storageKey": null,
        "args": null,
        "concreteType": "Image",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": "small",
          "name": "resized",
          "storageKey": "resized(height:160)",
          "args": [{
            "kind": "Literal",
            "name": "height",
            "value": 160,
            "type": "Int"
          }],
          "concreteType": "ResizedImageUrl",
          "plural": false,
          "selections": v0
        }, {
          "kind": "LinkedField",
          "alias": "large",
          "name": "resized",
          "storageKey": "resized(height:220)",
          "args": [{
            "kind": "Literal",
            "name": "height",
            "value": 220,
            "type": "Int"
          }],
          "concreteType": "ResizedImageUrl",
          "plural": false,
          "selections": v0
        }, {
          "kind": "ScalarField",
          "alias": "__id",
          "name": "id",
          "args": null,
          "storageKey": null
        }]
      }, v1]
    }, v1]
  };
}();

node.hash = '91384b79f54832378562f301bc78bbf9';
var _default = node;
exports.default = _default;
//# sourceMappingURL=DefaultHeader_headerArtworks.graphql.js.map