import { ConcreteRequest } from "relay-runtime";
export declare type timeQueryVariables = {};
export declare type timeQueryResponse = {
    readonly system: ({
        readonly time: ({
            readonly unix: number | null;
        }) | null;
    }) | null;
};
export declare type timeQuery = {
    readonly response: timeQueryResponse;
    readonly variables: timeQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
