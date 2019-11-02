"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.collectRoutes = void 0;

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

var _reactRelay = require("react-relay");

var _Collect = require("./Routes/Collect");

var _Collections = require("./Routes/Collections");

var _Collection = require("./Routes/Collection");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var collectRoutes = [{
  path: "/collect/:medium?",
  Component: _Collect.CollectAppFragmentContainer,
  fetchIndicator: "overlay",
  prepareVariables: initializeVariablesWithFilterState,
  query: function query() {
    var node = require("../../__generated__/collectRoutes_ArtworkFilterQuery.graphql");

    if (node.hash && node.hash !== "bca61ea2118e3a1c457ceda1020f0a75") {
      console.error("The definition of 'collectRoutes_ArtworkFilterQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/collectRoutes_ArtworkFilterQuery.graphql");
  }
}, {
  path: "/collections",
  Component: _Collections.CollectionsAppFragmentContainer,
  fetchIndicator: "overlay",
  query: function query() {
    var node = require("../../__generated__/collectRoutes_MarketingCollectionsAppQuery.graphql");

    if (node.hash && node.hash !== "81db5fa0b5f99948b02522c13d2f9278") {
      console.error("The definition of 'collectRoutes_MarketingCollectionsAppQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/collectRoutes_MarketingCollectionsAppQuery.graphql");
  }
}, {
  path: "/collection/:slug",
  Component: _Collection.CollectionRefetchContainer,
  prepareVariables: initializeVariablesWithFilterState,
  fetchIndicator: "overlay",
  query: _Collection.CollectionAppQuery
}];
exports.collectRoutes = collectRoutes;

function initializeVariablesWithFilterState(params, props) {
  var initialFilterState = props.location ? props.location.query : {};

  if (params.medium) {
    initialFilterState.medium = params.medium;

    if (props.location.query) {
      props.location.query.medium = params.medium;
    }
  }

  var state = _objectSpread({
    sort: "-decayed_merch"
  }, initialFilterState, params);

  return state;
}
//# sourceMappingURL=collectRoutes.js.map