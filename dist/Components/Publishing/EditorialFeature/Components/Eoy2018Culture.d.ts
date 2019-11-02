import { EditorialFeaturesProps } from "Components/Publishing/EditorialFeature/EditorialFeature";
import { SectionData } from "Components/Publishing/Typings";
import React from "react";
interface State {
    stickyHeader: SectionData | null;
}
export declare class Eoy2018Culture extends React.Component<EditorialFeaturesProps, State> {
    state: {
        stickyHeader: any;
    };
    sectionText: (section: any, i: any, isDark: any) => JSX.Element;
    sectionHeaderText: (section: any, i: any) => JSX.Element;
    sectionSocialEmbed: (section: any, i: any) => JSX.Element;
    sectionImageCollection: (section: any, i: any) => JSX.Element;
    sectionImageSet: (section: any, i: any) => JSX.Element;
    sectionIsHeader: (section: any) => any;
    makeSectionArrays: (sections: any) => any[];
    getSections: (sections: any, isDark: any) => any;
    render(): JSX.Element;
}
export {};
