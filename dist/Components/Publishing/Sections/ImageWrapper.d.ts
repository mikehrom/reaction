import React from "react";
import { ArticleLayout } from "../Typings";
interface Props extends React.HTMLProps<HTMLImageElement> {
    src: string;
    layout?: ArticleLayout;
    linked?: boolean;
    width?: string | number;
    height?: string | number;
    alt?: string;
    editing?: boolean;
    slideshowIndex?: number;
}
export declare class ImageWrapper extends React.PureComponent<Props, any> {
    image: any;
    mounted: boolean;
    state: {
        isLoaded: boolean;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    onImageLoad: () => void;
    render(): JSX.Element;
}
export {};
