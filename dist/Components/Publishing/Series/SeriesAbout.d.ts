import React, { Component } from "react";
import { TrackingProp } from "react-tracking";
import { ArticleData } from "Components/Publishing/Typings";
interface SeriesAboutProps {
    article?: ArticleData;
    color?: string;
    editDescription?: any;
    editSubTitle?: any;
    tracking?: TrackingProp;
}
export declare class SeriesAbout extends Component<SeriesAboutProps> {
    static defaultProps: Partial<SeriesAboutProps>;
    componentDidMount(): void;
    onClickFooterLink: (event: any) => void;
    partnerBlock: () => JSX.Element;
    render(): JSX.Element;
}
export declare const SeriesAboutContainer: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & import("@artsy/palette").FlexProps, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & import("@artsy/palette").FlexProps>;
export {};
