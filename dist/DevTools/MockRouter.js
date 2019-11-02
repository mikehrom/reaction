"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MockRouter = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("regenerator-runtime/runtime");

var _buildClientApp = require("../Artsy/Router/buildClientApp");

var _createMockNetworkLayer = require("./createMockNetworkLayer");

var _react = _interopRequireDefault(require("react"));

var _user = require("../Utils/user");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MockRouter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MockRouter, _React$Component);

  function MockRouter() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MockRouter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MockRouter)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      ClientApp: null
    });

    return _this;
  }

  _createClass(MockRouter, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _this$props, routes, initialRoute, historyOptions, mockResolvers, mockData, mockMutationResults, context, user, relayEnvironment, _ref, ClientApp;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, routes = _this$props.routes, initialRoute = _this$props.initialRoute, historyOptions = _this$props.historyOptions, mockResolvers = _this$props.mockResolvers, mockData = _this$props.mockData, mockMutationResults = _this$props.mockMutationResults, context = _this$props.context;
                _context.prev = 1;
                user = (0, _user.getUser)(context && context.user);
                relayEnvironment = mockResolvers ? (0, _createMockNetworkLayer.createMockNetworkLayer)(mockResolvers) : mockData || mockMutationResults ? (0, _createMockNetworkLayer.createMockNetworkLayer2)({
                  mockData: mockData,
                  mockMutationResults: mockMutationResults
                }) : undefined;
                _context.next = 6;
                return (0, _buildClientApp.buildClientApp)({
                  routes: routes,
                  initialRoute: initialRoute,
                  history: {
                    protocol: "memory",
                    options: historyOptions
                  },
                  context: _objectSpread({}, context, {
                    user: user,
                    relayEnvironment: relayEnvironment
                  })
                });

              case 6:
                _ref = _context.sent;
                ClientApp = _ref.ClientApp;
                this.setState({
                  ClientApp: ClientApp
                });
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);
                console.error("MockRouter", _context.t0);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 11]]);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var ClientApp = this.state.ClientApp;
      return _react.default.createElement(_react.default.Fragment, null, ClientApp && _react.default.createElement(ClientApp, this.props.initialState));
    }
  }]);

  return MockRouter;
}(_react.default.Component);

exports.MockRouter = MockRouter;

_defineProperty(MockRouter, "defaultProps", {
  initialRoute: "/"
});
//# sourceMappingURL=MockRouter.js.map