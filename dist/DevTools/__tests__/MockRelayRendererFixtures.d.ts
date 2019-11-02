import { MockRelayRendererFixtures_artwork } from "__generated__/MockRelayRendererFixtures_artwork.graphql";
import * as React from "react";
export declare const Artwork: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<{
    artwork: MockRelayRendererFixtures_artwork;
}, "artwork">> & import("react-relay").ComponentRef>;
export declare const query: import("relay-runtime").GraphQLTaggedNode;
export declare const badQuery: import("relay-runtime").GraphQLTaggedNode;
export declare function renderToString(element: JSX.Element): string;
