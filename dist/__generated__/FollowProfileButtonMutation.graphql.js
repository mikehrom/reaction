"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
mutation FollowProfileButtonMutation(
  $input: FollowProfileInput!
) {
  followProfile(input: $input) {
    profile {
      __id
      is_followed
    }
  }
}
*/
var node = function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "FollowProfileInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "followProfile",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "FollowProfileInput!"
    }],
    "concreteType": "FollowProfilePayload",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "profile",
      "storageKey": null,
      "args": null,
      "concreteType": "Profile",
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
        "name": "is_followed",
        "args": null,
        "storageKey": null
      }]
    }]
  }];
  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "FollowProfileButtonMutation",
    "id": null,
    "text": "mutation FollowProfileButtonMutation(\n  $input: FollowProfileInput!\n) {\n  followProfile(input: $input) {\n    profile {\n      __id\n      is_followed\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "FollowProfileButtonMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": v1
    },
    "operation": {
      "kind": "Operation",
      "name": "FollowProfileButtonMutation",
      "argumentDefinitions": v0,
      "selections": v1
    }
  };
}();

node.hash = '41505cb1b2dfc8e45a15406888d5555a';
var _default = node;
exports.default = _default;
//# sourceMappingURL=FollowProfileButtonMutation.graphql.js.map