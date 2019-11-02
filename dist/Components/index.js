"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
exports.default = void 0;

var _Artwork = _interopRequireDefault(require("./Artwork"));

var _ArtworkGrid = _interopRequireDefault(require("./ArtworkGrid/ArtworkGrid"));

var _BorderedPulldown = _interopRequireDefault(require("./BorderedPulldown"));

var _Buttons = _interopRequireDefault(require("./Buttons"));

var _Checkbox = _interopRequireDefault(require("./Checkbox"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _Input = _interopRequireDefault(require("./Input"));

var _Modal = _interopRequireDefault(require("./Modal/Modal"));

var _Nav = _interopRequireDefault(require("./Nav"));

var _Text = _interopRequireDefault(require("./Text"));

var _TextArea = _interopRequireDefault(require("./TextArea"));

var _TextLink = _interopRequireDefault(require("./TextLink"));

var _Title = _interopRequireDefault(require("./Title"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore - https://github.com/styled-components/styled-components/issues/1063#issuecomment-320344957
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// TODO: Fix Force integration post Relay Modern migration
function init(options) {// Relay.injectNetworkLayer(artsyNetworkLayer(options.user))
  // const rootRoute = (
  //   <Artsy.SystemContextProvider user={options.user}>
  //     <Relay.RootContainer Component={options.component} route={options.queryConfig} />
  //   </Artsy.SystemContextProvider>
  // )
  // ReactDOM.render(rootRoute, document.getElementById(options.domID))
}

var _default = {
  Artwork: _Artwork.default,
  Buttons: _Buttons.default,
  Modal: _Modal.default,
  ArtworkGrid: _ArtworkGrid.default,
  BorderedPulldown: _BorderedPulldown.default,
  Checkbox: _Checkbox.default,
  Icon: _Icon.default,
  Input: _Input.default,
  Nav: _Nav.default,
  Text: _Text.default,
  TextArea: _TextArea.default,
  TextLink: _TextLink.default,
  Title: _Title.default
};
exports.default = _default;
//# sourceMappingURL=index.js.map