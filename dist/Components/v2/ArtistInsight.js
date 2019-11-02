"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtistInsight = void 0;

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

var ICON_MAPPING = {
  HIGH_AUCTION: _palette.AuctionIcon,
  SOLO_SHOW: _palette.SoloIcon,
  GROUP_SHOW: _palette.GroupIcon,
  BIENNIAL: _palette.FairIcon,
  REVIEWED: _palette.BookIcon,
  COLLECTED: _palette.MuseumIcon,
  BLUE_CHIP: _palette.BlueChipIcon,
  TOP_ESTABLISHED: _palette.TopEstablishedIcon,
  TOP_EMERGING: _palette.TopEmergingIcon
};
var ArtistInsight = (_dec = (0, _Analytics.track)(function (props) {
  return {
    context_module: Schema.ContextModule.ArtistInsights,
    context_submodule: props.type
  };
}), _dec2 = (0, _Analytics.track)(function () {
  return {
    action_type: Schema.ActionType.Click,
    subject: "Read more",
    type: "Link"
  };
}), _dec(_class = (_class2 = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ArtistInsight, _React$Component);

  function ArtistInsight() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ArtistInsight);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ArtistInsight)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      expanded: false
    });

    return _this;
  }

  _createClass(ArtistInsight, [{
    key: "handleExpand",
    value: function handleExpand() {
      this.setState({
        expanded: true
      });
    }
  }, {
    key: "renderEntities",
    value: function renderEntities() {
      var entities = this.props.entities;

      if (!entities || entities.length < 1) {
        return null;
      } else if (this.state.expanded) {
        return _react.default.createElement(_palette.Sans, {
          size: "2",
          verticalAlign: "top",
          color: "black60"
        }, entities.join(", "), ".");
      } else {
        return _react.default.createElement(_palette.Sans, {
          size: "2",
          verticalAlign: "top",
          color: "black60",
          textAlign: "left"
        }, entities[0], entities.length > 1 && _react.default.createElement(_react.default.Fragment, null, ", and", " ", _react.default.createElement(_palette.Link, {
          onClick: this.handleExpand.bind(this)
        }, entities.length - 1, "\xA0more")));
      }
    }
  }, {
    key: "renderIcon",
    value: function renderIcon(insightType) {
      var Component = ICON_MAPPING[insightType];
      return _react.default.createElement(Component, null);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          type = _this$props.type,
          value = _this$props.value,
          entities = _this$props.entities;

      if (value || entities && entities.length > 0) {
        return _react.default.createElement(_palette.Flex, {
          mt: 1,
          width: ["100%", "48%"]
        }, _react.default.createElement(_palette.Flex, {
          pr: 1
        }, this.renderIcon(type)), _react.default.createElement(_palette.Flex, {
          flexDirection: "column"
        }, _react.default.createElement(_palette.Box, null, _react.default.createElement(_palette.Sans, {
          size: "2"
        }, label), value && _react.default.createElement(_palette.Sans, {
          size: "2",
          color: "black60"
        }, value), this.renderEntities())));
      }
    }
  }]);

  return ArtistInsight;
}(_react.default.Component), _temp), (_applyDecoratedDescriptor(_class2.prototype, "handleExpand", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "handleExpand"), _class2.prototype)), _class2)) || _class);
exports.ArtistInsight = ArtistInsight;
//# sourceMappingURL=ArtistInsight.js.map