import { ArtistToolTip_artist } from "__generated__/ArtistToolTip_artist.graphql";
import PropTypes from "prop-types";
import React from "react";
import { TrackingProp } from "react-tracking";
export interface ArtistToolTipProps {
    artist: ArtistToolTip_artist;
    tracking?: TrackingProp;
}
export declare class ArtistToolTip extends React.Component<ArtistToolTipProps> {
    static contextTypes: {
        tooltipsData: PropTypes.Requireable<object>;
        onOpenAuthModal: PropTypes.Requireable<(...args: any[]) => any>;
    };
    trackClick: () => void;
    renderArtistGenes: () => string;
    render(): JSX.Element;
}
export declare const ArtistContainer: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare const TitleDate: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, any, React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>>;
export declare const ArtistTooltipContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ArtistToolTipProps, "artist" | "tracking">> & import("react-relay").ComponentRef>;
