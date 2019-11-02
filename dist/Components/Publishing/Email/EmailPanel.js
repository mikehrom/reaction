"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmailPanel = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.regexp.match");

var _Fonts = require("../../../Assets/Fonts");

var _react = _interopRequireDefault(require("react"));

var _reactTracking = _interopRequireDefault(require("react-tracking"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _superagent = _interopRequireDefault(require("superagent"));

var _Colors = _interopRequireDefault(require("../../../Assets/Colors"));

var _Events = _interopRequireDefault(require("../../../Utils/Events"));

var _Inverted = _interopRequireDefault(require("../../Buttons/Inverted"));

var _Mixins = require("../../Mixins");

var _Constants = require("../Constants");

var _dec, _class, _temp;

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

var EmailPanel = (_dec = (0, _reactTracking.default)({
  page: "Article"
}, {
  dispatch: function dispatch(data) {
    return _Events.default.postEvent(data);
  }
}), _dec(_class = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EmailPanel, _React$Component);

  function EmailPanel() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EmailPanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EmailPanel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      value: "",
      error: false,
      submitted: false,
      disabled: false,
      message: ""
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function () {
      _this.setState({
        disabled: true
      });

      if (_this.state.value.match(_Constants.EMAIL_REGEX)) {
        _superagent.default.post(_this.props.signupUrl).send({
          email: _this.state.value
        }).set("accept", "json").end(function (err, res) {
          if (err) {
            _this.flashMessage("Error. Please try again", true, false);
          } else {
            _this.flashMessage("Thank you!", false, true);

            _this.props.tracking.trackEvent({
              action: "Sign up for editorial email",
              context_type: "article_fixed"
            });
          }
        });
      } else {
        _this.flashMessage("Invalid Email... Please try again", true, false);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "flashMessage", function (message, error, submitted) {
      _this.setState({
        message: message,
        error: error
      });

      setTimeout(function () {
        _this.setState({
          message: "",
          disabled: false,
          error: false,
          submitted: submitted
        });
      }, 2000);
    });

    _defineProperty(_assertThisInitialized(_this), "onInputChange", function (e) {
      _this.setState({
        value: e.target.value,
        error: null
      });
    });

    return _this;
  }

  _createClass(EmailPanel, [{
    key: "render",
    value: function render() {
      if (this.state.submitted) {
        return _react.default.createElement("div", null);
      } else {
        return _react.default.createElement(EmailPanelContainer, null, _react.default.createElement(Title, null, "Stay up to date with Artsy Editorial"), _react.default.createElement(Form, null, _react.default.createElement(Input, {
          type: "email",
          placeholder: "Enter Your Email...",
          onChange: this.onInputChange,
          value: this.state.message || this.state.value,
          readOnly: this.state.message.length > 0,
          isError: this.state.error,
          isReadOnly: this.state.message.length > 0
        }), _react.default.createElement(StyledButton, {
          disabled: this.state.disabled,
          onClick: this.onClick
        }, "Subscribe")));
      }
    }
  }]);

  return EmailPanel;
}(_react.default.Component), _temp)) || _class);
exports.EmailPanel = EmailPanel;

var Input = _styledComponents.default.input.withConfig({
  displayName: "EmailPanel__Input",
  componentId: "eeizmd-0"
})(["width:100%;border-width:1px;color:", ";", ";", ";"], function (props) {
  return props.isError ? _Colors.default.redMedium : "black";
}, function (props) {
  return props.isReadOnly ? (0, _Fonts.unica)("s16") : "";
}, _Mixins.borderedInput);

var EmailPanelContainer = _styledComponents.default.div.withConfig({
  displayName: "EmailPanel__EmailPanelContainer",
  componentId: "eeizmd-1"
})(["display:flex;flex-direction:column;max-width:350px;width:100%;"]);

var Title = _styledComponents.default.div.withConfig({
  displayName: "EmailPanel__Title",
  componentId: "eeizmd-2"
})(["", ";margin-bottom:10px;"], (0, _Fonts.unica)("s16", "medium"));

var StyledButton = (0, _styledComponents.default)(_Inverted.default).withConfig({
  displayName: "EmailPanel__StyledButton",
  componentId: "eeizmd-3"
})(["border-radius:2px;height:30px;width:80px;margin-left:-100px;", ";"], (0, _Fonts.avantgarde)("s11"));

var Form = _styledComponents.default.div.withConfig({
  displayName: "EmailPanel__Form",
  componentId: "eeizmd-4"
})(["display:flex;"]);
//# sourceMappingURL=EmailPanel.js.map