import React from "react";
interface ScrollIntoViewProps {
    selector: string;
    offset?: number;
}
export declare class ScrollIntoView extends React.Component<ScrollIntoViewProps> {
    static defaultProps: {
        offset: number;
    };
    getElementPosition: ($element: any) => {
        left: any;
        top: any;
    };
    scrollIntoView: (event: any) => void;
    render(): JSX.Element;
}
export {};
