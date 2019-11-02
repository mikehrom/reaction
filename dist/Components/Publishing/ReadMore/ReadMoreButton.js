"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReadMoreContainer = exports.ReadMoreButton = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.reduce");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.function.bind");

var _once2 = _interopRequireDefault(require("lodash/once"));

var _Analytics = require("../../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../../Artsy/Analytics/Schema"));

var _Fonts = require("../../../Assets/Fonts");

var _react = _interopRequireDefault(require("react"));

var _reactWaypoint = _interopRequireDefault(require("react-waypoint"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Helpers = require("../../Helpers");

var _StandardLayout = require("../Layouts/StandardLayout");

var _dec, _dec2, _dec3, _class, _class2;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    padding: 20px;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    padding: 20px;\n    padding-left: 0px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n  "]);

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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

/**
 * @deprecated in favor of our Design System ReadMore component in @artsy/palette
 * https://palette.artsy.net/elements/layout/readmore
 */
var ReadMoreButton = (_dec = (0, _Analytics.track)({
  context_module: Schema.ContextModule.ReadMore,
  subject: Schema.Subject.ReadMore
}), _dec2 = (0, _Analytics.track)({
  action_type: Schema.ActionType.Impression
}), _dec3 = (0, _Analytics.track)({
  action_type: Schema.ActionType.ClickedReadMore
}), _dec(_class = (_class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ReadMoreButton, _React$Component);

  function ReadMoreButton() {
    _classCallCheck(this, ReadMoreButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(ReadMoreButton).apply(this, arguments));
  }

  _createClass(ReadMoreButton, [{
    key: "trackImpression",
    value: function trackImpression() {} // noop
    // maps to force pageview override

  }, {
    key: "onClick",
    value: function onClick() {
      this.props.onClick();
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_StandardLayout.StandardLayoutParent, null, _react.default.createElement(ReadMoreContainer, {
        onClick: this.onClick.bind(this)
      }, _react.default.createElement(Button, null, "Read More")), _react.default.createElement(_reactWaypoint.default, {
        onEnter: (0, _once2.default)(this.trackImpression.bind(this))
      }));
    }
  }]);

  return ReadMoreButton;
}(_react.default.Component), (_applyDecoratedDescriptor(_class2.prototype, "trackImpression", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "trackImpression"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "onClick", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "onClick"), _class2.prototype)), _class2)) || _class);
exports.ReadMoreButton = ReadMoreButton;

var Button = _styledComponents.default.div.withConfig({
  displayName: "ReadMoreButton__Button",
  componentId: "sc-16xejdc-0"
})(["display:flex;align-items:center;justify-content:center;color:white;width:270px;height:40px;background-color:black;border:1px solid black;border-radius:2px;", ";padding-top:1px;&:hover{cursor:pointer;background-color:white;color:black;}", ";"], (0, _Fonts.unica)("s14", "medium"), _Helpers.pMedia.md(_templateObject()));

var ReadMoreContainer = _styledComponents.default.div.withConfig({
  displayName: "ReadMoreButton__ReadMoreContainer",
  componentId: "sc-16xejdc-1"
})(["display:flex;align-items:center;width:100%;box-sizing:border-box;padding:20px 0;max-width:1150px;margin:auto;margin-bottom:80px;", ";", ";"], _Helpers.pMedia.xl(_templateObject2()), _Helpers.pMedia.sm(_templateObject3()));

exports.ReadMoreContainer = ReadMoreContainer;
//# sourceMappingURL=ReadMoreButton.js.map