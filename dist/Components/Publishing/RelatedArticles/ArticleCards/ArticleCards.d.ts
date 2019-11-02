import React from "react";
import { ArticleData } from "Components/Publishing/Typings";
interface Props {
    series?: ArticleData;
    color?: string;
    relatedArticles?: any;
}
export declare const ArticleCards: React.SFC<Props>;
export declare const ArticlesWrapper: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & import("@artsy/palette").BoxProps, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & import("@artsy/palette").BoxProps>;
export {};
