"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;
exports.logout = logout;
exports.signup = signup;

function login(mediator) {
  mediator.trigger("open:auth", {
    mode: "login",
    intent: "login",
    signupIntent: "login",
    trigger: "click",
    contextModule: "Header",
    destination: window.location.href
  });
}

function logout(mediator) {
  mediator.trigger("auth:logout");
}

function signup(mediator) {
  mediator.trigger("open:auth", {
    mode: "signup",
    intent: "signup",
    signupIntent: "signup",
    trigger: "click",
    contextModule: "Header",
    destination: window.location.href
  });
}
//# sourceMappingURL=authentication.js.map