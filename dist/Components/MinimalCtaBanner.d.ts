import React from "react";
export interface MinimalCtaBannerProps extends React.Props<HTMLDivElement> {
    backgroundColor?: string;
    copy?: string;
    height?: string;
    href?: string;
    position: "top" | "bottom";
    textColor?: string;
    show?: boolean;
}
export interface State {
    dismissed: boolean;
}
export declare class MinimalCtaBanner extends React.Component<MinimalCtaBannerProps, State> {
    state: {
        dismissed: boolean;
    };
    componentDidMount(): void;
    dismissCta(): void;
    render(): JSX.Element;
}
