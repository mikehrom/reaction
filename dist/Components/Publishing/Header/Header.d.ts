import React, { ReactElement } from "react";
import { ArticleData } from "../Typings";
interface HeaderProps {
    article: ArticleData;
    textColor?: string;
    date?: string;
    editDeck?: ReactElement<any>;
    editImage?: ReactElement<any>;
    editLeadParagraph?: ReactElement<any>;
    editTitle?: ReactElement<any>;
    editVertical?: ReactElement<any>;
}
export declare const Header: React.SFC<HeaderProps>;
export {};
