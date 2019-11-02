import { ImagesData } from "Components/Publishing/Typings";
import React, { ReactNode } from "react";
declare type Layout = "mini" | "full";
export interface ImageSetSection {
    type: string;
    images: ImagesData;
    layout?: Layout;
    title?: string;
}
export interface ImageSetPreviewProps {
    color?: string;
    section: ImageSetSection;
    children?: ReactNode;
    onViewFullscreen?: (index: number) => void;
    fullscreenImages?: ImagesData;
}
export declare class ImageSetPreview extends React.PureComponent<ImageSetPreviewProps> {
    getImageUrl(): string;
    onClick: () => void;
    render(): JSX.Element;
}
export declare const ImageSetContainer: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare const FullLabel: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare const Img: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, any, React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>>;
export declare const ImgContainer: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export {};
