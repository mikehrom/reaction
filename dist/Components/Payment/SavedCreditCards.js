"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SavedCreditCards = exports.RemoveLink = exports.CreditCard = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.function.bind");

var _palette = require("@artsy/palette");

var _CreditCardDetails = require("../../Apps/Order/Components/CreditCardDetails");

var _ErrorModal = require("../Modal/ErrorModal");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _relayRuntime = require("relay-runtime");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _graphql;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var CreditCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CreditCard, _React$Component);

  function CreditCard() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CreditCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CreditCard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isErrorModalOpen: false,
      isCommittingMutation: false
    });

    _defineProperty(_assertThisInitialized(_this), "onCloseModal", function () {
      _this.setState({
        isErrorModalOpen: false
      });
    });

    return _this;
  }

  _createClass(CreditCard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.BorderBox, {
        flexDirection: "column",
        p: 2,
        mb: 2
      }, _react.default.createElement(_palette.Flex, {
        justifyContent: "space-between",
        alignItems: "center"
      }, _react.default.createElement(_CreditCardDetails.CreditCardDetails, this.props.creditCard), _react.default.createElement(_palette.Sans, {
        size: "2",
        color: "purple100"
      }, this.state.isCommittingMutation ? _react.default.createElement(SpinnerContainer, null, _react.default.createElement(_palette.Spinner, null)) : _react.default.createElement(RemoveLink, {
        onClick: function onClick() {
          return _this2.deleteCreditCard(_this2.props.me, _this2.props.creditCard.id);
        }
      }, "Remove")))), _react.default.createElement(_ErrorModal.ErrorModal, {
        onClose: this.onCloseModal,
        show: this.state.isErrorModalOpen,
        contactEmail: "support@artsy.net"
      }));
    }
  }, {
    key: "deleteCreditCard",
    value: function deleteCreditCard(me, id) {
      var _this3 = this;

      this.setState({
        isCommittingMutation: true
      }, function () {
        (0, _reactRelay.commitMutation)(_this3.props.relay.environment, {
          onCompleted: function onCompleted(data, errors) {
            var creditCardOrError = data.deleteCreditCard.creditCardOrError;

            if (creditCardOrError.creditCard) {
              _this3.setState({
                isCommittingMutation: false
              });
            } else {
              _this3.onMutationError(errors);
            }
          },
          onError: _this3.onMutationError.bind(_this3),
          mutation: _graphql || (_graphql = function _graphql() {
            var node = require("../../__generated__/SavedCreditCardsDeleteCreditCardMutation.graphql");

            if (node.hash && node.hash !== "fdbb2e721cfef50fc61b817332812582") {
              console.error("The definition of 'SavedCreditCardsDeleteCreditCardMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
            }

            return require("../../__generated__/SavedCreditCardsDeleteCreditCardMutation.graphql");
          }),
          variables: {
            input: {
              id: id
            }
          },
          updater: function updater(store, data) {
            return _this3.onCreditCardDeleted(store, me, data);
          }
        });
      });
    }
  }, {
    key: "onCreditCardDeleted",
    value: function onCreditCardDeleted(store, me, data) {
      var creditCardOrError = data.deleteCreditCard.creditCardOrError; // Explicitly update relay store so the UI updates immediately

      if (creditCardOrError.creditCard) {
        var mutationPayload = store.getRootField("deleteCreditCard");
        var creditCardOrErrorEdge = mutationPayload.getLinkedRecord("creditCardOrError");
        var creditCardEdge = creditCardOrErrorEdge.getLinkedRecord("creditCard");
        var creditCardId = creditCardEdge.getValue("__id");
        var meStore = store.get(me.__id);

        var connection = _relayRuntime.ConnectionHandler.getConnection(meStore, "UserSettingsPayments_creditCards");

        _relayRuntime.ConnectionHandler.deleteNode(connection, creditCardId);
      }
    }
  }, {
    key: "onMutationError",
    value: function onMutationError(errors) {
      console.error("SavedCreditCards.tsx", errors);
      this.setState({
        isErrorModalOpen: true,
        isCommittingMutation: false
      });
    }
  }]);

  return CreditCard;
}(_react.default.Component);

exports.CreditCard = CreditCard;

var RemoveLink = _styledComponents.default.div.withConfig({
  displayName: "SavedCreditCards__RemoveLink",
  componentId: "sc-12q8blm-0"
})(["text-align:right;&:hover{cursor:pointer;}"]);

exports.RemoveLink = RemoveLink;

var SpinnerContainer = _styledComponents.default.div.withConfig({
  displayName: "SavedCreditCards__SpinnerContainer",
  componentId: "sc-12q8blm-1"
})(["padding-right:30px;position:relative;"]);

var SavedCreditCards = function SavedCreditCards(props) {
  return _react.default.createElement(_react.default.Fragment, null, props.creditCards.map(function (creditCard, i) {
    return _react.default.createElement(CreditCard, {
      creditCard: creditCard,
      key: i,
      relay: props.relay,
      me: props.me
    });
  }));
};

exports.SavedCreditCards = SavedCreditCards;
//# sourceMappingURL=SavedCreditCards.js.map