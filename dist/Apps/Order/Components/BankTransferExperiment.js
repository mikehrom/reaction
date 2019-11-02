"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BankTransferExperiment = BankTransferExperiment;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

var _palette = require("@artsy/palette");

var _Artsy = require("../../../Artsy");

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function BankTransferExperiment() {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isShowingModal = _useState2[0],
      setIsShowingModal = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      shouldNotifyUserWhenFeatureIsAvailable = _useState4[0],
      setShouldNotifyUserWhenFeatureIsAvailable = _useState4[1];

  var _useTracking = (0, _Artsy.useTracking)(),
      trackEvent = _useTracking.trackEvent;

  var onHoverOverRadio = function onHoverOverRadio() {
    trackEvent({
      action_type: _Artsy.AnalyticsSchema.ActionType.Hover,
      subject: _Artsy.AnalyticsSchema.Subject.BNMOAddBankAccount,
      type: _Artsy.AnalyticsSchema.Type.RadioButton
    });
  };

  var onClickRadio = function onClickRadio() {
    setIsShowingModal(true);
    trackEvent({
      action_type: _Artsy.AnalyticsSchema.ActionType.Click,
      subject: _Artsy.AnalyticsSchema.Subject.BNMOAddBankAccount,
      type: _Artsy.AnalyticsSchema.Type.RadioButton
    });
  };

  var onClickEmailLink = function onClickEmailLink() {
    trackEvent({
      action_type: _Artsy.AnalyticsSchema.ActionType.Click,
      subject: _Artsy.AnalyticsSchema.Subject.BNMOHelpEmail,
      type: _Artsy.AnalyticsSchema.Type.EmailLink,
      context_module: _Artsy.AnalyticsSchema.ContextModule.BankTransferExperiment
    });
  };

  var onCheckboxToggled = function onCheckboxToggled(checked) {
    setShouldNotifyUserWhenFeatureIsAvailable(checked);
    trackEvent({
      action_type: _Artsy.AnalyticsSchema.ActionType.Click,
      subject: _Artsy.AnalyticsSchema.Subject.BNMOBankTransferNotifcationCheckbox,
      type: _Artsy.AnalyticsSchema.Type.EmailLink,
      context_module: _Artsy.AnalyticsSchema.ContextModule.BankTransferExperiment
    });
  };

  var onDismissModal = function onDismissModal() {
    setIsShowingModal(false);
    trackEvent({
      action_type: _Artsy.AnalyticsSchema.ActionType.Click,
      subject: _Artsy.AnalyticsSchema.Subject.BNMOBankTransferModalDismissed,
      type: _Artsy.AnalyticsSchema.Type.ModalDismissal,
      context_module: _Artsy.AnalyticsSchema.ContextModule.BankTransferExperiment
    });
  };

  return _react.default.createElement(_palette.Flex, {
    flexDirection: "column"
  }, _react.default.createElement(_palette.Serif, {
    size: "3"
  }, "Bank Transfer"), _react.default.createElement(_palette.Flex, {
    flexDirection: "column",
    onMouseEnter: onHoverOverRadio,
    id: "bank-transfer-hover-target"
  }, _react.default.createElement(_palette.BorderedRadio, {
    selected: isShowingModal,
    onSelect: onClickRadio,
    key: 0,
    my: 0.3,
    value: "",
    label: "Add new account."
  })), _react.default.createElement(_palette.Modal, {
    show: isShowingModal,
    onClose: onDismissModal,
    title: "Pay by Bank Transfer"
  }, _react.default.createElement(_palette.Flex, {
    flexGrow: 1,
    flexDirection: "column"
  }, _react.default.createElement(_palette.Serif, {
    size: "3t",
    pb: 2
  }, "Bank transfer support is currently in development. Please complete checkout with a credit card or contact", " ", _react.default.createElement(_palette.Link, {
    target: "_blank",
    href: "mailto:orders@artsy.net",
    onClick: onClickEmailLink
  }, "orders@artsy.net"), " ", "with questions."), _react.default.createElement(_palette.Flex, {
    alignItems: "center",
    pb: 2
  }, _react.default.createElement(_palette.Checkbox, {
    onSelect: onCheckboxToggled,
    selected: shouldNotifyUserWhenFeatureIsAvailable
  }, "Notify me when this feature is available.")), _react.default.createElement(_palette.Button, {
    onClick: onDismissModal
  }, "Back to payment"))));
}
//# sourceMappingURL=BankTransferExperiment.js.map