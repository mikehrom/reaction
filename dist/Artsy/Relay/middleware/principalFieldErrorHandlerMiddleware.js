"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.principalFieldErrorHandlerMiddleware = principalFieldErrorHandlerMiddleware;

require("core-js/modules/es6.promise");

require("regenerator-runtime/runtime");

var _found = require("found");

var _get = require("../../../Utils/get");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function principalFieldErrorHandlerMiddleware() {
  return function (next) {
    return (
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(req) {
          var res, statusCode;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return next(req);

                case 2:
                  res = _context.sent;
                  statusCode = (0, _get.get)(res, function (r) {
                    return r.json.extensions.principalField.httpStatusCode;
                  });

                  if (!statusCode) {
                    _context.next = 8;
                    break;
                  }

                  throw new _found.HttpError(statusCode);

                case 8:
                  return _context.abrupt("return", res);

                case 9:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()
    );
  };
}
//# sourceMappingURL=principalFieldErrorHandlerMiddleware.js.map