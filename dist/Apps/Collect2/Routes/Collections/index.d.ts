import { Collections_categories } from "__generated__/Collections_categories.graphql";
import { Router } from "found";
import React, { Component } from "react";
interface CollectionsAppProps {
    categories: Collections_categories;
    router: Router;
}
export declare class CollectionsApp extends Component<CollectionsAppProps> {
    render(): JSX.Element;
}
export declare const CollectionsAppFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<CollectionsAppProps, "categories" | "router">> & import("react-relay").ComponentRef>;
export {};
