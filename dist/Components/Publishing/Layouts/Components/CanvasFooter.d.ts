import { ArticleData, RelatedArticleCanvasData } from "Components/Publishing//Typings";
import React from "react";
export interface CanvasFooterProps {
    relatedArticles?: RelatedArticleCanvasData[];
    article: ArticleData;
    showCollectionsRail?: boolean;
}
export declare const CanvasFooter: React.SFC<CanvasFooterProps>;
export declare const CanvasFooterContainer: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
