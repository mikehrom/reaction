import { Overview_artist } from "__generated__/Overview_artist.graphql";
import { Location } from "found";
import React from "react";
import { RelayRefetchProp } from "react-relay";
import { TrackingProp } from "react-tracking";
export interface OverviewRouteProps {
    artist: Overview_artist;
    location?: Location;
    relay?: RelayRefetchProp;
    tracking?: TrackingProp;
}
export declare class OverviewRoute extends React.Component<OverviewRouteProps, {}> {
    handleConsignClick(): void;
    render(): JSX.Element;
}
export declare const ArtistOverviewQuery: import("relay-runtime").GraphQLTaggedNode;
export declare const OverviewRouteFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<any, string | number | symbol>> & import("react-relay").ComponentRef>;
