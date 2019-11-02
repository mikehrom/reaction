"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeFSEventListener = exports.addFSEventListener = exports.isFullscreen = exports.fullscreenEnabled = exports.exitFullscreen = exports.requestFullscreen = void 0;

var requestFullscreen = function requestFullscreen(e) {
  if (e.requestFullscreen) {
    e.requestFullscreen();
  } else if (e.webkitRequestFullscreen) {
    e.webkitRequestFullscreen();
  } else if (e.mozRequestFullScreen) {
    e.mozRequestFullScreen();
  } else if (e.msRequestFullscreen) {
    e.msRequestFullscreen();
  }
};

exports.requestFullscreen = requestFullscreen;

var exitFullscreen = function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
};

exports.exitFullscreen = exitFullscreen;

var fullscreenEnabled = function fullscreenEnabled() {
  return document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
};

exports.fullscreenEnabled = fullscreenEnabled;

var isFullscreen = function isFullscreen() {
  return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
};

exports.isFullscreen = isFullscreen;

var addFSEventListener = function addFSEventListener(handler) {
  document.addEventListener("fullscreenchange", handler);
  document.addEventListener("webkitfullscreenchange", handler);
  document.addEventListener("mozfullscreenchange", handler);
  document.addEventListener("MSFullscreenChange", handler);
};

exports.addFSEventListener = addFSEventListener;

var removeFSEventListener = function removeFSEventListener(handler) {
  document.removeEventListener("fullscreenchange", handler);
  document.removeEventListener("webkitfullscreenchange", handler);
  document.removeEventListener("mozfullscreenchange", handler);
  document.removeEventListener("MSFullscreenChange", handler);
};

exports.removeFSEventListener = removeFSEventListener;
//# sourceMappingURL=FullscreenHelpers.js.map