/// <reference types="react" />
import { ArticleLayout, SectionData } from "Components/Publishing/Typings";
export declare const SectionContainer: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & {
    section?: SectionData;
    articleLayout?: ArticleLayout;
    customWidth?: number;
}, any, import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & {
    section?: SectionData;
    articleLayout?: ArticleLayout;
    customWidth?: number;
}>;
export declare const getSectionWidth: (section?: SectionData, articleLayout?: ArticleLayout, customWidth?: number) => string;
export declare const getSectionMobilePadding: (section?: SectionData) => 0 | "0 20px";
