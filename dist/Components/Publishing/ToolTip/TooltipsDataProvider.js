"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TooltipsDataProvider = void 0;

var _react = _interopRequireDefault(require("react"));

var _TooltipsDataLoader = require("./TooltipsDataLoader");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TooltipsDataProvider = function TooltipsDataProvider(props) {
  var article = props.article,
      onOpenAuthModal = props.onOpenAuthModal,
      showTooltips = props.showTooltips;
  return _react.default.createElement(_TooltipsDataLoader.TooltipsData, {
    article: article,
    shouldFetchData: showTooltips,
    onOpenAuthModal: onOpenAuthModal
  }, props.children);
};

exports.TooltipsDataProvider = TooltipsDataProvider;
//# sourceMappingURL=TooltipsDataProvider.js.map