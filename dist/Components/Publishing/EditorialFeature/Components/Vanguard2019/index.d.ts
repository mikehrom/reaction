import { EditorialFeaturesProps } from "Components/Publishing/EditorialFeature/EditorialFeature";
import React from "react";
export declare class Vanguard2019 extends React.Component<EditorialFeaturesProps, {
    isSlideOpen: boolean;
    isTest?: boolean;
}> {
    state: {
        isSlideOpen: boolean;
    };
    validSlugs: any;
    onChangeSection: (slug: any) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleScrollOnLoad(): void;
    getValidPaths: () => void;
    onFullScreenProviderStateChange: (state: boolean) => void;
    render(): JSX.Element;
}
