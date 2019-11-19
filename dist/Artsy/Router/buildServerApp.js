"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildServerApp = buildServerApp;
exports.__THOU_SHALT_NOT_FAFF_AROUND_WITH_THIS_HERE_OBJECT_WE_ARE_SERIOUS__ = void 0;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("regenerator-runtime/runtime");

require("core-js/modules/es6.promise");

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _serializeJavascript = _interopRequireDefault(require("serialize-javascript"));

var _styledComponents = require("styled-components");

var _foundRelay = require("found-relay");

var _createRender = _interopRequireDefault(require("found/lib/createRender"));

var _server2 = require("found/lib/server");

var _qs = _interopRequireDefault(require("qs"));

var _createQueryMiddleware = _interopRequireDefault(require("farce/lib/createQueryMiddleware"));

var _createRelaySSREnvironment = require("../Relay/createRelaySSREnvironment");

var _Boot = require("./Boot");

var _logger = _interopRequireDefault(require("../../Utils/logger"));

var _Responsive = require("../../Utils/Responsive");

var _trace = require("../../Utils/trace");

var _user = require("../../Utils/user");

var _createRouteConfig = require("./Utils/createRouteConfig");

var _matchingMediaQueriesForUserAgent = require("./Utils/matchingMediaQueriesForUserAgent");

var _queryStringParsing = require("./Utils/queryStringParsing");

var _RenderStatus = require("./Utils/RenderStatus");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// No need to invoke this for each request.
var MediaStyle = (0, _Responsive.createMediaStyle)();
var logger = (0, _logger.default)("Artsy/Router/buildServerApp.tsx");

function buildServerApp(config) {
  return (0, _trace.trace)("buildServerApp", new Promise(
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(resolve, reject) {
      var _config$context, context, _config$routes, routes, url, userAgent, user, relayEnvironment, historyMiddlewares, resolver, Render, _ref2, redirect, status, element, headTags, matchingMediaQueries, ServerApp, _ref4, _relayData, styleTags, bodyHTML, relayData, scripts, result;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _config$context = config.context, context = _config$context === void 0 ? {} : _config$context, _config$routes = config.routes, routes = _config$routes === void 0 ? [] : _config$routes, url = config.url, userAgent = config.userAgent;
              user = (0, _user.getUser)(context.user);
              relayEnvironment = context.relayEnvironment || (0, _createRelaySSREnvironment.createRelaySSREnvironment)({
                user: user
              }); // prettier-ignore

              historyMiddlewares = [(0, _createQueryMiddleware.default)({
                parse: _queryStringParsing.queryStringParsing,
                stringify: _qs.default.stringify
              })];
              resolver = new _foundRelay.Resolver(relayEnvironment);
              Render = (0, _createRender.default)({
                renderPending: _RenderStatus.RenderPending,
                renderReady: _RenderStatus.RenderReady,
                renderError: _RenderStatus.RenderError
              });
              _context2.next = 9;
              return (0, _trace.trace)("buildServerApp.farceResults", (0, _server2.getFarceResult)({
                url: url,
                historyMiddlewares: historyMiddlewares,
                routeConfig: (0, _createRouteConfig.createRouteConfig)(routes),
                resolver: resolver,
                render: function render(props) {
                  return _react.default.createElement(Render, props);
                },
                matchContext: {
                  user: user
                }
              }));

            case 9:
              _ref2 = _context2.sent;
              redirect = _ref2.redirect;
              status = _ref2.status;
              element = _ref2.element;

              if (!redirect) {
                _context2.next = 16;
                break;
              }

              resolve({
                redirect: redirect
              });
              return _context2.abrupt("return");

            case 16:
              /**
               * An array that gets passed to `react-head`'s provider that will collect the header
               * tags that are rendered by the App. `headTags` is _mutated_ when it's passed to the App. Beware.
               **/
              headTags = [_react.default.createElement("style", {
                type: "text/css"
              }, MediaStyle)];
              matchingMediaQueries = userAgent && (0, _matchingMediaQueriesForUserAgent.matchingMediaQueriesForUserAgent)(userAgent); // prettier-ignore

              ServerApp = function ServerApp(_ref3) {
                var _ref3$tags = _ref3.tags,
                    tags = _ref3$tags === void 0 ? [] : _ref3$tags;
                return _react.default.createElement(_Boot.Boot, {
                  context: context,
                  user: user,
                  headTags: tags,
                  onlyMatchMediaQueries: matchingMediaQueries,
                  relayEnvironment: relayEnvironment,
                  routes: routes
                }, element);
              };

              _context2.next = 21;
              return (0, _trace.trace)("buildServerApp.fetch", _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee() {
                var sheet, html, data, tags;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        sheet = new _styledComponents.ServerStyleSheet(); // Render tree again, but this time with Relay data being available.

                        html = _server.default.renderToString(sheet.collectStyles(_react.default.createElement(ServerApp, {
                          tags: headTags
                        }))); // Get serializable Relay data for rehydration on the client

                        _context.next = 4;
                        return relayEnvironment.relaySSRMiddleware.getCache();

                      case 4:
                        data = _context.sent;
                        // Extract CSS styleTags to inject for SSR pass
                        tags = sheet.getStyleTags();
                        return _context.abrupt("return", {
                          relayData: data,
                          styleTags: tags,
                          bodyHTML: html
                        });

                      case 7:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }))());

            case 21:
              _ref4 = _context2.sent;
              _relayData = _ref4.relayData;
              styleTags = _ref4.styleTags;
              bodyHTML = _ref4.bodyHTML;
              // Strip response of problematic data structures
              relayData = cleanRelayData(_relayData); // Build up script tags to inject into head

              scripts = [];
              scripts.push("\n          <script>\n            var __RELAY_BOOTSTRAP__ = ".concat(serializeRelayData(relayData), ";\n          </script>\n        "));
              result = {
                bodyHTML: bodyHTML,
                status: status,
                headTags: headTags,
                styleTags: styleTags,
                scripts: scripts.join("\n") // Only exporting this for testing purposes, don't go around using this
                // elsewhere, we’re serious.

              };

              if (typeof jest !== "undefined") {
                Object.defineProperty(result, __THOU_SHALT_NOT_FAFF_AROUND_WITH_THIS_HERE_OBJECT_WE_ARE_SERIOUS__, {
                  value: ServerApp
                });
              }

              resolve(result);
              _context2.next = 37;
              break;

            case 33:
              _context2.prev = 33;
              _context2.t0 = _context2["catch"](0);
              logger.error(_context2.t0);
              reject(_context2.t0);

            case 37:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 33]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }()));
}

var __THOU_SHALT_NOT_FAFF_AROUND_WITH_THIS_HERE_OBJECT_WE_ARE_SERIOUS__ = typeof jest !== "undefined" ? Symbol() : null;
/**
 * FIXME: Relay SSR middleware is passing a _res object across which
 * has circular references, leading to issues *ONLY* on staging / prod
 * which can't be reproduced locally. This strips out _res as a quickfix
 * though this should be PR'd back at relay-modern-network-modern-ssr.
 */


exports.__THOU_SHALT_NOT_FAFF_AROUND_WITH_THIS_HERE_OBJECT_WE_ARE_SERIOUS__ = __THOU_SHALT_NOT_FAFF_AROUND_WITH_THIS_HERE_OBJECT_WE_ARE_SERIOUS__;

function cleanRelayData(relayData) {
  try {
    relayData.forEach(function (item) {
      item.forEach(function (i) {
        delete i._res;
      });
    });
  } catch (error) {
    console.error("[Artsy/Router/buildServerApp] Error cleaning data", error);
  }

  return relayData;
}
/**
 * Serialize data for client-side consumption
 */


function serializeRelayData(relayData) {
  var hydrationData;

  try {
    hydrationData = (0, _serializeJavascript.default)(relayData, {
      isJSON: true
    });
  } catch (error) {
    hydrationData = "{}";
    console.error("[Artsy/Router/buildServerApp] Error serializing data:", error);
  }

  return (0, _serializeJavascript.default)(hydrationData || {}, {
    isJSON: true
  });
}
//# sourceMappingURL=buildServerApp.js.map