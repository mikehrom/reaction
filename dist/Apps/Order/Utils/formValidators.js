"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateAddress = exports.validatePresence = void 0;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.string.trim");

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validatePresence = function validatePresence(value) {
  if (value === undefined || (0, _isEmpty2.default)(value.trim())) {
    return "This field is required";
  }

  return null;
};

exports.validatePresence = validatePresence;

var validateAddress = function validateAddress(address) {
  var name = address.name,
      addressLine1 = address.addressLine1,
      city = address.city,
      region = address.region,
      country = address.country,
      postalCode = address.postalCode;
  var usOrCanada = country === "US" || country === "CA";
  var errors = {
    name: validatePresence(name),
    addressLine1: validatePresence(addressLine1),
    city: validatePresence(city),
    region: usOrCanada && validatePresence(region),
    country: validatePresence(country),
    postalCode: usOrCanada && validatePresence(postalCode)
  };
  var hasErrors = Object.keys(errors).filter(function (key) {
    return errors[key];
  }).length > 0;
  return {
    errors: errors,
    hasErrors: hasErrors
  };
};

exports.validateAddress = validateAddress;
//# sourceMappingURL=formValidators.js.map