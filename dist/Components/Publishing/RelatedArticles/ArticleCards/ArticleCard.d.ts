import React, { Component } from "react";
import { TrackingProp } from "react-tracking";
interface Props {
    article?: any;
    color?: string;
    editing?: boolean;
    editDate?: any;
    editDescription?: any;
    editTitle?: any;
    editImage?: any;
    series?: any;
    tracking?: TrackingProp;
}
export declare class ArticleCard extends Component<Props> {
    static defaultProps: Partial<Props>;
    isUnpublishedMedia: () => boolean;
    isEditing: () => any;
    renderDate: () => JSX.Element;
    renderMediaDate: () => JSX.Element;
    renderMediaCoverInfo: () => JSX.Element;
    openLink: (e: any) => void;
    render(): JSX.Element;
}
export declare const ArticleCardImageContainer: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & import("@artsy/palette").BoxProps, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & import("@artsy/palette").BoxProps>;
export declare const ArticleCardContainer: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLAnchorElement> & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    published: boolean;
}, any, React.ClassAttributes<HTMLAnchorElement> & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    published: boolean;
}>;
export {};
