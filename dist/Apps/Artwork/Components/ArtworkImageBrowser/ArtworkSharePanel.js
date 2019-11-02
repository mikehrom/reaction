"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtworkSharePanelFragmentContainer = exports.ArtworkSharePanel = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es7.object.entries");

require("core-js/modules/es6.array.map");

var _palette = require("@artsy/palette");

var _Icon = _interopRequireDefault(require("../../../../Components/Icon"));

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _sharify = require("sharify");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ArtworkPopoutPanel = require("./ArtworkPopoutPanel");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    font-size: 16px;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MODAL = {
  width: 750,
  height: 400
};
var COPY_LABELS = {
  copy: "Copy",
  copied: "Copied"
};

var ArtworkSharePanel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ArtworkSharePanel, _React$Component);

  function ArtworkSharePanel() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ArtworkSharePanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ArtworkSharePanel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "input", void 0);

    _defineProperty(_assertThisInitialized(_this), "state", {
      copyLabelText: COPY_LABELS.copy,
      copyLocked: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleCopy", function () {
      if (!_this.state.copyLocked) {
        _this.input.focus();

        _this.input.setSelectionRange(0, _this.input.value.length);

        document.execCommand("copy");

        _this.setState({
          copyLabelText: COPY_LABELS.copied,
          copyLocked: true
        }, function () {
          setTimeout(function () {
            _this.setState({
              copyLabelText: COPY_LABELS.copy,
              copyLocked: false
            });
          }, 500);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "openShareModal", function (_ref) {
      var service = _ref.service,
          url = _ref.url;
      return function (event) {
        event.preventDefault(); // Extracted from https://github.com/artsy/force/blob/master/src/desktop/components/share/view.coffee#L19

        var wLeft = window.screenLeft || window.screenX;
        var wTop = window.screenTop || window.screenY;
        var width = MODAL.width;
        var height = MODAL.height;
        var left = wLeft + window.innerWidth / 2 - width / 2 || 0;
        var top = wTop + window.innerHeight / 2 - height / 2 || 0;
        var options = Object.entries({
          status: 1,
          width: width,
          height: height,
          top: top,
          left: left
        }).map(function (_ref2) {
          var _ref3 = _slicedToArray(_ref2, 2),
              key = _ref3[0],
              value = _ref3[1];

          return "".concat(key, "=").concat(value);
        }).join(",");
        window.open(url, service, options);
      };
    });

    return _this;
  }

  _createClass(ArtworkSharePanel, [{
    key: "renderShareButton",
    value: function renderShareButton(_ref4) {
      var service = _ref4.service,
          label = _ref4.label,
          message = _ref4.message,
          url = _ref4.url;
      return _react.default.createElement(_palette.Flex, {
        flexDirection: "row",
        flexBasis: "50%",
        mt: 2,
        onClick: this.openShareModal({
          service: service,
          url: url
        })
      }, _react.default.createElement(_Icon.default, {
        name: service,
        color: "black"
      }), _react.default.createElement(_palette.Sans, {
        size: "3",
        color: "black60"
      }, _react.default.createElement("a", null, label)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$artwork = this.props.artwork,
          href = _this$props$artwork.href,
          share = _this$props$artwork.artworkMeta.share,
          images = _this$props$artwork.images;
      var shareImageUrl = images && images[0].url;
      var url = _sharify.data.APP_URL + href;
      return _react.default.createElement(_ArtworkPopoutPanel.ArtworkPopoutPanel, {
        title: "Share",
        onClose: this.props.onClose
      }, _react.default.createElement(_palette.Flex, {
        flexDirection: "row",
        mb: 1
      }, _react.default.createElement(SansGrow, {
        size: ["3", "2"],
        color: "black60",
        mr: 4
      }, _react.default.createElement(URLInput, {
        type: "text",
        readOnly: true,
        value: url,
        ref: function ref(input) {
          return _this2.input = input;
        },
        onClick: this.handleCopy
      })), _react.default.createElement(_palette.Sans, {
        size: ["3", "2"],
        weight: "medium",
        color: "black60"
      }, _react.default.createElement("a", {
        onClick: this.handleCopy
      }, this.state.copyLabelText))), _react.default.createElement(_palette.Separator, null), _react.default.createElement(_palette.Flex, {
        flexDirection: "row",
        flexWrap: "wrap"
      }, this.renderShareButton({
        service: "facebook",
        label: "Facebook",
        message: "Post to Facebook",
        url: "https://www.facebook.com/sharer/sharer.php?u=".concat(url)
      }), this.renderShareButton({
        service: "twitter",
        label: "Twitter",
        message: "Share on Twitter",
        url: "https://twitter.com/intent/tweet?original_referer=".concat(url, "&text=").concat(share, "&url=").concat(url, "&via=artsy")
      }), _react.default.createElement(_palette.Flex, {
        flexDirection: "row",
        flexBasis: "50%",
        mt: 2
      }, _react.default.createElement(_Icon.default, {
        name: "mail",
        color: "black"
      }), _react.default.createElement(_palette.Sans, {
        size: "3",
        color: "black60"
      }, _react.default.createElement(UnstyledLink, {
        href: "mailto:?subject=".concat(share, "&body=").concat(share, " on Artsy: ").concat(url)
      }, "Mail"))), this.renderShareButton({
        service: "pinterest",
        label: "Pinterest",
        message: "Pin It on Pinterest",
        url: "https://pinterest.com/pin/create/button/?url=".concat(url, "&media=").concat(shareImageUrl, "&description=").concat(share)
      }), this.renderShareButton({
        service: "tumblr",
        label: "Tumblr",
        message: "",
        url: "https://www.tumblr.com/share/photo?source=".concat(shareImageUrl, "&caption=").concat(share, "&clickthru=").concat(url)
      })));
    }
  }]);

  return ArtworkSharePanel;
}(_react.default.Component);

exports.ArtworkSharePanel = ArtworkSharePanel;
var ArtworkSharePanelFragmentContainer = (0, _reactRelay.createFragmentContainer)(ArtworkSharePanel, {
  artwork: function artwork() {
    var node = require("../../../../__generated__/ArtworkSharePanel_artwork.graphql");

    if (node.hash && node.hash !== "1aa535d73c67f2bc420065b91e091f3c") {
      console.error("The definition of 'ArtworkSharePanel_artwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/ArtworkSharePanel_artwork.graphql");
  }
});
exports.ArtworkSharePanelFragmentContainer = ArtworkSharePanelFragmentContainer;
var SansGrow = (0, _styledComponents.default)(_palette.Sans).withConfig({
  displayName: "ArtworkSharePanel__SansGrow",
  componentId: "sc-44k074-0"
})(["display:flex;flex-grow:1;"]);

var URLInput = _styledComponents.default.input.withConfig({
  displayName: "ArtworkSharePanel__URLInput",
  componentId: "sc-44k074-1"
})(["border:0;text-overflow:ellipsis;display:flex;flex-grow:1;color:inherit;font-family:Arial,Helvetica,sans-serif;", ";&:hover{color:", ";}&::selection{color:", ";background:", ";}"], _palette.media.xs(_templateObject()), (0, _palette.color)("black100"), (0, _palette.color)("white100"), (0, _palette.color)("purple100"));

var UnstyledLink = _styledComponents.default.a.withConfig({
  displayName: "ArtworkSharePanel__UnstyledLink",
  componentId: "sc-44k074-2"
})(["text-decoration:none;&:hover{text-decoration:none;}"]);
//# sourceMappingURL=ArtworkSharePanel.js.map