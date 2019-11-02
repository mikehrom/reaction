import { ArticleData } from "Components/Publishing/Typings";
import React from "react";
interface SeriesTitleProps extends React.HTMLProps<HTMLDivElement> {
    article?: ArticleData;
    color?: string;
    editTitle?: any;
}
export declare const SeriesTitle: React.SFC<SeriesTitleProps>;
export declare const SeriesTitleContainer: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & {
    color: string;
}, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & {
    color: string;
}>;
export {};
