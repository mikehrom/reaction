import { ArtworkRelatedArtists_artwork } from "__generated__/ArtworkRelatedArtists_artwork.graphql";
import React from "react";
import { RelayPaginationProp } from "react-relay";
export interface ArtworkRelatedArtistsProps {
    artwork: ArtworkRelatedArtists_artwork;
    relay: RelayPaginationProp;
}
export declare const ArtworkRelatedArtists: React.FC<ArtworkRelatedArtistsProps>;
export declare const ArtworkRelatedArtistsPaginationContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ArtworkRelatedArtistsProps, "artwork">> & import("react-relay").ComponentRef>;
