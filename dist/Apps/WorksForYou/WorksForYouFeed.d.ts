import { WorksForYouFeed_viewer } from "__generated__/WorksForYouFeed_viewer.graphql";
import { SystemContextProps } from "Artsy";
import React, { Component } from "react";
import { RelayPaginationProp } from "react-relay";
interface Props extends SystemContextProps {
    relay?: RelayPaginationProp;
    user?: User;
    viewer: WorksForYouFeed_viewer;
}
interface State {
    loading: boolean;
    interval: any;
}
export declare class WorksForYouFeed extends Component<Props, State> {
    state: {
        loading: boolean;
        interval: any;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    maybeLoadMore(): void;
    loadMoreArtworks(): void;
    render(): JSX.Element;
}
export declare const WorksForYouFeedPaginationContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "user" | "isEigen" | "isFetching" | "mediator" | "notificationCount" | "relayEnvironment" | "searchQuery" | "setIsFetching" | "viewer">> & import("react-relay").ComponentRef>;
export {};
