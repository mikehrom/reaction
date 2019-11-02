import React, { ReactElement } from "react";
import { ArticleData } from "../../Typings";
export interface FeatureHeaderProps {
    article?: ArticleData;
    textColor?: string;
    date?: string;
    editDeck?: ReactElement<any>;
    editImage?: ReactElement<any>;
    editTitle?: ReactElement<any>;
    editVertical?: ReactElement<any>;
}
export declare const FeatureHeader: React.SFC<FeatureHeaderProps>;
export declare const EditImage: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
