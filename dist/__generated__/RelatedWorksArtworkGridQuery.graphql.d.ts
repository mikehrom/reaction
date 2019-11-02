import { ConcreteRequest } from "relay-runtime";
import { RelatedWorksArtworkGrid_artwork$ref } from "./RelatedWorksArtworkGrid_artwork.graphql";
export declare type RelatedWorksArtworkGridQueryVariables = {
    readonly artworkSlug: string;
};
export declare type RelatedWorksArtworkGridQueryResponse = {
    readonly artwork: ({
        readonly " $fragmentRefs": RelatedWorksArtworkGrid_artwork$ref;
    }) | null;
};
export declare type RelatedWorksArtworkGridQuery = {
    readonly response: RelatedWorksArtworkGridQueryResponse;
    readonly variables: RelatedWorksArtworkGridQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
