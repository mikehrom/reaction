import { ArticleData } from "Components/Publishing/Typings";
import React from "react";
declare type SubSeriesType = "emerging" | "newly-established" | "getting-their-due";
export declare const VanguardTableOfContents: React.SFC<{
    article: ArticleData;
    onChangeSection: (slug: string) => void;
}>;
export declare const TocSvgs: (type: SubSeriesType) => JSX.Element;
export declare const SeriesContainer: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & import("@artsy/palette").BoxProps, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & import("@artsy/palette").BoxProps>;
export {};
