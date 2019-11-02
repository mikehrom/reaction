"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendAuthData = sendAuthData;
exports.checkEmail = exports.handleSubmit = void 0;

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.promise");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("regenerator-runtime/runtime");

var _reactRelay = require("react-relay");

var _relayRuntime = require("relay-runtime");

var _graphql;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var handleSubmit = function handleSubmit(url, csrf, redirectTo) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(values, formikBag) {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return sendAuthData(url, _objectSpread({
                  _csrf: csrf
                }, values));

              case 3:
                data = _context.sent;

                if (data.success) {
                  if (redirectTo) {
                    document.location.pathname = redirectTo;
                  }
                } else {
                  formikBag.setStatus(data);
                }

                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                formikBag.setStatus(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

exports.handleSubmit = handleSubmit;

function sendAuthData(_x3, _x4) {
  return _sendAuthData.apply(this, arguments);
}

function _sendAuthData() {
  _sendAuthData = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(url, values) {
    var res, data;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch(url, {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest"
              },
              method: "POST",
              credentials: "same-origin",
              body: JSON.stringify(values)
            });

          case 2:
            res = _context2.sent;
            _context2.next = 5;
            return res.json();

          case 5:
            data = _context2.sent;
            return _context2.abrupt("return", data);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _sendAuthData.apply(this, arguments);
}

var checkEmail = function checkEmail(_ref2) {
  var relayEnvironment = _ref2.relayEnvironment,
      values = _ref2.values,
      actions = _ref2.actions,
      shouldExist = _ref2.shouldExist;

  var query = _graphql || (_graphql = function _graphql() {
    var node = require("../../__generated__/helpersEmailQuery.graphql");

    if (node.hash && node.hash !== "bc3eea69494c29507eb5bf33dfb6c0ad") {
      console.error("The definition of 'helpersEmailQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/helpersEmailQuery.graphql");
  });

  return (0, _relayRuntime.fetchQuery)(relayEnvironment, query, {
    email: values.email
  }).then(function (data) {
    if (data.user && data.user.userAlreadyExists) {
      if (shouldExist) {
        return true;
      } else {
        actions.setFieldError("email", "Email already exists.");
        actions.setSubmitting(false);
        return false;
      }
    } else {
      if (shouldExist) {
        actions.setFieldError("email", "Email does not exist.");
        actions.setSubmitting(false);
        return false;
      } else {
        return true;
      }
    }
  });
};

exports.checkEmail = checkEmail;
//# sourceMappingURL=helpers.js.map