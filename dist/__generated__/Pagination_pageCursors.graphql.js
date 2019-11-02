"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */
var node = function () {
  var v0 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "cursor",
    "args": null,
    "storageKey": null
  },
      v1 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "page",
    "args": null,
    "storageKey": null
  },
      v2 = [v0, v1, {
    "kind": "ScalarField",
    "alias": null,
    "name": "isCurrent",
    "args": null,
    "storageKey": null
  }];
  return {
    "kind": "Fragment",
    "name": "Pagination_pageCursors",
    "type": "PageCursors",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "around",
      "storageKey": null,
      "args": null,
      "concreteType": "PageCursor",
      "plural": true,
      "selections": v2
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "first",
      "storageKey": null,
      "args": null,
      "concreteType": "PageCursor",
      "plural": false,
      "selections": v2
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "last",
      "storageKey": null,
      "args": null,
      "concreteType": "PageCursor",
      "plural": false,
      "selections": v2
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "previous",
      "storageKey": null,
      "args": null,
      "concreteType": "PageCursor",
      "plural": false,
      "selections": [v0, v1]
    }]
  };
}();

node.hash = '72b4f72005e64de70ab045755aaaec79';
var _default = node;
exports.default = _default;
//# sourceMappingURL=Pagination_pageCursors.graphql.js.map