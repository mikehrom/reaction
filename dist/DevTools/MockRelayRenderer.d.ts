import { IMocks } from "graphql-tools/dist/Interfaces";
import React from "react";
import { RelayContainer } from "react-relay";
import { GraphQLTaggedNode, OperationBase, OperationDefaults, RelayNetwork } from "relay-runtime";
export interface MockRelayRendererProps<T extends OperationBase = OperationDefaults> {
    Component: RelayContainer<T["response"]>;
    componentProps?: object;
    variables?: T["variables"];
    query: GraphQLTaggedNode;
    /**
     * @deprecated use mockData and mockMutationResults
     */
    mockResolvers?: IMocks;
    /**
     * @example
     * mockData={{order: {id: "my-order-id", lineItems: {...}}}}
     */
    mockData?: object;
    /**
     * @example
     * mockMutationResults={{
     *   commerceCreateOrderWithArtworkId: {
     *     orderOrError: {
     *       order: {id: "my-order-id"}
     *     }
     *   }
     * }}
     */
    mockMutationResults?: object;
    mockNetwork?: RelayNetwork;
}
export interface MockRelayRendererState {
    caughtError: {
        error: any;
        errorInfo: any;
    };
}
/**
 * Renders a tree of Relay containers with a mocked local instance of the
 * metaphysics schema.
 *
 * @note
 * Use this component in storybooks, but not tests. Because Relay works
 * asynchronously _and_ a tree may contain nested `QueryRenderer` components,
 * for tests you should usually use {@link renderRelayTree}.
 *
 * @param params.Component
 * The component that either is a Relay container or has children that are Relay
 * containers.
 *
 * @param params.variables
 * The optional variables that should be used in the operation. In most cases
 * you should be able to just hardcode these into the root query.
 *
 * @param params.query
 * The root GraphQL query.
 *
 * @param params.mockResolvers
 * @deprecated use params.mockData and params.mockMutationResults
 * A list of types/fields, that are part of metaphysics’ schema, and the data to
 * return for those. See {@link https://www.apollographql.com/docs/graphql-tools/mocking.html#Customizing-mocks}
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

   it("renders a Relay tree", done => {
     const wrapper = mount(
       <MockRelayRenderer
         Component={Artwork}
         query={graphql`
           query AnotherMockRelayRendererQuery {
             artwork(id: "mona-lisa") {
               ...MockRelayRenderer_artwork
             }
           }
         `}
         mockResolvers={{
           Artwork: () => ({
             title: "Mona Lisa",
             image: {
               url: "http://test/image.jpg",
             },
           }),
         }}
       />
     )
     setTimeout(() => {
       expect(wrapper.find("span").text()).toEqual("Mona Lisa")
       expect(wrapper.find("img").props().src).toEqual("http://test/image.jpg")
       done()
     }, 10)
   })
   ```
  * @param params.mockMutationResults
  * @param params.mockData
  *
  */
export declare class MockRelayRenderer<T extends OperationBase = OperationDefaults> extends React.Component<MockRelayRendererProps<T>, MockRelayRendererState> {
    state: {
        caughtError: any;
    };
    componentDidCatch(error: any, errorInfo: any): void;
    getRelayNetwork(): RelayNetwork;
    render(): string | JSX.Element;
}
