import { ArticleLayout, SectionLayout } from "Components/Publishing/Typings";
import React from "react";
interface ArtworkCaptionProps extends React.HTMLProps<HTMLDivElement> {
    artwork: any;
    color?: string;
    layout?: ArticleLayout;
    sectionLayout?: SectionLayout;
    linked?: boolean;
    isFullscreenCaption?: boolean;
}
export declare class ArtworkCaption extends React.Component<ArtworkCaptionProps> {
    static defaultProps: {
        color: string;
    };
    joinParts(children: any, key: any, delimiter?: string): unknown;
    joinArtistNames(names: any, delimiter?: string): any;
    renderArtists(): any;
    renderArtistName(artist: any, key: string): JSX.Element;
    renderTitleDate(): unknown;
    renderTitle(): JSX.Element;
    renderDate(): JSX.Element;
    renderPartner(): any;
    renderCredit(): JSX.Element;
    renderPartnerCredit: () => unknown;
    renderFullscreenCaption: () => JSX.Element;
    renderClassicCaption: () => JSX.Element;
    renderEditorialCaption: () => JSX.Element;
    render(): JSX.Element;
}
export declare const StyledArtworkCaption: import("styled-components").StyledComponentClass<import("@artsy/palette").SansProps & {
    color?: string;
    layout?: ArticleLayout;
    sectionLayout?: SectionLayout;
}, any, Pick<import("@artsy/palette").SansProps, "p" | "style" | "color" | "size" | "italic" | "weight" | "element" | "display" | "maxWidth" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "fontFamily" | "numberOfLines" | "ellipsizeMode" | "bg" | "fontSize" | "lineHeight" | "textAlign" | "verticalAlign" | "role"> & {
    theme?: any;
} & {
    color?: string;
    layout?: ArticleLayout;
    sectionLayout?: SectionLayout;
}>;
export {};
