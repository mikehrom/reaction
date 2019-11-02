"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */
var node = function () {
  var v0 = [{
    "kind": "Variable",
    "name": "id",
    "variableName": "artist_id",
    "type": "String!"
  }],
      v1 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Fragment",
    "name": "Shows_viewer",
    "type": "Viewer",
    "metadata": null,
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "currentShowsStatus",
      "type": "String",
      "defaultValue": "running"
    }, {
      "kind": "LocalArgument",
      "name": "currentShowsSort",
      "type": "PartnerShowSorts",
      "defaultValue": "END_AT_ASC"
    }, {
      "kind": "LocalArgument",
      "name": "upcomingShowsStatus",
      "type": "String",
      "defaultValue": "upcoming"
    }, {
      "kind": "LocalArgument",
      "name": "upcomingShowsSort",
      "type": "PartnerShowSorts",
      "defaultValue": "START_AT_ASC"
    }, {
      "kind": "LocalArgument",
      "name": "pastShowsStatus",
      "type": "String",
      "defaultValue": "closed"
    }, {
      "kind": "LocalArgument",
      "name": "pastShowsSort",
      "type": "PartnerShowSorts",
      "defaultValue": "END_AT_DESC"
    }, {
      "kind": "RootArgument",
      "name": "artist_id",
      "type": "String!"
    }],
    "selections": [{
      "kind": "LinkedField",
      "alias": "artist_currentShows",
      "name": "artist",
      "storageKey": null,
      "args": v0,
      "concreteType": "Artist",
      "plural": false,
      "selections": [{
        "kind": "FragmentSpread",
        "name": "ArtistShows_artist",
        "args": [{
          "kind": "Variable",
          "name": "sort",
          "variableName": "currentShowsSort",
          "type": null
        }, {
          "kind": "Variable",
          "name": "status",
          "variableName": "currentShowsStatus",
          "type": null
        }]
      }, v1]
    }, {
      "kind": "LinkedField",
      "alias": "artist_upcomingShows",
      "name": "artist",
      "storageKey": null,
      "args": v0,
      "concreteType": "Artist",
      "plural": false,
      "selections": [{
        "kind": "FragmentSpread",
        "name": "ArtistShows_artist",
        "args": [{
          "kind": "Variable",
          "name": "sort",
          "variableName": "upcomingShowsSort",
          "type": null
        }, {
          "kind": "Variable",
          "name": "status",
          "variableName": "upcomingShowsStatus",
          "type": null
        }]
      }, v1]
    }, {
      "kind": "LinkedField",
      "alias": "artist_pastShows",
      "name": "artist",
      "storageKey": null,
      "args": v0,
      "concreteType": "Artist",
      "plural": false,
      "selections": [{
        "kind": "FragmentSpread",
        "name": "ArtistShows_artist",
        "args": [{
          "kind": "Variable",
          "name": "sort",
          "variableName": "pastShowsSort",
          "type": null
        }, {
          "kind": "Variable",
          "name": "status",
          "variableName": "pastShowsStatus",
          "type": null
        }]
      }, v1]
    }]
  };
}();

node.hash = '1c2b0cd1dcbb666851b282948c0c7d56';
var _default = node;
exports.default = _default;
//# sourceMappingURL=Shows_viewer.graphql.js.map