"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BudgetComponent = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es6.function.bind");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.map");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es7.object.values");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Artsy = require("../../../Artsy");

var _Colors = _interopRequireDefault(require("../../../Assets/Colors"));

var _MultiStateButton = require("../../Buttons/MultiStateButton");

var _Helpers = require("../../Helpers");

var _SelectableToggle = _interopRequireDefault(require("../SelectableToggle"));

var _Layout = require("./Layout");

var _graphql;

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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    margin-bottom: 20px;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OptionsContainer = _styledComponents.default.div.withConfig({
  displayName: "Budget__OptionsContainer",
  componentId: "fej4mt-0"
})(["width:450px;margin:0 auto 100px;&:last-child{border-bottom:1px solid ", ";}", ";"], _Colors.default.grayRegular, _Helpers.media.sm(_templateObject()));

var BudgetComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BudgetComponent, _React$Component);

  function BudgetComponent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BudgetComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BudgetComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "options", {
      "UNDER $500": 500,
      "UNDER $2,500": 2500,
      "UNDER $5,000": 5000,
      "UNDER $10,000": 10000,
      "UNDER $25,000": 25000,
      "UNDER $50,000": 50000,
      "NO BUDGET IN MIND": 1000000000000
    });

    _defineProperty(_assertThisInitialized(_this), "state", {
      selection: null
    });

    _defineProperty(_assertThisInitialized(_this), "onOptionSelected", function (index) {
      var selection = {
        selection: Object.values(_this.options)[index]
      };

      _this.setState(selection);
    });

    return _this;
  }

  _createClass(BudgetComponent, [{
    key: "submit",
    value: function submit() {
      var priceRangeMax = this.state.selection;
      (0, _reactRelay.commitMutation)(this.props.relayEnvironment, {
        mutation: _graphql || (_graphql = function _graphql() {
          var node = require("../../../__generated__/BudgetUpdateMyUserProfileMutation.graphql");

          if (node.hash && node.hash !== "3add187e4e8fcf9910294672b24f47e7") {
            console.error("The definition of 'BudgetUpdateMyUserProfileMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
          }

          return require("../../../__generated__/BudgetUpdateMyUserProfileMutation.graphql");
        }),
        variables: {
          input: {
            price_range_min: -1,
            price_range_max: priceRangeMax
          }
        }
      });
      this.props.onNextButtonPressed();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var options = Object.keys(this.options).map(function (text, index) {
        return _react.default.createElement(_SelectableToggle.default, {
          key: index,
          text: text,
          onSelect: _this2.onOptionSelected.bind(_this2, index),
          selected: _this2.state.selection === _this2.options[text]
        });
      });
      return _react.default.createElement(_Layout.Layout, {
        title: "What\u2019s your maximum artwork budget?",
        subtitle: "Select one",
        onNextButtonPressed: this.state.selection && this.submit.bind(this),
        isLastStep: true,
        buttonState: this.state.selection ? _MultiStateButton.MultiButtonState.Highlighted : _MultiStateButton.MultiButtonState.Default
      }, _react.default.createElement(OptionsContainer, null, options));
    }
  }]);

  return BudgetComponent;
}(_react.default.Component);

exports.BudgetComponent = BudgetComponent;

_defineProperty(BudgetComponent, "slug", "budget");

var Budget = (0, _Artsy.withSystemContext)(BudgetComponent); // tslint:disable:no-string-literal

Budget["slug"] = BudgetComponent.slug;
var _default = Budget;
exports.default = _default;
//# sourceMappingURL=Budget.js.map