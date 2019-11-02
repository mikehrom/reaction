import { ArtistAuctionResults_artist } from "__generated__/ArtistAuctionResults_artist.graphql";
import React from "react";
import { RelayRefetchProp } from "react-relay";
interface AuctionResultsProps {
    relay: RelayRefetchProp;
    artist: ArtistAuctionResults_artist;
    sort: string;
}
export declare const ArtistAuctionResultsRefetchContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<AuctionResultsProps, "artist" | "sort">> & import("react-relay").ComponentRef>;
export {};
