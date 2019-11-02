import React from "react";
import { ArticleData } from "../Typings";
export interface NewsBylineProps {
    article: ArticleData;
    editSource?: any;
    isMobile?: boolean;
    isTruncated?: boolean;
    onShareFromMobile?: () => void;
}
export declare const NewsByline: React.SFC<NewsBylineProps>;
