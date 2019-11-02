"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserMenu = void 0;

var _react = _interopRequireWildcard(require("react"));

var _palette = require("@artsy/palette");

var _Artsy = require("../../../Artsy");

var _useTracking2 = require("../../../Artsy/Analytics/useTracking");

var _sharify = require("sharify");

var _user = require("../../../Utils/user");

var authentication = _interopRequireWildcard(require("../Utils/authentication"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var UserMenu = function UserMenu() {
  var _useTracking = (0, _useTracking2.useTracking)(),
      trackEvent = _useTracking.trackEvent;

  var _useContext = (0, _react.useContext)(_Artsy.SystemContext),
      mediator = _useContext.mediator,
      user = _useContext.user;

  var trackClick = function trackClick(event) {
    var link = event.target;
    var text = link.innerText;
    var href = link.parentNode.parentNode.getAttribute("href");
    trackEvent({
      action_type: _Artsy.AnalyticsSchema.ActionType.Click,
      context_module: _Artsy.AnalyticsSchema.ContextModule.HeaderUserDropdown,
      subject: text,
      destination_path: href
    });
  };

  var isAdmin = (0, _user.userIsAdmin)(user);
  var hasPartnerAccess = Boolean(user.has_partner_access);
  return _react.default.createElement(_palette.Menu, {
    onClick: trackClick
  }, isAdmin && _react.default.createElement(_palette.MenuItem, {
    href: _sharify.data.ADMIN_URL
  }, "Admin"), (isAdmin || hasPartnerAccess) && _react.default.createElement(_palette.MenuItem, {
    href: _sharify.data.CMS_URL
  }, "CMS"), (isAdmin || hasPartnerAccess) && _react.default.createElement(_palette.Flex, {
    width: "100%",
    justifyContent: "center",
    my: 1
  }, _react.default.createElement(_palette.Box, {
    width: "90%"
  }, _react.default.createElement(_palette.Separator, null))), _react.default.createElement(_palette.MenuItem, {
    href: "/user/saves"
  }, _react.default.createElement(_palette.HeartIcon, {
    mr: 1
  }), " Saves & Follows"), _react.default.createElement(_palette.MenuItem, {
    href: "/profile/edit"
  }, _react.default.createElement(_palette.SoloIcon, {
    mr: 1
  }), " Collector Profile"), _react.default.createElement(_palette.MenuItem, {
    href: "/user/edit"
  }, _react.default.createElement(_palette.SettingsIcon, {
    mr: 1
  }), " Settings"), _react.default.createElement(_palette.MenuItem, {
    onClick: function onClick(event) {
      event.preventDefault(); // `href` is only for tracking purposes

      authentication.logout(mediator);
    }
  }, _react.default.createElement(_palette.PowerIcon, {
    mr: 1
  }), " Log out"));
};

exports.UserMenu = UserMenu;
//# sourceMappingURL=UserMenu.js.map