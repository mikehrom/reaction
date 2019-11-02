import React from "react";
interface CaptionProps extends React.HTMLProps<HTMLDivElement> {
    section?: any;
    total: number;
    index: number;
    open: boolean;
}
export declare const Caption: React.SFC<CaptionProps>;
export {};
