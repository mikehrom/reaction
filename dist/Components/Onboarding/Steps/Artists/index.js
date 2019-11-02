"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.function.bind");

var _throttle2 = _interopRequireDefault(require("lodash/throttle"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../../../Assets/Colors"));

var _Input = _interopRequireDefault(require("../../../Input"));

var _MultiStateButton = require("../../../Buttons/MultiStateButton");

var _Helpers = require("../../../Helpers");

var _Layout = require("../Layout");

var _ArtistList = _interopRequireDefault(require("./ArtistList"));

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

var OnboardingSearchBox = _styledComponents.default.div.withConfig({
  displayName: "Artists__OnboardingSearchBox",
  componentId: "sc-1f4j1ek-0"
})(["width:450px;margin:0 auto 100px;border-bottom:1px solid ", ";", ";"], _Colors.default.grayRegular, _Helpers.media.sm(_templateObject()));

var Artists =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Artists, _React$Component);

  function Artists() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Artists);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Artists)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      inputText: "",
      inputTextQuery: "",
      followCount: 0
    });

    _defineProperty(_assertThisInitialized(_this), "searchTextChanged", function (e) {
      var updatedInputText = e.target.value;

      _this.setState({
        inputText: updatedInputText
      });

      _this.throttledTextChange(updatedInputText);
    });

    _defineProperty(_assertThisInitialized(_this), "throttledTextChange", function (inputText) {
      _this.setState({
        inputTextQuery: inputText
      });
    });

    return _this;
  }

  _createClass(Artists, [{
    key: "updateFollowCount",
    value: function updateFollowCount(count) {
      var updatedFollowCount = this.state.followCount + count;
      this.setState({
        followCount: updatedFollowCount
      });
    }
  }, {
    key: "submit",
    value: function submit() {
      var increaseBy = this.state.followCount >= 4 ? 2 : 1;
      this.props.onNextButtonPressed(increaseBy);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.throttledTextChange = (0, _throttle2.default)(this.throttledTextChange, 500, {
        leading: true
      });
    }
  }, {
    key: "clearSearch",
    value: function clearSearch(e) {
      this.setState({
        inputText: "",
        inputTextQuery: ""
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_Layout.Layout, {
        title: "Who are your favorite artists?",
        subtitle: "Follow one or more",
        onNextButtonPressed: this.submit.bind(this),
        buttonState: this.state.followCount > 0 ? _MultiStateButton.MultiButtonState.Highlighted : _MultiStateButton.MultiButtonState.Default
      }, _react.default.createElement(OnboardingSearchBox, null, _react.default.createElement(_Input.default, {
        placeholder: "Search artists...",
        block: true,
        onInput: this.searchTextChanged.bind(this),
        onPaste: this.searchTextChanged.bind(this),
        onCut: this.searchTextChanged.bind(this),
        autoFocus: true
      }), _react.default.createElement("div", {
        style: {
          marginBottom: "35px"
        }
      }), _react.default.createElement(_ArtistList.default, {
        searchQuery: this.state.inputTextQuery,
        updateFollowCount: this.updateFollowCount.bind(this)
      })));
    }
  }]);

  return Artists;
}(_react.default.Component);

exports.default = Artists;

_defineProperty(Artists, "slug", "artists");
//# sourceMappingURL=index.js.map