import React from "react";
interface Props extends React.HTMLProps<HTMLDivElement> {
    horizontalAlign?: string;
    hoverWidth?: number;
    message: string;
    verticalAlign?: string;
}
/**
 * @deprecated in favor of our Design System Tooltip component in @artsy/palette
 * https://palette.artsy.net/elements/inputs/tooltip
 */
export declare class Tooltip extends React.Component<Props, null> {
    render(): JSX.Element;
}
export {};
