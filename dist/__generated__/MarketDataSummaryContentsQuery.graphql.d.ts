import { ConcreteRequest } from "relay-runtime";
import { MarketDataSummary_artist$ref } from "./MarketDataSummary_artist.graphql";
export declare type MarketDataSummaryContentsQueryVariables = {
    readonly artistID: string;
};
export declare type MarketDataSummaryContentsQueryResponse = {
    readonly artist: ({
        readonly " $fragmentRefs": MarketDataSummary_artist$ref;
    }) | null;
};
export declare type MarketDataSummaryContentsQuery = {
    readonly response: MarketDataSummaryContentsQueryResponse;
    readonly variables: MarketDataSummaryContentsQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
