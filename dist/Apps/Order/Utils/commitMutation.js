"use strict";

require("core-js/modules/es6.object.assign");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.injectCommitMutation = injectCommitMutation;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.promise");

var _Artsy = require("../../../Artsy");

var _react = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MutationContext = _react.default.createContext({
  isCommittingMutation: false,
  commitMutation: function commitMutation() {
    throw new Error("no mutation context in react tree");
  }
});

var ProvideMutationContext =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProvideMutationContext, _React$Component);

  function ProvideMutationContext() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ProvideMutationContext);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ProvideMutationContext)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "execQueue", []);

    _defineProperty(_assertThisInitialized(_this), "state", {
      isCommittingMutation: false
    });

    _defineProperty(_assertThisInitialized(_this), "commitMutation", function (_ref) {
      var variables = _ref.variables,
          mutation = _ref.mutation;

      if (_this.state.isCommittingMutation) {
        throw new Error("Mutliple simulataneous mutations is not currently supported");
      }

      _this.setState({
        isCommittingMutation: true
      });

      return new Promise(function (resolve, reject) {
        try {
          (0, _reactRelay.commitMutation)(_this.props.relayEnvironment, {
            mutation: mutation,
            variables: variables,
            onCompleted: function onCompleted(data, errors) {
              _this.setState({
                isCommittingMutation: false
              }, function () {
                if (errors) {
                  reject(new Error(errors.join("\n")));
                  return;
                }

                resolve(data);
              });
            },
            onError: function onError(e) {
              _this.setState({
                isCommittingMutation: false
              }, function () {
                reject(e);
              });
            }
          });
        } catch (e) {
          reject(e);
        }
      });
    });

    return _this;
  }

  _createClass(ProvideMutationContext, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(MutationContext.Provider, {
        value: {
          commitMutation: this.commitMutation,
          isCommittingMutation: this.state.isCommittingMutation
        }
      }, this.props.children);
    }
  }]);

  return ProvideMutationContext;
}(_react.default.Component);

function injectCommitMutation(Component) {
  return function (props) {
    var _useContext = (0, _react.useContext)(_Artsy.SystemContext),
        relayEnvironment = _useContext.relayEnvironment;

    return _react.default.createElement(ProvideMutationContext, {
      relayEnvironment: relayEnvironment
    }, _react.default.createElement(MutationContext.Consumer, null, function (_ref2) {
      var isCommittingMutation = _ref2.isCommittingMutation,
          commitMutation = _ref2.commitMutation;
      return _react.default.createElement(Component, _extends({
        isCommittingMutation: isCommittingMutation,
        commitMutation: commitMutation
      }, props));
    }));
  };
}
//# sourceMappingURL=commitMutation.js.map