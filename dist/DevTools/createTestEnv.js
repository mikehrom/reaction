"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTestEnv = createTestEnv;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.reduce");

require("regenerator-runtime/runtime");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.promise");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es7.object.entries");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

var _Dialogs = require("../Apps/Order/Dialogs");

var _Artsy = require("../Artsy");

var _index = require("./index");

var _react = _interopRequireWildcard(require("react"));

var _relayRuntime = require("relay-runtime");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Mutations =
/*#__PURE__*/
function () {
  function Mutations(resolvers) {
    var _this = this;

    _classCallCheck(this, Mutations);

    _defineProperty(this, "useResultsOnce", function (mutationResults) {
      Object.entries(mutationResults).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            k = _ref2[0],
            v = _ref2[1];

        if (typeof v === "function") {
          _this.resolvers[k].mockImplementationOnce(v);
        } else {
          _this.resolvers[k].mockReturnValueOnce(v);
        }
      });
    });

    _defineProperty(this, "mockNetworkFailureOnce", function () {
      _this.mockFetch.mockImplementationOnce(function () {
        return Promise.reject(new Error("failed to fetch"));
      });
    });

    _defineProperty(this, "mockFetch", jest.fn());

    this.resolvers = resolvers;
  }
  /**
   * useResultsOnce
   * @param muationResults an object which should look like the json returned by
   * metaphysics after executing a mutation
   */


  _createClass(Mutations, [{
    key: "lastFetchVariables",
    get: function get() {
      return this.mockFetch.mock.calls[this.mockFetch.mock.calls.length - 1][1];
    }
  }]);

  return Mutations;
}();

var Routes = function Routes() {
  _classCallCheck(this, Routes);

  _defineProperty(this, "mockPushRoute", jest.fn());

  _defineProperty(this, "mockOnTransition", jest.fn());
};

var TestEnv = function TestEnv(opts) {
  var _this2 = this;

  _classCallCheck(this, TestEnv);

  _defineProperty(this, "mutations", void 0);

  _defineProperty(this, "routes", new Routes());

  _defineProperty(this, "headTags", []);

  _defineProperty(this, "errors", []);

  _defineProperty(this, "buildPage",
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var _ref4,
        mockData,
        mockMutationResults,
        breakpoint,
        _this2$opts,
        _Component,
        TestPage,
        query,
        defaultData,
        defaultBreakpoint,
        page,
        fetchQuery,
        wrappedFetchQuery,
        mockNetwork,
        _args = arguments;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref4 = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, mockData = _ref4.mockData, mockMutationResults = _ref4.mockMutationResults, breakpoint = _ref4.breakpoint;
            _this2$opts = _this2.opts, _Component = _this2$opts.Component, TestPage = _this2$opts.TestPage, query = _this2$opts.query, defaultData = _this2$opts.defaultData, defaultBreakpoint = _this2$opts.defaultBreakpoint;
            page = new TestPage();

            if (mockMutationResults) {
              _this2.mutations.useResultsOnce(mockMutationResults);
            }

            fetchQuery = (0, _index.createMockFetchQuery)({
              mockData: _objectSpread({}, defaultData, mockData),
              mockMutationResults: _this2.mutations.resolvers
            }); // surface resolver errors from fetchQuery that otherwise get swallowed by
            // error handling in the pages themselves

            wrappedFetchQuery = function wrappedFetchQuery(operation, variables) {
              return fetchQuery(operation, variables).catch(function (e) {
                _this2.errors.push(e);

                throw e;
              });
            };

            _this2.mutations.mockFetch.mockImplementation(wrappedFetchQuery); // Switch on mutation/query when making requests to help make assertions
            // Seems we only make assertions about mutations right now


            mockNetwork = _relayRuntime.Network.create(function (operation, variableValues) {
              return operation.operationKind === "mutation" ? _this2.mutations.mockFetch(operation, variableValues) : wrappedFetchQuery(operation, variableValues);
            }); // @ts-ignore

            _context.next = 10;
            return (0, _index.renderRelayTree)({
              Component: function Component(props) {
                // MockBoot overwrites system context, but we want to preserve the
                // context set higher in the tree by MockQueryRenderer
                var contextBypass = (0, _react.useContext)(_Artsy.SystemContext);
                return _react.default.createElement(_index.MockBoot, {
                  breakpoint: breakpoint || defaultBreakpoint,
                  headTags: _this2.headTags
                }, _react.default.createElement(_Artsy.SystemContext.Provider, {
                  value: contextBypass
                }, _react.default.createElement(_Component, _extends({}, props, {
                  router: {
                    push: _this2.routes.mockPushRoute
                  },
                  route: {
                    onTransition: _this2.routes.mockOnTransition
                  }
                })), _react.default.createElement(_Dialogs.ConnectedModalDialog, null)));
              },
              query: query,
              mockNetwork: mockNetwork
            });

          case 10:
            page.root = _context.sent;
            return _context.abrupt("return", page);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));

  this.opts = opts;
  var mutationResolvers = Object.entries(opts.defaultMutationResults || {}).reduce(function (acc, _ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        k = _ref6[0],
        v = _ref6[1];

    return _objectSpread({}, acc, _defineProperty({}, k, jest.fn(function () {
      return typeof v === "function" ? v.apply(void 0, arguments) : v;
    })));
  }, {});
  beforeEach(function () {
    _this2.errors = [];
  });
  afterEach(function () {
    var _errors = _this2.errors;
    _this2.errors = []; // @ts-ignore

    _this2.headTags = [];

    _this2.mutations.mockFetch.mockClear();

    _this2.routes.mockOnTransition.mockClear();

    _this2.routes.mockPushRoute.mockClear();

    Object.keys(mutationResolvers).forEach(function (key) {
      return mutationResolvers[key].mockClear();
    });

    if (_errors.length !== 0) {
      throw new Error(_errors);
    }
  });
  this.mutations = new Mutations(mutationResolvers);
};
/**
 * createTestEnv
 *
 * Creates a testing environment for a relay-powered component. The environment
 * has useful tooling for dealing with relay data. Especially for mocking mutation
 * results and for abstracting away boilerplate.
 *

 * @param opts.Component the component to render. Will be passed props
  `relay: RelayProp`, a mock for `route: { onTransition(cb): void {} }` and a
  mock for `router: { push(route: string) }, along with any query-derived props`
 * @param opts.query The graphql query for the component
 * @param opts.defaultData The default mock data which metaphysics would return
 * for the given query
 * @param opts.defaultMutationResults The default results which metaphysics would
 * return for any mutations executed on the page. If the component executes mutations
 * and you want to test them, they must be declared here.
 * @param opts.defaultBreakpoint The default breakpoint to render the page at
 * @param opts.TestPage The page wrapper class to use. Must extend RootTestPage
 * TODO: add support for query variables
 */


function createTestEnv(opts) {
  return new TestEnv(opts);
}
//# sourceMappingURL=createTestEnv.js.map