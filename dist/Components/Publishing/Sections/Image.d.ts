import React from "react";
import { ArticleLayout, SectionLayout } from "../Typings";
interface ImageProps extends React.HTMLProps<HTMLDivElement> {
    color?: string;
    editCaption?: any;
    editing?: boolean;
    image?: any;
    layout?: ArticleLayout;
    linked?: boolean;
    sectionLayout?: SectionLayout;
    width?: number | string;
    height?: number | string;
    slideshowIndex?: number;
}
export declare const Image: React.SFC<ImageProps>;
export {};
