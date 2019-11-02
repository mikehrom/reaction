"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtistInsightsModal = void 0;

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

var _Analytics = require("../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../Artsy/Analytics/Schema"));

var _Modal = require("../Modal/Modal");

var _react = _interopRequireDefault(require("react"));

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

var ArtistInsightsModal = (_dec = (0, _Analytics.track)(function () {
  return {
    context_module: Schema.ContextModule.ArtistInsights
  };
}), _dec2 = (0, _Analytics.track)(function () {
  return {
    action_type: Schema.ActionType.Click,
    subject: "Learn more",
    type: "Link"
  };
}), _dec(_class = (_class2 = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ArtistInsightsModal, _React$Component);

  function ArtistInsightsModal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ArtistInsightsModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ArtistInsightsModal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      showModal: false
    });

    return _this;
  }

  _createClass(ArtistInsightsModal, [{
    key: "handleOpen",
    value: function handleOpen() {
      this.setState({
        showModal: true
      });
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      this.setState({
        showModal: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Modal.Modal, {
        onClose: this.handleClose.bind(this),
        show: this.state.showModal,
        style: {
          maxHeight: 540,
          overflowX: "scroll"
        }
      }, _react.default.createElement(_palette.Serif, {
        size: "5",
        textAlign: "center",
        weight: "semibold"
      }, "Artist Insights"), _react.default.createElement(_palette.Serif, {
        size: "2",
        mt: 1,
        textAlign: "center",
        color: "black60",
        lineHeight: "24px"
      }, "Artist Insights exists to help art buyers understand the cultural significance of artists on Artsy. We aim to contextualize artists career trajectories within the greater art market."), _react.default.createElement(_palette.Separator, {
        mt: 3
      }), _react.default.createElement(_palette.Serif, {
        size: "2",
        mt: 3
      }, "Carefully considered methodologies."), _react.default.createElement(_palette.Serif, {
        size: "2",
        mt: 1,
        color: "black60",
        lineHeight: "24px"
      }, "Artist Insights maps selected curatorial achievements - including exhibition, biennial inclusion, accession, and exhibition review - by globally influential and relevant institutions, biennials, and art publications, focusing on contemporary art. The working lexicon of major institutions, biennials and art publications is defined through the collaboration of various Artsy teams, including Collector Relations, Editorial, GFI (Galleries, Fairs, and Institutions), and The Art Genome Project."), _react.default.createElement(_palette.Serif, {
        size: "2",
        mt: 3
      }, "Data backed by credible sources."), _react.default.createElement(_palette.Serif, {
        size: "2",
        mt: 1,
        color: "black60",
        lineHeight: "24px"
      }, "In recent years, many institutions like the Museum of Modern Art (MoMA) and the Tate launched initiatives to make structured data from their exceptional collections available to all. We use this data when available. In addition, our art historical research team manually researches primary sources available online to inform Artist Insights. Research is ongoing and data is updated periodically. If you have feedback about data accuracy or methodology,", " ", _react.default.createElement(_palette.Link, {
        href: "mailto:support@artsy.net"
      }, "let us know"), ".")), _react.default.createElement(_palette.Sans, {
        mt: 1,
        size: "2",
        color: "black60"
      }, _react.default.createElement(_palette.Link, {
        onClick: this.handleOpen.bind(this)
      }, "Learn more"), " about artist insights."));
    }
  }]);

  return ArtistInsightsModal;
}(_react.default.Component), _temp), (_applyDecoratedDescriptor(_class2.prototype, "handleOpen", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "handleOpen"), _class2.prototype)), _class2)) || _class);
exports.ArtistInsightsModal = ArtistInsightsModal;
//# sourceMappingURL=ArtistInsightsModal.js.map