"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShippingAddressFragmentContainer = exports.ShippingAddress = void 0;

require("core-js/modules/es6.string.trim");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.function.name");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _v = require("../../../Components/v2");

var _reactRelay = require("react-relay");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShippingAddress = function ShippingAddress(_ref) {
  var _ref$ship = _ref.ship,
      name = _ref$ship.name,
      addressLine1 = _ref$ship.addressLine1,
      addressLine2 = _ref$ship.addressLine2,
      city = _ref$ship.city,
      region = _ref$ship.region,
      postalCode = _ref$ship.postalCode,
      country = _ref$ship.country,
      phoneNumber = _ref$ship.phoneNumber;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Serif, {
    size: ["2", "3t"]
  }, name), _react.default.createElement(_palette.Serif, {
    size: ["2", "3t"]
  }, [addressLine1, (addressLine2 || "").trim()].filter(Boolean).join(", ")), _react.default.createElement(_palette.Serif, {
    size: ["2", "3t"]
  }, city, ", ", region, " ", postalCode), _react.default.createElement(_palette.Serif, {
    size: ["2", "3t"]
  }, _v.COUNTRY_CODE_TO_COUNTRY_NAME[country] || country), phoneNumber && _react.default.createElement(_palette.Serif, {
    size: ["2", "3t"]
  }, phoneNumber));
};

exports.ShippingAddress = ShippingAddress;
var ShippingAddressFragmentContainer = (0, _reactRelay.createFragmentContainer)(ShippingAddress, {
  ship: function ship() {
    var node = require("../../../__generated__/ShippingAddress_ship.graphql");

    if (node.hash && node.hash !== "965be360f1c02f1cf98d179dda1e2df4") {
      console.error("The definition of 'ShippingAddress_ship' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../__generated__/ShippingAddress_ship.graphql");
  }
});
exports.ShippingAddressFragmentContainer = ShippingAddressFragmentContainer;
//# sourceMappingURL=ShippingAddress.js.map