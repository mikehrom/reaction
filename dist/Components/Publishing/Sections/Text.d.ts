import React, { Component } from "react";
import { ArticleLayout } from "../Typings";
interface Props extends React.HTMLProps<HTMLDivElement> {
    color?: string;
    html?: string;
    isContentEnd?: boolean;
    isContentStart?: boolean;
    layout: ArticleLayout;
    postscript?: boolean;
    showTooltips?: boolean;
}
interface State {
    html: string;
}
export declare class Text extends Component<Props, State> {
    static defaultProps: {
        color: string;
        showTooltips: boolean;
    };
    state: {
        html: string;
    };
    componentDidMount(): void;
    htmlMaybeWithContentEnd: () => string;
    shouldShowTooltipForURL: (node: Element) => boolean;
    transformNode: (node: Element, index: any) => any;
    render(): JSX.Element;
}
export {};
