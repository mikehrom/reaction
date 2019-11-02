"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectedExhibitionFragmentContainer = exports.SelectedExhibitionsContainer = exports.ExhibitionYearList = exports.ExhibitionsHeadline = exports.isCollapsed = exports.SelectedExhibitions = exports.MIN_EXHIBITIONS = void 0;

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.array.map");

var _toPairs2 = _interopRequireDefault(require("lodash/toPairs"));

var _groupBy2 = _interopRequireDefault(require("lodash/groupBy"));

var _palette = require("@artsy/palette");

var _found = require("found");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _Responsive = require("../../Utils/Responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var MIN_FOR_SELECTED_EXHIBITIONS = 3;
var MIN_EXHIBITIONS = 2;
exports.MIN_EXHIBITIONS = MIN_EXHIBITIONS;

var SelectedExhibitions = function SelectedExhibitions(props) {
  return props.exhibitions.length === 0 ? null : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Responsive.Media, {
    at: "xs"
  }, _react.default.createElement(SelectedExhibitionsContainer, _extends({
    collapsible: true
  }, props))), _react.default.createElement(_Responsive.Media, {
    greaterThan: "xs"
  }, _react.default.createElement(SelectedExhibitionsContainer, props)));
};

exports.SelectedExhibitions = SelectedExhibitions;

var isCollapsed = function isCollapsed(props) {
  return props.collapsible && !props.expanded;
};

exports.isCollapsed = isCollapsed;

var ExhibitionsHeadline = function ExhibitionsHeadline(props) {
  return _react.default.createElement(_palette.Flex, {
    justifyContent: "space-between",
    mb: isCollapsed(props) ? 0 : 1
  }, _react.default.createElement(_palette.Sans, {
    size: "2",
    weight: "medium"
  }, props.exhibitionCount < MIN_FOR_SELECTED_EXHIBITIONS ? "Exhibitions" : "Selected exhibitions", isCollapsed(props) ? " (".concat(props.exhibitionCount, ")") : ""), isCollapsed(props) && _react.default.createElement("div", {
    onClick: props.onShowClicked,
    style: {
      cursor: "pointer"
    },
    className: "showLink"
  }, _react.default.createElement(_palette.Sans, {
    size: "2",
    color: "black60",
    ml: 2
  }, "Show")));
};

exports.ExhibitionsHeadline = ExhibitionsHeadline;

var ExhibitionYearList = function ExhibitionYearList(props) {
  return _react.default.createElement(_palette.Flex, null, _react.default.createElement(_palette.Sans, {
    size: "2"
  }, props.year), _react.default.createElement(_palette.Flex, {
    flexDirection: "column"
  }, props.exhibitions.map(function (exhibition, index) {
    return _react.default.createElement(_palette.Box, {
      key: exhibition.name + "-" + index,
      display: "inline",
      ml: 1
    }, _react.default.createElement(_palette.Sans, {
      size: "2",
      display: "inline",
      verticalAlign: "top"
    }, exhibition.name, ", "), exhibition.partner && _react.default.createElement(_palette.Sans, {
      size: "2",
      display: "inline",
      verticalAlign: "top",
      color: "black60"
    }, exhibition.partner.name));
  })));
};

exports.ExhibitionYearList = ExhibitionYearList;

var FullExhibitionList = function FullExhibitionList(props) {
  var _props$ViewAllLink = props.ViewAllLink,
      ViewAllLink = _props$ViewAllLink === void 0 ? _react.default.createElement(_found.Link, {
    to: "/artist/".concat(props.artistID, "/cv")
  }, "View all") : _props$ViewAllLink;
  return _react.default.createElement(_react.default.Fragment, null, (0, _toPairs2.default)((0, _groupBy2.default)(props.exhibitions, function (_ref) {
    var start_at = _ref.start_at;
    return start_at;
  })).reverse().map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        year = _ref3[0],
        exhibitions = _ref3[1];

    return _react.default.createElement(ExhibitionYearList, {
      key: year,
      year: year,
      exhibitions: exhibitions.reverse()
    });
  }), props.totalExhibitions > MIN_FOR_SELECTED_EXHIBITIONS && _react.default.createElement(_palette.Sans, {
    size: "2",
    color: "black60"
  }, ViewAllLink));
};

var SelectedExhibitionsContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SelectedExhibitionsContainer, _React$Component);

  function SelectedExhibitionsContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SelectedExhibitionsContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SelectedExhibitionsContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      expanded: false
    });

    return _this;
  }

  _createClass(SelectedExhibitionsContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      if (!this.props.exhibitions.length || this.props.totalExhibitions < MIN_EXHIBITIONS) {
        return null;
      }

      var Container;

      if (this.props.Container) {
        Container = this.props.Container;
      } else if (this.props.border) {
        Container = _palette.BorderBox;
      } else {
        Container = _palette.Box;
      }

      return _react.default.createElement(Container, null, _react.default.createElement(_palette.Flex, {
        flexDirection: "column"
      }, _react.default.createElement(ExhibitionsHeadline, {
        expanded: this.state.expanded,
        collapsible: this.props.collapsible,
        exhibitionCount: this.props.exhibitions.length,
        onShowClicked: function onShowClicked() {
          return _this2.setState({
            expanded: true
          });
        }
      }), !isCollapsed(_objectSpread({
        expanded: this.state.expanded
      }, this.props)) && _react.default.createElement(FullExhibitionList, {
        artistID: this.props.artistID,
        exhibitions: this.props.exhibitions,
        totalExhibitions: this.props.totalExhibitions,
        ViewAllLink: this.props.ViewAllLink
      })));
    }
  }]);

  return SelectedExhibitionsContainer;
}(_react.default.Component);

exports.SelectedExhibitionsContainer = SelectedExhibitionsContainer;

_defineProperty(SelectedExhibitionsContainer, "defaultProps", {
  border: true
});

var SelectedExhibitionFragmentContainer = (0, _reactRelay.createFragmentContainer)(SelectedExhibitions, {
  exhibitions: function exhibitions() {
    var node = require("../../__generated__/SelectedExhibitions_exhibitions.graphql");

    if (node.hash && node.hash !== "3a533b1e1bb6598fc358c2dd076117a0") {
      console.error("The definition of 'SelectedExhibitions_exhibitions' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/SelectedExhibitions_exhibitions.graphql");
  }
});
exports.SelectedExhibitionFragmentContainer = SelectedExhibitionFragmentContainer;
//# sourceMappingURL=SelectedExhibitions.js.map