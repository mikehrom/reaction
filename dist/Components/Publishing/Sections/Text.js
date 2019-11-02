"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.regexp.replace");

var _startsWith2 = _interopRequireDefault(require("lodash/startsWith"));

var _reactHtmlParser = _interopRequireWildcard(require("@artsy/react-html-parser"));

var _react = _interopRequireWildcard(require("react"));

var _get = require("../../../Utils/get");

var _StyledText = require("./StyledText");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var Text =
/*#__PURE__*/
function (_Component) {
  _inherits(Text, _Component);

  function Text() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Text);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Text)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      html: _this.props.html || ""
    });

    _defineProperty(_assertThisInitialized(_this), "htmlMaybeWithContentEnd", function () {
      var html = _this.state.html;
      var isContentEnd = _this.props.isContentEnd; // Remove existing spans - TODO: Backfill out of articles

      var cleanedHtml = html.replace("<span class='content-end'> </span>", "");

      if (isContentEnd) {
        var doc = document.createElement("div");
        doc.innerHTML = cleanedHtml;
        var paragraphs = doc.getElementsByTagName("P");
        var lastParagraph = paragraphs.length && paragraphs[paragraphs.length - 1];

        if (lastParagraph) {
          // insert content-end in last paragraph
          lastParagraph.innerHTML = lastParagraph.innerHTML + "<span class='content-end'> </span>";
        }

        return doc.innerHTML;
      }

      return cleanedHtml;
    });

    _defineProperty(_assertThisInitialized(_this), "shouldShowTooltipForURL", function (node) {
      var urlBase = "https://www.artsy.net/";
      var types = ["artist/", "gene/"];

      for (var _i = 0; _i < types.length; _i++) {
        var type = types[_i];

        if ((0, _startsWith2.default)(node.getAttribute("href"), urlBase + type)) {
          return true;
        }
      }

      return false;
    });

    _defineProperty(_assertThisInitialized(_this), "transformNode", function (node, index) {
      var color = _this.props.color; // Dont include relay components unless necessary
      // To avoid 'regeneratorRuntime' error

      var LinkWithTooltip = require("../ToolTip/LinkWithTooltip").default;

      if (node.tagName === "P") {
        var newNode = node.ownerDocument.createElement("div");
        newNode.setAttribute("class", "paragraph");
        Array.from(node.childNodes).forEach(function (child) {
          return newNode.appendChild(child);
        });
        return (0, _reactHtmlParser.convertNodeToElement)(newNode, index, _this.transformNode);
      }

      if (node.tagName === "A" && _this.shouldShowTooltipForURL(node)) {
        var href = node.getAttribute("href");
        var linkNode = node.childNodes[0];

        if (linkNode && linkNode.textContent) {
          var props = {
            key: href + index,
            url: href,
            color: color
          };
          var next = node.nextSibling;
          var text = linkNode.textContent; // Check to see if there's an apostrophe following a linked section of
          // text and if found, return it.

          var apostrophe = (0, _get.get)(next, function (n) {
            var str = n.textContent.substr(0, 2);

            if (/[’'][a-zA-Z]/.test(str)) {
              return str;
            }
          });

          if (apostrophe) {
            // Remove the apostrophe from the original text
            next.textContent = next.textContent.substring(2); // And wrap the whole thing with a span preventing whitespace breaks

            return _react.default.createElement("span", {
              className: "preventLineBreak",
              key: "apostropheLinkNode-".concat(props.key)
            }, _react.default.createElement(LinkWithTooltip, props, text), apostrophe);
          }

          return _react.default.createElement(LinkWithTooltip, props, text);
        }
      }
    });

    return _this;
  }

  _createClass(Text, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var html = this.htmlMaybeWithContentEnd();
      this.setState({
        html: html
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          color = _this$props.color,
          isContentStart = _this$props.isContentStart,
          layout = _this$props.layout,
          postscript = _this$props.postscript,
          showTooltips = _this$props.showTooltips;
      var html = this.state.html;
      return _react.default.createElement(_StyledText.StyledText, {
        className: "article__text-section",
        color: color,
        isContentStart: isContentStart,
        layout: layout,
        postscript: postscript,
        showTooltips: showTooltips
      }, html.length ? showTooltips ? _react.default.createElement("div", null, (0, _reactHtmlParser.default)(html, {
        transform: this.transformNode
      })) : _react.default.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: html
        }
      }) : children);
    }
  }]);

  return Text;
}(_react.Component);

exports.Text = Text;

_defineProperty(Text, "defaultProps", {
  color: "black",
  showTooltips: false
});
//# sourceMappingURL=Text.js.map