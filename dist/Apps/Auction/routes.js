"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

var _ErrorPage = require("../../Components/ErrorPage");

var _found = require("found");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _logger = _interopRequireDefault(require("../../Utils/logger"));

var _AuctionFAQ = require("./Components/AuctionFAQ");

var _getRedirect = require("./getRedirect");

var _ConfirmBid = require("./Routes/ConfirmBid");

var _Register = require("./Routes/Register");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _logger.default)("Apps/Auction/routes");
var routes = [{
  path: "/auction-faq",
  Component: _AuctionFAQ.AuctionFAQQueryRenderer
}, {
  path: "/auction/:saleID/bid(2)?/:artworkID",
  Component: _ConfirmBid.ConfirmBidRouteFragmentContainer,
  render: function render(_ref) {
    var Component = _ref.Component,
        props = _ref.props;

    if (Component && props) {
      var _ref2 = props,
          artwork = _ref2.artwork,
          me = _ref2.me,
          location = _ref2.location;

      if (!artwork) {
        return _react.default.createElement(_ErrorPage.ErrorPage, {
          code: 404
        });
      }

      handleRedirect((0, _getRedirect.confirmBidRedirect)({
        artwork: artwork,
        me: me
      }, location), location);
      return _react.default.createElement(Component, props);
    }
  },
  query: function query() {
    var node = require("../../__generated__/routes_ConfirmBidQuery.graphql");

    if (node.hash && node.hash !== "3bf3d8492b0a9d727ae41b71a8b75416") {
      console.error("The definition of 'routes_ConfirmBidQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/routes_ConfirmBidQuery.graphql");
  }
}, {
  path: "/auction-registration(2)?/:saleID",
  Component: _Register.RegisterRouteFragmentContainer,
  render: function render(_ref3) {
    var Component = _ref3.Component,
        props = _ref3.props;

    if (Component && props) {
      var _ref4 = props,
          location = _ref4.location,
          sale = _ref4.sale,
          me = _ref4.me;

      if (!sale) {
        return _react.default.createElement(_ErrorPage.ErrorPage, {
          code: 404
        });
      }

      handleRedirect((0, _getRedirect.registerRedirect)({
        sale: sale,
        me: me
      }), location);
      return _react.default.createElement(Component, props);
    }
  },
  query: function query() {
    var node = require("../../__generated__/routes_RegisterQuery.graphql");

    if (node.hash && node.hash !== "8d974f73f8bdb31b5616a8c45ce626be") {
      console.error("The definition of 'routes_RegisterQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/routes_RegisterQuery.graphql");
  }
}];
exports.routes = routes;

function handleRedirect(redirect, location) {
  if (redirect) {
    logger.warn("Redirecting from ".concat(location.pathname, " to ").concat(redirect.path, " because '").concat(redirect.reason, "'"));
    throw new _found.RedirectException(redirect.path);
  }
}
//# sourceMappingURL=routes.js.map