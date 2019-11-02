import { ArtistArtworkFilter_artist } from "__generated__/ArtistArtworkFilter_artist.graphql";
import { Overview_artist } from "__generated__/Overview_artist.graphql";
import { Location } from "found";
import React from "react";
import { RelayRefetchProp } from "react-relay";
interface ArtistArtworkFilterProps {
    artist: ArtistArtworkFilter_artist;
    relay: RelayRefetchProp;
    sidebarAggregations: Overview_artist["sidebarAggregations"];
    location: Location;
}
export declare const ArtistArtworkFilterRefetchContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ArtistArtworkFilterProps, "location" | "artist" | "sidebarAggregations">> & import("react-relay").ComponentRef>;
export {};
