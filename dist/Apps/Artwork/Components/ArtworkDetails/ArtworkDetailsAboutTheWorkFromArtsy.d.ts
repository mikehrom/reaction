import React, { Component } from "react";
import { ArtworkDetailsAboutTheWorkFromArtsy_artwork } from "__generated__/ArtworkDetailsAboutTheWorkFromArtsy_artwork.graphql";
export declare const READ_MORE_MAX_CHARS: {
    xs: number;
    default: number;
};
export interface ArtworkDetailsAboutTheWorkFromArtsyProps {
    artwork: ArtworkDetailsAboutTheWorkFromArtsy_artwork;
}
export declare class ArtworkDetailsAboutTheWorkFromArtsy extends Component<ArtworkDetailsAboutTheWorkFromArtsyProps> {
    trackReadMoreClick(): void;
    renderReadMore(breakpoint?: string): JSX.Element;
    render(): JSX.Element;
}
export declare const ArtworkDetailsAboutTheWorkFromArtsyFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ArtworkDetailsAboutTheWorkFromArtsyProps, "artwork">> & import("react-relay").ComponentRef>;
