import { SearchApp_viewer } from "__generated__/SearchApp_viewer.graphql";
import { Location } from "found";
import React from "react";
export interface Props {
    viewer: SearchApp_viewer;
    location: Location;
}
export declare class SearchApp extends React.Component<Props> {
    renderResults(count: number, artworkCount: number): JSX.Element;
    renderFooter(): JSX.Element;
    render(): JSX.Element;
}
export declare const SearchAppFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "location" | "viewer">> & import("react-relay").ComponentRef>;
