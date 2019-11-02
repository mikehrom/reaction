import React from "react";
import { TrackingProp } from "react-tracking";
interface Props {
    logo: string;
    url: string;
    tracking?: TrackingProp;
    trackingData?: any;
}
export declare class PartnerBlock extends React.Component<Props, null> {
    static defaultProps: {};
    onPartnerClick(event: any): void;
    render(): JSX.Element;
}
export declare const PartnerBlockContainer: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare const ImageContainer: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export {};
