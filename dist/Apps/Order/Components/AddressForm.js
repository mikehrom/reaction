"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddressForm = exports.emptyAddress = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.object.freeze");

var _palette = require("@artsy/palette");

var _Input = _interopRequireDefault(require("../../../Components/Input"));

var _v = require("../../../Components/v2");

var _react = _interopRequireDefault(require("react"));

var _TwoColumnLayout = require("./TwoColumnLayout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var emptyAddress = Object.freeze({
  name: "",
  country: "",
  postalCode: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  region: "",
  phoneNumber: ""
});
exports.emptyAddress = emptyAddress;

var AddressForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AddressForm, _React$Component);

  function AddressForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AddressForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AddressForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      address: _objectSpread({}, emptyAddress, _this.props.value)
    });

    _defineProperty(_assertThisInitialized(_this), "changeEventHandler", function (key) {
      return function (ev) {
        _this.onChangeValue(key, ev.currentTarget.value);
      };
    });

    _defineProperty(_assertThisInitialized(_this), "changeValueHandler", function (key) {
      return function (value) {
        _this.onChangeValue(key, value);
      };
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeValue", function (key, value) {
      _this.setState({
        address: _objectSpread({}, _this.state.address, _defineProperty({}, key, value))
      }, function () {
        _this.props.onChange(_this.state.address, key);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getError", function (key) {
      return _this.props.touched && _this.props.touched[key] && _this.props.errors && _this.props.errors[key] || "";
    });

    _defineProperty(_assertThisInitialized(_this), "phoneNumberInputDescription", function () {
      if (_this.props.billing && _this.props.showPhoneNumberInput) {
        return null;
      } else {
        return "Required for shipping logistics";
      }
    });

    return _this;
  }

  _createClass(AddressForm, [{
    key: "render",
    value: function render() {
      var lockCountryToOrigin = !this.props.billing && this.props.domesticOnly;
      return _react.default.createElement(_palette.Join, {
        separator: _react.default.createElement(_palette.Spacer, {
          mb: 2
        })
      }, _react.default.createElement(_palette.Flex, {
        flexDirection: "column"
      }, _react.default.createElement(_Input.default, {
        id: "AddressForm_name",
        placeholder: "Add full name",
        title: this.props.billing ? "Name on card" : "Full name",
        autoCapitalize: "words",
        autoCorrect: "off",
        value: this.props.value.name,
        onChange: this.changeEventHandler("name"),
        error: this.getError("name"),
        block: true
      })), _react.default.createElement(_TwoColumnLayout.TwoColumnSplit, null, _react.default.createElement(_palette.Flex, {
        flexDirection: "column",
        pb: 1
      }, _react.default.createElement(_palette.Serif, {
        mb: 1,
        size: "3t",
        color: "black100",
        lineHeight: "1.1em"
      }, "Country"), _react.default.createElement(_v.CountrySelect, {
        selected: lockCountryToOrigin ? this.props.shippingCountry : this.state.address.country,
        onSelect: this.changeValueHandler("country"),
        disabled: lockCountryToOrigin
      }), lockCountryToOrigin && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Spacer, {
        m: 0.5
      }), _react.default.createElement(_palette.Sans, {
        size: "2",
        color: "black60"
      }, "Domestic shipping only."))), _react.default.createElement(_palette.Flex, {
        flexDirection: "column"
      }, _react.default.createElement(_Input.default, {
        id: "AddressForm_postalCode",
        placeholder: "Add postal code",
        title: "Postal code",
        autoCapitalize: "characters",
        autoCorrect: "off",
        value: this.props.value.postalCode,
        onChange: this.changeEventHandler("postalCode"),
        error: this.getError("postalCode"),
        block: true
      }))), _react.default.createElement(_TwoColumnLayout.TwoColumnSplit, null, _react.default.createElement(_palette.Flex, {
        flexDirection: "column"
      }, _react.default.createElement(_Input.default, {
        id: "AddressForm_addressLine1",
        placeholder: "Add street address",
        title: "Address line 1",
        autoCapitalize: "words",
        value: this.props.value.addressLine1,
        onChange: this.changeEventHandler("addressLine1"),
        error: this.getError("addressLine1"),
        block: true
      })), _react.default.createElement(_palette.Flex, {
        flexDirection: "column"
      }, _react.default.createElement(_Input.default, {
        id: "AddressForm_addressLine2",
        placeholder: "Add apt, floor, suite, etc.",
        title: "Address line 2 (optional)",
        autoCapitalize: "words",
        value: this.props.value.addressLine2,
        onChange: this.changeEventHandler("addressLine2"),
        error: this.getError("addressLine2"),
        block: true
      }))), _react.default.createElement(_TwoColumnLayout.TwoColumnSplit, null, _react.default.createElement(_palette.Flex, {
        flexDirection: "column"
      }, _react.default.createElement(_Input.default, {
        id: "AddressForm_city",
        placeholder: "Add city",
        title: "City",
        autoCapitalize: "words",
        value: this.props.value.city,
        onChange: this.changeEventHandler("city"),
        error: this.getError("city"),
        block: true
      })), _react.default.createElement(_palette.Flex, {
        flexDirection: "column"
      }, _react.default.createElement(_Input.default, {
        id: "AddressForm_region",
        placeholder: "Add State, province, or region",
        title: "State, province, or region",
        autoCapitalize: "words",
        autoCorrect: "off",
        value: this.props.value.region,
        onChange: this.changeEventHandler("region"),
        error: this.getError("region"),
        block: true
      }))), (!this.props.billing || this.props.showPhoneNumberInput) && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Flex, {
        flexDirection: "column"
      }, _react.default.createElement(_Input.default, {
        id: "AddressForm_phoneNumber",
        title: "Phone number",
        type: "tel",
        description: this.phoneNumberInputDescription(),
        placeholder: "Add phone",
        pattern: "[^a-z]+",
        value: this.props.value.phoneNumber,
        onChange: this.changeEventHandler("phoneNumber"),
        error: this.getError("phoneNumber"),
        block: true
      })), _react.default.createElement(_palette.Spacer, {
        mb: 2
      })));
    }
  }]);

  return AddressForm;
}(_react.default.Component);

exports.AddressForm = AddressForm;
//# sourceMappingURL=AddressForm.js.map