import React from "react";
import { ArtworkApp_artwork } from "__generated__/ArtworkApp_artwork.graphql";
import { TrackingProp } from "react-tracking";
export interface Props {
    artwork: ArtworkApp_artwork;
    tracking?: TrackingProp;
}
export declare class ArtworkApp extends React.Component<Props> {
    componentDidMount(): void;
    trackProductView(): void;
    enableIntercomForBuyers(mediator: any): void;
    trackPageview(): void;
    renderArtists(): JSX.Element;
    render(): JSX.Element;
}
export declare const ArtworkAppFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "artwork" | "tracking">> & import("react-relay").ComponentRef>;
