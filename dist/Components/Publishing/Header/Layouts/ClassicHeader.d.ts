import React, { ReactElement } from "react";
import { ArticleData } from "../../Typings";
interface ClassicHeaderProps {
    article?: ArticleData;
    date?: string;
    editLeadParagraph?: ReactElement<any>;
    editTitle?: ReactElement<any>;
}
export declare const ClassicHeader: React.SFC<ClassicHeaderProps>;
export declare const Title: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare const LeadParagraph: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export {};
