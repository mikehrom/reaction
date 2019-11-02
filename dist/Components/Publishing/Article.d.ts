import React from "react";
import { ArticleData } from "Components/Publishing/Typings";
import { TrackingProp } from "react-tracking";
export interface ArticleProps {
    articleSerial?: number;
    article: ArticleData;
    backgroundColor?: string;
    color?: string;
    customEditorial?: string;
    relatedArticles?: any;
    relatedArticlesForPanel?: any;
    relatedArticlesForCanvas?: any;
    renderTime?: number;
    seriesArticle?: ArticleData;
    isHovered?: boolean;
    isLoggedIn?: boolean;
    isMobile?: boolean;
    isTablet?: boolean;
    infiniteScrollEntrySlug?: string;
    isSuper?: boolean;
    isTruncated?: boolean;
    emailSignupUrl?: string;
    headerHeight?: string;
    marginTop?: string | null;
    showTooltips?: boolean;
    showCollectionsRail?: boolean;
    slideIndex?: number;
    tracking?: TrackingProp;
    closeViewer?: () => void;
    viewerIsOpen?: boolean;
    onOpenAuthModal?: (type: "register" | "login", config: object) => void;
    onExpand?: () => void;
    shouldAdRender?: boolean;
}
export declare class Article extends React.Component<ArticleProps> {
    getArticleLayout: () => JSX.Element;
    shouldRenderSignUpCta: () => boolean;
    sponsorPixelTrackingCode: (article: any) => any;
    render(): JSX.Element;
}
