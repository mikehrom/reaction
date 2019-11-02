import React from "react";
interface Props {
    percentComplete: number;
}
/**
 * @deprecated in favor of our Design System ProgressBar component in @artsy/palette
 * https://palette.artsy.net/elements/loaders/progressbar
 */
export declare class ProgressIndicator extends React.Component<Props, null> {
    static defaultProps: {
        percentComplete: number;
    };
    render(): JSX.Element;
}
export declare const ProgressIndicatorContainer: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export {};
