"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuctionCardFragmentContainer = exports.SmallAuctionCard = exports.LargeAuctionCard = exports.AuctionCard = exports.upcomingLabel = exports.relativeTime = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.function.name");

var _palette = require("@artsy/palette");

var _Truncator = require("../Truncator");

var _luxon = require("luxon");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _get = require("../../Utils/get");

var _Responsive = require("../../Utils/Responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var relativeTime = function relativeTime(timeIn, now) {
  var time = _luxon.DateTime.fromISO(timeIn);

  var abs = Math.abs;

  if (abs(time.diff(now).as("days")) >= 1) {
    return "".concat(Math.floor(time.diff(now).as("days")), "d");
  } else if (abs(time.diff(now).as("hours")) >= 1) {
    return "".concat(Math.floor(time.diff(now).as("hours")), "h");
  } else if (abs(time.diff(now).as("minutes")) >= 1) {
    return "".concat(Math.floor(time.diff(now).as("minutes")), "m");
  }

  return "".concat(Math.floor(time.diff(now).as("seconds") % 60), "s");
}; // now defaults to DateTime.local() but can be overriden for unit testing


exports.relativeTime = relativeTime;

var upcomingLabel = function upcomingLabel(sale) {
  var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _luxon.DateTime.local();
  var startAt = sale.start_at,
      endAt = sale.end_at,
      liveStartAt = sale.live_start_at,
      isClosed = sale.is_closed,
      isLiveOpen = sale.is_live_open,
      isPreview = sale.is_preview,
      registrationStatus = sale.registrationStatus,
      isRegistrationClosed = sale.is_registration_closed;
  var isRegistered = !!registrationStatus;
  var isLAI = !!liveStartAt;

  if (isPreview) {
    return "Opens in ".concat(relativeTime(startAt, now));
  } else if (isClosed) {
    return "Auction closed";
  } else if (isLAI) {
    if (isLiveOpen) {
      return "In progress";
    } else if (isRegistered || isRegistrationClosed) {
      return "Live in ".concat(relativeTime(liveStartAt, now));
    } else {
      var dateTime = _luxon.DateTime.fromISO(liveStartAt).setZone("America/New_York");

      return "Register by ".concat(dateTime.monthShort, " ").concat(dateTime.day);
    }
  } else {
    return "Ends in ".concat(relativeTime(endAt, now));
  }
};

exports.upcomingLabel = upcomingLabel;

var AuctionCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AuctionCard, _React$Component);

  function AuctionCard() {
    _classCallCheck(this, AuctionCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(AuctionCard).apply(this, arguments));
  }

  _createClass(AuctionCard, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_palette.Link, {
        href: this.props.href,
        noUnderline: true
      }, _react.default.createElement(_Responsive.Media, {
        at: "xs"
      }, _react.default.createElement(SmallAuctionCard, this.props)), _react.default.createElement(_Responsive.Media, {
        greaterThan: "xs"
      }, _react.default.createElement(LargeAuctionCard, this.props)));
    }
  }]);

  return AuctionCard;
}(_react.default.Component);

exports.AuctionCard = AuctionCard;

var LargeAuctionCard = function LargeAuctionCard(props) {
  return _react.default.createElement(_palette.BorderBox, {
    hover: true,
    flexDirection: "column",
    height: "300px"
  }, _react.default.createElement(_palette.Serif, {
    size: "3t",
    weight: "semibold"
  }, _react.default.createElement(_Truncator.Truncator, {
    maxLineCount: 1
  }, props.headline)), _react.default.createElement(_palette.Serif, {
    size: "3t"
  }, _react.default.createElement(_Truncator.Truncator, {
    maxLineCount: 1
  }, !props.isGalleryAuction && !props.isBenefit ? props.subHeadline : _react.default.createElement(_react.default.Fragment, null, "\xA0"))), props.src && _react.default.createElement(_palette.Box, {
    height: "200px"
  }, _react.default.createElement(_palette.ResponsiveImage, {
    src: props.src,
    my: 2,
    pb: "160px"
  })), _react.default.createElement(_palette.Sans, {
    size: "2",
    weight: "medium"
  }, _react.default.createElement(_Truncator.Truncator, {
    maxLineCount: 1
  }, props.badge)));
};

exports.LargeAuctionCard = LargeAuctionCard;

var SmallAuctionCard = function SmallAuctionCard(props) {
  return _react.default.createElement(_palette.BorderBox, {
    hover: true,
    width: "100%",
    justifyContent: "space-between"
  }, _react.default.createElement(_palette.Flex, {
    flexDirection: "column",
    justifyContent: "space-between"
  }, _react.default.createElement(_palette.Box, null, _react.default.createElement(_palette.Serif, {
    size: "3t",
    weight: "semibold"
  }, _react.default.createElement(_Truncator.Truncator, {
    maxLineCount: 1
  }, props.headline)), props.subHeadline && !props.isGalleryAuction && !props.isBenefit && _react.default.createElement(_palette.Serif, {
    size: "3t"
  }, _react.default.createElement(_Truncator.Truncator, {
    maxLineCount: 2
  }, props.subHeadline))), _react.default.createElement(_palette.Sans, {
    size: "2",
    weight: "medium"
  }, _react.default.createElement(_Truncator.Truncator, {
    maxLineCount: 1
  }, props.badge))), props.src && _react.default.createElement(_palette.Image, {
    src: props.src,
    height: "82px",
    ml: 2
  }));
};

exports.SmallAuctionCard = SmallAuctionCard;
var AuctionCardFragmentContainer = (0, _reactRelay.createFragmentContainer)(function (props) {
  var sale = props.sale;
  if (!sale) return;
  var statusLabel = upcomingLabel(sale);
  var imageURL = (0, _get.get)(sale, function (s) {
    return s.cover_image.cropped.url;
  });
  var partnerName = (0, _get.get)(sale, function (s) {
    return s.partner.name;
  });
  return _react.default.createElement(AuctionCard, {
    src: imageURL,
    href: sale.href,
    headline: partnerName,
    subHeadline: sale.name,
    badge: statusLabel,
    isGalleryAuction: sale.isGalleryAuction,
    isBenefit: sale.isBenefit
  });
}, {
  sale: function sale() {
    var node = require("../../__generated__/AuctionCard_sale.graphql");

    if (node.hash && node.hash !== "a1eab9e49dd9c34fc9aa575c65cddf7b") {
      console.error("The definition of 'AuctionCard_sale' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/AuctionCard_sale.graphql");
  }
});
exports.AuctionCardFragmentContainer = AuctionCardFragmentContainer;
//# sourceMappingURL=AuctionCard.js.map