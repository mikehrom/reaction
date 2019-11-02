import { NavigationTabs_searchableConnection } from "__generated__/NavigationTabs_searchableConnection.graphql";
import React from "react";
export interface Props {
    searchableConnection: NavigationTabs_searchableConnection;
    term: string;
    artworkCount: number;
}
export declare class NavigationTabs extends React.Component<Props> {
    trackClick(tab: string, destination_path: string): void;
    renderTab: (text: string, to: string, options?: {
        exact?: boolean;
        count?: number;
    }) => JSX.Element;
    tabs(): any[];
    render(): JSX.Element;
}
export declare const NavigationTabsFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "term" | "searchableConnection" | "artworkCount">> & import("react-relay").ComponentRef>;
export interface TabCounts {
    Artists?: number;
    Collections?: number;
    Galleries?: number;
    Shows?: number;
    Fairs?: number;
    Institutions?: number;
    Categories?: number;
    Articles?: number;
    Auctions?: number;
}
export declare const tabCountMap: (props: Props) => TabCounts;
