import { ArticleData } from "Components/Publishing/Typings";
import React, { Component } from "react";
interface Props {
    article?: ArticleData;
    backgroundColor?: string;
    color?: string;
    relatedArticles?: any;
    isMobile?: boolean;
}
export declare class SeriesLayout extends Component<Props, null> {
    static defaultProps: Partial<Props>;
    render(): JSX.Element;
}
interface ContainerProps {
    backgroundUrl?: string;
    sponsor?: any;
}
export declare const SeriesContent: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & Props & ContainerProps, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & Props & ContainerProps>;
export declare const SeriesContainer: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & Props & ContainerProps, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & Props & ContainerProps>;
export {};
