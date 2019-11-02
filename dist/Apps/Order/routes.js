"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

require("core-js/modules/es6.regexp.replace");

var _getRedirect = require("./getRedirect");

var _redirects = require("./redirects");

var _found = require("found");

var React = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _OrderApp = require("./OrderApp");

var _Accept = require("./Routes/Accept");

var _NewPayment = require("./Routes/NewPayment");

var _Offer = require("./Routes/Offer");

var _Payment = require("./Routes/Payment");

var _Reject = require("./Routes/Reject");

var _Respond = require("./Routes/Respond");

var _Review = require("./Routes/Review");

var _Shipping = require("./Routes/Shipping");

var _Status = require("./Routes/Status");

var _Counter = require("./Routes/Counter");

var _ErrorPage = require("../../Components/ErrorPage");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// @ts-ignore
// FIXME:
var routes = [{
  path: "/order(2|s)/:orderID",
  Component: _OrderApp.OrderApp,
  // TODO: Better support `@principalField` in Metaphysics.
  // This currently only works because of the `order` field alias.
  query: function query() {
    var node = require("../../__generated__/routes_OrderQuery.graphql");

    if (node.hash && node.hash !== "9249b465ae12de4e4212d5f0f2062ac1") {
      console.error("The definition of 'routes_OrderQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/routes_OrderQuery.graphql");
  },
  render: function render(_ref) {
    var Component = _ref.Component,
        props = _ref.props;

    if (Component && props) {
      var _ref2 = props,
          location = _ref2.location,
          order = _ref2.order;

      if (order) {
        var redirect = (0, _getRedirect.getRedirect)(_redirects.redirects, location.pathname.replace(/order(2|s)\/[^\/]+/, ""), {
          order: order
        });

        if (redirect !== null) {
          if (process.env.NODE_ENV === "development") {
            console.error("Redirecting from ".concat(location.pathname, " to ").concat(redirect.path, " because '").concat(redirect.reason, "'"));
          }

          throw new _found.RedirectException(redirect.path);
        }
      }

      return React.createElement(Component, props);
    }
  },
  children: [{
    path: "respond",
    Component: _Respond.RespondFragmentContainer,
    onTransition: _redirects.confirmRouteExit,
    query: function query() {
      var node = require("../../__generated__/routes_RespondQuery.graphql");

      if (node.hash && node.hash !== "f67468c9ce9b8fac6c6eb8a890365e93") {
        console.error("The definition of 'routes_RespondQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("../../__generated__/routes_RespondQuery.graphql");
    },
    cacheConfig: {
      force: true
    }
  }, {
    path: "offer",
    Component: _Offer.OfferFragmentContainer,
    onTransition: _redirects.confirmRouteExit,
    query: function query() {
      var node = require("../../__generated__/routes_OfferQuery.graphql");

      if (node.hash && node.hash !== "47b0104e0c0f10da993b6b594f98fb97") {
        console.error("The definition of 'routes_OfferQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("../../__generated__/routes_OfferQuery.graphql");
    },
    cacheConfig: {
      force: true
    }
  }, {
    path: "shipping",
    Component: _Shipping.ShippingFragmentContainer,
    onTransition: _redirects.confirmRouteExit,
    query: function query() {
      var node = require("../../__generated__/routes_ShippingQuery.graphql");

      if (node.hash && node.hash !== "53cd9bc726864857f7bc43b90bdc4802") {
        console.error("The definition of 'routes_ShippingQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("../../__generated__/routes_ShippingQuery.graphql");
    },
    cacheConfig: {
      force: true
    }
  }, {
    path: "payment",
    Component: _Payment.PaymentFragmentContainer,
    onTransition: _redirects.confirmRouteExit,
    query: function query() {
      var node = require("../../__generated__/routes_PaymentQuery.graphql");

      if (node.hash && node.hash !== "d0ffb34dc45bfb008d9cbcea6fb6b933") {
        console.error("The definition of 'routes_PaymentQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("../../__generated__/routes_PaymentQuery.graphql");
    },
    cacheConfig: {
      force: true
    }
  }, {
    path: "payment/new",
    Component: _NewPayment.NewPaymentFragmentContainer,
    onTransition: _redirects.confirmRouteExit,
    query: function query() {
      var node = require("../../__generated__/routes_NewPaymentQuery.graphql");

      if (node.hash && node.hash !== "72abffa621aadb082575c42d7741c529") {
        console.error("The definition of 'routes_NewPaymentQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("../../__generated__/routes_NewPaymentQuery.graphql");
    },
    cacheConfig: {
      force: true
    }
  }, {
    path: "review/counter",
    Component: _Counter.CounterFragmentContainer,
    onTransition: _redirects.confirmRouteExit,
    query: function query() {
      var node = require("../../__generated__/routes_CounterQuery.graphql");

      if (node.hash && node.hash !== "d82a106fa5e648ecb2113d228af4e62d") {
        console.error("The definition of 'routes_CounterQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("../../__generated__/routes_CounterQuery.graphql");
    },
    cacheConfig: {
      force: true
    }
  }, {
    path: "review",
    Component: _Review.ReviewFragmentContainer,
    onTransition: _redirects.confirmRouteExit,
    query: function query() {
      var node = require("../../__generated__/routes_ReviewQuery.graphql");

      if (node.hash && node.hash !== "bdab5dcf46ca6c0a4fc651874643217a") {
        console.error("The definition of 'routes_ReviewQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("../../__generated__/routes_ReviewQuery.graphql");
    },
    cacheConfig: {
      force: true
    }
  }, {
    path: "review/accept",
    Component: _Accept.AcceptFragmentContainer,
    query: function query() {
      var node = require("../../__generated__/routes_AcceptQuery.graphql");

      if (node.hash && node.hash !== "55d92fa38c8ad80092acf5194d51621f") {
        console.error("The definition of 'routes_AcceptQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("../../__generated__/routes_AcceptQuery.graphql");
    },
    cacheConfig: {
      force: true
    }
  }, {
    path: "review/decline",
    Component: _Reject.RejectFragmentContainer,
    query: function query() {
      var node = require("../../__generated__/routes_RejectQuery.graphql");

      if (node.hash && node.hash !== "3d7f098584ac3a65381161d2542f38f6") {
        console.error("The definition of 'routes_RejectQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("../../__generated__/routes_RejectQuery.graphql");
    }
  }, {
    path: "status",
    Component: _Status.StatusFragmentContainer,
    query: function query() {
      var node = require("../../__generated__/routes_StatusQuery.graphql");

      if (node.hash && node.hash !== "20e0ace33eac225ab7b81e3c814d58f5") {
        console.error("The definition of 'routes_StatusQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("../../__generated__/routes_StatusQuery.graphql");
    },
    cacheConfig: {
      force: true
    }
  }, new _found.Redirect({
    // For now, redirect the empty route to the shipping page
    from: "/",
    to: "/orders/:orderID/shipping"
  }), {
    path: "*",
    Component: function Component(props) {
      return React.createElement(_ErrorPage.ErrorPage, {
        code: 404
      });
    }
  }]
}];
exports.routes = routes;
//# sourceMappingURL=routes.js.map