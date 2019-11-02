import React from "react";
import { ArticleData } from "Components/Publishing/Typings";
interface Props {
    article?: ArticleData;
    color?: string;
    relatedArticles?: any;
}
export declare const ArticleCardsBlock: React.SFC<Props>;
export declare const ArticleCardsContainer: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export {};
