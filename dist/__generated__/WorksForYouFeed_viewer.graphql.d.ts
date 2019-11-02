import { ConcreteFragment } from "relay-runtime";
import { ArtworkGrid_artworks$ref } from "./ArtworkGrid_artworks.graphql";
declare const _WorksForYouFeed_viewer$ref: unique symbol;
export declare type WorksForYouFeed_viewer$ref = typeof _WorksForYouFeed_viewer$ref;
export declare type WorksForYouFeed_viewer = {
    readonly me: ({
        readonly followsAndSaves: ({
            readonly notifications: ({
                readonly pageInfo: {
                    readonly hasNextPage: boolean;
                    readonly endCursor: string | null;
                };
                readonly edges: ReadonlyArray<({
                    readonly node: ({
                        readonly __id: string;
                        readonly href: string | null;
                        readonly summary: string | null;
                        readonly artists: string | null;
                        readonly published_at: string | null;
                        readonly artworksConnection: ({
                            readonly " $fragmentRefs": ArtworkGrid_artworks$ref;
                        }) | null;
                        readonly image: ({
                            readonly resized: ({
                                readonly url: string | null;
                            }) | null;
                        }) | null;
                    }) | null;
                }) | null> | null;
            }) | null;
        }) | null;
    }) | null;
    readonly " $refType": WorksForYouFeed_viewer$ref;
};
declare const node: ConcreteFragment;
export default node;
