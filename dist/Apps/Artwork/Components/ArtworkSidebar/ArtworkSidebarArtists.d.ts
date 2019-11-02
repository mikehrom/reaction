import React from "react";
import { ArtworkSidebarArtists_artwork } from "__generated__/ArtworkSidebarArtists_artwork.graphql";
export interface ArtistsProps {
    artwork: ArtworkSidebarArtists_artwork;
}
export declare class ArtworkSidebarArtists extends React.Component<ArtistsProps> {
    private renderArtistName;
    handleOpenAuth: (mediator: any, artist: any) => void;
    private renderSingleArtist;
    renderMultipleArtists(): JSX.Element[];
    renderCulturalMaker(cultural_maker: string): JSX.Element;
    render(): JSX.Element;
}
export declare const ArtworkSidebarArtistsFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ArtistsProps, "artwork">> & import("react-relay").ComponentRef>;
