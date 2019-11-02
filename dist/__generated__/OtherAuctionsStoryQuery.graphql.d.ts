import { ConcreteRequest } from "relay-runtime";
import { OtherAuctions_sales$ref } from "./OtherAuctions_sales.graphql";
export declare type OtherAuctionsStoryQueryVariables = {
    readonly size: number;
};
export declare type OtherAuctionsStoryQueryResponse = {
    readonly sales: ReadonlyArray<({
        readonly " $fragmentRefs": OtherAuctions_sales$ref;
    }) | null> | null;
};
export declare type OtherAuctionsStoryQuery = {
    readonly response: OtherAuctionsStoryQueryResponse;
    readonly variables: OtherAuctionsStoryQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
