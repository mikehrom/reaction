"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
query buildClientAppTestQuery {
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
    "name": "buildClientAppTestQuery",
    "id": null,
    "text": "query buildClientAppTestQuery {\n  me {\n    __id\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "buildClientAppTestQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": [],
      "selections": v0
    },
    "operation": {
      "kind": "Operation",
      "name": "buildClientAppTestQuery",
      "argumentDefinitions": [],
      "selections": v0
    }
  };
}();

node.hash = 'b3f25ce581d3ea277681773834936ee9';
var _default = node;
exports.default = _default;
//# sourceMappingURL=buildClientAppTestQuery.graphql.js.map