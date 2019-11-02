"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */
var node = {
  "kind": "Fragment",
  "name": "GeneToolTip_gene",
  "type": "Gene",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [{
    "kind": "ScalarField",
    "alias": null,
    "name": "description",
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
      "kind": "ScalarField",
      "alias": null,
      "name": "url",
      "args": [{
        "kind": "Literal",
        "name": "version",
        "value": "tall",
        "type": "[String]"
      }],
      "storageKey": "url(version:\"tall\")"
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
    "name": "name",
    "args": null,
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  }]
};
node.hash = 'e4df0664535bb18b36a35439157de4ce';
var _default = node;
exports.default = _default;
//# sourceMappingURL=GeneToolTip_gene.graphql.js.map