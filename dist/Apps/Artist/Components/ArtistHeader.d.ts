import { ArtistHeader_artist } from "__generated__/ArtistHeader_artist.graphql";
import { Mediator } from "Artsy";
import React, { Component } from "react";
interface Props {
    artist: ArtistHeader_artist;
    user?: User;
    mediator?: Mediator;
}
export declare class ArtistHeader extends Component<Props> {
    render(): JSX.Element;
}
export declare class LargeArtistHeader extends Component<Props> {
    onClickSlide(slide: any): void;
    render(): JSX.Element;
}
export declare class SmallArtistHeader extends Component<Props> {
    onClickSlide(slide: any): void;
    render(): JSX.Element;
}
export declare const ArtistHeaderFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "user" | "mediator" | "artist">> & import("react-relay").ComponentRef>;
export {};
