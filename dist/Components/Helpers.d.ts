import { css } from "styled-components";
/**
 * Helper function to display an element as a block that inherits its parents width
 * @param margin value in pixels to remove from width 100%
 */
export declare const block: (margin?: number) => (props?: any) => import("styled-components").InterpolationValue[];
declare const sizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
declare type Media = {
    [S in keyof typeof sizes]: typeof css;
};
/**
 * @deprecated import { media } from `Styleguide/Elements/Grid` instead
 */
export declare const media: Media;
declare const psizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
declare type PublishingMedia = {
    [S in keyof typeof psizes]: typeof css;
};
export declare const pMedia: PublishingMedia;
export {};
