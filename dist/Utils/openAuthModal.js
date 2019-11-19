"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openAuthModal = exports.AuthModalIntent = void 0;

require("core-js/modules/es6.function.name");

var _qs = require("qs");

var _sharify = require("sharify");

var AuthModalIntent;
exports.AuthModalIntent = AuthModalIntent;

(function (AuthModalIntent) {
  AuthModalIntent["FollowArtist"] = "FollowArtist";
  AuthModalIntent["FollowPartner"] = "FollowPartner";
  AuthModalIntent["SaveArtwork"] = "SaveArtwork";
})(AuthModalIntent || (exports.AuthModalIntent = AuthModalIntent = {}));

var openAuthModal = function openAuthModal(mediator, reason) {
  var handled = false;

  if (_sharify.data.IS_MOBILE) {
    var intent = getMobileAuthIntent(reason);

    if (intent) {
      openMobileAuth(intent);
      handled = true;
    }
  } else if (mediator) {
    var _intent = getDesktopAuthIntent(reason);

    if (_intent) {
      openDesktopAuth(mediator, _intent);
      handled = true;
    }
  }

  if (!handled) {
    window.location.href = "/login";
  }
};

exports.openAuthModal = openAuthModal;

function openMobileAuth(intent) {
  var params = (0, _qs.stringify)(intent);
  var href = "/sign_up?redirect-to=".concat(window.location, "&").concat(params);
  window.location.href = href;
}

function openDesktopAuth(mediator, intent) {
  mediator.trigger("open:auth", intent);
}

function getMobileAuthIntent(reason) {
  switch (reason.intent) {
    case AuthModalIntent.FollowArtist:
      return getMobileIntentToFollowArtist(reason);

    case AuthModalIntent.FollowPartner:
      return getMobileIntentToFollowPartner(reason);

    case AuthModalIntent.SaveArtwork:
      return getMobileIntentToSaveArtwork(reason);

    default:
      return undefined;
  }
}

function getMobileIntentToFollowArtist(_ref) {
  var contextModule = _ref.contextModule,
      entity = _ref.entity;
  return {
    action: "follow",
    contextModule: contextModule,
    intent: "follow artist",
    kind: "artist",
    objectId: entity.id,
    signUpIntent: "follow artist",
    trigger: "click",
    entityName: entity.name
  };
}

function getMobileIntentToFollowPartner(_ref2) {
  var contextModule = _ref2.contextModule,
      entity = _ref2.entity;
  return {
    action: "follow",
    contextModule: contextModule,
    intent: "follow partner",
    kind: "gallery",
    objectId: entity.id,
    signUpIntent: "follow partner",
    trigger: "click",
    entityName: entity.name
  };
}

function getMobileIntentToSaveArtwork(_ref3) {
  var contextModule = _ref3.contextModule,
      entity = _ref3.entity;
  return {
    action: "save",
    contextModule: contextModule,
    intent: "save artwork",
    kind: "artwork",
    objectId: entity.id,
    signUpIntent: "save artwork",
    trigger: "click",
    entityName: entity.name
  };
}

function getDesktopAuthIntent(reason) {
  switch (reason.intent) {
    case AuthModalIntent.FollowArtist:
      return getDesktopIntentToFollowArtist(reason);

    case AuthModalIntent.FollowPartner:
      return getDesktopIntentToFollowPartner(reason);

    case AuthModalIntent.SaveArtwork:
      return getDesktopIntentToSaveArtwork(reason);

    default:
      return undefined;
  }
}

function getDesktopIntentToFollowArtist(_ref4) {
  var entity = _ref4.entity;
  return {
    mode: "signup",
    copy: "Sign up to follow ".concat(entity.name),
    signupIntent: "follow artist",
    afterSignUpAction: {
      kind: "artist",
      action: "follow",
      objectId: entity.id
    }
  };
}

function getDesktopIntentToFollowPartner(_ref5) {
  var entity = _ref5.entity;
  return {
    mode: "signup",
    copy: "Sign up to follow ".concat(entity.name),
    signupIntent: "follow partner",
    afterSignUpAction: {
      kind: "profile",
      // should this be "partner"?
      action: "follow",
      objectId: entity.id
    }
  };
}

function getDesktopIntentToSaveArtwork(_ref6) {
  var entity = _ref6.entity;
  return {
    mode: "signup",
    copy: "Sign up to save artworks",
    intent: "save artwork",
    signupIntent: "save artwork",
    trigger: "click",
    afterSignUpAction: {
      action: "save",
      objectId: entity.id
    }
  };
}
//# sourceMappingURL=openAuthModal.js.map