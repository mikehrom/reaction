import { FlexProps } from "@artsy/palette";
import { ArticleData } from "Components/Publishing/Typings";
import React from "react";
export declare function totalSVGsForSection(section: string): 15 | 20;
export interface SVGBackgroundProps extends FlexProps {
    url?: string;
}
export interface TextProps extends FlexProps {
    isMobile?: boolean;
    isExpanded?: boolean;
}
export declare class VanguardArtistWrapper extends React.Component<{
    article: ArticleData;
    isExpanded?: boolean;
    section?: string;
    isMobile: boolean;
    onSlideshowStateChange?: (state: boolean) => void;
    isTest?: boolean;
}, {
    isExpanded: boolean;
}> {
    state: {
        isExpanded: boolean;
    };
    artistWrapper: any;
    componentDidMount(): void;
    onExpand(): void;
    getRandomSVG(section: any): number;
    getSVGBackground(index: any, section: any, isTest: any): JSX.Element;
    render(): JSX.Element;
}
export declare const InvertedSerif: import("styled-components").StyledComponentClass<import("@artsy/palette").SerifProps & TextProps, any, Pick<import("@artsy/palette").SerifProps, "p" | "style" | "color" | "size" | "italic" | "weight" | "element" | "display" | "maxWidth" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "fontFamily" | "numberOfLines" | "ellipsizeMode" | "bg" | "fontSize" | "lineHeight" | "textAlign" | "verticalAlign"> & {
    theme?: any;
} & TextProps>;
export declare const InvertedSans: import("styled-components").StyledComponentClass<import("@artsy/palette").SansProps & TextProps, any, Pick<import("@artsy/palette").SansProps, "p" | "style" | "color" | "size" | "italic" | "weight" | "element" | "display" | "maxWidth" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "fontFamily" | "numberOfLines" | "ellipsizeMode" | "bg" | "fontSize" | "lineHeight" | "textAlign" | "verticalAlign" | "role"> & {
    theme?: any;
} & TextProps>;
export declare const ReadMoreButton: import("styled-components").StyledComponentClass<import("@artsy/palette").SansProps & TextProps & {
    onClick: () => void;
}, any, Pick<import("@artsy/palette").SansProps, "p" | "style" | "color" | "size" | "italic" | "weight" | "element" | "display" | "maxWidth" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "fontFamily" | "numberOfLines" | "ellipsizeMode" | "bg" | "fontSize" | "lineHeight" | "textAlign" | "verticalAlign" | "role"> & {
    theme?: any;
} & TextProps & {
    onClick: () => void;
}>;
export declare const ArtistWrapper: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & FlexProps & {
    isExpanded: boolean;
}, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & FlexProps & {
    isExpanded: boolean;
}>;
