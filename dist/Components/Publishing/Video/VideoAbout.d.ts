import React from "react";
import { ArticleData } from "Components/Publishing/Typings";
export interface VideoAboutProps {
    article: ArticleData;
    color?: string;
    editDescription?: any;
    editCredits?: any;
}
export declare const VideoAbout: React.SFC<VideoAboutProps>;
export declare const Credits: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & import("@artsy/palette").FlexProps, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & import("@artsy/palette").FlexProps>;
export declare const VideoAboutContainer: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & import("@artsy/palette").FlexProps, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & import("@artsy/palette").FlexProps>;
