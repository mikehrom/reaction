import React from "react";
import { EditorialFeaturesProps } from "Components/Publishing/EditorialFeature/EditorialFeature";
export declare class Eoy2018Artists extends React.Component<EditorialFeaturesProps> {
    getHeaderSections: () => any[];
    sectionIsHeader: (section: any) => any;
    sectionArtistHeader: (section: any, i: any) => JSX.Element;
    sectionText: (section: any, i: any) => JSX.Element;
    sectionImageSet: (section: any, i: any) => JSX.Element;
    getSections: () => JSX.Element[];
    render(): JSX.Element;
}
export declare const ArtistHeaderSection: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & import("@artsy/palette").FlexProps, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & import("@artsy/palette").FlexProps>;
