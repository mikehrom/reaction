import { ConcreteRequest } from "relay-runtime";
import { AuctionFAQ_viewer$ref } from "./AuctionFAQ_viewer.graphql";
export declare type AuctionFAQQueryVariables = {};
export declare type AuctionFAQQueryResponse = {
    readonly viewer: ({
        readonly " $fragmentRefs": AuctionFAQ_viewer$ref;
    }) | null;
};
export declare type AuctionFAQQuery = {
    readonly response: AuctionFAQQueryResponse;
    readonly variables: AuctionFAQQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
