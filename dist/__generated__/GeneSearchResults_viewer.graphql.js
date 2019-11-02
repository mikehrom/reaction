"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */
var node = {
  "kind": "Fragment",
  "name": "GeneSearchResults_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [{
    "kind": "RootArgument",
    "name": "term",
    "type": "String!"
  }],
  "selections": [{
    "kind": "LinkedField",
    "alias": null,
    "name": "match_gene",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "term",
      "variableName": "term",
      "type": "String!"
    }],
    "concreteType": "Gene",
    "plural": true,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "_id",
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
        "alias": null,
        "name": "cropped",
        "storageKey": "cropped(height:100,width:100)",
        "args": [{
          "kind": "Literal",
          "name": "height",
          "value": 100,
          "type": "Int!"
        }, {
          "kind": "Literal",
          "name": "width",
          "value": 100,
          "type": "Int!"
        }],
        "concreteType": "CroppedImageUrl",
        "plural": false,
        "selections": [{
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
      "kind": "ScalarField",
      "alias": null,
      "name": "__id",
      "args": null,
      "storageKey": null
    }]
  }]
};
node.hash = '6adc25a242a646cc0d4169ff9d4e5c20';
var _default = node;
exports.default = _default;
//# sourceMappingURL=GeneSearchResults_viewer.graphql.js.map