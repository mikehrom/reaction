/// <reference types="styled-components" />
import { LinkProps } from "found";
import React from "react";
export declare const RouteTabs: import("styled-components").StyledComponentClass<import("@artsy/palette").FlexProps & {
    scrollRef?: (instance: HTMLDivElement) => void;
}, any, Pick<import("@artsy/palette").FlexProps & {
    scrollRef?: (instance: HTMLDivElement) => void;
}, "bottom" | "p" | "display" | "flexGrow" | "alignItems" | "alignContent" | "background" | "flexBasis" | "flexDirection" | "flexWrap" | "height" | "justifyContent" | "maxHeight" | "maxWidth" | "order" | "position" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "width" | "zIndex" | "scrollRef"> & {
    theme?: any;
}>;
export declare const RouteTab: React.FC<LinkProps>;
export interface TabCarouselProps {
    tabs: Array<React.ReactElement<any>>;
}
export declare const TabCarousel: React.FC<TabCarouselProps>;
