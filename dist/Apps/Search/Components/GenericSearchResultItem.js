"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenericSearchResultItem = void 0;

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

require("core-js/modules/es6.function.name");

var _palette = require("@artsy/palette");

var _Analytics = require("../../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../../Artsy/Analytics/Schema"));

var _Truncator = require("../../../Components/Truncator");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _FallbackIcon = require("./FallbackIcon");

var _dec, _dec2, _class, _class2;

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

var GenericSearchResultItem = (_dec = (0, _Analytics.track)(), _dec2 = (0, _Analytics.track)(function (props) {
  return {
    action_type: Schema.ActionType.SelectedItemFromSearchPage,
    query: props.term,
    item_number: props.index,
    item_type: props.entityType,
    item_id: props.id,
    destination_path: props.href
  };
}), _dec(_class = (_class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GenericSearchResultItem, _React$Component);

  function GenericSearchResultItem() {
    _classCallCheck(this, GenericSearchResultItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(GenericSearchResultItem).apply(this, arguments));
  }

  _createClass(GenericSearchResultItem, [{
    key: "handleClick",
    value: function handleClick() {// no-op
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          imageUrl = _this$props.imageUrl,
          href = _this$props.href,
          name = _this$props.name,
          description = _this$props.description,
          entityType = _this$props.entityType;

      var translateEntityType = function translateEntityType(anEntityType) {
        switch (anEntityType) {
          case "PartnerShow":
            return "Show";

          default:
            return anEntityType;
        }
      };

      return _react.default.createElement(_palette.Link, {
        href: href,
        underlineBehavior: "none",
        onClick: function onClick() {
          _this.handleClick();
        }
      }, _react.default.createElement(ItemRow, null, _react.default.createElement(_palette.Spacer, {
        pb: 3
      }), _react.default.createElement(_palette.Flex, {
        pl: 4,
        flexDirection: "row"
      }, _react.default.createElement(_palette.Box, {
        height: 70,
        width: 70,
        mr: 2
      }, _react.default.createElement(_palette.Flex, {
        style: {
          backgroundColor: (0, _palette.color)("black10")
        },
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
      }, imageUrl && entityType !== "City" ? _react.default.createElement(_palette.Image, {
        width: 70,
        height: 70,
        src: imageUrl
      }) : _react.default.createElement(_FallbackIcon.FallbackIcon, {
        entityType: entityType
      }))), _react.default.createElement(_palette.Box, null, _react.default.createElement(_palette.Sans, {
        color: "black100",
        size: "2",
        weight: "medium"
      }, translateEntityType(entityType)), _react.default.createElement(_palette.Spacer, {
        mb: 0.5
      }), _react.default.createElement(_palette.Serif, {
        color: "black100",
        size: "3"
      }, name), description && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Spacer, {
        mb: 0.5
      }), _react.default.createElement(_palette.Serif, {
        color: "black60",
        size: "3",
        maxWidth: 536
      }, _react.default.createElement(_Truncator.Truncator, {
        maxLineCount: 3
      }, description))))), _react.default.createElement(_palette.Spacer, {
        pb: 3
      })));
    }
  }]);

  return GenericSearchResultItem;
}(_react.default.Component), (_applyDecoratedDescriptor(_class2.prototype, "handleClick", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "handleClick"), _class2.prototype)), _class2)) || _class);
exports.GenericSearchResultItem = GenericSearchResultItem;
var ItemRow = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "GenericSearchResultItem__ItemRow",
  componentId: "sc-1o71wtw-0"
})(["&:hover{background-color:", ";}"], (0, _palette.color)("black5"));
//# sourceMappingURL=GenericSearchResultItem.js.map