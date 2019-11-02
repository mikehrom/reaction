import { ArtworkMeta_artwork } from "__generated__/ArtworkMeta_artwork.graphql";
import React, { Component } from "react";
interface ArtworkMetaProps {
    artwork: ArtworkMeta_artwork;
    googleAdId?: string;
}
export declare class ArtworkMeta extends Component<ArtworkMetaProps> {
    renderImageMetaTags(): JSX.Element;
    renderSailthruTags(): JSX.Element;
    renderGoogleAdSnippet(): JSX.Element;
    render(): JSX.Element;
}
export declare const ArtworkMetaFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<any, string | number | symbol>> & import("react-relay").ComponentRef>;
export {};
