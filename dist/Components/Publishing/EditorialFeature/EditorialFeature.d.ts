import { ArticleProps } from "Components/Publishing/Article";
import React from "react";
export interface EditorialFeaturesProps extends ArticleProps {
    isTest?: boolean;
}
export declare const EditorialFeature: React.SFC<EditorialFeaturesProps>;
