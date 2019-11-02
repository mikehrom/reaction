import { themeProps } from "@artsy/palette";
import { MediaQueryMatches, ResponsiveProviderProps as _ResponsiveProviderProps } from "@artsy/react-responsive-media/dist/DynamicResponsive";
import React from "react";
declare type MediaQuery = keyof typeof themeProps["mediaQueries"];
export declare class Responsive extends React.Component<React.ConsumerProps<MediaQueryMatches<MediaQuery>>> {
    static displayName: string;
    componentDidMount(): void;
    render(): JSX.Element;
}
export declare type Breakpoint = keyof typeof themeProps["grid"]["breakpoints"];
export interface DeprecatedResponsiveProviderProps {
    initialBreakpoint?: Breakpoint;
    breakpoints: {
        [K in Breakpoint]: string;
    };
    children: React.ReactNode;
}
export declare type NewResponsiveProviderProps = _ResponsiveProviderProps<MediaQuery>;
export declare type MatchingMediaQueries = NewResponsiveProviderProps["initialMatchingMediaQueries"];
export declare type ResponsiveProviderProps = NewResponsiveProviderProps | DeprecatedResponsiveProviderProps;
export declare const ResponsiveProvider: React.SFC<ResponsiveProviderProps>;
export {};
