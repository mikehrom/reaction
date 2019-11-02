import { ArticleProps } from "Components/Publishing/Article";
import { ArticleData } from "Components/Publishing/Typings";
import React from "react";
interface ArticleState {
    fullscreenImages: any;
}
export declare class ArticleWithFullScreen extends React.Component<ArticleProps, ArticleState> {
    static defaultProps: {
        isMobile: boolean;
        isSuper: boolean;
        article: {};
        isTruncated: boolean;
        showTooltips: boolean;
    };
    constructor(props: any);
    render(): JSX.Element;
}
declare const _default: typeof ArticleWithFullScreen;
export default _default;
export declare const getSlideshowImagesFromArticle: (article: ArticleData) => any[];
