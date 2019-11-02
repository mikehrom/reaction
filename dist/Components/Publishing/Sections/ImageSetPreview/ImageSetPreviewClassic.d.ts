import { ImagesData } from "Components/Publishing/Typings";
import { Component } from "react";
export interface ImageSetPreviewClassicProps {
    images: ImagesData;
}
interface ImageSetPreviewClassicState {
    visibleImages: number;
}
export declare class ImageSetPreviewClassic extends Component<ImageSetPreviewClassicProps, ImageSetPreviewClassicState> {
    constructor(props: any);
    getVisibleImages(images: any): number;
    renderImages(images: any): any;
    render(): JSX.Element;
}
export {};
