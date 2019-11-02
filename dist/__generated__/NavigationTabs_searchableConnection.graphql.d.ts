import { ConcreteFragment } from "relay-runtime";
export declare type SearchAggregation = "TYPE" | "%future added value";
declare const _NavigationTabs_searchableConnection$ref: unique symbol;
export declare type NavigationTabs_searchableConnection$ref = typeof _NavigationTabs_searchableConnection$ref;
export declare type NavigationTabs_searchableConnection = {
    readonly aggregations: ReadonlyArray<({
        readonly slice: SearchAggregation | null;
        readonly counts: ReadonlyArray<({
            readonly count: number | null;
            readonly name: string | null;
        }) | null> | null;
    }) | null> | null;
    readonly " $refType": NavigationTabs_searchableConnection$ref;
};
declare const node: ConcreteFragment;
export default node;
