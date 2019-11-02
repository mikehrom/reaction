"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es7.object.entries");

require("core-js/modules/es6.array.map");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _SearchResultsArtists = require("./Routes/Artists/SearchResultsArtists");

var _Artworks = require("./Routes/Artworks");

var _SearchResultsEntity = require("./Routes/Entity/SearchResultsEntity");

var _renderWithLoadProgress = require("../../Artsy/Relay/renderWithLoadProgress");

var _ArtworkFilter = require("../../Components/v2/ArtworkFilter");

var _SearchApp = require("./SearchApp");

var _graphql;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _prepareVariables = function prepareVariables(_params, _ref) {
  var location = _ref.location;
  return _objectSpread({}, location.query, {
    keyword: location.query.term
  });
};

var tabsToEntitiesMap = {
  collections: ["COLLECTION"],
  shows: ["SHOW"],
  fairs: ["FAIR"],
  institutions: ["INSTITUTION"],
  galleries: ["GALLERY"],
  categories: ["GENE"],
  articles: ["ARTICLE"],
  auctions: ["SALE"],
  more: ["TAG", "CITY", "FEATURE"]
};
var entityTabs = Object.entries(tabsToEntitiesMap).map(function (_ref2) {
  var _ref3 = _slicedToArray(_ref2, 2),
      key = _ref3[0],
      entities = _ref3[1];

  return {
    path: key,
    Component: _SearchResultsEntity.SearchResultsEntityRouteFragmentContainer,
    // FIXME: We shouldn't overwrite our route functionality, as that breaks
    // global route configuration behavior.
    render: function render(_ref4) {
      var props = _ref4.props,
          Component = _ref4.Component;

      if (!props) {
        return _react.default.createElement(_renderWithLoadProgress.RouteSpinner, null);
      }

      return _react.default.createElement(Component, _extends({}, props, {
        tab: key,
        entities: entities
      }));
    },
    prepareVariables: function prepareVariables(_params, _ref5) {
      var location = _ref5.location;
      return _objectSpread({}, _prepareVariables(_params, {
        location: location
      }), {
        entities: entities
      });
    },
    query: _graphql || (_graphql = function _graphql() {
      var node = require("../../__generated__/routes_SearchResultsEntityQuery.graphql");

      if (node.hash && node.hash !== "fe6c5e86fda971399b1d8f8dc6edb0df") {
        console.error("The definition of 'routes_SearchResultsEntityQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("../../__generated__/routes_SearchResultsEntityQuery.graphql");
    })
  };
});
var routes = [{
  path: "/search",
  Component: _SearchApp.SearchAppFragmentContainer,
  query: function query() {
    var node = require("../../__generated__/routes_SearchResultsTopLevelQuery.graphql");

    if (node.hash && node.hash !== "6f3892041bb97db5f3ad7fb947d804bc") {
      console.error("The definition of 'routes_SearchResultsTopLevelQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/routes_SearchResultsTopLevelQuery.graphql");
  },
  prepareVariables: _prepareVariables,
  children: [{
    path: "/",
    Component: _Artworks.SearchResultsArtworksRoute,
    prepareVariables: _prepareVariables,
    query: _ArtworkFilter.ArtworkQueryFilter
  }, {
    path: "artists",
    Component: _SearchResultsArtists.SearchResultsArtistsRouteFragmentContainer,
    prepareVariables: _prepareVariables,
    query: function query() {
      var node = require("../../__generated__/routes_SearchResultsArtistsQuery.graphql");

      if (node.hash && node.hash !== "1a3f143f1f7e1089dea56bcc73c2b49b") {
        console.error("The definition of 'routes_SearchResultsArtistsQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("../../__generated__/routes_SearchResultsArtistsQuery.graphql");
    }
  }].concat(_toConsumableArray(entityTabs))
}];
exports.routes = routes;
//# sourceMappingURL=routes.js.map