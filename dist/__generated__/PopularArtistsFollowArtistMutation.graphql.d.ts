import { ConcreteRequest } from "relay-runtime";
export declare type FollowArtistInput = {
    readonly artist_id?: string | null;
    readonly unfollow?: boolean | null;
    readonly clientMutationId?: string | null;
};
export declare type PopularArtistsFollowArtistMutationVariables = {
    readonly input: FollowArtistInput;
    readonly excludedArtistIds: ReadonlyArray<string | null>;
};
export declare type PopularArtistsFollowArtistMutationResponse = {
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
export declare type PopularArtistsFollowArtistMutation = {
    readonly response: PopularArtistsFollowArtistMutationResponse;
    readonly variables: PopularArtistsFollowArtistMutationVariables;
};
declare const node: ConcreteRequest;
export default node;
