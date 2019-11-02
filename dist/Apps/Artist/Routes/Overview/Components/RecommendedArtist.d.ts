import { RecommendedArtist_artist } from "__generated__/RecommendedArtist_artist.graphql";
import React from "react";
interface RecommendedArtistProps {
    artist: RecommendedArtist_artist;
}
export declare const RecommendedArtistFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<RecommendedArtistProps, "artist">> & import("react-relay").ComponentRef>;
export {};
