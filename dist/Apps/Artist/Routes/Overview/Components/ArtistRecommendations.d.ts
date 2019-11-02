import { ArtistRecommendations_artist } from "__generated__/ArtistRecommendations_artist.graphql";
import React from "react";
import { RelayPaginationProp } from "react-relay";
interface ArtistRecommendationsProps {
    artist: ArtistRecommendations_artist;
    relay: RelayPaginationProp;
}
export declare const ArtistRecommendations: React.FC<ArtistRecommendationsProps>;
export declare const ArtistRecommendationsPaginationContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ArtistRecommendationsProps, "artist">> & import("react-relay").ComponentRef>;
export declare const ArtistRecommendationsQueryRenderer: React.FC<{
    artistID: string;
}>;
export {};
