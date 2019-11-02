import { ArticleLayout, SectionLayout } from "Components/Publishing/Typings";
import React from "react";
interface CaptionProps {
    caption: string;
    color?: string;
    index?: any;
    layout?: ArticleLayout;
    sectionLayout?: SectionLayout;
}
export declare const Caption: React.SFC<CaptionProps>;
export declare const CaptionContainer: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export {};
