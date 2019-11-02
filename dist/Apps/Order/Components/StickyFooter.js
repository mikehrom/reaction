"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StickyFooter = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.reduce");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.function.bind");

var _palette = require("@artsy/palette");

var _Artsy = require("../../../Artsy");

var _Analytics = require("../../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../../Artsy/Analytics/Schema"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dec, _dec2, _dec3, _class, _class2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

var StickyFooter = (_dec = (0, _Analytics.track)(), _dec2 = (0, _Analytics.track)(function (props) {
  return {
    action_type: Schema.ActionType.Click,
    subject: Schema.Subject.BNMOReadFAQ,
    type: "button",
    flow: props.orderType === "OFFER" ? "make offer" : "buy now"
  };
}), _dec3 = (0, _Analytics.track)(function (props) {
  return {
    action_type: Schema.ActionType.Click,
    subject: Schema.Subject.BNMOAskSpecialist,
    type: "button",
    flow: props.orderType === "OFFER" ? "make offer" : "buy now"
  };
}), _dec(_class = (_class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(StickyFooter, _Component);

  function StickyFooter() {
    _classCallCheck(this, StickyFooter);

    return _possibleConstructorReturn(this, _getPrototypeOf(StickyFooter).apply(this, arguments));
  }

  _createClass(StickyFooter, [{
    key: "onClickReadFAQ",
    value: function onClickReadFAQ() {
      window.open("https://www.artsy.net/buy-now-feature-faq", "_blank");
    }
  }, {
    key: "onClickAskSpecialist",
    value: function onClickAskSpecialist(mediator) {
      mediator.trigger("openOrdersContactArtsyModal", {
        artworkId: this.props.artworkId
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return _react.default.createElement(FooterContainer, null, _react.default.createElement(_Artsy.SystemContextConsumer, null, function (_ref) {
        var mediator = _ref.mediator;
        return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Sans, {
          size: "2",
          color: "black60"
        }, "Need help?", " ", _react.default.createElement(_palette.Link, {
          onClick: _this.onClickReadFAQ.bind(_this)
        }, "Read our FAQ"), " ", "or", " ", _react.default.createElement(_palette.Link, {
          onClick: _this.onClickAskSpecialist.bind(_this, mediator)
        }, "ask a question"), "."), _react.default.createElement(_palette.Spacer, {
          mb: 2
        }));
      }));
    }
  }]);

  return StickyFooter;
}(_react.Component), (_applyDecoratedDescriptor(_class2.prototype, "onClickReadFAQ", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "onClickReadFAQ"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "onClickAskSpecialist", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "onClickAskSpecialist"), _class2.prototype)), _class2)) || _class);
exports.StickyFooter = StickyFooter;
var FooterContainer = (0, _styledComponents.default)(_palette.Flex).withConfig({
  displayName: "StickyFooter__FooterContainer",
  componentId: "sc-1eynioh-0"
})(["height:calc(46px + env(safe-area-inset-bottom));background-color:", ";bottom:0;left:0;position:fixed;width:100%;border-top:1px solid ", ";align-items:center;justify-content:center;padding-bottom:env(safe-area-inset-bottom);padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);"], (0, _palette.color)("white100"), (0, _palette.color)("black10"));
//# sourceMappingURL=StickyFooter.js.map