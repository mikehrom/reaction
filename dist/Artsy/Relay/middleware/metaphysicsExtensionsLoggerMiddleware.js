"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.metaphysicsExtensionsLoggerMiddleware = metaphysicsExtensionsLoggerMiddleware;

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.array.reduce");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var _omit2 = _interopRequireDefault(require("lodash/omit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This takes the extra extension metadata that staging and dev metaphysics
 * sends about API requests it makes for you, and logs it out during dev
 * time into your console at the same places as the relay queries.
 */
function metaphysicsExtensionsLoggerMiddleware() {
  return function (next) {
    return function (req) {
      return next(req).then(function (res) {
        if (res.json.extensions && console.groupCollapsed && res.json.extensions.requests) {
          // See: https://github.com/artsy/metaphysics/blob/master/src/lib/loaders/api/extensionsLogger.ts
          var requests = res.json.extensions.requests; // Pull out the stitching logs, e.g. what graphql requests
          // did stitching do for you under the hood

          var stitching = requests.stitching;
          var stitchCount = stitching && Object.keys(stitching.requests).length;
          var stitchSummary = stitchCount ? "".concat(stitchCount, " stitched") : ""; // Grab the rest API requests (only ones that use DataLoader)
          // so this is kinda a sub-set but it's more or less everything

          var apis = (0, _omit2.default)(requests, ["stitching"]);
          var requestCount = Object.keys(apis).map(function (k) {
            return Object.keys(requests[k].requests).length;
          }) // API requests
          .reduce(function (a, c) {
            return a + c;
          }, 0); // Add them all up
          // Not telling anyone off, but over 15 is probably a point
          // where you want that highlighted.

          var colorForRequests = requestCount >= 15 ? "color: #F1AF1B;" : "color: #6E1EFF;"; // The way the console coloring works is you use %c as an inline span
          // sentinal to correlate style to the next set of characters
          //
          // So we'll need some styles to work with

          var noBold = "font-weight: normal;";
          var noColor = "color: black; font-weight: normal;";
          var requestSummary = requestCount ? "%c ".concat(requestCount, " %ccalls") // These need consistent amounts of %c
          : "%c%c";
          var title = "%cMetaphysics API -".concat(requestSummary, " ").concat(stitchSummary); // Make sure we have something to show

          if (requestCount || stitchCount) {
            // The main title for the metaphysics section
            console.groupCollapsed(title, noBold, colorForRequests, noColor); // Loop through all of the hosts, make a subsection for those
            // and show the raw request obj in-case we add new things to it

            if (requestCount) {
              Object.keys(apis).forEach(function (host) {
                console.group(host);
                Object.keys(apis[host].requests).forEach(function (route) {
                  console.log(route, apis[host].requests[route]);
                });
                console.groupEnd();
              });
            } // Show stitched queries inline. This will probably need work in
            // the future, because I bet it's ugly.


            if (stitchCount) {
              console.group("Stitched");
              Object.keys(stitching.requests).forEach(function (stitchedSchema) {
                console.log(stitching.requests[stitchedSchema]);
              });
              console.groupEnd();
            } // Wrap up the metaphysics section


            console.groupEnd();
          }
        }

        return res;
      });
    };
  };
}
//# sourceMappingURL=metaphysicsExtensionsLoggerMiddleware.js.map