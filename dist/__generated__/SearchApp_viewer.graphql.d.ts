import { ConcreteFragment } from "relay-runtime";
import { NavigationTabs_searchableConnection$ref } from "./NavigationTabs_searchableConnection.graphql";
export declare type SearchAggregation = "TYPE" | "%future added value";
declare const _SearchApp_viewer$ref: unique symbol;
export declare type SearchApp_viewer$ref = typeof _SearchApp_viewer$ref;
export declare type SearchApp_viewer = {
    readonly search: ({
        readonly aggregations: ReadonlyArray<({
            readonly slice: SearchAggregation | null;
            readonly counts: ReadonlyArray<({
                readonly count: number | null;
                readonly name: string | null;
            }) | null> | null;
        }) | null> | null;
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly id?: string;
                readonly displayLabel?: string | null;
                readonly displayType?: string | null;
            }) | null;
        }) | null> | null;
        readonly " $fragmentRefs": NavigationTabs_searchableConnection$ref;
    }) | null;
    readonly filter_artworks: ({
        readonly counts: ({
            readonly total: any | null;
        }) | null;
    }) | null;
    readonly " $refType": SearchApp_viewer$ref;
};
declare const node: ConcreteFragment;
export default node;
