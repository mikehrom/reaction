"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShareContainer = exports.Share = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.regexp.match");

require("core-js/modules/es6.function.bind");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _reactTracking = _interopRequireDefault(require("react-tracking"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Events = _interopRequireDefault(require("../../../Utils/Events"));

var _Helpers = require("../../Helpers");

var _IconSocialEmail = require("../Icon/IconSocialEmail");

var _IconSocialFacebook = require("../Icon/IconSocialFacebook");

var _IconSocialTwitter = require("../Icon/IconSocialTwitter");

var _dec, _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["margin-top: 15px;"]);

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

var Share = (_dec = (0, _reactTracking.default)(function (props) {
  return props.trackingData ? props.trackingData : {};
}, {
  dispatch: function dispatch(data) {
    return _Events.default.postEvent(data);
  }
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Share, _React$Component);

  function Share(props) {
    var _this;

    _classCallCheck(this, Share);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Share).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getIcon", function (type) {
      var color = _this.props.color;

      var icon = function icon(service) {
        switch (service) {
          case "email":
            {
              return _react.default.createElement(_IconSocialEmail.IconSocialEmail, {
                color: color
              });
            }

          case "facebook":
            {
              return _react.default.createElement(_IconSocialFacebook.IconSocialFacebook, {
                color: color
              });
            }

          case "twitter":
            {
              return _react.default.createElement(_IconSocialTwitter.IconSocialTwitter, {
                color: color
              });
            }

          default:
            {
              break;
            }
        }
      };

      return _react.default.createElement(IconWrapper, {
        href: _this.getHref(type),
        target: "_blank",
        onClick: _this.trackShare
      }, icon(type));
    });

    _this.getHref = _this.getHref.bind(_assertThisInitialized(_this));
    _this.trackShare = _this.trackShare.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Share, [{
    key: "trackShare",
    value: function trackShare(e) {
      e.preventDefault();
      window.open(e.currentTarget.attributes.href.value, "Share", "width = 600,height = 300");
      this.props.tracking.trackEvent({
        action: "Click",
        type: "share",
        label: function () {
          var href = e.currentTarget.attributes.href.value;
          if (href.match("facebook")) return "facebook";
          if (href.match("twitter")) return "twitter";
          if (href.match("mailto")) return "email";
        }()
      });
    }
  }, {
    key: "getHref",
    value: function getHref(type) {
      var _this$props = this.props,
          url = _this$props.url,
          title = _this$props.title;
      var encodedUrl = encodeURIComponent(url);
      var channels = {
        facebook: "https://www.facebook.com/sharer/sharer.php?u=".concat(encodedUrl),
        twitter: "https://twitter.com/intent/tweet?original_referer=".concat(encodedUrl, "&text=").concat(title, "&url=").concat(encodedUrl, "&via=artsy"),
        email: "mailto:?subject=".concat(title, "&body=Check out ").concat(title, " on Artsy: ").concat(url)
      };
      return channels[type];
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          hasLabel = _this$props2.hasLabel,
          isMobile = _this$props2.isMobile,
          isNews = _this$props2.isNews;
      return _react.default.createElement(ShareContainer, {
        removeMarginForMobile: isNews && isMobile
      }, hasLabel && _react.default.createElement(ShareLabel, {
        size: "3t",
        weight: "medium"
      }, "Share"), this.getIcon("facebook"), this.getIcon("twitter"), this.getIcon("email"));
    }
  }]);

  return Share;
}(_react.default.Component), _defineProperty(_class2, "defaultProps", {
  color: "black",
  hasLabel: false
}), _temp)) || _class);
exports.Share = Share;

var ShareContainer = _styledComponents.default.div.attrs({}).withConfig({
  displayName: "Share__ShareContainer",
  componentId: "sc-1y1t686-0"
})(["display:flex;align-items:center;white-space:nowrap;line-height:1em;margin-top:5px;", ";"], function (props) {
  return props.removeMarginForMobile && _Helpers.pMedia.xs(_templateObject());
});

exports.ShareContainer = ShareContainer;

var IconWrapper = _styledComponents.default.a.withConfig({
  displayName: "Share__IconWrapper",
  componentId: "sc-1y1t686-1"
})(["text-decoration:none;padding-left:7px;padding-right:7px;&:hover{opacity:0.6;}&:first-child{padding-left:0;}"]);

var ShareLabel = (0, _styledComponents.default)(_palette.Sans).withConfig({
  displayName: "Share__ShareLabel",
  componentId: "sc-1y1t686-2"
})(["margin:5px 10px 5px 0;"]);
//# sourceMappingURL=Share.js.map