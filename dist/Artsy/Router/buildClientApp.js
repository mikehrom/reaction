"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildClientApp = buildClientApp;

require("regenerator-runtime/runtime");

require("core-js/modules/es6.promise");

var _react = _interopRequireDefault(require("react"));

var _foundRelay = require("found-relay");

var _foundScroll = require("found-scroll");

var _createInitialFarceRouter = _interopRequireDefault(require("found/lib/createInitialFarceRouter"));

var _createRender = _interopRequireDefault(require("found/lib/createRender"));

var _BrowserProtocol = _interopRequireDefault(require("farce/lib/BrowserProtocol"));

var _createQueryMiddleware = _interopRequireDefault(require("farce/lib/createQueryMiddleware"));

var _HashProtocol = _interopRequireDefault(require("farce/lib/HashProtocol"));

var _MemoryProtocol = _interopRequireDefault(require("farce/lib/MemoryProtocol"));

var _qs = _interopRequireDefault(require("qs"));

var _logger = _interopRequireDefault(require("../../Utils/logger"));

var _user = require("../../Utils/user");

var _createRouteConfig = require("./Utils/createRouteConfig");

var _queryStringParsing = require("./Utils/queryStringParsing");

var _createRelaySSREnvironment = require("../Relay/createRelaySSREnvironment");

var _Boot = require("./Boot");

var _RenderStatus = require("./Utils/RenderStatus");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var logger = (0, _logger.default)("Artsy/Router/buildClientApp.tsx");

function buildClientApp(config) {
  return new Promise(
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(resolve, reject) {
      var _config$context, context, _config$history, history, _config$initialRoute, initialRoute, _config$routes, routes, user, relayEnvironment, getHistoryProtocol, historyMiddlewares, resolver, Renderer, Router, _ClientApp;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _config$context = config.context, context = _config$context === void 0 ? {} : _config$context, _config$history = config.history, history = _config$history === void 0 ? {} : _config$history, _config$initialRoute = config.initialRoute, initialRoute = _config$initialRoute === void 0 ? "/" : _config$initialRoute, _config$routes = config.routes, routes = _config$routes === void 0 ? [] : _config$routes;
              user = (0, _user.getUser)(context.user);
              relayEnvironment = context.relayEnvironment || (0, _createRelaySSREnvironment.createRelaySSREnvironment)({
                cache: JSON.parse(window.__RELAY_BOOTSTRAP__ || "{}"),
                user: user
              });

              getHistoryProtocol = function getHistoryProtocol() {
                switch (history.protocol) {
                  case "browser":
                    return new _BrowserProtocol.default();

                  case "hash":
                    return new _HashProtocol.default();

                  case "memory":
                    return new _MemoryProtocol.default(initialRoute);

                  default:
                    return new _BrowserProtocol.default();
                }
              };

              historyMiddlewares = [(0, _createQueryMiddleware.default)({
                parse: _queryStringParsing.queryStringParsing,
                stringify: _qs.default.stringify
              })];
              resolver = new _foundRelay.Resolver(relayEnvironment);
              Renderer = (0, _createRender.default)({
                renderPending: _RenderStatus.RenderPending,
                renderReady: _RenderStatus.RenderReady,
                renderError: _RenderStatus.RenderError
              });
              _context.next = 10;
              return (0, _createInitialFarceRouter.default)({
                historyProtocol: getHistoryProtocol(),
                historyMiddlewares: historyMiddlewares,
                historyOptions: history.options,
                routeConfig: (0, _createRouteConfig.createRouteConfig)(routes),
                matchContext: {
                  user: user
                },
                resolver: resolver,
                render: function render(renderArgs) {
                  return _react.default.createElement(_foundScroll.ScrollManager, {
                    renderArgs: renderArgs
                  }, _react.default.createElement(Renderer, renderArgs));
                }
              });

            case 10:
              Router = _context.sent;

              _ClientApp = function _ClientApp() {
                return _react.default.createElement(_Boot.Boot, {
                  context: context,
                  user: user,
                  relayEnvironment: relayEnvironment,
                  routes: routes
                }, _react.default.createElement(Router, {
                  resolver: resolver
                }));
              };

              resolve({
                ClientApp: _ClientApp
              });
              _context.next = 19;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](0);
              logger.error(_context.t0);
              reject(_context.t0);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 15]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
}
//# sourceMappingURL=buildClientApp.js.map