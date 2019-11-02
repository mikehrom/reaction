import { AuctionResults_artist } from "__generated__/AuctionResults_artist.graphql";
import React from "react";
export interface AuctionResultsRouteProps {
    artist: AuctionResults_artist;
}
export declare const AuctionResultsRoute: (props: AuctionResultsRouteProps) => JSX.Element;
export declare const AuctionResultsRouteFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<AuctionResultsRouteProps, "artist">> & import("react-relay").ComponentRef>;
