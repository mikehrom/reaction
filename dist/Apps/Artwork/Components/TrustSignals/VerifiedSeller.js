"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerifiedSellerFragmentContainer = exports.VerifiedSeller = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.function.name");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _TrustSignal = require("./TrustSignal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var VerifiedSeller = function VerifiedSeller(_ref) {
  var artwork = _ref.artwork,
      other = _objectWithoutProperties(_ref, ["artwork"]);

  return !artwork.is_biddable && artwork.partner && artwork.partner.isVerifiedSeller && _react.default.createElement(_TrustSignal.TrustSignal, _extends({
    Icon: _react.default.createElement(_palette.VerifiedIcon, null),
    label: "Verified seller",
    description: "".concat(artwork.partner.name, " is a verified Artsy partner.")
  }, other));
};

exports.VerifiedSeller = VerifiedSeller;
var VerifiedSellerFragmentContainer = (0, _reactRelay.createFragmentContainer)(VerifiedSeller, {
  artwork: function artwork() {
    var node = require("../../../../__generated__/VerifiedSeller_artwork.graphql");

    if (node.hash && node.hash !== "5037e65d788b7be2400c0a017b8257e6") {
      console.error("The definition of 'VerifiedSeller_artwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/VerifiedSeller_artwork.graphql");
  }
});
exports.VerifiedSellerFragmentContainer = VerifiedSellerFragmentContainer;
//# sourceMappingURL=VerifiedSeller.js.map