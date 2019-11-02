import { SerifProps } from "@artsy/palette";
import React, { FC } from "react";
interface ImageLinkProps {
    /** Source url for the image */
    src: string;
    /** Destination for the hyperlink */
    to: string;
    /** Primary text that appears below the image */
    title: React.ReactElement<SerifProps & {
        className?: string;
    }>;
    /** Secondary text that (optionally) appears below the title */
    subtitle?: React.ReactElement<SerifProps>;
    /** A number corresponding to the ratio of height/width (inverted from the usual width/height aspect ratio) */
    ratio: number | number[];
    onClick?: () => void;
}
export declare const ImageLink: FC<ImageLinkProps>;
export {};
