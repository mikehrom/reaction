import { ArtworkImageBrowser_artwork } from "__generated__/ArtworkImageBrowser_artwork.graphql";
import React from "react";
export interface ImageBrowserProps {
    artwork: ArtworkImageBrowser_artwork;
}
export declare class ArtworkImageBrowserContainer extends React.Component<ImageBrowserProps> {
    carousel: any;
    render(): JSX.Element;
}
export declare const ArtworkImageBrowserFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ImageBrowserProps, "artwork">> & import("react-relay").ComponentRef>;
export declare const ArtworkImageBrowserQueryRenderer: ({ artworkID, }: {
    artworkID: string;
}) => JSX.Element;
