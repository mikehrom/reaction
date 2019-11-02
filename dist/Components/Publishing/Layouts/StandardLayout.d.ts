import React from "react";
import { ArticleProps } from "../Article";
interface ArticleState {
    isTruncated: boolean;
}
export declare class StandardLayout extends React.Component<ArticleProps, ArticleState> {
    static defaultProps: {
        isMobile: boolean;
        isSuper: boolean;
        article: {};
        isTruncated: boolean;
    };
    constructor(props: any);
    removeTruncation(): void;
    renderSideRailDisplayAd(isMobileAd: boolean): JSX.Element;
    renderTopRailDisplayAd(isMobileAd: boolean): JSX.Element;
    render(): JSX.Element;
}
export declare const StandardLayoutParent: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export {};
