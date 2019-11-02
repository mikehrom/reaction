import { ImagesData } from "Components/Publishing/Typings";
import React from "react";
import { ArticleLayout, SectionLayout } from "../Typings";
export interface ImageCollectionProps {
    color?: string;
    images: ImagesData;
    targetHeight?: number;
    gutter?: number;
    sectionLayout?: SectionLayout;
    articleLayout?: ArticleLayout;
    size?: {
        width: number;
    };
    fullscreenImages: ImagesData;
}
export declare const ImageCollectionItem: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & {
    margin?: number;
    width?: number;
}, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & {
    margin?: number;
    width?: number;
}>;
export declare const ImageCollection: any;
