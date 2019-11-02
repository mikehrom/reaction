"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOffsetBetweenGravityClock = getOffsetBetweenGravityClock;

require("regenerator-runtime/runtime");

require("core-js/modules/es6.promise");

require("core-js/modules/es6.date.now");

var _reactRelay = require("react-relay");

var _relayRuntime = require("relay-runtime");

var _graphql;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getLocalTimestampInMilliSeconds = function getLocalTimestampInMilliSeconds() {
  return Date.now();
};

function getOffsetBetweenGravityClock(_x) {
  return _getOffsetBetweenGravityClock.apply(this, arguments);
}

function _getOffsetBetweenGravityClock() {
  _getOffsetBetweenGravityClock = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(relayEnvironment) {
    var query, fetchSystemTime, getGravityTimestampInMilliSeconds, gravityClock, localClock, offsetInMilliSeconds;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            query = _graphql || (_graphql = function _graphql() {
              var node = require("../__generated__/timeQuery.graphql");

              if (node.hash && node.hash !== "5b825690c273b568243eaa817a5fd0dc") {
                console.error("The definition of 'timeQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
              }

              return require("../__generated__/timeQuery.graphql");
            });

            fetchSystemTime = function fetchSystemTime() {
              return (0, _relayRuntime.fetchQuery)(relayEnvironment, query, {}, // FIXME: Update after definitely-typed and relay docs are updated
              {
                force: true
              });
            };

            getGravityTimestampInMilliSeconds =
            /*#__PURE__*/
            function () {
              var _ref = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee() {
                var startTime, data, possibleNetworkLatencyInMilliSeconds, serverTimestampInMilliSeconds;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        startTime = getLocalTimestampInMilliSeconds();
                        _context.next = 3;
                        return fetchSystemTime();

                      case 3:
                        data = _context.sent;
                        possibleNetworkLatencyInMilliSeconds = (getLocalTimestampInMilliSeconds() - startTime) / 2;
                        serverTimestampInMilliSeconds = data.system.time.unix * 1e3 + possibleNetworkLatencyInMilliSeconds;
                        return _context.abrupt("return", serverTimestampInMilliSeconds);

                      case 7:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function getGravityTimestampInMilliSeconds() {
                return _ref.apply(this, arguments);
              };
            }();

            _context2.prev = 3;
            _context2.next = 6;
            return getGravityTimestampInMilliSeconds();

          case 6:
            gravityClock = _context2.sent;
            localClock = getLocalTimestampInMilliSeconds();
            offsetInMilliSeconds = localClock - gravityClock;
            return _context2.abrupt("return", offsetInMilliSeconds);

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](3);
            return _context2.abrupt("return", 0);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 12]]);
  }));
  return _getOffsetBetweenGravityClock.apply(this, arguments);
}
//# sourceMappingURL=time.js.map