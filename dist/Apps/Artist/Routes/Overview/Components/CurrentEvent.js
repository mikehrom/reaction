"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CurrentEventFragmentContainer = exports.LargeCurrentEvent = exports.CurrentEvent = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.reduce");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.function.bind");

require("core-js/modules/es6.function.name");

var _palette = require("@artsy/palette");

var _Analytics = require("../../../../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../../../../Artsy/Analytics/Schema"));

var _react = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _Responsive = require("../../../../../Utils/Responsive");

var _dec, _dec2, _class, _class2;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CurrentEvent =
/*#__PURE__*/
function (_Component) {
  _inherits(CurrentEvent, _Component);

  function CurrentEvent() {
    _classCallCheck(this, CurrentEvent);

    return _possibleConstructorReturn(this, _getPrototypeOf(CurrentEvent).apply(this, arguments));
  }

  _createClass(CurrentEvent, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_Responsive.Media, {
        greaterThan: "xs"
      }, _react.default.createElement(LargeCurrentEvent, this.props));
    }
  }]);

  return CurrentEvent;
}(_react.Component); // const track: Track<CurrentEventProps> = _track


exports.CurrentEvent = CurrentEvent;
var LargeCurrentEvent = (_dec = (0, _Analytics.track)(), _dec2 = (0, _Analytics.track)(function (props) {
  return {
    action_type: Schema.ActionType.Click,
    subject: props.artist.currentEvent.event.__typename === "Sale" ? // TODO: These are not action names!
    Schema.ActionName.InSale : Schema.ActionName.InShow,
    destination_path: props.artist.currentEvent.href
  };
}), _dec(_class = (_class2 =
/*#__PURE__*/
function (_Component2) {
  _inherits(LargeCurrentEvent, _Component2);

  function LargeCurrentEvent() {
    _classCallCheck(this, LargeCurrentEvent);

    return _possibleConstructorReturn(this, _getPrototypeOf(LargeCurrentEvent).apply(this, arguments));
  }

  _createClass(LargeCurrentEvent, [{
    key: "handleClick",
    value: function handleClick() {// no-op
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;

      if (!props.artist.currentEvent) {
        return null;
      }

      var _props$artist$current = props.artist.currentEvent,
          image = _props$artist$current.image,
          status = _props$artist$current.status,
          name = _props$artist$current.name,
          details = _props$artist$current.details,
          partner = _props$artist$current.partner,
          href = _props$artist$current.href;
      return _react.default.createElement("a", {
        href: href,
        className: "noUnderline",
        onClick: this.handleClick.bind(this)
      }, _react.default.createElement(_palette.Flex, {
        flexDirection: "column"
      }, image && _react.default.createElement(_palette.Box, {
        width: "100%",
        height: "auto"
      }, _react.default.createElement(_palette.Image, {
        src: image.resized.url,
        width: "100%",
        mb: 1
      })), _react.default.createElement(_palette.Sans, {
        size: "2",
        weight: "medium",
        my: 0.5
      }, status), _react.default.createElement(_palette.Serif, {
        size: "3t"
      }, name), partner && _react.default.createElement(_palette.Serif, {
        size: "2",
        color: "black60"
      }, partner), _react.default.createElement(_palette.Serif, {
        size: "2",
        color: "black60"
      }, details)));
    }
  }]);

  return LargeCurrentEvent;
}(_react.Component), (_applyDecoratedDescriptor(_class2.prototype, "handleClick", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "handleClick"), _class2.prototype)), _class2)) || _class);
exports.LargeCurrentEvent = LargeCurrentEvent;
var CurrentEventFragmentContainer = (0, _reactRelay.createFragmentContainer)(CurrentEvent, {
  artist: function artist() {
    var node = require("../../../../../__generated__/CurrentEvent_artist.graphql");

    if (node.hash && node.hash !== "3e83a9a09afbd679fe1cac057ff044cc") {
      console.error("The definition of 'CurrentEvent_artist' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../../__generated__/CurrentEvent_artist.graphql");
  }
});
exports.CurrentEventFragmentContainer = CurrentEventFragmentContainer;
//# sourceMappingURL=CurrentEvent.js.map