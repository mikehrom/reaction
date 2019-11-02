import { Articles_artist } from "__generated__/Articles_artist.graphql";
import React from "react";
export interface ArticlesRouteProps {
    artist: Articles_artist;
}
export declare const ArticlesRoute: React.SFC<ArticlesRouteProps>;
export declare const ArticlesRouteFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ArticlesRouteProps, "artist">> & import("react-relay").ComponentRef>;
