"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SocialEmbed = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es6.regexp.match");

require("isomorphic-fetch");

var _jsonp = _interopRequireDefault(require("jsonp"));

var _react = _interopRequireDefault(require("react"));

var _reactOembedContainer = _interopRequireDefault(require("react-oembed-container"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

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

var TWITTER_EMBED_URL = "https://publish.twitter.com/oembed";
var INSTAGRAM_EMBED_URL = "https://api.instagram.com/oembed";

var SocialEmbed =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SocialEmbed, _React$Component);

  function SocialEmbed() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SocialEmbed);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SocialEmbed)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      html: ""
    });

    _defineProperty(_assertThisInitialized(_this), "getTwitterEmbed", function (url) {
      (0, _jsonp.default)(url, function (err, data) {
        if (err) {
          return;
        }

        _this.setState({
          html: data.html
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getInstagramEmbed", function (url) {
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this.setState({
          html: data.html
        });
      }).catch(function (err) {
        console.log(err);
        return;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getEmbedUrl", function () {
      var url = _this.props.section.url;

      if (url.match("twitter")) {
        return TWITTER_EMBED_URL + "?url=".concat(url);
      } else if (url.match("insta")) {
        return INSTAGRAM_EMBED_URL + "?url=".concat(url);
      }
    });

    return _this;
  }

  _createClass(SocialEmbed, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var url = this.getEmbedUrl();

      if (url) {
        if (url.includes("instagram")) {
          this.getInstagramEmbed(url);
        } else {
          this.getTwitterEmbed(url);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var html = this.state.html;

      if (html) {
        return _react.default.createElement(StyledEmbedContainer, {
          markup: html
        }, _react.default.createElement("div", {
          dangerouslySetInnerHTML: {
            __html: html
          }
        }));
      } else {
        return false;
      }
    }
  }]);

  return SocialEmbed;
}(_react.default.Component);

exports.SocialEmbed = SocialEmbed;
var StyledEmbedContainer = (0, _styledComponents.default)(_reactOembedContainer.default).withConfig({
  displayName: "SocialEmbed__StyledEmbedContainer",
  componentId: "sc-12g2ulj-0"
})(["width:100%;max-width:560px;margin:auto;twitterwidget{margin-left:auto;margin-right:auto;}"]);
//# sourceMappingURL=SocialEmbed.js.map