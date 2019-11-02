import React from "react";
import { ArticleLayout } from "../Typings";
export declare const VIDEO_RATIO = 0.5625;
export declare function isValidVideoUrl(url: string): boolean;
export declare function getPlayerUrl(url: any): "" | "https://player.vimeo.com/video/" | "https://www.youtube.com/embed/";
export declare const IFrame: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>, any, React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>>;
interface CoverImageProps {
    src?: string;
    height?: number;
    layout?: ArticleLayout;
}
export declare const CoverImage: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & CoverImageProps, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & CoverImageProps>;
export declare const Video: any;
export {};
