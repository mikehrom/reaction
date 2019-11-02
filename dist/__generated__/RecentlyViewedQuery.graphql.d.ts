import { ConcreteRequest } from "relay-runtime";
import { RecentlyViewed_me$ref } from "./RecentlyViewed_me.graphql";
export declare type RecentlyViewedQueryVariables = {};
export declare type RecentlyViewedQueryResponse = {
    readonly me: ({
        readonly " $fragmentRefs": RecentlyViewed_me$ref;
    }) | null;
};
export declare type RecentlyViewedQuery = {
    readonly response: RecentlyViewedQueryResponse;
    readonly variables: RecentlyViewedQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
