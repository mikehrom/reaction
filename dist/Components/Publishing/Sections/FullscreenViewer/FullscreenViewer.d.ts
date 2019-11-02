import PropTypes from "prop-types";
import React, { Component, HTMLProps } from "react";
interface FullscreenViewerProps extends HTMLProps<HTMLDivElement> {
    images: any;
    show: boolean;
    onClose: () => void;
    slideIndex?: number;
}
interface FullscreenViewerState {
    isCaptionOpen: boolean;
}
export declare class FullscreenViewer extends Component<FullscreenViewerProps, FullscreenViewerState> {
    static childContextTypes: {
        onToggleCaption: PropTypes.Requireable<(...args: any[]) => any>;
    };
    private slider;
    constructor(props: any);
    componentDidUpdate(): void;
    handleKeydown: (e: any) => void;
    getChildContext(): {
        onToggleCaption: () => void;
    };
    toggleCaption: () => void;
    close: (e: any) => void;
    renderImageComponents: () => JSX.Element[];
    render(): JSX.Element;
}
export declare const FullscreenViewerContainer: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export {};
