import React from "react";
import { ArticleLayout, SectionLayout } from "../Typings";
export interface ArtworkProps {
    artwork: any;
    color?: string;
    editing?: boolean;
    layout?: ArticleLayout;
    sectionLayout?: SectionLayout;
    linked?: boolean;
    width?: string | number;
    height?: string | number;
    slideshowIndex?: number;
}
export declare class Artwork extends React.PureComponent<ArtworkProps> {
    static defaultProps: {
        linked: boolean;
        width: string;
        height: string;
    };
    render(): JSX.Element;
}
