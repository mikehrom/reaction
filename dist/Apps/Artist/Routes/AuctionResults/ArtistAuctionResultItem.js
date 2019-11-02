"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuctionResultItemFragmentContainer = exports.ArtistAuctionResultItem = void 0;

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.assign");

var _palette = require("@artsy/palette");

var _Artsy = require("../../../../Artsy");

var _react = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _unstated = require("unstated");

var _Responsive = require("../../../../Utils/Responsive");

var _state = require("./state");

var _get = require("../../../../Utils/get");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// TODO: This whole component should be refactored to use less `Media` decisions
var ArtistAuctionResultItem = function ArtistAuctionResultItem(props) {
  var _useContext = (0, _react.useContext)(_Artsy.SystemContext),
      user = _useContext.user,
      mediator = _useContext.mediator;

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Responsive.Media, {
    at: "xs"
  }, function (className, renderChildren) {
    return _react.default.createElement(_palette.Row, {
      className: className
    }, renderChildren && _react.default.createElement(ExtraSmallAuctionItem, _extends({}, props, {
      mediator: mediator,
      user: user
    })));
  }), _react.default.createElement(_Responsive.Media, {
    between: ["sm", "lg"]
  }, function (className, renderChildren) {
    return _react.default.createElement(_palette.Row, {
      className: className
    }, renderChildren && _react.default.createElement(SmallAuctionItem, _extends({}, props, {
      mediator: mediator,
      user: user
    })));
  }), _react.default.createElement(_Responsive.Media, {
    greaterThanOrEqual: "lg"
  }, function (className, renderChildren) {
    return _react.default.createElement(_palette.Row, {
      className: className
    }, renderChildren && _react.default.createElement(LargeAuctionItem, _extends({}, props, {
      mediator: mediator,
      user: user
    })));
  }), _react.default.createElement(_palette.Col, null, _react.default.createElement(_palette.Box, {
    pt: 2,
    pb: 1
  }, !props.lastChild && _react.default.createElement(_palette.Separator, null))));
};

exports.ArtistAuctionResultItem = ArtistAuctionResultItem;

var LargeAuctionItem = function LargeAuctionItem(props) {
  var _getProps = getProps(props),
      _getProps$auctionResu = _getProps.auctionResult,
      dimension_text = _getProps$auctionResu.dimension_text,
      images = _getProps$auctionResu.images,
      date_text = _getProps$auctionResu.date_text,
      organization = _getProps$auctionResu.organization,
      sale_date_text = _getProps$auctionResu.sale_date_text,
      title = _getProps$auctionResu.title,
      salePrice = _getProps.salePrice,
      truncatedDescription = _getProps.truncatedDescription,
      estimatedPrice = _getProps.estimatedPrice;

  var imageUrl = (0, _get.get)(images, function (i) {
    return i.thumbnail.url;
  }, "");
  return _react.default.createElement(_unstated.Subscribe, {
    to: [_state.AuctionResultsState]
  }, function (_ref) {
    var state = _ref.state,
        showDetailsModal = _ref.showDetailsModal;
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Col, {
      sm: 1
    }, _react.default.createElement(_palette.Box, {
      height: "auto",
      pr: 2
    }, _react.default.createElement(_palette.Image, {
      width: "70px",
      src: imageUrl
    }))), _react.default.createElement(_palette.Col, {
      sm: 4
    }, _react.default.createElement(_palette.Box, {
      pl: 1,
      pr: 6
    }, _react.default.createElement(_palette.Serif, {
      size: "2",
      italic: true
    }, title && title + ",", date_text), _react.default.createElement(_palette.Serif, {
      size: "2"
    }, dimension_text), _react.default.createElement(_palette.Spacer, {
      pt: 1
    }), _react.default.createElement(_palette.Serif, {
      size: "1",
      color: "black60"
    }, truncatedDescription))), _react.default.createElement(_palette.Col, {
      sm: 3
    }, _react.default.createElement(_palette.Box, {
      pr: 2
    }, _react.default.createElement(_palette.Serif, {
      size: "2"
    }, organization), _react.default.createElement(_palette.Serif, {
      size: "2",
      color: "black60"
    }, sale_date_text), _react.default.createElement(_palette.Serif, {
      size: "2",
      color: "black60"
    }, _react.default.createElement(FullDescriptionLink, {
      onClick: function onClick() {
        return showDetailsModal(props);
      }
    }, "Full description")))), _react.default.createElement(_palette.Col, {
      sm: 4
    }, renderPricing(salePrice, estimatedPrice, props.user, props.mediator, "lg")));
  });
};

var SmallAuctionItem = function SmallAuctionItem(props) {
  var _getProps2 = getProps(props),
      _getProps2$auctionRes = _getProps2.auctionResult,
      dimension_text = _getProps2$auctionRes.dimension_text,
      images = _getProps2$auctionRes.images,
      date_text = _getProps2$auctionRes.date_text,
      title = _getProps2$auctionRes.title,
      salePrice = _getProps2.salePrice,
      truncatedDescription = _getProps2.truncatedDescription,
      estimatedPrice = _getProps2.estimatedPrice;

  var imageUrl = (0, _get.get)(images, function (i) {
    return i.thumbnail.url;
  }, "");
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Col, {
    sm: 6
  }, _react.default.createElement(_palette.Flex, null, _react.default.createElement(_palette.Box, {
    height: "auto"
  }, _react.default.createElement(_palette.Image, {
    width: "70px",
    src: imageUrl
  })), _react.default.createElement(_palette.Spacer, {
    mr: 2
  }), _react.default.createElement(_palette.Box, {
    pr: 4
  }, _react.default.createElement(_palette.Serif, {
    size: "2",
    italic: true
  }, title && title + ",", date_text), _react.default.createElement(_palette.Serif, {
    size: "2"
  }, dimension_text), _react.default.createElement(_palette.Spacer, {
    pt: 1
  }), _react.default.createElement(_palette.Serif, {
    size: "1",
    color: "black60"
  }, truncatedDescription)))), _react.default.createElement(_palette.Col, {
    sm: 6
  }, renderPricing(salePrice, estimatedPrice, props.user, props.mediator, "sm")));
};

var ExtraSmallAuctionItem = function ExtraSmallAuctionItem(props) {
  var _getProps3 = getProps(props),
      _getProps3$auctionRes = _getProps3.auctionResult,
      dimension_text = _getProps3$auctionRes.dimension_text,
      images = _getProps3$auctionRes.images,
      date_text = _getProps3$auctionRes.date_text,
      organization = _getProps3$auctionRes.organization,
      sale_date_text = _getProps3$auctionRes.sale_date_text,
      title = _getProps3$auctionRes.title,
      salePrice = _getProps3.salePrice,
      estimatedPrice = _getProps3.estimatedPrice;

  var imageUrl = (0, _get.get)(images, function (i) {
    return i.thumbnail.url;
  }, "");
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Col, null, _react.default.createElement(_palette.Flex, null, _react.default.createElement(_palette.Box, {
    height: "auto"
  }, _react.default.createElement(_palette.Image, {
    width: "70px",
    src: imageUrl
  })), _react.default.createElement(_palette.Spacer, {
    mr: 2
  }), _react.default.createElement(_palette.Box, null, _react.default.createElement(_palette.Serif, {
    size: "2",
    italic: true
  }, title && title + ",", date_text), _react.default.createElement(_palette.Serif, {
    size: "2"
  }, dimension_text), _react.default.createElement(_palette.Spacer, {
    pb: 1
  }), _react.default.createElement(_palette.Serif, {
    size: "2"
  }, organization), _react.default.createElement(_palette.Serif, {
    size: "2",
    color: "black60"
  }, sale_date_text), _react.default.createElement(_palette.Spacer, {
    pb: 1
  }), renderPricing(salePrice, estimatedPrice, props.user, props.mediator, "xs")))));
};

var AuctionResultItemFragmentContainer = (0, _reactRelay.createFragmentContainer)(ArtistAuctionResultItem, {
  auctionResult: function auctionResult() {
    var node = require("../../../../__generated__/ArtistAuctionResultItem_auctionResult.graphql");

    if (node.hash && node.hash !== "e39f2dfa5fe24995539e0e0324ac20be") {
      console.error("The definition of 'ArtistAuctionResultItem_auctionResult' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/ArtistAuctionResultItem_auctionResult.graphql");
  }
});
exports.AuctionResultItemFragmentContainer = AuctionResultItemFragmentContainer;

var FullDescriptionLink = _styledComponents.default.span.withConfig({
  displayName: "ArtistAuctionResultItem__FullDescriptionLink",
  componentId: "sc-1qozowi-0"
})(["cursor:pointer;text-decoration:underline;"]);

FullDescriptionLink.displayName = "FullDescriptionLink"; // Helpers

var getSalePrice = function getSalePrice(price_realized) {
  var salePrice = price_realized.cents_usd === 0 ? null : price_realized.display;
  return salePrice;
};

var getDescription = function getDescription(fullDescription) {
  var truncatedDescription;

  if (fullDescription) {
    truncatedDescription = fullDescription.substr(0, 200);
    return truncatedDescription + "...";
  }

  return truncatedDescription;
};

var getProps = function getProps(props) {
  var _props$auctionResult = props.auctionResult,
      description = _props$auctionResult.description,
      estimate = _props$auctionResult.estimate,
      price_realized = _props$auctionResult.price_realized;
  var salePrice = getSalePrice(price_realized);
  var truncatedDescription = getDescription(description);
  var estimatedPrice = estimate.display;
  return _objectSpread({}, props, {
    salePrice: salePrice,
    truncatedDescription: truncatedDescription,
    estimatedPrice: estimatedPrice
  });
};

var renderPricing = function renderPricing(salePrice, estimatedPrice, user, mediator, size) {
  if (user) {
    return _react.default.createElement(_react.default.Fragment, null, salePrice && _react.default.createElement(_palette.Serif, {
      size: "2"
    }, "Sale: ".concat(salePrice)), estimatedPrice && _react.default.createElement(_palette.Serif, {
      size: "2",
      color: "black60"
    }, "Est: ", estimatedPrice));
  } else {
    var btnSize = size === "xs" || "sm" ? "small" : "large";
    return _react.default.createElement(_palette.Button, {
      size: btnSize,
      variant: "secondaryOutline",
      onClick: function onClick() {
        mediator && mediator.trigger("open:auth", {
          mode: "register",
          copy: "Sign up to see full auction records — for free"
        });
      }
    }, "Sign up to see price");
  }
};
//# sourceMappingURL=ArtistAuctionResultItem.js.map