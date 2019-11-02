import { ArticleData } from "Components/Publishing/Typings";
import React from "react";
export declare const VanguardSeriesWrapper: React.SFC<{
    article: ArticleData;
    index: number;
    isMobile: boolean;
    onSlideshowStateChange?: (state: boolean) => void;
    isTest?: boolean;
}>;
