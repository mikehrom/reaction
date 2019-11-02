"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmallFooter = exports.LargeFooter = exports.Footer = void 0;

var _Artsy = require("../../Artsy");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Responsive = require("../../Utils/Responsive");

var _palette = require("@artsy/palette");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Footer = function Footer(props) {
  var _useContext = (0, _react.useContext)(_Artsy.SystemContext),
      mediator = _useContext.mediator;

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Responsive.Media, {
    at: "xs"
  }, _react.default.createElement(SmallFooter, {
    mediator: mediator
  })), _react.default.createElement(_Responsive.Media, {
    greaterThan: "xs"
  }, _react.default.createElement(LargeFooter, {
    mediator: mediator
  })));
};

exports.Footer = Footer;

var LargeFooter = function LargeFooter(props) {
  return _react.default.createElement(FooterContainer, {
    mediator: props.mediator,
    flexDirection: "row"
  });
};

exports.LargeFooter = LargeFooter;

var SmallFooter = function SmallFooter(props) {
  return _react.default.createElement(FooterContainer, {
    mediator: props.mediator,
    flexDirection: "column"
  });
};

exports.SmallFooter = SmallFooter;

var FooterContainer = function FooterContainer(props) {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Flex, {
    flexDirection: props.flexDirection,
    justifyContent: "space-between",
    width: "100%"
  }, _react.default.createElement(_palette.Flex, {
    flexDirection: "column",
    mb: 1
  }, _react.default.createElement(_palette.Sans, {
    size: "2",
    weight: "medium"
  }, "Buy"), _react.default.createElement(_palette.Serif, {
    size: "2"
  }, _react.default.createElement(Link, {
    onClick: function onClick() {
      return props.mediator.trigger("openCollectorFAQModal");
    }
  }, "Buying from Galleries FAQ"), _react.default.createElement(Link, {
    onClick: function onClick() {
      return props.mediator.trigger("openAuctionFAQModal");
    }
  }, "Buying from Auctions FAQ"), _react.default.createElement(Link, {
    href: "https://www.artsy.net/consign"
  }, "Consign with Artsy"))), _react.default.createElement(_palette.Flex, {
    flexDirection: "column",
    mb: 1
  }, _react.default.createElement(_palette.Sans, {
    size: "2",
    weight: "medium"
  }, "Learn"), _react.default.createElement(_palette.Serif, {
    size: "2"
  }, _react.default.createElement(Link, {
    href: "https://www.artsy.net/artsy-education"
  }, "Education"), _react.default.createElement(Link, {
    href: "https://www.artsy.net/categories"
  }, "The Art Genome Project"))), _react.default.createElement(_palette.Flex, {
    flexDirection: "column",
    mb: 1
  }, _react.default.createElement(_palette.Sans, {
    size: "2",
    weight: "medium"
  }, "About us"), _react.default.createElement(_palette.Serif, {
    size: "2"
  }, _react.default.createElement(Link, {
    href: "https://www.artsy.net/about"
  }, "About"), _react.default.createElement(Link, {
    href: "https://medium.com/artsy-blog"
  }, "Blog"), _react.default.createElement(Link, {
    href: "https://www.artsy.net/about/jobs"
  }, "Jobs"), _react.default.createElement(Link, {
    href: "https://artsy.github.com/open-source"
  }, "Open Source"), _react.default.createElement(Link, {
    href: "https://www.artsy.net/about/press"
  }, "Press"), _react.default.createElement(Link, {
    href: "https://www.artsy.net/contact"
  }, "Contact"), _react.default.createElement(Link, {
    onClick: function onClick() {
      return props.mediator.trigger("openFeedbackModal");
    }
  }, "Send us feedback"))), _react.default.createElement(_palette.Flex, {
    flexDirection: "column",
    mb: 1
  }, _react.default.createElement(_palette.Sans, {
    size: "2",
    weight: "medium"
  }, "Partners"), _react.default.createElement(_palette.Serif, {
    size: "2"
  }, _react.default.createElement(Link, {
    href: "https://partners.artsy.net"
  }, "Artsy for Galleries"), _react.default.createElement(Link, {
    href: "https://www.artsy.net/institution-partnerships"
  }, "Artsy for Museums"), _react.default.createElement(Link, {
    href: "https://www.artsy.net/auction-partnerships"
  }, "Artsy for Auctions"))), _react.default.createElement(_Responsive.Media, {
    at: "xs"
  }, _react.default.createElement(_palette.Flex, {
    mb: 1,
    flexWrap: "wrap"
  }, _react.default.createElement(PolicyLinks, null)))), _react.default.createElement(_palette.Separator, {
    mt: 1,
    mb: 2
  }), _react.default.createElement(_palette.Flex, {
    justifyContent: "space-between",
    width: "100%"
  }, _react.default.createElement(_palette.Flex, {
    mb: 4
  }, _react.default.createElement(_Responsive.Media, {
    at: "xs"
  }, _react.default.createElement(_palette.ArtsyMarkIcon, {
    width: "20px",
    height: "20px",
    mr: 2
  })), _react.default.createElement(_Responsive.Media, {
    greaterThan: "xs"
  }, _react.default.createElement(_palette.Flex, {
    flexDirection: "row"
  }, _react.default.createElement(_palette.ArtsyMarkIcon, {
    width: "30px",
    height: "30px",
    mr: 2
  }), _react.default.createElement(_palette.Spacer, {
    mr: 1
  }), _react.default.createElement(_palette.Flex, {
    pt: "6px",
    flexDirection: "row"
  }, _react.default.createElement(PolicyLinks, null))))), _react.default.createElement(_palette.Flex, null, _react.default.createElement(_palette.WeChatIcon, {
    width: (0, _palette.space)(2),
    height: (0, _palette.space)(2),
    mr: 1
  }), _react.default.createElement("a", {
    href: "https://twitter.com/artsy"
  }, _react.default.createElement(_palette.TwitterIcon, {
    width: (0, _palette.space)(2),
    height: (0, _palette.space)(2),
    mr: 1
  })), _react.default.createElement("a", {
    href: "https://www.facebook.com/artsy"
  }, _react.default.createElement(_palette.FacebookIcon, {
    width: (0, _palette.space)(2),
    height: (0, _palette.space)(2),
    mr: 1
  })), _react.default.createElement("a", {
    href: "https://www.instagram.com/artsy/"
  }, _react.default.createElement(_palette.InstagramIcon, {
    width: (0, _palette.space)(2),
    height: (0, _palette.space)(2),
    mr: 1
  })))));
};

var Link = _styledComponents.default.a.withConfig({
  displayName: "Footer__Link",
  componentId: "sc-1lgkx4u-0"
})(["display:block;margin-top:", "px;margin-bottom:", "px;text-decoration:none;"], (0, _palette.space)(1), (0, _palette.space)(1));

var UnstyledLink = _styledComponents.default.a.withConfig({
  displayName: "Footer__UnstyledLink",
  componentId: "sc-1lgkx4u-1"
})(["text-decoration:none;white-space:nowrap;"]);

var PolicyLinks = function PolicyLinks() {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Serif, {
    size: "2"
  }, "\xA9 2018 Artsy"), _react.default.createElement(_palette.Spacer, {
    mr: 1
  }), _react.default.createElement(UnstyledLink, {
    href: "https://www.artsy.net/terms"
  }, _react.default.createElement(_palette.Serif, {
    size: "2"
  }, "Terms of Use")), _react.default.createElement(_palette.Spacer, {
    mr: 1
  }), _react.default.createElement(UnstyledLink, {
    href: "https://www.artsy.net/privacy"
  }, _react.default.createElement(_palette.Serif, {
    size: "2"
  }, "Privacy Policy")), _react.default.createElement(_palette.Spacer, {
    mr: 1
  }), _react.default.createElement(UnstyledLink, {
    href: "https://www.artsy.net/security"
  }, _react.default.createElement(_palette.Serif, {
    size: "2"
  }, "Security")), _react.default.createElement(_palette.Spacer, {
    mr: 1
  }), _react.default.createElement(UnstyledLink, {
    href: "https://www.artsy.net/conditions-of-sale"
  }, _react.default.createElement(_palette.Serif, {
    size: "2"
  }, "Conditions of Sale")), _react.default.createElement(_palette.Spacer, {
    mr: 1
  }));
};
//# sourceMappingURL=Footer.js.map