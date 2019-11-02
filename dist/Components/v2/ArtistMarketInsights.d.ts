import { ArtistMarketInsights_artist } from "__generated__/ArtistMarketInsights_artist.graphql";
import React from "react";
export interface MarketInsightsProps {
    artist: ArtistMarketInsights_artist;
    border?: boolean;
    Container?: (props: {
        children: JSX.Element;
    }) => JSX.Element;
}
export declare class MarketInsights extends React.Component<MarketInsightsProps> {
    static defaultProps: {
        border: boolean;
    };
    renderAuctionHighlight(): JSX.Element;
    renderGalleryRepresentation(): JSX.Element;
    renderPermanentCollection(): JSX.Element;
    render(): JSX.Element;
}
export declare const ArtistMarketInsightsFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<MarketInsightsProps, "border" | "artist" | "Container">> & import("react-relay").ComponentRef>;
