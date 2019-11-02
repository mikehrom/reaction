"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InstantArticleEmailSignup = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.regexp.match");

var Fonts = _interopRequireWildcard(require("../../../Assets/Fonts"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _superagent = _interopRequireDefault(require("superagent"));

var _Colors = _interopRequireDefault(require("../../../Assets/Colors"));

var _Inverted = _interopRequireDefault(require("../../Buttons/Inverted"));

var _Mixins = require("../../Mixins");

var _Constants = require("../Constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  width: 100%;\n  border-width: 1px;\n  color: ", ";\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InstantArticleEmailSignup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InstantArticleEmailSignup, _React$Component);

  function InstantArticleEmailSignup(props) {
    var _this;

    _classCallCheck(this, InstantArticleEmailSignup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InstantArticleEmailSignup).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onClick", function () {
      _this.setState({
        disabled: true
      });

      if (_this.state.value.match(_Constants.EMAIL_REGEX)) {
        _superagent.default.post(_this.props.signupUrl).send({
          email: _this.state.value
        }).set("accept", "json").end(function (err, res) {
          if (err) {
            _this.flashMessage("Error. Please try again", true);
          } else {
            _this.flashMessage("Thank you!", false);
          }
        });
      } else {
        _this.flashMessage("Invalid Email... Please try again", true);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "flashMessage", function (message, error) {
      _this.setState({
        message: message,
        error: error
      });

      setTimeout(function () {
        _this.setState({
          message: "",
          disabled: false,
          error: false
        });
      }, 2000);
    });

    _defineProperty(_assertThisInitialized(_this), "onInputChange", function (e) {
      _this.setState({
        value: e.target.value,
        error: null
      });
    });

    _this.state = {
      value: "",
      error: false,
      disabled: false,
      message: ""
    };
    return _this;
  }

  _createClass(InstantArticleEmailSignup, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(InstantArticleEmailContainer, null, _react.default.createElement(Subtitle, null, "The Daily Editorial Newsletter"), _react.default.createElement(Title, null, "The latest art-world news and stories in your inbox"), _react.default.createElement(Form, null, _react.default.createElement(Input, {
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
  }]);

  return InstantArticleEmailSignup;
}(_react.default.Component);

exports.InstantArticleEmailSignup = InstantArticleEmailSignup;
var input = _styledComponents.default.input;
var Input = input(_templateObject(), _Mixins.borderedInput, function (props) {
  return props.isError ? _Colors.default.redMedium : "black";
}, function (props) {
  return props.isReadOnly ? Fonts.unica("s16") : "";
});

var InstantArticleEmailContainer = _styledComponents.default.div.withConfig({
  displayName: "InstantArticleEmailSignup__InstantArticleEmailContainer",
  componentId: "sc-1jwpggg-0"
})(["display:flex;flex-direction:column;max-width:500px;padding:30px 0;margin:0 20px;border-top:1px solid ", ";border-bottom:1px solid ", ";"], _Colors.default.grayRegular, _Colors.default.grayRegular);

var Title = _styledComponents.default.div.withConfig({
  displayName: "InstantArticleEmailSignup__Title",
  componentId: "sc-1jwpggg-1"
})(["", ";margin-bottom:30px;"], Fonts.garamond("s23"));

var Subtitle = _styledComponents.default.div.withConfig({
  displayName: "InstantArticleEmailSignup__Subtitle",
  componentId: "sc-1jwpggg-2"
})(["", ";margin-bottom:10px;"], Fonts.avantgarde("s11"));

var StyledButton = (0, _styledComponents.default)(_Inverted.default).withConfig({
  displayName: "InstantArticleEmailSignup__StyledButton",
  componentId: "sc-1jwpggg-3"
})(["border-radius:2px;height:30px;width:80px;margin-left:-100px;", ";"], Fonts.avantgarde("s11"));

var Form = _styledComponents.default.div.withConfig({
  displayName: "InstantArticleEmailSignup__Form",
  componentId: "sc-1jwpggg-4"
})(["display:flex;"]);
//# sourceMappingURL=InstantArticleEmailSignup.js.map