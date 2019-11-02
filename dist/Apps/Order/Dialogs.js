"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.injectDialog = injectDialog;
exports.ConnectedModalDialog = exports.DialogContainer = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("regenerator-runtime/runtime");

require("core-js/modules/es6.promise");

var _palette = require("@artsy/palette");

var _ModalDialog = require("../../Components/Modal/ModalDialog");

var _react = _interopRequireDefault(require("react"));

var _unstated = require("unstated");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DialogContainer =
/*#__PURE__*/
function (_Container) {
  _inherits(DialogContainer, _Container);

  function DialogContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DialogContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DialogContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      props: {
        show: false,
        heading: null,
        detail: null,
        primaryCta: {
          text: "",
          action: function action() {
            return void 0;
          }
        }
      },
      onForceClose: function onForceClose() {
        return Promise.resolve();
      }
      /**
       * Hides the the currently-showing dialog
       */

    });

    _defineProperty(_assertThisInitialized(_this), "hide", function () {
      _this.setState({
        props: _objectSpread({}, _this.state.props, {
          show: false
        })
      });
    });

    _defineProperty(_assertThisInitialized(_this), "show",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(_ref) {
        var props, onForceClose;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                props = _ref.props, onForceClose = _ref.onForceClose;

                if (!_this.state.props.show) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return Promise.resolve(_this.state.onForceClose());

              case 4:
                _this.hide(); // give a little pause so the user can see a transition between the two


                _context.next = 7;
                return new Promise(function (r) {
                  return setTimeout(r, 400);
                });

              case 7:
                return _context.abrupt("return", new Promise(function (resolve) {
                  _this.setState({
                    props: props,
                    onForceClose: onForceClose
                  }, resolve);
                }));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "showConfirmDialog", function (_ref3) {
      var title = _ref3.title,
          message = _ref3.message,
          _ref3$confirmButtonTe = _ref3.confirmButtonText,
          confirmButtonText = _ref3$confirmButtonTe === void 0 ? "Continue" : _ref3$confirmButtonTe,
          _ref3$cancelButtonTex = _ref3.cancelButtonText,
          cancelButtonText = _ref3$cancelButtonTex === void 0 ? "Cancel" : _ref3$cancelButtonTex;
      return new Promise(function (resolve) {
        var accept = function accept() {
          _this.hide();

          resolve({
            confirmed: true
          });
        };

        var reject = function reject() {
          _this.hide();

          resolve({
            confirmed: false
          });
        };

        _this.show({
          props: {
            show: true,
            heading: title,
            detail: message,
            primaryCta: {
              text: confirmButtonText,
              action: accept
            },
            secondaryCta: {
              text: cancelButtonText,
              action: reject
            },
            onClose: reject
          },
          onForceClose: reject
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "showErrorDialog", function () {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$title = _ref4.title,
          title = _ref4$title === void 0 ? "An error occurred" : _ref4$title,
          _ref4$supportEmail = _ref4.supportEmail,
          supportEmail = _ref4$supportEmail === void 0 ? "orders@artsy.net" : _ref4$supportEmail,
          _ref4$message = _ref4.message,
          message = _ref4$message === void 0 ? _react.default.createElement(_react.default.Fragment, null, "Something went wrong. Please try again or contact", " ", _react.default.createElement(_palette.Link, {
        href: "mailto:".concat(supportEmail, "}")
      }, supportEmail), ".") : _ref4$message,
          _ref4$continueButtonT = _ref4.continueButtonText,
          continueButtonText = _ref4$continueButtonT === void 0 ? "Continue" : _ref4$continueButtonT;

      return new Promise(function (resolve) {
        var onContinue = function onContinue() {
          _this.hide();

          resolve(true);
        };

        var onDismiss = function onDismiss() {
          _this.hide();

          resolve(false);
        };

        _this.show({
          props: {
            show: true,
            heading: title,
            detail: message,
            primaryCta: {
              text: continueButtonText,
              action: onContinue
            },
            onClose: onDismiss
          },
          onForceClose: onDismiss
        });
      });
    });

    return _this;
  }

  return DialogContainer;
}(_unstated.Container);

exports.DialogContainer = DialogContainer;

var extractDialogHelpers = function extractDialogHelpers(_ref5) {
  var show = _ref5.show,
      hide = _ref5.hide,
      showErrorDialog = _ref5.showErrorDialog,
      showConfirmDialog = _ref5.showConfirmDialog;
  return {
    show: show,
    hide: hide,
    showErrorDialog: showErrorDialog,
    showConfirmDialog: showConfirmDialog
  };
};

/**
 * Injects the `dialog` prop into the given page component
 * @param Component
 */
function injectDialog(Component) {
  return function (props) {
    return _react.default.createElement(_unstated.Subscribe, {
      to: [DialogContainer]
    }, function (dialog) {
      return _react.default.createElement(Component, _extends({}, props, {
        dialog: extractDialogHelpers(dialog)
      }));
    });
  };
}

var ConnectedModalDialog = function ConnectedModalDialog() {
  return _react.default.createElement(_unstated.Subscribe, {
    to: [DialogContainer]
  }, function (dialogs) {
    return _react.default.createElement(_ModalDialog.ModalDialog, dialogs.state.props);
  });
};

exports.ConnectedModalDialog = ConnectedModalDialog;
//# sourceMappingURL=Dialogs.js.map