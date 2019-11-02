import React, { ReactNode } from "react";
interface Props extends React.HTMLProps<HTMLDivElement> {
    backgroundColor?: string;
    canFix?: boolean;
    children?: ReactNode;
    color?: string;
    sponsor?: any;
    title?: string;
    transparent?: boolean;
    isSlideOpen?: boolean;
}
interface State {
    isFixed: boolean;
}
export declare class Nav extends React.Component<Props, State> {
    static defaultProps: {
        backgroundColor: string;
        canFix: boolean;
        color: string;
        transparent: boolean;
    };
    state: {
        isFixed: boolean;
    };
    setPosition: (isFixed: boolean) => void;
    render(): JSX.Element;
}
export declare const NavContainer: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & import("@artsy/palette").FlexProps & {
    backgroundColor: string;
    color: string;
    transparent: boolean;
    isFixed: boolean;
    isSlideOpen: boolean;
}, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & import("@artsy/palette").FlexProps & {
    backgroundColor: string;
    color: string;
    transparent: boolean;
    isFixed: boolean;
    isSlideOpen: boolean;
}>;
export {};
