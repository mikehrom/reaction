"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableSidebar = void 0;

require("core-js/modules/es6.array.sort");

var _react = _interopRequireDefault(require("react"));

var _unstated = require("unstated");

var _Responsive = require("../../../../Utils/Responsive");

var _state = require("./state");

var _palette = require("@artsy/palette");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SORTS = [{
  value: "DATE_DESC",
  text: "Most recent"
}, {
  value: "ESTIMATE_AND_DATE_DESC",
  text: "Estimate"
}, {
  value: "PRICE_AND_DATE_DESC",
  text: "Sale price"
}];

var TableSidebar = function TableSidebar(props) {
  return _react.default.createElement(_unstated.Subscribe, {
    to: [_state.AuctionResultsState]
  }, function (filters) {
    return _react.default.createElement(_palette.Flex, {
      flexDirection: "column"
    }, _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, null, renderCount(props.count))), _react.default.createElement(_Responsive.Media, {
      greaterThan: "xs"
    }, _react.default.createElement(_palette.Row, {
      pt: 0.5
    }, _react.default.createElement(_palette.Separator, null))), _react.default.createElement(_palette.Spacer, {
      mt: [2, 3]
    }), _react.default.createElement(_palette.LargeSelect, {
      options: SORTS,
      selected: filters.state.sort,
      onSelect: filters.setSort
    }), _react.default.createElement(_palette.Spacer, {
      mb: 2
    }));
  });
};

exports.TableSidebar = TableSidebar;

var renderCount = function renderCount(count) {
  return _react.default.createElement(_palette.Sans, {
    size: "2",
    weight: "medium"
  }, "".concat(count.toLocaleString(), " Results"));
};
//# sourceMappingURL=TableSidebar.js.map