import { Component } from "react";
import { ArticleData } from "../Typings";
export interface State {
    showCtaBanner: boolean;
}
export declare enum CtaCopy {
    news = "Sign up for the best in art world news",
    default = "Sign up to get our best stories everyday"
}
export declare class BannerWrapper extends Component<{
    article: ArticleData;
}, State> {
    state: {
        showCtaBanner: boolean;
    };
    lastScrollPosition: number;
    handleScroll(): void;
    componentDidMount(): void;
    render(): JSX.Element;
}
