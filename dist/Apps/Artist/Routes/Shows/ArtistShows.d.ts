import { ArtistShows_artist } from "__generated__/ArtistShows_artist.graphql";
import React from "react";
import { RelayRefetchProp } from "react-relay";
interface ArtistShowsProps {
    relay: RelayRefetchProp;
    artist: ArtistShows_artist;
    status: string;
    sort: string;
    scrollTo: string;
    heading: string;
    my?: number;
}
export declare const PAGE_SIZE = 4;
export declare const ArtistShowsRefetchContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ArtistShowsProps, "my" | "artist" | "sort" | "status" | "scrollTo" | "heading">> & import("react-relay").ComponentRef>;
export {};
