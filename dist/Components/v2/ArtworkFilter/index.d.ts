import React from "react";
import { RelayRefetchProp } from "react-relay";
import { ArtworkFilter_viewer } from "__generated__/ArtworkFilter_viewer.graphql";
import { SharedArtworkFilterContextProps } from "./ArtworkFilterContext";
import { ArtistArtworkFilter_artist } from "__generated__/ArtistArtworkFilter_artist.graphql";
import { Collection_viewer } from "__generated__/Collection_viewer.graphql";
/**
 * Primary ArtworkFilter which is wrapped with a context and refetch container.
 *
 * If needing more granular control over the query being used, or the root query
 * doesn't `extend Viewer`, the BaseArtworkFilter can be imported below. See
 * `Apps/Collection` for an example, which queries Kaws for data.
 */
export declare const ArtworkFilter: React.FC<SharedArtworkFilterContextProps & {
    viewer: any;
}>;
export declare const BaseArtworkFilter: React.FC<{
    relay: RelayRefetchProp;
    relayVariables?: object;
    viewer: ArtworkFilter_viewer | Collection_viewer | ArtistArtworkFilter_artist;
}>;
export declare const ArtworkQueryFilter: import("relay-runtime").GraphQLTaggedNode;
export declare const ArtworkFilterRefetchContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<{
    relay: RelayRefetchProp;
    relayVariables?: object;
    viewer: ArtistArtworkFilter_artist | ArtworkFilter_viewer | Collection_viewer;
}, "viewer" | "relayVariables">> & import("react-relay").ComponentRef>;
/**
 * This QueryRenderer can be used to instantiate stand-alone embedded ArtworkFilters
 * that are not dependent on URLBar state.
 */
export declare const ArtworkFilterQueryRenderer: ({ keyword }: {
    keyword?: string;
}) => JSX.Element;
