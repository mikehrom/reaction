"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CollectorIntentComponent = void 0;

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

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.object.assign");

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
  displayName: "CollectorIntent__OptionsContainer",
  componentId: "sc-2y2pg2-0"
})(["width:450px;margin:0 auto 100px;&:last-child{border-bottom:1px solid ", ";}", ";"], _Colors.default.grayRegular, _Helpers.media.sm(_templateObject()));

var CollectorIntentComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CollectorIntentComponent, _React$Component);

  function CollectorIntentComponent(props) {
    var _this;

    _classCallCheck(this, CollectorIntentComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CollectorIntentComponent).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onOptionSelected", function (index) {
      var selectedOptions = Object.assign({}, _this.state.selectedOptions);
      selectedOptions[index] = !selectedOptions[index];

      _this.setState({
        selectedOptions: selectedOptions
      });
    });

    _this.state = {
      selectedOptions: {}
    };
    return _this;
  }

  _createClass(CollectorIntentComponent, [{
    key: "selectedIntents",
    value: function selectedIntents() {
      var _this2 = this;

      var intents = Object.values(CollectorIntentComponent.intentEnum).filter(function (_, index) {
        return _this2.state.selectedOptions[index];
      });
      return intents;
    }
  }, {
    key: "submit",
    value: function submit() {
      (0, _reactRelay.commitMutation)(this.props.relayEnvironment, {
        mutation: _graphql || (_graphql = function _graphql() {
          var node = require("../../../__generated__/CollectorIntentUpdateCollectorProfileMutation.graphql");

          if (node.hash && node.hash !== "7587732c7a2cfaaf18f92a3330980598") {
            console.error("The definition of 'CollectorIntentUpdateCollectorProfileMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
          }

          return require("../../../__generated__/CollectorIntentUpdateCollectorProfileMutation.graphql");
        }),
        variables: {
          input: {
            intents: this.selectedIntents()
          }
        }
      });
      this.props.onNextButtonPressed();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var options = Object.keys(CollectorIntentComponent.intentEnum).map(function (text, index) {
        return _react.default.createElement(_SelectableToggle.default, {
          key: index,
          text: text,
          onSelect: _this3.onOptionSelected.bind(_this3, index),
          selected: _this3.state.selectedOptions[index]
        });
      });
      return _react.default.createElement(_Layout.Layout, {
        title: "How would you like to use Artsy?",
        subtitle: "Select all that apply",
        onNextButtonPressed: this.submit.bind(this),
        buttonState: this.selectedIntents().length > 0 ? _MultiStateButton.MultiButtonState.Highlighted : _MultiStateButton.MultiButtonState.Default
      }, _react.default.createElement(OptionsContainer, null, options));
    }
  }]);

  return CollectorIntentComponent;
}(_react.default.Component);

exports.CollectorIntentComponent = CollectorIntentComponent;

_defineProperty(CollectorIntentComponent, "slug", "interests");

_defineProperty(CollectorIntentComponent, "intentEnum", {
  "buy art & design": "BUY_ART_AND_DESIGN",
  "sell art & design": "SELL_ART_AND_DESIGN",
  "research art prices": "RESEARCH_ART_PRICES",
  "learn about art": "LEARN_ABOUT_ART",
  "find out about new exhibitions": "FIND_ART_EXHIBITS",
  "read art market news": "READ_ART_MARKET_NEWS"
});

var CollectorIntent = (0, _Artsy.withSystemContext)(CollectorIntentComponent); // tslint:disable:no-string-literal

CollectorIntent["slug"] = CollectorIntentComponent.slug;
var _default = CollectorIntent;
exports.default = _default;
//# sourceMappingURL=CollectorIntent.js.map