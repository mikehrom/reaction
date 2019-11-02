import PropTypes from "prop-types";
import React from "react";
interface Props extends React.HTMLProps<HTMLDivElement> {
    index?: number;
    onViewFullscreen?: (index: number) => void;
}
export declare class ViewFullscreen extends React.Component<Props, null> {
    static contextTypes: {
        onViewFullscreen: PropTypes.Requireable<(...args: any[]) => any>;
    };
    constructor(props: any);
    onClick(e: any): void;
    render(): JSX.Element;
}
export {};
