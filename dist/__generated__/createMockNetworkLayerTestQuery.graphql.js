"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
query createMockNetworkLayerTestQuery {
  artwork(id: "untitled") {
    __id
    title
  }
}
*/
var node = function () {
  var v0 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "artwork",
    "storageKey": "artwork(id:\"untitled\")",
    "args": [{
      "kind": "Literal",
      "name": "id",
      "value": "untitled",
      "type": "String!"
    }],
    "concreteType": "Artwork",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "__id",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    }]
  }];
  return {
    "kind": "Request",
    "operationKind": "query",
    "name": "createMockNetworkLayerTestQuery",
    "id": null,
    "text": "query createMockNetworkLayerTestQuery {\n  artwork(id: \"untitled\") {\n    __id\n    title\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "createMockNetworkLayerTestQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": [],
      "selections": v0
    },
    "operation": {
      "kind": "Operation",
      "name": "createMockNetworkLayerTestQuery",
      "argumentDefinitions": [],
      "selections": v0
    }
  };
}();

node.hash = '7d5663d7e3fdb24e39214db3ed9ea1b7';
var _default = node;
exports.default = _default;
//# sourceMappingURL=createMockNetworkLayerTestQuery.graphql.js.map