"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MockRelayRenderer = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

var _Artsy = require("../Artsy");

var _renderWithLoadProgress = require("../Artsy/Relay/renderWithLoadProgress");

var _SystemQueryRenderer = require("../Artsy/Relay/SystemQueryRenderer");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _relayRuntime = require("relay-runtime");

var _createMockNetworkLayer = require("./createMockNetworkLayer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Renders a tree of Relay containers with a mocked local instance of the
 * metaphysics schema.
 *
 * @note
 * Use this component in storybooks, but not tests. Because Relay works
 * asynchronously _and_ a tree may contain nested `QueryRenderer` components,
 * for tests you should usually use {@link renderRelayTree}.
 *
 * @param params.Component
 * The component that either is a Relay container or has children that are Relay
 * containers.
 *
 * @param params.variables
 * The optional variables that should be used in the operation. In most cases
 * you should be able to just hardcode these into the root query.
 *
 * @param params.query
 * The root GraphQL query.
 *
 * @param params.mockResolvers
 * @deprecated use params.mockData and params.mockMutationResults
 * A list of types/fields, that are part of metaphysics’ schema, and the data to
 * return for those. See {@link https://www.apollographql.com/docs/graphql-tools/mocking.html#Customizing-mocks}
 *
 * @example
 *
   ```tsx
   jest.unmock("react-relay")

   const Artwork = createFragmentContainer(
     props => (
       <div>
         <span>{props.artwork.title}}</span>
         <img src={props.artwork.image.url} />
       </div>
     ),
     graphql`
       fragment MockRelayRenderer_artwork on Artwork {
         image {
           url
         }
       }
     `
   )

   it("renders a Relay tree", done => {
     const wrapper = mount(
       <MockRelayRenderer
         Component={Artwork}
         query={graphql`
           query AnotherMockRelayRendererQuery {
             artwork(id: "mona-lisa") {
               ...MockRelayRenderer_artwork
             }
           }
         `}
         mockResolvers={{
           Artwork: () => ({
             title: "Mona Lisa",
             image: {
               url: "http://test/image.jpg",
             },
           }),
         }}
       />
     )
     setTimeout(() => {
       expect(wrapper.find("span").text()).toEqual("Mona Lisa")
       expect(wrapper.find("img").props().src).toEqual("http://test/image.jpg")
       done()
     }, 10)
   })
   ```
  * @param params.mockMutationResults
  * @param params.mockData
  *
  */
var MockRelayRenderer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MockRelayRenderer, _React$Component);

  function MockRelayRenderer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MockRelayRenderer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MockRelayRenderer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      caughtError: undefined
    });

    return _this;
  }

  _createClass(MockRelayRenderer, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      this.setState({
        caughtError: {
          error: error,
          errorInfo: errorInfo
        }
      });
    }
  }, {
    key: "getRelayNetwork",
    value: function getRelayNetwork() {
      var _this$props = this.props,
          mockResolvers = _this$props.mockResolvers,
          mockData = _this$props.mockData,
          mockMutationResults = _this$props.mockMutationResults,
          mockNetwork = _this$props.mockNetwork;

      if (mockNetwork) {
        if (mockResolvers || mockData || mockMutationResults) {
          throw new Error("You cannot use mockNetwork with mockResolvers, mockData, or mockMutationResults");
        }

        return mockNetwork;
      }

      if ((mockData || mockMutationResults) && mockResolvers) {
        throw new Error("You cannot use mockResolvers with either mockData or mockMutationResults");
      }

      if (!mockData && !mockResolvers && !mockMutationResults) {
        throw new Error("You must supply mockData and/or mockMutationResults");
      }

      return mockData ? (0, _createMockNetworkLayer.createMockNetworkLayer2)({
        mockData: mockData,
        mockMutationResults: mockMutationResults
      }) : (0, _createMockNetworkLayer.createMockNetworkLayer)(_objectSpread({
        Query: function Query() {
          return {};
        }
      }, mockResolvers));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // TODO: When extracting these test utils to their own package, this check
      //       should probably become a custom TSLint rule, as there’s no good way
      //       to test this in a generic way, plus with the rule we get fixes.
      if (typeof __webpack_require__ === "undefined" && _reactRelay.QueryRenderer === require("../../__mocks__/react-relay").QueryRenderer) {
        throw new Error("The `react-relay` module has been mocked, be sure to unmock it with: " + '`jest.unmock("react-relay")`');
      }

      if (this.state.caughtError) {
        var _this$state$caughtErr = this.state.caughtError,
            _error = _this$state$caughtErr.error,
            _errorInfo = _this$state$caughtErr.errorInfo;
        console.error({
          error: _error,
          errorInfo: _errorInfo
        });
        return "Error occurred while rendering Relay component: ".concat(_error);
      }

      var _this$props2 = this.props,
          Component = _this$props2.Component,
          variables = _this$props2.variables,
          query = _this$props2.query;
      var network = this.getRelayNetwork();
      var source = new _relayRuntime.RecordSource();
      var store = new _relayRuntime.Store(source);
      var environment = new _relayRuntime.Environment({
        network: network,
        store: store
      });
      return _react.default.createElement(_Artsy.SystemContextConsumer, null, function (contextProps) {
        return _react.default.createElement(_Artsy.SystemContextProvider, _extends({}, contextProps, {
          relayEnvironment: environment
        }), _react.default.createElement(_SystemQueryRenderer.SystemQueryRenderer // tslint:disable-next-line relay-operation-generics
        , {
          query: query,
          environment: environment,
          variables: variables || {} // We rely on renderWithLoadProgress to throw an error in the test
          // env ASAP. When we extract these test helpers to their own package
          // that will need to be handled explicitly.
          ,
          render: (0, _renderWithLoadProgress.renderWithLoadProgress)(Component, _this2.props.componentProps)
        }));
      });
    }
  }]);

  return MockRelayRenderer;
}(_react.default.Component);

exports.MockRelayRenderer = MockRelayRenderer;
//# sourceMappingURL=MockRelayRenderer.js.map