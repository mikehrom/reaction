"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
mutation BudgetUpdateMyUserProfileMutation(
  $input: UpdateMyProfileInput!
) {
  updateMyUserProfile(input: $input) {
    user {
      name
      __id
    }
  }
}
*/
var node = function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateMyProfileInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "updateMyUserProfile",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "UpdateMyProfileInput!"
    }],
    "concreteType": "UpdateMyProfilePayload",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "user",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": [{
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
    }]
  }];
  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "BudgetUpdateMyUserProfileMutation",
    "id": null,
    "text": "mutation BudgetUpdateMyUserProfileMutation(\n  $input: UpdateMyProfileInput!\n) {\n  updateMyUserProfile(input: $input) {\n    user {\n      name\n      __id\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "BudgetUpdateMyUserProfileMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": v1
    },
    "operation": {
      "kind": "Operation",
      "name": "BudgetUpdateMyUserProfileMutation",
      "argumentDefinitions": v0,
      "selections": v1
    }
  };
}();

node.hash = '3add187e4e8fcf9910294672b24f47e7';
var _default = node;
exports.default = _default;
//# sourceMappingURL=BudgetUpdateMyUserProfileMutation.graphql.js.map