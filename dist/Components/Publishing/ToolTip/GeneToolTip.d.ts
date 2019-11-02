import { GeneToolTip_gene } from "__generated__/GeneToolTip_gene.graphql";
import PropTypes from "prop-types";
import React from "react";
import { TrackingProp } from "react-tracking";
export interface GeneProps {
    gene: GeneToolTip_gene;
    tracking?: TrackingProp;
}
export declare class GeneToolTip extends React.Component<GeneProps> {
    static contextTypes: {
        tooltipsData: PropTypes.Requireable<object>;
        onOpenAuthModal: PropTypes.Requireable<(...args: any[]) => any>;
    };
    trackClick: () => void;
    render(): JSX.Element;
}
export declare const GeneContainer: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, any, React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>>;
export declare const ToolTipFooter: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare const GeneToolTipContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<GeneProps, "tracking" | "gene">> & import("react-relay").ComponentRef>;
