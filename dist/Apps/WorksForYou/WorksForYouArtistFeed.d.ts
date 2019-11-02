import { WorksForYouArtistFeed_viewer } from "__generated__/WorksForYouArtistFeed_viewer.graphql";
import { SystemContextProps } from "Artsy";
import * as React from "react";
import { RelayPaginationProp } from "react-relay";
interface Props extends SystemContextProps {
    relay?: RelayPaginationProp;
    viewer: WorksForYouArtistFeed_viewer;
    artistID: string;
    forSale?: boolean;
}
interface State {
    loading: boolean;
}
export declare class WorksForYouArtistFeed extends React.Component<Props, State> {
    state: {
        loading: boolean;
    };
    loadMoreArtworks(): void;
    render(): JSX.Element;
}
export declare const WorksForYouArtistFeedPaginationContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "user" | "isEigen" | "isFetching" | "mediator" | "notificationCount" | "relayEnvironment" | "searchQuery" | "setIsFetching" | "viewer" | "artistID" | "forSale">> & import("react-relay").ComponentRef>;
export {};
