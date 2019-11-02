"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderApp = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

var _palette = require("@artsy/palette");

var _AppContainer = require("../Components/AppContainer");

var _StickyFooter = require("./Components/StickyFooter");

var _Artsy = require("../../Artsy");

var _ErrorPage = require("../../Components/ErrorPage");

var _react = _interopRequireDefault(require("react"));

var _reactHead = require("react-head");

var _reactRelay = require("react-relay");

var _reactStripeElements = require("react-stripe-elements");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _get = require("../../Utils/get");

var _Dialogs = require("./Dialogs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var findRoute = function findRoute(routes, routeIndices) {
  var currentRoute = routes[routeIndices[0]];
  routeIndices.slice(1).forEach(function (routeIndex) {
    currentRoute = currentRoute.children[routeIndex];
  });
  return currentRoute;
};

var OrderApp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(OrderApp, _React$Component);

  function OrderApp() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, OrderApp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(OrderApp)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "mediator", null);

    _defineProperty(_assertThisInitialized(_this), "state", {
      stripe: null
    });

    _defineProperty(_assertThisInitialized(_this), "removeTransitionHook", void 0);

    _defineProperty(_assertThisInitialized(_this), "onTransition", function (newLocation) {
      var _this$props = _this.props,
          routes = _this$props.routes,
          routeIndices = _this$props.routeIndices,
          oldLocation = _this$props.location,
          router = _this$props.router;
      var route = findRoute(routes, routeIndices);

      if (route.onTransition) {
        return route.onTransition(newLocation, oldLocation, router);
      }

      return true;
    });

    return _this;
  }

  _createClass(OrderApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!this.removeTransitionHook) {
        this.removeTransitionHook = this.props.router.addTransitionHook(this.onTransition);
      }

      var artwork = (0, _get.get)(null, function () {
        return _this2.props.order.lineItems.edges[0].node.artwork;
      });

      if (artwork && this.mediator && this.mediator.trigger) {
        var is_offerable = artwork.is_offerable,
            is_acquireable = artwork.is_acquireable;
        this.mediator.trigger("enableIntercomForBuyers", {
          is_offerable: is_offerable,
          is_acquireable: is_acquireable
        });
      }

      if (window.Stripe) {
        this.setState({
          stripe: window.Stripe(window.sd.STRIPE_PUBLISHABLE_KEY)
        });
      } else {
        document.querySelector("#stripe-js").addEventListener("load", function () {
          // Create Stripe instance once Stripe.js loads
          _this2.setState({
            stripe: window.Stripe(window.sd.STRIPE_PUBLISHABLE_KEY)
          });
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.removeTransitionHook) {
        this.removeTransitionHook();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          order = _this$props2.order;
      var artworkId;

      if (!order) {
        return _react.default.createElement(_ErrorPage.ErrorPage, {
          code: 404
        });
      } else {
        artworkId = (0, _get.get)(this.props, function (props) {
          return order.lineItems.edges[0].node.artwork.id;
        });
      }

      return _react.default.createElement(_Artsy.SystemContextConsumer, null, function (_ref) {
        var isEigen = _ref.isEigen,
            mediator = _ref.mediator;
        _this3.mediator = mediator;
        return _react.default.createElement(_AppContainer.AppContainer, null, _react.default.createElement(_reactHead.Title, null, "Checkout | Artsy"), isEigen ? _react.default.createElement(_reactHead.Meta, {
          name: "viewport",
          content: "width=device-width, user-scalable=no"
        }) : _react.default.createElement(_reactHead.Meta, {
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=5 viewport-fit=cover"
        }), _react.default.createElement(SafeAreaContainer, null, _react.default.createElement(_reactStripeElements.StripeProvider, {
          stripe: _this3.state.stripe
        }, _react.default.createElement(_reactStripeElements.Elements, null, _react.default.createElement(_react.default.Fragment, null, children)))), _react.default.createElement(_StickyFooter.StickyFooter, {
          orderType: order.mode,
          artworkId: artworkId
        }), _react.default.createElement(_Dialogs.ConnectedModalDialog, null));
      });
    }
  }]);

  return OrderApp;
}(_react.default.Component);

exports.OrderApp = OrderApp;
var SafeAreaContainer = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "OrderApp__SafeAreaContainer",
  componentId: "sc-1x4dkky-0"
})(["padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);margin-bottom:75px;"]);
({
  order: function order() {
    var node = require("../../__generated__/OrderApp_order.graphql");

    if (node.hash && node.hash !== "220ccbb3f0b64551825fd612ed8d6b07") {
      console.error("The definition of 'OrderApp_order' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/OrderApp_order.graphql");
  }
});
//# sourceMappingURL=OrderApp.js.map