import { RelatedArticleCanvasData } from "Components/Publishing/Typings";
import React from "react";
interface RelatedArticleCanvasLinkProps extends React.HTMLProps<HTMLDivElement> {
    article: RelatedArticleCanvasData;
}
export declare class RelatedArticleCanvasLink extends React.Component<RelatedArticleCanvasLinkProps> {
    onClick(): void;
    render(): JSX.Element;
}
export {};
