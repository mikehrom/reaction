import { Component } from "react";
import { Router } from "found";
export interface CollectionEntity {
    title: string;
    headerImage?: string;
    slug: string;
}
interface CollectionsGridProps {
    collections: CollectionEntity[];
    name?: string;
    router: Router;
}
export declare class CollectionsGrid extends Component<CollectionsGridProps> {
    render(): JSX.Element;
}
export {};
