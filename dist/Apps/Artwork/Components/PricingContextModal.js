"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PricingContextModal = void 0;

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

var _Analytics = require("../../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../../Artsy/Analytics/Schema"));

var _react = _interopRequireDefault(require("react"));

var _sharify = require("sharify");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Events = _interopRequireDefault(require("../../../Utils/Events"));

var _dec, _dec2, _class, _class2, _temp;

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

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

var PricingContextModal = (_dec = (0, _Analytics.track)({
  context_module: Schema.ContextModule.PriceContext
}, {
  dispatch: function dispatch(data) {
    return _Events.default.postEvent(data);
  }
}), _dec2 = (0, _Analytics.track)({
  action_type: Schema.ActionType.Click,
  flow: Schema.Flow.ArtworkPriceContext,
  subject: Schema.Subject.QuestionMarkIcon
}), _dec(_class = (_class2 = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PricingContextModal, _React$Component);

  function PricingContextModal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PricingContextModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PricingContextModal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isModalOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "closeModal", function () {
      _this.setState({
        isModalOpen: false
      });
    });

    return _this;
  }

  _createClass(PricingContextModal, [{
    key: "openModal",
    value: function openModal() {
      this.setState({
        isModalOpen: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_palette.Box, {
        height: "15px"
      }, _react.default.createElement(_palette.Modal, {
        onClose: this.closeModal,
        show: this.state.isModalOpen,
        title: "Price in context",
        FixedButton: _react.default.createElement(_palette.Button, {
          onClick: this.closeModal,
          block: true,
          width: "100%"
        }, "Got it")
      }, _react.default.createElement(_palette.Spacer, {
        mt: 2
      }), _react.default.createElement(_palette.Serif, {
        size: "3",
        color: "black80"
      }, "This feature aims to provide insight into the range of prices for an artist's works and allow buyers to discover other available works by the artist at different price points."), _react.default.createElement(_palette.Spacer, {
        mt: 2
      }), _react.default.createElement(_palette.Serif, {
        size: "3",
        color: "black80"
      }, "The graph displays current and past list prices for works that are similar in size and category to the work you're viewing. The prices included in the graph are only from galleries and dealers on Artsy."), _react.default.createElement(_palette.Spacer, {
        mt: 2
      }), _react.default.createElement(_palette.Serif, {
        size: "3",
        color: "black80"
      }, "Artwork prices are affected by", " ", _react.default.createElement(_palette.Link, {
        href: _sharify.data.APP_URL + "/article/artsy-editorial-artworks-prices"
      }, "a variety of objective and subjective factors"), " ", "including the artist's relative position in the art market and the artwork's size, condition, rarity, and subject matter. These factors are unique to every artwork. As such, this feature is not intended to provide pricing guidance for the artwork being viewed. If you have feedback or questions", " ", _react.default.createElement(_palette.Link, {
        href: "mailto:support@artsy.net"
      }, "let us know"), "."), _react.default.createElement(_palette.Spacer, {
        mt: 2
      })), _react.default.createElement(_palette.Tooltip, {
        width: 73,
        size: "sm",
        content: "Learn more"
      }, _react.default.createElement(StyledQuestionCircleIcon, {
        ml: "5px",
        width: "15px",
        onClick: this.openModal.bind(this)
      })));
    }
  }]);

  return PricingContextModal;
}(_react.default.Component), _temp), (_applyDecoratedDescriptor(_class2.prototype, "openModal", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "openModal"), _class2.prototype)), _class2)) || _class);
exports.PricingContextModal = PricingContextModal;
var StyledQuestionCircleIcon = (0, _styledComponents.default)(_palette.QuestionCircleIcon).withConfig({
  displayName: "PricingContextModal__StyledQuestionCircleIcon",
  componentId: "sc-163az5g-0"
})(["cursor:pointer;"]);
//# sourceMappingURL=PricingContextModal.js.map