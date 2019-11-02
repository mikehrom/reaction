import React from "react";
import { ArticleData } from "Components/Publishing/Typings";
interface Props {
    article?: ArticleData;
    color?: string;
    prefix?: string;
    vertical?: any;
}
export declare const VerticalOrSeriesTitle: React.SFC<Props>;
export declare const Vertical: import("styled-components").StyledComponentClass<import("@artsy/palette").SansProps & {
    color: string;
}, any, Pick<import("@artsy/palette").SansProps, "p" | "style" | "color" | "size" | "italic" | "weight" | "element" | "display" | "maxWidth" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "fontFamily" | "numberOfLines" | "ellipsizeMode" | "bg" | "fontSize" | "lineHeight" | "textAlign" | "verticalAlign" | "role"> & {
    theme?: any;
} & {
    color: string;
}>;
export {};
