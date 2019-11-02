import { ArticleData } from "Components/Publishing/Typings";
import React, { ReactElement } from "react";
interface StandardHeaderProps {
    article?: ArticleData;
    date?: string;
    editTitle?: ReactElement<any>;
    editVertical?: ReactElement<any>;
}
export declare const StandardHeader: React.SFC<StandardHeaderProps>;
export {};
