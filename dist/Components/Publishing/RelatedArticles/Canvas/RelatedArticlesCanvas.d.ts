import { RelatedArticleCanvasData } from "Components/Publishing/Typings";
import React from "react";
export interface RelatedArticlesCanvasProps extends React.HTMLProps<HTMLDivElement> {
    vertical?: {
        name: string;
        id?: string;
    };
    articles: RelatedArticleCanvasData[];
    isMobile?: boolean;
}
export declare class RelatedArticlesCanvas extends React.Component<RelatedArticlesCanvasProps> {
    trackRelatedImpression(): void;
    render(): JSX.Element;
}
