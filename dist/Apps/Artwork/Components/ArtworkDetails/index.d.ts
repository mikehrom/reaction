import React, { Component } from "react";
import { ArtworkDetails_artwork } from "__generated__/ArtworkDetails_artwork.graphql";
export interface ArtworkDetailsProps {
    artwork: ArtworkDetails_artwork;
}
export declare class ArtworkDetails extends Component<ArtworkDetailsProps> {
    trackTabChange(): void;
    render(): JSX.Element;
}
export declare const ArtworkDetailsFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ArtworkDetailsProps, "artwork">> & import("react-relay").ComponentRef>;
export declare const ArtworkDetailsQueryRenderer: ({ artworkID, }: {
    artworkID: string;
}) => JSX.Element;
