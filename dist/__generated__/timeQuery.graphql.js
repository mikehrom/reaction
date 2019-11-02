"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
query timeQuery {
  system {
    time {
      unix
    }
  }
}
*/
var node = function () {
  var v0 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "system",
    "storageKey": null,
    "args": null,
    "concreteType": "System",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "time",
      "storageKey": null,
      "args": null,
      "concreteType": "SystemTime",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "unix",
        "args": null,
        "storageKey": null
      }]
    }]
  }];
  return {
    "kind": "Request",
    "operationKind": "query",
    "name": "timeQuery",
    "id": null,
    "text": "query timeQuery {\n  system {\n    time {\n      unix\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "timeQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": [],
      "selections": v0
    },
    "operation": {
      "kind": "Operation",
      "name": "timeQuery",
      "argumentDefinitions": [],
      "selections": v0
    }
  };
}();

node.hash = '5b825690c273b568243eaa817a5fd0dc';
var _default = node;
exports.default = _default;
//# sourceMappingURL=timeQuery.graphql.js.map