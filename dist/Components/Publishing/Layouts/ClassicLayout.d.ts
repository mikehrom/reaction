import React from "react";
import { ArticleData } from "../Typings";
export interface ArticleProps {
    article: ArticleData;
    isMobile?: boolean;
}
export declare const ClassicLayout: React.SFC<ArticleProps>;
