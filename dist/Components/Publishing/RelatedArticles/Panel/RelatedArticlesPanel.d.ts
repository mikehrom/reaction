import { RelatedArticlePanelData } from "Components/Publishing/Typings";
import React from "react";
interface RelatedArticlesPanelProps extends React.HTMLProps<HTMLDivElement> {
    label?: string;
    articles: RelatedArticlePanelData[];
}
export declare class RelatedArticlesPanel extends React.Component<RelatedArticlesPanelProps> {
    static defaultProps: {
        label: string;
    };
    trackRelatedImpression(): void;
    render(): JSX.Element;
}
export {};
