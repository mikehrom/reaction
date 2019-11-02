import { ConcreteRequest } from "relay-runtime";
export declare type FollowArtistInput = {
    readonly artist_id?: string | null;
    readonly unfollow?: boolean | null;
    readonly clientMutationId?: string | null;
};
export declare type ArtistSearchResultsArtistMutationVariables = {
    readonly input: FollowArtistInput;
    readonly excludedArtistIds: ReadonlyArray<string | null>;
};
export declare type ArtistSearchResultsArtistMutationResponse = {
    readonly followArtist: ({
        readonly popular_artists: ({
            readonly artists: ReadonlyArray<({
                readonly id: string;
                readonly _id: string;
                readonly __id: string;
                readonly name: string | null;
                readonly image: ({
                    readonly cropped: ({
                        readonly url: string | null;
                    }) | null;
                }) | null;
            }) | null> | null;
        }) | null;
        readonly artist: ({
            readonly __id: string;
            readonly related: ({
                readonly suggested: ({
                    readonly edges: ReadonlyArray<({
                        readonly node: ({
                            readonly id: string;
                            readonly _id: string;
                            readonly __id: string;
                            readonly name: string | null;
                            readonly image: ({
                                readonly cropped: ({
                                    readonly url: string | null;
                                }) | null;
                            }) | null;
                        }) | null;
                    }) | null> | null;
                }) | null;
            }) | null;
        }) | null;
    }) | null;
};
export declare type ArtistSearchResultsArtistMutation = {
    readonly response: ArtistSearchResultsArtistMutationResponse;
    readonly variables: ArtistSearchResultsArtistMutationVariables;
};
declare const node: ConcreteRequest;
export default node;
