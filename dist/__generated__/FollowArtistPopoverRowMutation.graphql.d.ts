import { ConcreteRequest } from "relay-runtime";
export declare type FollowArtistInput = {
    readonly artist_id?: string | null;
    readonly unfollow?: boolean | null;
    readonly clientMutationId?: string | null;
};
export declare type FollowArtistPopoverRowMutationVariables = {
    readonly input: FollowArtistInput;
    readonly excludeArtistIds: ReadonlyArray<string | null>;
};
export declare type FollowArtistPopoverRowMutationResponse = {
    readonly followArtist: ({
        readonly artist: ({
            readonly __id: string;
            readonly related: ({
                readonly suggested: ({
                    readonly edges: ReadonlyArray<({
                        readonly node: ({
                            readonly __id: string;
                            readonly _id: string;
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
export declare type FollowArtistPopoverRowMutation = {
    readonly response: FollowArtistPopoverRowMutationResponse;
    readonly variables: FollowArtistPopoverRowMutationVariables;
};
declare const node: ConcreteRequest;
export default node;
