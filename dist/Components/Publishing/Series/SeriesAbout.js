"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SeriesAboutContainer = exports.SeriesAbout = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

var _palette = require("@artsy/palette");

var _react = _interopRequireWildcard(require("react"));

var _reactTracking = _interopRequireDefault(require("react-tracking"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Share = require("../Byline/Share");

var _PartnerBlock = require("../Partner/PartnerBlock");

var _Text = require("../Sections/Text");

var _Responsive = require("../../../Utils/Responsive");

var _Constants = require("../Constants");

var _dec, _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var SeriesAbout = (_dec = (0, _reactTracking.default)(), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(SeriesAbout, _Component);

  function SeriesAbout() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SeriesAbout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SeriesAbout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onClickFooterLink", function (event) {
      _this.props.tracking.trackEvent({
        action: "Click",
        flow: "Partner Footer CTA",
        type: "external_link",
        destination_path: event.currentTarget.href
      });
    });

    _defineProperty(_assertThisInitialized(_this), "partnerBlock", function () {
      var _this$props = _this.props,
          sponsor = _this$props.article.sponsor,
          color = _this$props.color;
      var sponsorLogo = sponsor && (color === "white" ? sponsor.partner_light_logo : sponsor.partner_dark_logo);
      return _react.default.createElement(_PartnerBlock.PartnerBlock, {
        logo: sponsorLogo,
        url: sponsor.partner_logo_link,
        trackingData: {
          type: "external link",
          destination_path: sponsor.partner_logo_link
        }
      });
    });

    return _this;
  }

  _createClass(SeriesAbout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var textLink = document.querySelector(".SeriesAbout__description a");

      if (textLink) {
        textLink.addEventListener("click", this.onClickFooterLink);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          _this$props2$article = _this$props2.article,
          series = _this$props2$article.series,
          slug = _this$props2$article.slug,
          social_title = _this$props2$article.social_title,
          sponsor = _this$props2$article.sponsor,
          thumbnail_title = _this$props2$article.thumbnail_title,
          color = _this$props2.color,
          editDescription = _this$props2.editDescription,
          editSubTitle = _this$props2.editSubTitle;
      return _react.default.createElement(SeriesAboutContainer, {
        color: color,
        maxWidth: "1200px",
        mx: "auto",
        width: "100%",
        flexDirection: ["column", "column", "row", "row"]
      }, _react.default.createElement(_palette.Flex, {
        width: [1, 1, 1 / 3, 1 / 3],
        justifyContent: "space-between",
        flexDirection: "column"
      }, _react.default.createElement("div", null, _react.default.createElement(_palette.Sans, {
        size: "8",
        mb: ["10px", "10px", 20, 20],
        color: color
      }, editSubTitle ? editSubTitle : series && series.sub_title || "About the Series"), _react.default.createElement(_palette.Sans, {
        size: "5",
        mb: ["20px", "20px", 0, 0]
      }, _react.default.createElement(_Share.Share, {
        url: (0, _Constants.getArticleFullHref)(slug),
        title: social_title || thumbnail_title,
        color: color
      }))), _react.default.createElement(_Responsive.Media, {
        greaterThanOrEqual: "md"
      }, sponsor && _react.default.createElement(_palette.Box, {
        mb: 1
      }, this.partnerBlock()))), _react.default.createElement(_palette.Flex, {
        width: [1, 1, 2 / 3, 2 / 3],
        flexDirection: "column"
      }, editDescription ? _react.default.createElement(_Text.Text, {
        layout: "standard",
        color: color
      }, editDescription) : _react.default.createElement("div", {
        className: "SeriesAbout__description"
      }, _react.default.createElement(_Text.Text, {
        layout: "standard",
        color: color,
        html: series && series.description
      })), _react.default.createElement(_Responsive.Media, {
        lessThan: "md"
      }, sponsor && _react.default.createElement(_palette.Box, {
        mt: 60
      }, this.partnerBlock()))));
    }
  }]);

  return SeriesAbout;
}(_react.Component), _defineProperty(_class2, "defaultProps", {
  color: "black"
}), _temp)) || _class);
exports.SeriesAbout = SeriesAbout;
var SeriesAboutContainer = (0, _styledComponents.default)(_palette.Flex).withConfig({
  displayName: "SeriesAbout__SeriesAboutContainer",
  componentId: "sc-1xh0wwc-0"
})([""]);
exports.SeriesAboutContainer = SeriesAboutContainer;
//# sourceMappingURL=SeriesAbout.js.map