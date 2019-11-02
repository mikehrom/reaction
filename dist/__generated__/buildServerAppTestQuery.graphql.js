"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
query buildServerAppTestQuery {
  me {
    __id
  }
}
*/
var node = function () {
  var v0 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "me",
    "storageKey": null,
    "args": null,
    "concreteType": "Me",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "__id",
      "args": null,
      "storageKey": null
    }]
  }];
  return {
    "kind": "Request",
    "operationKind": "query",
    "name": "buildServerAppTestQuery",
    "id": null,
    "text": "query buildServerAppTestQuery {\n  me {\n    __id\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "buildServerAppTestQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": [],
      "selections": v0
    },
    "operation": {
      "kind": "Operation",
      "name": "buildServerAppTestQuery",
      "argumentDefinitions": [],
      "selections": v0
    }
  };
}();

node.hash = '3bf8787c02fc1b3b8de8c60a842a34c4';
var _default = node;
exports.default = _default;
//# sourceMappingURL=buildServerAppTestQuery.graphql.js.map