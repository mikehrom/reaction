"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaginationFragmentContainer = exports.Pagination = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _Responsive = require("../../Utils/Responsive");

var _ScrollIntoView = require("../../Utils/ScrollIntoView");

var _palette = require("@artsy/palette");

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Pagination =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Pagination, _React$Component);

  function Pagination() {
    _classCallCheck(this, Pagination);

    return _possibleConstructorReturn(this, _getPrototypeOf(Pagination).apply(this, arguments));
  }

  _createClass(Pagination, [{
    key: "render",
    value: function render() {
      if (this.props.pageCursors.around.length === 1) {
        return null;
      }

      return _react.default.createElement(_ScrollIntoView.ScrollIntoView, {
        selector: this.props.scrollTo
      }, _react.default.createElement(_Responsive.Media, {
        at: "xs"
      }, _react.default.createElement(_palette.SmallPagination, this.props)), _react.default.createElement(_Responsive.Media, {
        greaterThan: "xs"
      }, _react.default.createElement(_palette.Box, null, _react.default.createElement(_palette.Separator, {
        mb: 3,
        pr: 2
      }), _react.default.createElement(_palette.LargePagination, this.props))));
    }
  }]);

  return Pagination;
}(_react.default.Component);

exports.Pagination = Pagination;

_defineProperty(Pagination, "defaultProps", {
  onClick: function onClick(_cursor) {
    return {};
  },
  onNext: function onNext() {
    return {};
  },
  scrollTo: null
});

var PaginationFragmentContainer = (0, _reactRelay.createFragmentContainer)(Pagination, {
  pageCursors: function pageCursors() {
    var node = require("../../__generated__/Pagination_pageCursors.graphql");

    if (node.hash && node.hash !== "72b4f72005e64de70ab045755aaaec79") {
      console.error("The definition of 'Pagination_pageCursors' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/Pagination_pageCursors.graphql");
  }
});
exports.PaginationFragmentContainer = PaginationFragmentContainer;
//# sourceMappingURL=Pagination.js.map