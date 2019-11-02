import { Collection_viewer } from "__generated__/Collection_viewer.graphql";
import { SystemContextProps } from "Artsy/SystemContext";
import { Location } from "found";
import React, { Component } from "react";
import { RelayRefetchProp } from "react-relay";
import { TrackingProp } from "react-tracking";
interface CollectionAppProps extends SystemContextProps {
    viewer: Collection_viewer;
    location: Location;
    relay: RelayRefetchProp;
    tracking: TrackingProp;
}
export declare class CollectionApp extends Component<CollectionAppProps> {
    collectionNotFound: (collection: any) => void;
    UNSAFE_componentWillMount(): void;
    render(): JSX.Element;
}
export declare const CollectionAppQuery: import("relay-runtime").GraphQLTaggedNode;
export declare const CollectionRefetchContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<any, string | number | symbol>> & import("react-relay").ComponentRef>;
export {};
