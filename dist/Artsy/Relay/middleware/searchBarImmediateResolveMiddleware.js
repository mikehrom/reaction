"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchBarImmediateResolveMiddleware = searchBarImmediateResolveMiddleware;

require("core-js/modules/es6.promise");

// TODO: Better introspection around if this is a SearchBar query,
// or further refactoring to extract `addMiddlewareToEnvironment(environment)`,
// to be used in the SearchBar QueryRenderer (for example).
function searchBarImmediateResolveMiddleware() {
  return function (next) {
    return function (req) {
      if (req.id === "SearchBarSuggestQuery" && req.variables.term === "") return Promise.resolve({
        data: {
          viewer: {}
        }
      });
      return next(req);
    };
  };
}
//# sourceMappingURL=searchBarImmediateResolveMiddleware.js.map