import { SearchResultsArtists_viewer } from "__generated__/SearchResultsArtists_viewer.graphql";
import { LoadingAreaState } from "Components/v2/LoadingArea";
import { Location } from "found";
import React from "react";
import { RelayRefetchProp } from "react-relay";
export interface Props {
    viewer: SearchResultsArtists_viewer;
    relay: RelayRefetchProp;
    location: Location;
}
interface State extends LoadingAreaState {
    page: number;
}
export declare class SearchResultsArtistsRoute extends React.Component<Props, State> {
    state: {
        isLoading: boolean;
        page: any;
    };
    constructor(props: any);
    toggleLoading: (isLoading: any) => void;
    loadNext: () => void;
    loadAfter: (cursor: string, page: number) => void;
    renderArtists(): JSX.Element;
    render(): JSX.Element;
}
export declare const SearchResultsArtistsRouteFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<any, string | number | symbol>> & import("react-relay").ComponentRef>;
export {};
