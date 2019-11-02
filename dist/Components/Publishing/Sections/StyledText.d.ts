import "react";
import { ArticleLayout } from "../Typings";
interface StyledTextProps {
    color?: string;
    isContentStart?: boolean;
    layout: ArticleLayout;
    postscript?: boolean;
    showTooltips?: boolean;
}
export declare const StyledText: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & StyledTextProps, any, import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & StyledTextProps>;
export {};
