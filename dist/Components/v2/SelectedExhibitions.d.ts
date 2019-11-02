import { SelectedExhibitions_exhibitions } from "__generated__/SelectedExhibitions_exhibitions.graphql";
import React, { SFC } from "react";
export declare const MIN_EXHIBITIONS = 2;
export declare type Year = string;
export interface SelectedExhibitionsProps {
    border?: boolean;
    collapsible?: boolean;
    exhibitions: SelectedExhibitions_exhibitions;
    artistID?: string;
    totalExhibitions?: number;
    ViewAllLink?: JSX.Element;
    Container?: (props: {
        children: JSX.Element;
    }) => JSX.Element;
}
export declare const SelectedExhibitions: SFC<SelectedExhibitionsProps>;
export declare const isCollapsed: (props: any) => boolean;
export interface ExhibitionsHeadlineProps {
    exhibitionCount: number;
    expanded: boolean;
    collapsible: boolean;
    onShowClicked: (event: React.MouseEvent<HTMLElement>) => void;
}
export declare const ExhibitionsHeadline: SFC<ExhibitionsHeadlineProps>;
export interface ExhibitionYearListProps {
    year: Year;
    exhibitions: SelectedExhibitions_exhibitions;
}
export declare const ExhibitionYearList: SFC<ExhibitionYearListProps>;
export interface SelectedExhibitionsContainerProps extends SelectedExhibitionsProps {
    border?: boolean;
    collapsible?: boolean;
}
export declare class SelectedExhibitionsContainer extends React.Component<SelectedExhibitionsContainerProps> {
    static defaultProps: {
        border: boolean;
    };
    state: {
        expanded: boolean;
    };
    render(): JSX.Element;
}
export declare const SelectedExhibitionFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<SelectedExhibitionsProps, "border" | "artistID" | "Container" | "collapsible" | "exhibitions" | "totalExhibitions" | "ViewAllLink">> & import("react-relay").ComponentRef>;
