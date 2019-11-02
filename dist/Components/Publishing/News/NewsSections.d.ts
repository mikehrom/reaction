import React, { Component } from "react";
import { ArticleData, SectionData } from "../Typings";
interface Props {
    article: ArticleData;
    isMobile?: boolean;
    isTruncated: boolean;
}
interface ContainerProp {
    type: string;
}
export declare class NewsSections extends Component<Props> {
    getSection(section: SectionData, index: number): any;
    renderSections(): JSX.Element[];
    renderByline(): JSX.Element;
    render(): JSX.Element;
}
export declare const NewsSectionContainer: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & ContainerProp, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & ContainerProp>;
export {};
