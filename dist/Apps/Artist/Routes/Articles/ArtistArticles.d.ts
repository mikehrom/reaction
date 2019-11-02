import { ArtistArticles_artist } from "__generated__/ArtistArticles_artist.graphql";
import React, { Component } from "react";
import { RelayRefetchProp } from "react-relay";
import { LoadingAreaState } from "Components/v2/LoadingArea";
interface ArtistArticlesProps {
    relay: RelayRefetchProp;
    artist: ArtistArticles_artist;
}
export declare class ArtistArticles extends Component<ArtistArticlesProps, LoadingAreaState> {
    state: {
        isLoading: boolean;
    };
    loadNext: () => void;
    loadAfter: (cursor: any) => void;
    toggleLoading: (isLoading: any) => void;
    render(): JSX.Element;
}
export declare const ArtistArticlesRefetchContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ArtistArticlesProps, "artist">> & import("react-relay").ComponentRef>;
export {};
