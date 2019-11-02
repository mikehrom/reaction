"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostRegistrationModal = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

var _palette = require("@artsy/palette");

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BidPending = function BidPending(_ref) {
  var onClick = _ref.onClick;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(RegistrationPendingHeader, null), _react.default.createElement(_palette.Serif, {
    my: 3,
    size: "3t"
  }, "We're sorry, your bid could not be placed."), _react.default.createElement(ReviewingRegistrationContent, null), _react.default.createElement(ViewWorksButton, {
    onClick: onClick
  }));
};

var RegistrationPending = function RegistrationPending(_ref2) {
  var onClick = _ref2.onClick;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(RegistrationPendingHeader, null), _react.default.createElement(ReviewingRegistrationContent, null), _react.default.createElement(ViewWorksButton, {
    onClick: onClick
  }));
};

var RegistrationComplete = function RegistrationComplete(_ref3) {
  var onClick = _ref3.onClick;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Serif, {
    size: "6"
  }, "Registration complete"), _react.default.createElement(_palette.CheckCircleIcon, {
    mt: 2,
    height: "28px",
    width: "28px",
    fill: "green100"
  }), _react.default.createElement(_palette.Serif, {
    mt: 2,
    mb: 3,
    size: "3t"
  }, "Thank you for registering.", _react.default.createElement("br", null), "You\u2019re now eligible to bid on lots in this sale."), _react.default.createElement(_palette.Button, {
    width: "100%",
    onClick: onClick
  }, "Start bidding"));
};

var contentFor = {
  registrationConfirmed: RegistrationComplete,
  registrationPending: RegistrationPending,
  bidPending: BidPending
};

var PostRegistrationModal = function PostRegistrationModal(_ref4) {
  var onClose = _ref4.onClose,
      contentKey = _ref4.contentKey;

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  function closeModal() {
    setShow(false);
  }

  (0, _react.useEffect)(function () {
    if (!show) {
      onClose();
    }
  }, [show]);
  var Content = contentFor[contentKey];
  return _react.default.createElement(_palette.Modal, {
    show: show,
    onClose: closeModal
  }, _react.default.createElement(_palette.Box, {
    pt: [3, 0],
    textAlign: "center"
  }, _react.default.createElement(Content, {
    onClick: closeModal
  })));
};

exports.PostRegistrationModal = PostRegistrationModal;

var ReviewingRegistrationContent = function ReviewingRegistrationContent() {
  return _react.default.createElement(_palette.Serif, {
    my: 3,
    size: "3t"
  }, "Artsy is reviewing your registration and you will receive an email when it has been confirmed. Please email specialist@artsy.net with any questions.", _react.default.createElement("br", null), _react.default.createElement("br", null), "In the meantime, you can still view works and watch lots you\u2019re interested in.");
};

var RegistrationPendingHeader = function RegistrationPendingHeader() {
  return _react.default.createElement(_palette.Serif, {
    size: "6"
  }, "Registration pending");
};

var ViewWorksButton = function ViewWorksButton(props) {
  return _react.default.createElement(_palette.Button, {
    width: "100%",
    onClick: props.onClick
  }, "View works in this sale");
};
//# sourceMappingURL=PostRegistrationModal.js.map