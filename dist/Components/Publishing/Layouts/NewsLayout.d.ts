import React, { Component } from "react";
import { TrackingProp } from "react-tracking";
import { AdUnit, ArticleData, RelatedArticleCanvasData } from "../Typings";
interface Props {
    article: ArticleData;
    articleSerial?: number;
    isMobile?: boolean;
    isHovered?: boolean;
    isTruncated?: boolean;
    onExpand?: () => void;
    relatedArticlesForCanvas?: RelatedArticleCanvasData[];
    showCollectionsRail?: boolean;
    tracking?: TrackingProp;
    shouldAdRender?: boolean;
}
interface State {
    isTruncated: boolean;
    isHovered: boolean;
}
interface NewsContainerProps {
    isTruncated: boolean;
    marginTop?: string;
    isHovered: boolean;
}
export declare class NewsLayout extends Component<Props, State> {
    constructor(props: Props);
    UNSAFE_componentWillReceiveProps(nextProps: any): void;
    onExpand(): void;
    trackExpand: () => void;
    /**
     * Ad unit code "Mobile/Desktop_InContentLB1" is for ads that appear after the 3rd article,
     * "<Mobile/Desktop_InContentLB2" for ads that appear after the 9th article,
     * and Mobile/Desktop_InContentLBRepeat is for all subsequent ads
     */
    getAdUnit(): AdUnit.Desktop_NewsLanding_Leaderboard1 | AdUnit.Desktop_NewsLanding_Leaderboard2 | AdUnit.Desktop_NewsLanding_LeaderboardRepeat | AdUnit.Mobile_InContentMR1 | AdUnit.Mobile_NewsLanding_InContent2 | AdUnit.Mobile_NewsLanding_InContent3;
    renderFooterContent(): JSX.Element;
    render(): JSX.Element;
}
export declare const ExpandButton: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement> & NewsContainerProps, any, React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement> & NewsContainerProps>;
export declare const NewsArticleContainer: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & NewsContainerProps, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & NewsContainerProps>;
export {};
