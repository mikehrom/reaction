"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtistAuctionDetailsModal = void 0;

var _Modal = require("../../../../Components/Modal/Modal");

var _react = _interopRequireDefault(require("react"));

var _unstated = require("unstated");

var _state = require("./state");

var _palette = require("@artsy/palette");

var _get = require("../../../../Utils/get");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArtistAuctionDetailsModal = function ArtistAuctionDetailsModal(props) {
  return _react.default.createElement(_unstated.Subscribe, {
    to: [_state.AuctionResultsState]
  }, function (_ref) {
    var state = _ref.state,
        hideDetailsModal = _ref.hideDetailsModal;

    if (!state.showModal) {
      return null;
    }

    return _react.default.createElement(_Modal.Modal, {
      onClose: function onClose() {
        return hideDetailsModal();
      },
      show: state.showModal,
      style: {
        maxHeight: 540,
        overflowX: "scroll"
      }
    }, _react.default.createElement(LotDetails, {
      auctionResult: state.selectedAuction.auctionResult,
      hideDetailsModal: hideDetailsModal
    }));
  });
};

exports.ArtistAuctionDetailsModal = ArtistAuctionDetailsModal;

var LotDetails = function LotDetails(props) {
  var hideDetailsModal = props.hideDetailsModal,
      _props$auctionResult = props.auctionResult,
      title = _props$auctionResult.title,
      date_text = _props$auctionResult.date_text,
      dimension_text = _props$auctionResult.dimension_text,
      images = _props$auctionResult.images,
      description = _props$auctionResult.description;
  var imageUrl = (0, _get.get)(images, function (i) {
    return i.thumbnail.url;
  }, "");
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Flex, {
    justifyContent: "center"
  }, _react.default.createElement(_palette.Serif, {
    size: "5t",
    weight: "semibold"
  }, "Lot description")), _react.default.createElement(_palette.Spacer, {
    mb: 4
  }), _react.default.createElement(_palette.Flex, null, _react.default.createElement(_palette.Box, null, _react.default.createElement(_palette.Serif, {
    size: "2",
    italic: true
  }, title && title + ",", date_text), _react.default.createElement(_palette.Serif, {
    size: "2",
    color: "black60"
  }, dimension_text)), _react.default.createElement(_palette.Spacer, {
    mr: 2
  }), _react.default.createElement(_palette.Box, {
    height: "auto"
  }, _react.default.createElement(_palette.Image, {
    width: "100px",
    src: imageUrl
  }))), _react.default.createElement(_palette.Box, {
    my: 3
  }, _react.default.createElement(_palette.Separator, null)), _react.default.createElement(_palette.Box, {
    mb: 1
  }, _react.default.createElement(_palette.Sans, {
    size: "2",
    weight: "medium"
  }, "Description")), _react.default.createElement(_palette.Serif, {
    size: "2"
  }, description), _react.default.createElement(_palette.Spacer, {
    mb: 4
  }), _react.default.createElement(_palette.Button, {
    variant: "secondaryOutline",
    width: "100%",
    onClick: function onClick() {
      return hideDetailsModal();
    }
  }, "OK"));
};
//# sourceMappingURL=ArtistAuctionDetailsModal.js.map