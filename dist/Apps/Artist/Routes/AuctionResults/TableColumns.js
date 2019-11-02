"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableColumns = void 0;

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _Responsive = require("../../../../Utils/Responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableColumns = function TableColumns() {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Responsive.Media, {
    between: ["sm", "lg"]
  }, _react.default.createElement(SmallTableColumns, null)), _react.default.createElement(_Responsive.Media, {
    greaterThanOrEqual: "lg"
  }, _react.default.createElement(LargeTableColumns, null)));
};

exports.TableColumns = TableColumns;

var LargeTableColumns = function LargeTableColumns() {
  return _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, {
    sm: 5
  }, _react.default.createElement(_palette.Sans, {
    size: "2",
    weight: "medium"
  }, "Work")), _react.default.createElement(_palette.Col, {
    sm: 3
  }, _react.default.createElement(_palette.Sans, {
    size: "2",
    weight: "medium"
  }, "Sale")), _react.default.createElement(_palette.Col, {
    sm: 4
  }, _react.default.createElement(_palette.Sans, {
    size: "2",
    weight: "medium"
  }, "Price")));
};

var SmallTableColumns = function SmallTableColumns() {
  return _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, {
    col: 6
  }, _react.default.createElement(_palette.Sans, {
    size: "2",
    weight: "medium"
  }, "Work")), _react.default.createElement(_palette.Col, {
    col: 6
  }, _react.default.createElement(_palette.Sans, {
    size: "2",
    weight: "medium"
  }, "Price")));
};
//# sourceMappingURL=TableColumns.js.map