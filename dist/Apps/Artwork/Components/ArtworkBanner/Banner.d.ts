import React from "react";
export interface BannerProps {
    /** Image for avatar  */
    imageUrl?: string;
    /** Fallback partner initials in case image is not there. */
    initials?: string;
    /** In auction / at fair / in show */
    meta?: string;
    /** Auction / fair / show name */
    name?: string;
    /** Partner name */
    subHeadline?: string;
    /** Link to auction */
    href?: string;
}
export declare const Banner: React.SFC<BannerProps>;
export declare const LargeBanner: (props: any) => JSX.Element;
export declare const SmallBanner: (props: any) => JSX.Element;
