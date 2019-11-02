"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderRelayTree = renderRelayTree;
exports.RelayFinishedLoading = void 0;

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.find");

var _renderWithLoadProgress = require("../Artsy/Relay/renderWithLoadProgress");

require("./renderUntil");

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _MockRelayRenderer = require("./MockRelayRenderer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * A {@link ReactWrapper.prototype.renderUntil} callback implementation that
 * passes when no more loading indicators exist in the tree. Use this when you
 * need to use `renderUntil` directly, such as after making updates to a Relay
 * tree.
 */
var RelayFinishedLoading = function RelayFinishedLoading(tree) {
  return !tree.find(".".concat(_renderWithLoadProgress.LoadingClassName)).length;
};
/**
 * Renders a tree of Relay containers with a mocked local instance of the
 * metaphysics schema and resolves the returned promise once loading data and
 * rendering (including waterfall requests) has finished.
 *
 * It does this by checking the tree for the existence of an element with the
 * class defined by `LoadingClassName` from the `renderWithLoadProgress` module.
 * I.e. as long as at least 1 element exists in the tree with that class name,
 * rendering is not considered finished. Use the `renderWithLoadProgress`
 * function for your `QueryRenderer` where possible, as it will do this plumbing
 * by default.
 *
 * @note
 * Use this function in tests, but not storybooks. For storybooks you should
 * usually use {@link MockRelayRenderer}.
 *
 * @param params
 * See {@link MockRelayRenderer}
 *
 * @param until
 * An optional predicate function that is used to test wether rendering should
 * be considered finished. This is a regular enzyme wrapper.
 *
 * @param wrapper
 * An optional component that the Relay tree should be nested in. Use this to
 * e.g. setup any context provider components etc.
 *
 * @example
 *
   ```tsx
   jest.unmock("react-relay")

   const Artwork = createFragmentContainer(
     props => (
       <div>
         <span>{props.artwork.title}}</span>
         <img src={props.artwork.image.url} />
       </div>
     ),
     graphql`
       fragment MockRelayRenderer_artwork on Artwork {
         image {
           url
         }
       }
     `
   )

   it("renders a Relay tree", () => {
     return renderRelayTree({
       Component: Artwork,
       query: graphql`
         query MockRelayRendererQuery {
           artwork(id: "mona-lisa") {
             ...MockRelayRenderer_artwork
           }
         }
       `,
       mockResolvers: {
         Artwork: () => ({
           title: "Mona Lisa",
           image: {
             url: "http://test/image.jpg",
           },
         }),
       },
     }).then(wrapper => {
       expect(wrapper.find("span").text()).toEqual("Mona Lisa")
       expect(wrapper.find("img").props().src).toEqual("http://test/image.jpg")
     })
   })
   ```
 *
 */


exports.RelayFinishedLoading = RelayFinishedLoading;

function renderRelayTree(params) {
  var renderUntilPredicate = params.renderUntil,
      wrapper = params.wrapper,
      rendererProps = _objectWithoutProperties(params, ["renderUntil", "wrapper"]);

  var renderer = _react.default.createElement(_MockRelayRenderer.MockRelayRenderer, rendererProps);

  return (0, _enzyme.mount)(wrapper ? wrapper(renderer) : renderer).renderUntil(renderUntilPredicate || RelayFinishedLoading);
}
//# sourceMappingURL=renderRelayTree.js.map