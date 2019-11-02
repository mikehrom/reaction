"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtworkSidebarCommercialFragmentContainer = exports.ArtworkSidebarCommercial = exports.ArtworkSidebarCommercialContainer = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.reduce");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.function.bind");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.array.find");

var _palette = require("@artsy/palette");

var _Artsy = require("../../../../Artsy");

var _Analytics = require("../../../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../../../Artsy/Analytics/Schema"));

var _ErrorModal = require("../../../../Components/Modal/ErrorModal");

var _currency = _interopRequireDefault(require("currency.js"));

var _react = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _errors = require("../../../../Utils/errors");

var _get = require("../../../../Utils/get");

var _logger = _interopRequireDefault(require("../../../../Utils/logger"));

var _ArtworkSidebarSizeInfo = require("./ArtworkSidebarSizeInfo");

var _graphql, _graphql2, _dec, _dec2, _dec3, _dec4, _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Row = function Row(_ref) {
  var children = _ref.children,
      others = _objectWithoutProperties(_ref, ["children"]);

  return _react.default.createElement(_palette.Flex, _extends({
    justifyContent: "left"
  }, others), children);
};

var logger = (0, _logger.default)("Artwork/Components/ArtworkSidebar/ArtworkSidebarCommercial.tsx");
var ArtworkSidebarCommercialContainer = (_dec = (0, _Analytics.track)(), _dec2 = (0, _Analytics.track)(function (props) {
  return {
    context_module: Schema.ContextModule.Sidebar,
    action_type: Schema.ActionType.ClickedContactGallery,
    subject: Schema.Subject.ContactGallery,
    artwork_id: props.artwork._id,
    artwork_slug: props.artwork.id
  };
}), _dec3 = (0, _Analytics.track)(function (props, state, args) {
  return {
    action_type: Schema.ActionType.ClickedBuyNow,
    flow: Schema.Flow.BuyNow,
    type: Schema.Type.Button,
    artwork_id: props.artwork._id,
    artwork_slug: props.artwork.id,
    products: [{
      product_id: props.artwork._id,
      quantity: 1,
      price: (0, _currency.default)(props.artwork.price).value
    }]
  };
}), _dec4 = (0, _Analytics.track)(function (props, state, args) {
  return {
    action_type: Schema.ActionType.ClickedMakeOffer,
    flow: Schema.Flow.MakeOffer,
    type: Schema.Type.Button,
    artwork_id: props.artwork._id,
    artwork_slug: props.artwork.id
  };
}), _dec(_class = (_class2 = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ArtworkSidebarCommercialContainer, _React$Component);

  function ArtworkSidebarCommercialContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ArtworkSidebarCommercialContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ArtworkSidebarCommercialContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isCommittingCreateOrderMutation: false,
      isCommittingCreateOfferOrderMutation: false,
      isErrorModalOpen: false,
      selectedEditionSet: _this.firstAvailableEcommerceEditionSet()
    });

    _defineProperty(_assertThisInitialized(_this), "onMutationError", function (error) {
      logger.error(error);

      _this.setState({
        isCommittingCreateOrderMutation: false,
        isErrorModalOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onCloseModal", function () {
      _this.setState({
        isErrorModalOpen: false
      });
    });

    return _this;
  }

  _createClass(ArtworkSidebarCommercialContainer, [{
    key: "firstAvailableEcommerceEditionSet",
    value: function firstAvailableEcommerceEditionSet() {
      var editionSets = this.props.artwork.edition_sets;
      return editionSets.find(function (editionSet) {
        return editionSet.is_acquireable || editionSet.is_offerable;
      });
    }
  }, {
    key: "renderSaleMessage",
    value: function renderSaleMessage(saleMessage) {
      return _react.default.createElement(_palette.Serif, {
        size: "5t",
        weight: "semibold"
      }, saleMessage);
    }
  }, {
    key: "renderEditionSet",
    value: function renderEditionSet(editionSet, includeSelectOption) {
      var _this2 = this;

      var editionEcommerceAvailable = editionSet.is_acquireable || editionSet.is_offerable;

      var editionFragment = _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ArtworkSidebarSizeInfo.ArtworkSidebarSizeInfoFragmentContainer, {
        piece: editionSet
      }), _react.default.createElement(_palette.Serif, {
        ml: "auto",
        size: "2"
      }, editionSet.sale_message));

      if (includeSelectOption) {
        return _react.default.createElement(Row, null, _react.default.createElement(_palette.Radio, {
          mr: "1",
          onSelect: function onSelect(e) {
            _this2.setState({
              selectedEditionSet: editionSet
            });
          },
          selected: this.state.selectedEditionSet === editionSet,
          disabled: !editionEcommerceAvailable,
          label: editionFragment
        }));
      } else {
        return _react.default.createElement(Row, null, editionFragment);
      }
    }
  }, {
    key: "renderEditionSets",
    value: function renderEditionSets(includeSelectOption) {
      var _this3 = this;

      var editionSets = this.props.artwork.edition_sets;
      var editionSetsFragment = editionSets.map(function (editionSet, index) {
        return _react.default.createElement(_react.default.Fragment, {
          key: editionSet.__id
        }, _react.default.createElement(_palette.Box, {
          py: 3
        }, _this3.renderEditionSet(editionSet, includeSelectOption)), index !== editionSets.length - 1 && _react.default.createElement(_palette.Separator, null));
      });
      return _react.default.createElement(_palette.RadioGroup, null, editionSetsFragment);
    }
  }, {
    key: "handleInquiry",
    value: function handleInquiry() {
      (0, _get.get)(this.props, function (props) {
        return props.mediator.trigger;
      }) && this.props.mediator.trigger("launchInquiryFlow", {
        artworkId: this.props.artwork.id
      });
    }
  }, {
    key: "handleCreateOrder",
    value: function handleCreateOrder() {
      var _this4 = this;

      var _this$props = this.props,
          user = _this$props.user,
          mediator = _this$props.mediator;

      if (user && user.id) {
        this.setState({
          isCommittingCreateOrderMutation: true
        }, function () {
          if ((0, _get.get)(_this4.props, function (props) {
            return props.relay.environment;
          })) {
            (0, _reactRelay.commitMutation)(_this4.props.relay.environment, {
              mutation: _graphql || (_graphql = function _graphql() {
                var node = require("../../../../__generated__/ArtworkSidebarCommercialOrderMutation.graphql");

                if (node.hash && node.hash !== "f717141f6a7d35c3ec8158089159d2eb") {
                  console.error("The definition of 'ArtworkSidebarCommercialOrderMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
                }

                return require("../../../../__generated__/ArtworkSidebarCommercialOrderMutation.graphql");
              }),
              variables: {
                input: {
                  artworkId: _this4.props.artwork._id,
                  editionSetId: (0, _get.get)(_this4.state, function (state) {
                    return state.selectedEditionSet.id;
                  })
                }
              },
              onCompleted: function onCompleted(data) {
                _this4.setState({
                  isCommittingCreateOrderMutation: false
                }, function () {
                  var orderOrError = data.commerceCreateOrderWithArtwork.orderOrError;

                  if (orderOrError.error) {
                    _this4.onMutationError(new _errors.ErrorWithMetadata(orderOrError.error.code, orderOrError.error));
                  } else {
                    window.location.assign("/orders/".concat(orderOrError.order.id));
                  }
                });
              },
              onError: _this4.onMutationError
            });
          }
        });
      } else {
        mediator.trigger("open:auth", {
          mode: "login",
          redirectTo: location.href
        });
      }
    }
  }, {
    key: "handleCreateOfferOrder",
    value: function handleCreateOfferOrder() {
      var _this5 = this;

      var _this$props2 = this.props,
          user = _this$props2.user,
          mediator = _this$props2.mediator;

      if (user && user.id) {
        this.setState({
          isCommittingCreateOfferOrderMutation: true
        }, function () {
          if ((0, _get.get)(_this5.props, function (props) {
            return props.relay.environment;
          })) {
            (0, _reactRelay.commitMutation)(_this5.props.relay.environment, {
              mutation: _graphql2 || (_graphql2 = function _graphql2() {
                var node = require("../../../../__generated__/ArtworkSidebarCommercialOfferOrderMutation.graphql");

                if (node.hash && node.hash !== "04da30893fac573be0833f0485eb2eac") {
                  console.error("The definition of 'ArtworkSidebarCommercialOfferOrderMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
                }

                return require("../../../../__generated__/ArtworkSidebarCommercialOfferOrderMutation.graphql");
              }),
              variables: {
                input: {
                  artworkId: _this5.props.artwork._id,
                  editionSetId: (0, _get.get)(_this5.state, function (state) {
                    return state.selectedEditionSet.id;
                  })
                }
              },
              onCompleted: function onCompleted(data) {
                _this5.setState({
                  isCommittingCreateOfferOrderMutation: false
                }, function () {
                  var orderOrError = data.commerceCreateOfferOrderWithArtwork.orderOrError;

                  if (orderOrError.error) {
                    _this5.onMutationError(new _errors.ErrorWithMetadata(orderOrError.error.code, orderOrError.error));
                  } else {
                    window.location.assign("/orders/".concat(orderOrError.order.id, "/offer"));
                  }
                });
              },
              onError: _this5.onMutationError
            });
          }
        });
      } else {
        mediator.trigger("open:auth", {
          mode: "login",
          redirectTo: location.href
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var artwork = this.props.artwork;
      var _this$state = this.state,
          isCommittingCreateOrderMutation = _this$state.isCommittingCreateOrderMutation,
          isCommittingCreateOfferOrderMutation = _this$state.isCommittingCreateOfferOrderMutation,
          selectedEditionSet = _this$state.selectedEditionSet;
      var artworkEcommerceAvailable = artwork.is_acquireable || artwork.is_offerable;

      if (!artwork.sale_message && !artwork.is_inquireable) {
        return _react.default.createElement(_palette.Separator, null);
      }

      return _react.default.createElement(_palette.Box, {
        textAlign: "left"
      }, artwork.sale_message && _react.default.createElement(_palette.Separator, null), artwork.edition_sets.length < 2 ? artwork.sale_message && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Spacer, {
        mb: 3
      }), this.renderSaleMessage(artwork.sale_message)) : _react.default.createElement(_react.default.Fragment, null, this.renderEditionSets(artworkEcommerceAvailable), selectedEditionSet && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Separator, {
        mb: 3
      }), this.renderSaleMessage(selectedEditionSet.sale_message))), artworkEcommerceAvailable && (artwork.shippingOrigin || artwork.shippingInfo) && _react.default.createElement(_palette.Spacer, {
        mt: 1
      }), artworkEcommerceAvailable && artwork.shippingOrigin && _react.default.createElement(_palette.Sans, {
        size: "2",
        color: "black60"
      }, "Ships from ", artwork.shippingOrigin), artworkEcommerceAvailable && artwork.shippingInfo && _react.default.createElement(_palette.Sans, {
        size: "2",
        color: "black60"
      }, artwork.shippingInfo), artworkEcommerceAvailable && artwork.priceIncludesTaxDisplay && _react.default.createElement(_palette.Sans, {
        size: "2",
        color: "black60"
      }, artwork.priceIncludesTaxDisplay), artwork.is_inquireable || artwork.is_acquireable || artwork.is_offerable ? artwork.sale_message && _react.default.createElement(_palette.Spacer, {
        mb: 3
      }) : _react.default.createElement(_palette.Separator, {
        mb: 3,
        mt: 3
      }), artwork.is_acquireable && _react.default.createElement(_palette.Button, {
        width: "100%",
        size: "large",
        loading: isCommittingCreateOrderMutation,
        onClick: this.handleCreateOrder.bind(this)
      }, "Buy now"), artwork.is_offerable && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Spacer, {
        mb: 2
      }), _react.default.createElement(_palette.Button, {
        variant: artwork.is_acquireable ? "secondaryOutline" : "primaryBlack",
        width: "100%",
        size: "large",
        loading: isCommittingCreateOfferOrderMutation,
        onClick: this.handleCreateOfferOrder.bind(this)
      }, "Make offer")), artwork.is_inquireable && !artwork.is_acquireable && !artwork.is_offerable && _react.default.createElement(_palette.Button, {
        width: "100%",
        size: "large",
        onClick: this.handleInquiry.bind(this)
      }, "Contact gallery"), _react.default.createElement(_ErrorModal.ErrorModal, {
        onClose: this.onCloseModal,
        show: this.state.isErrorModalOpen,
        contactEmail: "orders@artsy.net"
      }));
    }
  }]);

  return ArtworkSidebarCommercialContainer;
}(_react.default.Component), _temp), (_applyDecoratedDescriptor(_class2.prototype, "handleInquiry", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "handleInquiry"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "handleCreateOrder", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "handleCreateOrder"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "handleCreateOfferOrder", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "handleCreateOfferOrder"), _class2.prototype)), _class2)) || _class);
exports.ArtworkSidebarCommercialContainer = ArtworkSidebarCommercialContainer;

var ArtworkSidebarCommercial = function ArtworkSidebarCommercial(props) {
  var _useContext = (0, _react.useContext)(_Artsy.SystemContext),
      mediator = _useContext.mediator,
      user = _useContext.user;

  return _react.default.createElement(ArtworkSidebarCommercialContainer, _extends({}, props, {
    mediator: mediator,
    user: user
  }));
};

exports.ArtworkSidebarCommercial = ArtworkSidebarCommercial;
var ArtworkSidebarCommercialFragmentContainer = (0, _reactRelay.createFragmentContainer)(ArtworkSidebarCommercial, {
  artwork: function artwork() {
    var node = require("../../../../__generated__/ArtworkSidebarCommercial_artwork.graphql");

    if (node.hash && node.hash !== "c5fddefc6389f7c15acb550655da02f8") {
      console.error("The definition of 'ArtworkSidebarCommercial_artwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/ArtworkSidebarCommercial_artwork.graphql");
  }
});
exports.ArtworkSidebarCommercialFragmentContainer = ArtworkSidebarCommercialFragmentContainer;
//# sourceMappingURL=ArtworkSidebarCommercial.js.map