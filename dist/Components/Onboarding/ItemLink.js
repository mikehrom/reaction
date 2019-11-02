"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LinkContainer = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.function.bind");

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _palette = require("@artsy/palette");

var _Colors = _interopRequireDefault(require("../../Assets/Colors"));

var _Fonts = require("../../Assets/Fonts");

var _Helpers = require("../Helpers");

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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding: 0 5px;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Link = _styledComponents.default.a.withConfig({
  displayName: "ItemLink__Link",
  componentId: "sc-1w5wdys-0"
})(["display:flex;font-size:14px;color:black;text-decoration:none;", ";&:hover{background-color:", ";cursor:pointer;}padding-right:10px;", ";"], (0, _Fonts.avantgarde)("s13"), _Colors.default.gray, _Helpers.media.sm(_templateObject()));

var Avatar = _styledComponents.default.img.withConfig({
  displayName: "ItemLink__Avatar",
  componentId: "sc-1w5wdys-1"
})(["margin:10px 15px 10px 10px;"]);

var FullWidthCol = _styledComponents.default.div.withConfig({
  displayName: "ItemLink__FullWidthCol",
  componentId: "sc-1w5wdys-2"
})(["flex:1;display:flex;align-items:center;"]);

var Col = _styledComponents.default.div.withConfig({
  displayName: "ItemLink__Col",
  componentId: "sc-1w5wdys-3"
})(["display:flex;align-items:center;"]);

var LinkContainer = _styledComponents.default.div.withConfig({
  displayName: "ItemLink__LinkContainer",
  componentId: "sc-1w5wdys-4"
})(["border-top:1px solid ", ";border-bottom:1px solid ", ";margin-top:-1px;"], _Colors.default.grayRegular, _Colors.default.grayRegular);

exports.LinkContainer = LinkContainer;

var ItemLink =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ItemLink, _React$Component);

  function ItemLink(props, state) {
    var _this;

    _classCallCheck(this, ItemLink);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ItemLink).call(this, props, state));
    _this.state = {
      selected: false
    };
    return _this;
  }

  _createClass(ItemLink, [{
    key: "onClick",
    value: function onClick(e) {
      this.props.onClick(e);
      this.setState({
        selected: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(Link, {
        onClick: this.onClick.bind(this)
      }, React.createElement(Col, null, React.createElement(Avatar, {
        src: this.props.image_url ? this.props.image_url : "https://www.artsy.net/images/icon-70.png",
        width: 50,
        height: 50
      })), React.createElement(FullWidthCol, null, this.props.name), React.createElement(Col, null, this.state.selected ? React.createElement(_palette.CircleWhiteCheckIcon, {
        width: "26",
        height: "26"
      }) : React.createElement(_palette.PlusIcon, {
        width: "26",
        height: "26"
      })));
    }
  }]);

  return ItemLink;
}(React.Component);

exports.default = ItemLink;
//# sourceMappingURL=ItemLink.js.map