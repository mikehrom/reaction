import { Shows_viewer } from "__generated__/Shows_viewer.graphql";
import React, { SFC } from "react";
export interface ArtistShowsProps {
    viewer: Shows_viewer;
}
export declare const ShowsRoute: SFC<ArtistShowsProps>;
export declare const ShowsRouteFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ArtistShowsProps, "viewer">> & import("react-relay").ComponentRef>;
