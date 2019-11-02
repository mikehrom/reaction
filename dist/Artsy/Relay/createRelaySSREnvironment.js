"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRelaySSREnvironment = createRelaySSREnvironment;
exports.hydrateCacheFromSSR = hydrateCacheFromSSR;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

require("isomorphic-fetch");

require("regenerator-runtime/runtime");

var _package = require("../../../package.json");

var _relayRuntime = require("relay-runtime");

var _sharify = require("sharify");

var _node = require("react-relay-network-modern/node8");

var _metaphysicsErrorHandlerMiddleware = require("./middleware/metaphysicsErrorHandlerMiddleware");

var _metaphysicsExtensionsLoggerMiddleware = require("./middleware/metaphysicsExtensionsLoggerMiddleware");

var _principalFieldErrorHandlerMiddleware = require("./middleware/principalFieldErrorHandlerMiddleware");

var _searchBarImmediateResolveMiddleware = require("./middleware/searchBarImmediateResolveMiddleware");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isServer = typeof window === "undefined";
var isDevelopment = (isServer ? process.env.NODE_ENV : _sharify.data.NODE_ENV) === "development"; // Only log on the client during development

var loggingEnabled = isDevelopment && !isServer;
var METAPHYSICS_ENDPOINT = isServer ? process.env.METAPHYSICS_ENDPOINT : _sharify.data.METAPHYSICS_ENDPOINT;
var USER_AGENT = "Reaction/".concat(_package.version);

function createRelaySSREnvironment() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _config$cache = config.cache,
      cache = _config$cache === void 0 ? {} : _config$cache,
      checkStatus = config.checkStatus,
      user = config.user,
      relayNetwork = config.relayNetwork,
      userAgent = config.userAgent;
  /**
   * Lazy load these here so we can safely ignore the server module from client
   * bundles without that leading to an exception trying to import it
   * unconditionally at the top-level.
   */

  var relaySSRMiddleware = isServer ? new (require("react-relay-network-modern-ssr/node8/server").default)() : new (require("react-relay-network-modern-ssr/node8/client").default)(cache);
  relaySSRMiddleware.debug = false;
  var headers = {
    "Content-Type": "application/json",

    /**
     * Chrome still doesn’t support setting the `User-Agent` header, but as this
     * isn’t critical information either we’re not going to work around it by
     * adding e.g. a `X-User-Agent` header, for now.
     *
     * See https://bugs.chromium.org/p/chromium/issues/detail?id=571722
     */
    "User-Agent": userAgent ? "".concat(userAgent, "; ").concat(USER_AGENT) : USER_AGENT
  };
  var timeZone;

  try {
    timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    headers["X-TIMEZONE"] = timeZone;
  } catch (error) {
    console.warn("Browser does not support i18n API, not setting TZ header.");
  }

  var middlewares = [(0, _searchBarImmediateResolveMiddleware.searchBarImmediateResolveMiddleware)(), (0, _node.urlMiddleware)({
    url: METAPHYSICS_ENDPOINT,
    headers: !!user ? _objectSpread({}, headers, {
      "X-USER-ID": user && user.id,
      "X-ACCESS-TOKEN": user && user.accessToken
    }) : headers
  }), relaySSRMiddleware.getMiddleware(), (0, _node.cacheMiddleware)({
    size: 100,
    // max 100 requests
    ttl: 900000,
    // 15 minutes
    onInit: function onInit(queryResponseCache) {
      if (!isServer) {
        hydrateCacheFromSSR(queryResponseCache);
      }
    }
  }), (0, _principalFieldErrorHandlerMiddleware.principalFieldErrorHandlerMiddleware)(), (0, _metaphysicsErrorHandlerMiddleware.metaphysicsErrorHandlerMiddleware)({
    checkStatus: checkStatus
  }), loggingEnabled && (0, _node.loggerMiddleware)(), loggingEnabled && (0, _metaphysicsExtensionsLoggerMiddleware.metaphysicsExtensionsLoggerMiddleware)(), loggingEnabled && (0, _node.errorMiddleware)({
    disableServerMiddlewareTip: true
  })]; // TODO: The `noThrow` option is used since we do our own error handling,
  // and don't want the default behavior of throwing when `result.errors` exists.
  // https://github.com/relay-tools/react-relay-network-modern#advanced-options-2nd-argument-after-middlewares
  // This is still 'experimental' and might be removed.

  var network = relayNetwork || new _node.RelayNetworkLayer(middlewares, {
    noThrow: true
  });
  var source = new _relayRuntime.RecordSource();
  var store = new _relayRuntime.Store(source);
  var environment = new _relayRuntime.Environment({
    network: network,
    store: store
  });
  environment.relaySSRMiddleware = relaySSRMiddleware;
  return environment;
}
/**
 * During the client-side rehydration phase take SSR cache and add to Relay's
 * QueryResponseCache, which is used inside of cacheMiddleware.
 *
 * @param cache RelayQueryResponseCache
 */


function hydrateCacheFromSSR(queryResponseCache) {
  var ssrData = JSON.parse(window.__RELAY_BOOTSTRAP__ || "{}");

  if (!(0, _isEmpty2.default)(ssrData)) {
    try {
      ssrData.forEach(function (request) {
        var _request = _slicedToArray(request, 2),
            key = _request[0],
            json = _request[1];

        var _JSON$parse = JSON.parse(key),
            queryID = _JSON$parse.queryID,
            variables = _JSON$parse.variables;

        queryResponseCache.set(queryID, variables, json); // See: https://facebook.github.io/relay/docs/en/network-layer.html#caching
      });
    } catch (error) {
      console.error("Relay/createEnvironment", error);
    }
  }
}
//# sourceMappingURL=createRelaySSREnvironment.js.map