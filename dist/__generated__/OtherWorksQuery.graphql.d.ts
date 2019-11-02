import { ConcreteRequest } from "relay-runtime";
import { OtherWorks_artwork$ref } from "./OtherWorks_artwork.graphql";
export declare type OtherWorksQueryVariables = {
    readonly artworkSlug: string;
};
export declare type OtherWorksQueryResponse = {
    readonly artwork: ({
        readonly " $fragmentRefs": OtherWorks_artwork$ref;
    }) | null;
};
export declare type OtherWorksQuery = {
    readonly response: OtherWorksQueryResponse;
    readonly variables: OtherWorksQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
