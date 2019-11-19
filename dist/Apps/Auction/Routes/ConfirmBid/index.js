"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfirmBidRouteFragmentContainer = exports.StripeWrappedConfirmBidRoute = exports.ConfirmBidRoute = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.regexp.search");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.number.constructor");

require("regenerator-runtime/runtime");

require("core-js/modules/es6.promise");

var _palette = require("@artsy/palette");

var _BidForm = require("../../Components/BidForm");

var _LotInfo = require("../../Components/LotInfo");

var _BidderPositionQuery = require("./BidderPositionQuery");

var _Register = require("../Register");

var _AppContainer = require("../../../Components/AppContainer");

var _trackPageViewWrapper = require("../../../Order/Utils/trackPageViewWrapper");

var _Artsy = require("../../../../Artsy");

var Schema = _interopRequireWildcard(require("../../../../Artsy/Analytics/Schema"));

var _useTracking2 = require("../../../../Artsy/Analytics/useTracking");

var _qs = _interopRequireDefault(require("qs"));

var _react = _interopRequireWildcard(require("react"));

var _reactHead = require("react-head");

var _reactRelay = require("react-relay");

var _reactStripeElements = require("react-stripe-elements");

var _sharify = require("sharify");

var _get = require("../../../../Utils/get");

var _logger = _interopRequireDefault(require("../../../../Utils/logger"));

var _graphql;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var logger = (0, _logger.default)("Apps/Auction/Routes/ConfirmBid");
var MAX_POLL_ATTEMPTS = 20;

var ConfirmBidRoute = function ConfirmBidRoute(props) {
  var pollCount = 0;
  var artwork = props.artwork,
      me = props.me,
      relay = props.relay,
      stripe = props.stripe;
  var saleArtwork = artwork.saleArtwork;
  var sale = saleArtwork.sale;
  var environment = relay.environment;

  var _useTracking = (0, _useTracking2.useTracking)(),
      trackEvent = _useTracking.trackEvent;

  var _determineDisplayRequ = (0, _BidForm.determineDisplayRequirements)(sale.registrationStatus, me),
      requiresPaymentInformation = _determineDisplayRequ.requiresPaymentInformation;

  function createBidderPosition(maxBidAmountCents) {
    return new Promise(function (resolve, reject) {
      (0, _reactRelay.commitMutation)(environment, {
        onCompleted: function onCompleted(data) {
          return resolve(data);
        },
        onError: function onError(error) {
          return reject(error);
        },
        mutation: _graphql || (_graphql = function _graphql() {
          var node = require("../../../../__generated__/ConfirmBidCreateBidderPositionMutation.graphql");

          if (node.hash && node.hash !== "4717cf31f235967d3d66738c0b632bc5") {
            console.error("The definition of 'ConfirmBidCreateBidderPositionMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
          }

          return require("../../../../__generated__/ConfirmBidCreateBidderPositionMutation.graphql");
        }),
        variables: {
          input: {
            sale_id: sale.id,
            artwork_id: artwork.id,
            max_bid_amount_cents: maxBidAmountCents
          }
        }
      });
    });
  }

  function onJsError(actions, error, bidderId) {
    logger.error(error);
    trackConfirmBidFailed(bidderId, ["JavaScript error: ".concat(error.message)]);
    actions.setSubmitting(false);
    actions.setStatus("Something went wrong while processing your bid. Please make sure your internet connection is active and try again");
  }

  function trackConfirmBidFailed(bidderId, errors) {
    trackEvent({
      action_type: Schema.ActionType.ConfirmBidFailed,
      bidder_id: bidderId,
      error_messages: errors
    });
  }

  function trackConfirmBidSuccess(positionId, bidderId, selectedBidAmountCents) {
    trackEvent({
      action_type: Schema.ActionType.ConfirmBidSubmitted,
      bidder_position_id: positionId,
      bidder_id: bidderId,
      order_id: bidderId,
      products: [{
        product_id: artwork._id,
        quantity: 1,
        price: selectedBidAmountCents / 100
      }]
    });
  }

  var createTokenFromAddress =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(address) {
      var _ref2, error, token;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return stripe.createToken(address);

            case 2:
              _ref2 = _context.sent;
              error = _ref2.error;
              token = _ref2.token;

              if (!error) {
                _context.next = 9;
                break;
              }

              throw new Error("Stripe error: ".concat(error.message || error.decline_code));

            case 9:
              return _context.abrupt("return", token);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function createTokenFromAddress(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  function handleSubmit(_x2, _x3) {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(values, actions) {
      var selectedBid, possibleExistingBidderId, address, stripeAddress, token;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              selectedBid = Number(values.selectedBid);
              possibleExistingBidderId = sale.registrationStatus && sale.registrationStatus.id;

              if (!requiresPaymentInformation) {
                _context2.next = 17;
                break;
              }

              _context2.prev = 3;
              address = values.address;
              stripeAddress = {
                name: address.name,
                address_line1: address.addressLine1,
                address_line2: address.addressLine2,
                address_country: address.country,
                address_city: address.city,
                address_state: address.region,
                address_zip: address.postalCode
              };
              _context2.next = 8;
              return createTokenFromAddress(stripeAddress);

            case 8:
              token = _context2.sent;
              _context2.next = 11;
              return (0, _Register.createCreditCardAndUpdatePhone)(environment, address.phoneNumber, token.id);

            case 11:
              _context2.next = 17;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](3);
              onJsError(actions, _context2.t0, possibleExistingBidderId);
              return _context2.abrupt("return");

            case 17:
              createBidderPosition(selectedBid).then(function (data) {
                return verifyBidderPosition({
                  actions: actions,
                  data: data,
                  selectedBid: selectedBid,
                  possibleExistingBidderId: possibleExistingBidderId
                });
              }).catch(function (error) {
                return onJsError(actions, error, possibleExistingBidderId);
              });

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[3, 13]]);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  function verifyBidderPosition(_ref3) {
    var actions = _ref3.actions,
        data = _ref3.data,
        possibleExistingBidderId = _ref3.possibleExistingBidderId,
        selectedBid = _ref3.selectedBid;
    var result = data.createBidderPosition.result;
    var position = result.position,
        messageHeader = result.messageHeader;
    var bidderId = possibleExistingBidderId || position && position.sale_artwork && position.sale_artwork.sale && position.sale_artwork.sale.registrationStatus.id;

    if (result.status === "SUCCESS") {
      (0, _BidderPositionQuery.bidderPositionQuery)(environment, {
        bidderPositionID: position.id
      }).then(function (res) {
        return checkBidderPosition({
          actions: actions,
          data: res,
          bidderId: bidderId,
          selectedBid: selectedBid
        });
      }).catch(function (error) {
        return onJsError(actions, error, bidderId);
      });
    } else {
      actions.setStatus(messageHeader);
      actions.setSubmitting(false);
      trackConfirmBidFailed(bidderId, [messageHeader]);
    }
  }

  function checkBidderPosition(_ref4) {
    var actions = _ref4.actions,
        data = _ref4.data,
        bidderId = _ref4.bidderId,
        selectedBid = _ref4.selectedBid;
    var bidderPosition = data.me.bidderPosition;
    var status = bidderPosition.status,
        position = bidderPosition.position,
        messageHeader = bidderPosition.messageHeader;

    if (status === "PENDING" && pollCount < MAX_POLL_ATTEMPTS) {
      // initiating new request here (vs setInterval) to make sure we wait for
      // the previous call to return before making a new one
      setTimeout(function () {
        return (0, _BidderPositionQuery.bidderPositionQuery)(environment, {
          bidderPositionID: position.id
        }).then(function (res) {
          return checkBidderPosition({
            actions: actions,
            data: res,
            bidderId: bidderId,
            selectedBid: selectedBid
          });
        }).catch(function (error) {
          return onJsError(actions, error, bidderId);
        });
      }, 1000);
      pollCount += 1;
    } else if (status === "WINNING") {
      trackConfirmBidSuccess(position.id, bidderId, selectedBid);
      window.location.assign("".concat(_sharify.data.APP_URL, "/artwork/").concat(artwork.id));
    } else {
      actions.setStatus(messageHeader);
      actions.setSubmitting(false);
      trackConfirmBidFailed(bidderId, [messageHeader]);
    }
  }

  return _react.default.createElement(_AppContainer.AppContainer, null, _react.default.createElement(_reactHead.Title, null, "Confirm Bid | Artsy"), _react.default.createElement(_palette.Box, {
    maxWidth: 550,
    px: [2, 0],
    mx: "auto",
    mt: [1, 0],
    mb: [1, 100]
  }, _react.default.createElement(_palette.Serif, {
    size: "8"
  }, "Confirm your bid"), _react.default.createElement(_palette.Separator, null), _react.default.createElement(_LotInfo.LotInfoFragmentContainer, {
    artwork: artwork,
    saleArtwork: artwork.saleArtwork
  }), _react.default.createElement(_palette.Separator, null), _react.default.createElement(_BidForm.BidFormFragmentContainer, {
    initialSelectedBid: getInitialSelectedBid(props.location),
    showPricingTransparency: false,
    saleArtwork: saleArtwork,
    onSubmit: handleSubmit,
    me: me
  })));
};

exports.ConfirmBidRoute = ConfirmBidRoute;

var getInitialSelectedBid = function getInitialSelectedBid(location) {
  return (0, _get.get)(_qs.default, function (querystring) {
    return querystring.parse(location.search.slice(1)).bid;
  }, undefined);
};

var StripeInjectedConfirmBidRoute = (0, _reactStripeElements.injectStripe)(ConfirmBidRoute);

var StripeWrappedConfirmBidRoute = function StripeWrappedConfirmBidRoute(props) {
  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      stripe = _useState2[0],
      setStripe = _useState2[1];

  function setupStripe() {
    setStripe(window.Stripe(_sharify.data.STRIPE_PUBLISHABLE_KEY));
  }

  (0, _react.useEffect)(function () {
    if (window.Stripe) {
      setStripe(window.Stripe(_sharify.data.STRIPE_PUBLISHABLE_KEY));
    } else {
      document.querySelector("#stripe-js").addEventListener("load", setupStripe);
      return function () {
        document.querySelector("#stripe-js").removeEventListener("load", setupStripe);
      };
    }
  }, []);
  return _react.default.createElement(_reactStripeElements.StripeProvider, {
    stripe: stripe
  }, _react.default.createElement(_reactStripeElements.Elements, null, _react.default.createElement(StripeInjectedConfirmBidRoute, props)));
};

exports.StripeWrappedConfirmBidRoute = StripeWrappedConfirmBidRoute;

var TrackingWrappedConfirmBidRoute = function TrackingWrappedConfirmBidRoute(props) {
  var Component = (0, _Artsy.track)(function (p) {
    return {
      context_page: Schema.PageName.AuctionConfirmBidPage,
      auction_slug: p.artwork.saleArtwork.sale.id,
      artwork_slug: p.artwork.id,
      sale_id: p.artwork.saleArtwork.sale._id,
      user_id: p.me.id
    };
  })(StripeWrappedConfirmBidRoute);
  return _react.default.createElement(Component, props);
};

var ConfirmBidRouteFragmentContainer = (0, _reactRelay.createFragmentContainer)((0, _trackPageViewWrapper.trackPageViewWrapper)(TrackingWrappedConfirmBidRoute), {
  me: function me() {
    var node = require("../../../../__generated__/ConfirmBid_me.graphql");

    if (node.hash && node.hash !== "1d5fb927e240a30087d3ea0cdb5d7ca6") {
      console.error("The definition of 'ConfirmBid_me' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/ConfirmBid_me.graphql");
  }
});
exports.ConfirmBidRouteFragmentContainer = ConfirmBidRouteFragmentContainer;
//# sourceMappingURL=index.js.map