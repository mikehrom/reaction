import { AdUnit } from "Components/Publishing/Typings";
import React, { Component } from "react";
import { ArticleData } from "../Typings";
interface Props {
    DisplayPanel?: any;
    article: ArticleData;
    color?: string;
    isMobile?: boolean;
    showTooltips?: boolean;
    isSponsored?: boolean;
    isSuper?: boolean;
    customWidth?: number;
    isTruncatedAt?: number;
    hideAds?: boolean;
}
interface State {
    shouldInjectMobileDisplay: boolean;
}
export declare class Sections extends Component<Props, State> {
    static defaultProps: {
        isMobile: boolean;
    };
    displayInjectId: string;
    state: {
        shouldInjectMobileDisplay: boolean;
    };
    UNSAFE_componentWillMount(): void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    /**
     * Inject DisplayAd after a specific paragraph index
     */
    injectDisplayPanelMarker(body: any): string;
    mountDisplayToMarker(): void;
    getContentStartIndex: () => number;
    getContentEndIndex: () => number;
    getSection(section: any, index: any): any;
    getAdUnit(index: number, indexAtFirstAd: number): AdUnit.Desktop_NewsLanding_Leaderboard1 | AdUnit.Desktop_NewsLanding_Leaderboard2 | AdUnit.Desktop_NewsLanding_LeaderboardRepeat | AdUnit.Mobile_InContentLB1 | AdUnit.Mobile_InContentLB2 | AdUnit.Mobile_Feature_InContentLeaderboard3;
    /**
     * Add a margin top when to the ad when the section is any of the following:
     * 1) Text section without <br> tags wrapping the <p> or <h2> content
     * 3) Image set section
     * 4) Image collection with a caption/title
     */
    getAdMarginTop(section: any): string;
    renderSections(): JSX.Element[];
    renderAuthors(): JSX.Element;
    renderPostScript(): JSX.Element;
    render(): JSX.Element;
}
export declare const StyledSections: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & {
    layout: string;
}, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & {
    layout: string;
}>;
export {};
