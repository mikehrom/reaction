"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

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

require("core-js/modules/es6.array.some");

var _ArtworkFilterContext = require("../../Components/v2/ArtworkFilter/ArtworkFilterContext");

var _isDefaultFilter = require("../../Components/v2/ArtworkFilter/Utils/isDefaultFilter");

var _found = require("found");

var _reactRelay = require("react-relay");

var _ArtistApp = require("./ArtistApp");

var _Articles = require("./Routes/Articles");

var _AuctionResults = require("./Routes/AuctionResults");

var _CV = require("./Routes/CV");

var _Overview = require("./Routes/Overview");

var _Shows = require("./Routes/Shows");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// FIXME:
// * `render` functions requires casting
var routes = [{
  path: "/artist/:artist_id",
  Component: _ArtistApp.ArtistAppFragmentContainer,
  query: function query() {
    var node = require("../../__generated__/routes_ArtistTopLevelQuery.graphql");

    if (node.hash && node.hash !== "457b31c97881104086337d7b2ea87270") {
      console.error("The definition of 'routes_ArtistTopLevelQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/routes_ArtistTopLevelQuery.graphql");
  },
  children: [{
    path: "/",
    Component: _Overview.OverviewRouteFragmentContainer,
    query: _Overview.ArtistOverviewQuery,
    prepareVariables: function prepareVariables(params, props) {
      // FIXME: The initial render includes `location` in props, but subsequent
      // renders (such as tabbing back to this route in your browser) will not.
      var filterStateFromUrl = props.location ? props.location.query : {};

      var filterParams = _objectSpread({}, _ArtworkFilterContext.initialArtworkFilterState, filterStateFromUrl, params);

      filterParams.hasFilter = Object.entries(filterStateFromUrl).some(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            k = _ref2[0],
            v = _ref2[1];

        return !(0, _isDefaultFilter.isDefaultFilter)(k, v);
      });
      return filterParams;
    }
  }, {
    path: "cv",
    Component: _CV.CVRouteFragmentContainer,
    query: function query() {
      var node = require("../../__generated__/routes_CVQuery.graphql");

      if (node.hash && node.hash !== "3c6da6fe8c011028887c39223f98b744") {
        console.error("The definition of 'routes_CVQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("../../__generated__/routes_CVQuery.graphql");
    }
  }, {
    path: "articles",
    Component: _Articles.ArticlesRouteFragmentContainer,
    query: function query() {
      var node = require("../../__generated__/routes_ArticlesQuery.graphql");

      if (node.hash && node.hash !== "78f1e688d80c3765dd6a173a61582d97") {
        console.error("The definition of 'routes_ArticlesQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("../../__generated__/routes_ArticlesQuery.graphql");
    }
  }, {
    path: "shows",
    Component: _Shows.ShowsRouteFragmentContainer,
    query: function query() {
      var node = require("../../__generated__/routes_ShowsQuery.graphql");

      if (node.hash && node.hash !== "47b62a2ca32222ba8f0b55dd97c06b43") {
        console.error("The definition of 'routes_ShowsQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("../../__generated__/routes_ShowsQuery.graphql");
    }
  }, {
    path: "auction-results",
    Component: _AuctionResults.AuctionResultsRouteFragmentContainer,
    query: function query() {
      var node = require("../../__generated__/routes_AuctionResultsQuery.graphql");

      if (node.hash && node.hash !== "e314b05a95a6b6699a939d33efbcf128") {
        console.error("The definition of 'routes_AuctionResultsQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("../../__generated__/routes_AuctionResultsQuery.graphql");
    }
  }, // Redirect all unhandled tabs to the artist page.
  // Note: there is a deep-linked standalone auction-lot page
  // in Force, under /artist/:artistID/auction-result/:id.
  // That app needs to be mounted before this app for that to work,
  new _found.Redirect({
    from: "*",
    to: "/artist/:artist_id"
  })]
}];
exports.routes = routes;
//# sourceMappingURL=routes.js.map