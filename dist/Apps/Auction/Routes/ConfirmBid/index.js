"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfirmBidRouteFragmentContainer = exports.ConfirmBidRoute = void 0;

require("core-js/modules/es6.regexp.search");

require("core-js/modules/es6.number.constructor");

require("core-js/modules/es6.promise");

var _palette = require("@artsy/palette");

var _BidForm = require("../../Components/BidForm");

var _LotInfo = require("../../Components/LotInfo");

var _BidderPositionQuery = require("./BidderPositionQuery");

var _AppContainer = require("../../../Components/AppContainer");

var _trackPageViewWrapper = require("../../../Order/Utils/trackPageViewWrapper");

var _Artsy = require("../../../../Artsy");

var Schema = _interopRequireWildcard(require("../../../../Artsy/Analytics/Schema"));

var _useTracking2 = require("../../../../Artsy/Analytics/useTracking");

var _qs = _interopRequireDefault(require("qs"));

var _react = _interopRequireDefault(require("react"));

var _reactHead = require("react-head");

var _reactRelay = require("react-relay");

var _sharify = require("sharify");

var _get = require("../../../../Utils/get");

var _logger = _interopRequireDefault(require("../../../../Utils/logger"));

var _graphql;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var logger = (0, _logger.default)("Apps/Auction/Routes/ConfirmBid");
var MAX_POLL_ATTEMPTS = 20;

var ConfirmBidRoute = function ConfirmBidRoute(props) {
  var pollCount = 0;
  var artwork = props.artwork,
      me = props.me,
      relay = props.relay;
  var saleArtwork = artwork.saleArtwork;
  var sale = saleArtwork.sale;
  var environment = relay.environment;

  var _useTracking = (0, _useTracking2.useTracking)(),
      trackEvent = _useTracking.trackEvent;

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

  function handleSubmit(values, actions) {
    var selectedBid = Number(values.selectedBid);
    var possibleExistingBidderId = sale.registrationStatus && sale.registrationStatus.id;
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
  }

  function verifyBidderPosition(_ref) {
    var actions = _ref.actions,
        data = _ref.data,
        possibleExistingBidderId = _ref.possibleExistingBidderId,
        selectedBid = _ref.selectedBid;
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

  function checkBidderPosition(_ref2) {
    var actions = _ref2.actions,
        data = _ref2.data,
        bidderId = _ref2.bidderId,
        selectedBid = _ref2.selectedBid;
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

var TrackingWrappedConfirmBidRoute = function TrackingWrappedConfirmBidRoute(props) {
  var Component = (0, _Artsy.track)(function (p) {
    return {
      context_page: Schema.PageName.AuctionConfirmBidPage,
      auction_slug: p.artwork.saleArtwork.sale.id,
      artwork_slug: p.artwork.id,
      sale_id: p.artwork.saleArtwork.sale._id,
      user_id: p.me.id
    };
  })(ConfirmBidRoute);
  return _react.default.createElement(Component, props);
};

var ConfirmBidRouteFragmentContainer = (0, _reactRelay.createFragmentContainer)((0, _trackPageViewWrapper.trackPageViewWrapper)(TrackingWrappedConfirmBidRoute), {});
exports.ConfirmBidRouteFragmentContainer = ConfirmBidRouteFragmentContainer;
//# sourceMappingURL=index.js.map