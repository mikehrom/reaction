"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.metaphysicsErrorHandlerMiddleware = metaphysicsErrorHandlerMiddleware;

require("core-js/modules/es6.promise");

require("regenerator-runtime/runtime");

var _errors = require("../../../Utils/errors");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function metaphysicsErrorHandlerMiddleware(_ref) {
  var checkStatus = _ref.checkStatus;
  return function (next) {
    return (
      /*#__PURE__*/
      function () {
        var _ref2 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(req) {
          var response, error;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return next(req);

                case 2:
                  response = _context.sent;

                  if (!(!checkStatus || response.status >= 200 && response.status < 300)) {
                    _context.next = 7;
                    break;
                  }

                  return _context.abrupt("return", response);

                case 7:
                  error = new _errors.NetworkError(response.statusText);
                  error.response = response;
                  throw error;

                case 10:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }()
    );
  };
}
//# sourceMappingURL=metaphysicsErrorHandlerMiddleware.js.map