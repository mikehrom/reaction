"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Route = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _renderWithLoadProgress = require("../../Relay/renderWithLoadProgress");

var _found = require("found");

var _Route = _interopRequireDefault(require("found/lib/Route"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function createRender(_ref) {
  var _ref$fetchIndicator = _ref.fetchIndicator,
      fetchIndicator = _ref$fetchIndicator === void 0 ? "spinner" : _ref$fetchIndicator,
      render = _ref.render;
  return function (renderArgs) {
    var Component = renderArgs.Component,
        props = renderArgs.props,
        error = renderArgs.error;

    if (error && error instanceof _found.HttpError) {
      throw error;
    }

    if (render) {
      return render(renderArgs);
    }

    if (Component === undefined) {
      return undefined;
    } // This should only ever show when doing client-side routing.


    if (!props) {
      if (fetchIndicator === "spinner") {
        return _react.default.createElement(_renderWithLoadProgress.RouteSpinner, null); // TODO: At some point  we might want to make this a little fancier. If
        // undefined  is returned here, then we defer to `RenderStatus` component.
      } else if (fetchIndicator === "overlay") {
        /*
          In attempting to avoid the use of <StaticContainer> in RenderStatus.tsx,
          which freezes the component tree with `shouldComponentUpdate = false`,
          we stored the previously-rendered component and props in a variable and
          instead of returning undefined here, we returned <PrevComponent {...prevProps} />.
           However, when the component is rendered by react, it errors out because
          the data in prevProps has seemingly been garbage collected.
           Relay has the ability to `retain` data in the store. We should investigate,
          which would give us greater control over our component tree when top-level
          route transitions occur.
           See: https://graphql.slack.com/archives/C0BEXJLKG/p1561741782163900
           export const setLocal = (query: GraphQLTaggedNode, localData: object) => {
            const request = getRequest(query);
            const operation = createOperationDescriptor(request, {});
             env.commitPayload(operation, localData);
            env.retain(operation.root);  // <== here @en_js magic :wink:
          };
        */
        return;
      } else {
        return;
      }
    }

    return _react.default.createElement(Component, props);
  };
}

var Route =
/*#__PURE__*/
function (_BaseRoute) {
  _inherits(Route, _BaseRoute);

  function Route(props) {
    var _this;

    _classCallCheck(this, Route);

    if (!(props.query || props.getQuery)) {
      _this = _possibleConstructorReturn(this, _getPrototypeOf(Route).call(this, props));
      return _possibleConstructorReturn(_this);
    }

    return _possibleConstructorReturn(this, _getPrototypeOf(Route).call(this, _objectSpread({}, props, {
      render: createRender(props)
    })));
  }

  return Route;
}(_Route.default);

exports.Route = Route;
//# sourceMappingURL=Route.js.map