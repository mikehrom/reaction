import { RelatedArticlePanelData } from "Components/Publishing/Typings";
import React from "react";
interface RelatedArticlesPanelProps extends React.HTMLProps<HTMLDivElement> {
    article: RelatedArticlePanelData;
}
export declare class RelatedArticlesPanelLink extends React.Component<RelatedArticlesPanelProps> {
    static defaultProps: {
        label: string;
    };
    onClick(e: any): void;
    render(): JSX.Element;
}
export declare const ArticleLink: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, any, React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>>;
export {};
