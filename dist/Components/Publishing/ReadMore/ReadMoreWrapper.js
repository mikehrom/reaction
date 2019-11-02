"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReadMoreWrapper = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

var _find2 = _interopRequireDefault(require("lodash/find"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

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

/**
 * @deprecated in favor of our Design System ReadMore component in @artsy/palette
 * https://palette.artsy.net/elements/layout/readmore
 */
var ReadMoreWrapper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ReadMoreWrapper, _React$Component);

  function ReadMoreWrapper() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ReadMoreWrapper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ReadMoreWrapper)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      truncationHeight: "100%"
    });

    _defineProperty(_assertThisInitialized(_this), "truncateArticle", function () {
      if (_this.props.isTruncated) {
        _this.setState({
          truncationHeight: _this.calculateTruncationHeight()
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "calculateTruncationHeight", function () {
      var isTruncated = _this.props.isTruncated;

      if (isTruncated) {
        var height = 0;
        var charCount = 0;

        var thisNode = _reactDom.default.findDOMNode(_assertThisInitialized(_this)); // Iterate over text sections


        (0, _find2.default)(thisNode.getElementsByClassName("article__text-section"), function (section) {
          var sectionCharCount = 0; // Iterate over paragraph tags

          var tags = section.getElementsByClassName("paragraph").length ? section.getElementsByClassName("paragraph") : section.getElementsByTagName("p");
          var foundTag = (0, _find2.default)(tags, function (tag) {
            var textContent = tag.textContent;
            var textLength = textContent.length; // Update counts

            sectionCharCount = sectionCharCount + textLength;
            charCount = charCount + textLength; // Check if we've exceeded limits

            if (textContent && sectionCharCount > 150 && charCount > 2000) {
              height = tag.getBoundingClientRect().bottom - thisNode.getBoundingClientRect().top;
              return true;
            }

            return false;
          });
          return foundTag ? true : false;
        }); // Return found height or remove truncation if article is too short

        if (height) {
          return height;
        } else {
          _this.props.hideButton();

          return "100%";
        }
      } else {
        return "100%";
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getTruncationHeight", function () {
      return _this.props.isTruncated ? _this.state.truncationHeight : "100%";
    });

    _defineProperty(_assertThisInitialized(_this), "getOverflow", function () {
      return _this.props.isTruncated ? "hidden" : "auto";
    });

    return _this;
  }

  _createClass(ReadMoreWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      setTimeout(this.truncateArticle, 250);
      window.addEventListener("resize", this.truncateArticle);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.truncateArticle);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        style: {
          height: this.getTruncationHeight(),
          overflow: this.getOverflow()
        }
      }, this.props.children);
    }
  }]);

  return ReadMoreWrapper;
}(_react.default.Component);

exports.ReadMoreWrapper = ReadMoreWrapper;
//# sourceMappingURL=ReadMoreWrapper.js.map