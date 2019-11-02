"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
query helpersEmailQuery(
  $email: String!
) {
  user(email: $email) {
    userAlreadyExists
    __id
  }
}
*/
var node = function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "email",
    "type": "String!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "user",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "email",
      "variableName": "email",
      "type": "String"
    }],
    "concreteType": "User",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "userAlreadyExists",
      "args": null,
      "storageKey": null
    }, {
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
    "name": "helpersEmailQuery",
    "id": null,
    "text": "query helpersEmailQuery(\n  $email: String!\n) {\n  user(email: $email) {\n    userAlreadyExists\n    __id\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "helpersEmailQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": v1
    },
    "operation": {
      "kind": "Operation",
      "name": "helpersEmailQuery",
      "argumentDefinitions": v0,
      "selections": v1
    }
  };
}();

node.hash = 'bc3eea69494c29507eb5bf33dfb6c0ad';
var _default = node;
exports.default = _default;
//# sourceMappingURL=helpersEmailQuery.graphql.js.map