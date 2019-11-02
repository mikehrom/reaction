"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegisterRouteFragmentContainer = exports.RegisterRoute = void 0;

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.array.is-array");

require("regenerator-runtime/runtime");

require("core-js/modules/es6.promise");

var _palette = require("@artsy/palette");

var _RegistrationForm = require("../../Components/RegistrationForm");

var _AppContainer = require("../../../Components/AppContainer");

var _trackPageViewWrapper = require("../../../Order/Utils/trackPageViewWrapper");

var _Artsy = require("../../../../Artsy");

var Schema = _interopRequireWildcard(require("../../../../Artsy/Analytics/Schema"));

var _react = _interopRequireDefault(require("react"));

var _reactHead = require("react-head");

var _reactRelay = require("react-relay");

var _sharify = require("sharify");

var _logger = _interopRequireDefault(require("../../../../Utils/logger"));

var _graphql, _graphql2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var logger = (0, _logger.default)("Apps/Auction/Routes/Register");

var RegisterRoute = function RegisterRoute(props) {
  var me = props.me,
      relay = props.relay,
      sale = props.sale,
      tracking = props.tracking;
  var commonProperties = {
    auction_slug: sale.id,
    auction_state: sale.status,
    sale_id: sale._id,
    user_id: me.id
  };

  function trackRegistrationFailed(errors) {
    tracking.trackEvent(_objectSpread({
      action_type: Schema.ActionType.RegistrationSubmitFailed,
      error_messages: errors
    }, commonProperties));
  }

  function trackRegistrationSuccess(bidderId) {
    tracking.trackEvent(_objectSpread({
      action_type: Schema.ActionType.RegistrationSubmitted,
      bidder_id: bidderId
    }, commonProperties));
  }

  function createBidder() {
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(resolve, reject) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                (0, _reactRelay.commitMutation)(relay.environment, {
                  onCompleted: function onCompleted(data) {
                    resolve(data);
                  },
                  onError: function onError(error) {
                    reject(error);
                  },
                  mutation: _graphql || (_graphql = function _graphql() {
                    var node = require("../../../../__generated__/RegisterCreateBidderMutation.graphql");

                    if (node.hash && node.hash !== "2026ef93ec0debedc112e1d8b4ba9c6b") {
                      console.error("The definition of 'RegisterCreateBidderMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
                    }

                    return require("../../../../__generated__/RegisterCreateBidderMutation.graphql");
                  }),
                  variables: {
                    input: {
                      sale_id: sale.id
                    }
                  }
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  function createCreditCardAndUpdatePhone(phone, token) {
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(resolve, reject) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                (0, _reactRelay.commitMutation)(relay.environment, {
                  onCompleted: function onCompleted(data, errors) {
                    var creditCardOrError = data.createCreditCard.creditCardOrError;

                    if (creditCardOrError.creditCardEdge) {
                      resolve();
                    } else {
                      if (errors) {
                        reject(errors);
                      } else {
                        reject(creditCardOrError.mutationError);
                      }
                    }
                  },
                  onError: reject,
                  mutation: _graphql2 || (_graphql2 = function _graphql2() {
                    var node = require("../../../../__generated__/RegisterCreateCreditCardAndUpdatePhoneMutation.graphql");

                    if (node.hash && node.hash !== "00a2498f3a22aea39c5d39bdcb14aaee") {
                      console.error("The definition of 'RegisterCreateCreditCardAndUpdatePhoneMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
                    }

                    return require("../../../../__generated__/RegisterCreateCreditCardAndUpdatePhoneMutation.graphql");
                  }),
                  variables: {
                    creditCardInput: {
                      token: token
                    },
                    profileInput: {
                      phone: phone
                    }
                  }
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }());
  }

  function handleMutationError(actions, error) {
    logger.error(error);
    var errorMessages;

    if (Array.isArray(error)) {
      errorMessages = error.map(function (e) {
        return e.message;
      });
    } else if (typeof error === "string") {
      errorMessages = [error];
    } else if (error.message) {
      errorMessages = [error.message];
    }

    trackRegistrationFailed(errorMessages);
    actions.setSubmitting(false);
    actions.setStatus("submissionFailed");
  }

  function handleSubmit(actions, result) {
    createCreditCardAndUpdatePhone(result.phoneNumber, result.token.id).then(function () {
      createBidder().then(function (data) {
        trackRegistrationSuccess(data.createBidder.bidder.id);
        window.location.assign("".concat(_sharify.data.APP_URL, "/auction/").concat(sale.id, "/confirm-registration"));
      }).catch(function (error) {
        handleMutationError(actions, error);
      });
    }).catch(function (error) {
      handleMutationError(actions, error);
    });
  }

  return _react.default.createElement(_AppContainer.AppContainer, null, _react.default.createElement(_reactHead.Title, null, "Auction Registration"), _react.default.createElement(_palette.Box, {
    maxWidth: 550,
    px: [2, 0],
    mx: "auto",
    mt: [1, 0],
    mb: [1, 100]
  }, _react.default.createElement(_palette.Serif, {
    size: "10"
  }, "Register to Bid on Artsy"), _react.default.createElement(_palette.Separator, {
    mt: 1,
    mb: 2
  }), _react.default.createElement(_RegistrationForm.StripeWrappedRegistrationForm, {
    onSubmit: handleSubmit,
    trackSubmissionErrors: trackRegistrationFailed
  })));
};

exports.RegisterRoute = RegisterRoute;

var TrackingWrappedRegisterRoute = function TrackingWrappedRegisterRoute(props) {
  var Component = (0, _Artsy.track)({
    context_page: Schema.PageName.AuctionRegistrationPage
  })(RegisterRoute);
  return _react.default.createElement(Component, props);
};

var RegisterRouteFragmentContainer = (0, _reactRelay.createFragmentContainer)((0, _trackPageViewWrapper.trackPageViewWrapper)(TrackingWrappedRegisterRoute), {
  sale: function sale() {
    var node = require("../../../../__generated__/Register_sale.graphql");

    if (node.hash && node.hash !== "6cb810d08c8eb385cdf81e6fa877f372") {
      console.error("The definition of 'Register_sale' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/Register_sale.graphql");
  },
  me: function me() {
    var node = require("../../../../__generated__/Register_me.graphql");

    if (node.hash && node.hash !== "6252a43fa617a5b5d2d66ceffe124a21") {
      console.error("The definition of 'Register_me' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/Register_me.graphql");
  }
});
exports.RegisterRouteFragmentContainer = RegisterRouteFragmentContainer;
//# sourceMappingURL=index.js.map