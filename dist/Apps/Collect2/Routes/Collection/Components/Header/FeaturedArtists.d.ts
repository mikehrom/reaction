import { Breakpoint } from "@artsy/palette";
import React from "react";
interface FeaturedArtistsProps {
    hasMultipleArtists: boolean;
    featuredArtists: object[];
    breakpointSize: Breakpoint;
}
export declare const FeaturedArtists: React.FC<FeaturedArtistsProps>;
export {};
