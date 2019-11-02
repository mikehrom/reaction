import { ArtistInfo_artist } from "__generated__/ArtistInfo_artist.graphql";
import { Mediator } from "Artsy";
import React, { Component } from "react";
interface ArtistInfoProps {
    artist: ArtistInfo_artist;
    mediator?: Mediator;
}
interface ArtistInfoState {
    showArtistInsights: boolean;
}
export declare class ArtistInfo extends Component<ArtistInfoProps, ArtistInfoState> {
    state: {
        showArtistInsights: boolean;
    };
    trackArtistBioReadMoreClick(): void;
    openArtistInsights(): void;
    closeArtistInsights(): void;
    handleOpenAuth: (mediator: any, artist: any) => void;
    render(): JSX.Element;
}
export declare const ArtistInfoFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ArtistInfoProps, "mediator" | "artist">> & import("react-relay").ComponentRef>;
export declare const ArtistInfoQueryRenderer: ({ artistID }: {
    artistID: string;
}) => JSX.Element;
export {};
