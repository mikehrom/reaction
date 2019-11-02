"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRouteConfig = createRouteConfig;

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.map");

var _Route = require("./Route");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function createRouteConfig(routes) {
  return routes.map(function (route) {
    if (route.__proto__ === Object.prototype) {
      return new _Route.Route(_objectSpread({}, route, {
        children: route.children && createRouteConfig(route.children)
      }));
    } else {
      return route;
    }
  });
}
//# sourceMappingURL=createRouteConfig.js.map