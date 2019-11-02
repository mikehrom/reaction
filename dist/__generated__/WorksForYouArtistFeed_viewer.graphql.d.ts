import { ConcreteFragment } from "relay-runtime";
import { ArtworkGrid_artworks$ref } from "./ArtworkGrid_artworks.graphql";
declare const _WorksForYouArtistFeed_viewer$ref: unique symbol;
export declare type WorksForYouArtistFeed_viewer$ref = typeof _WorksForYouArtistFeed_viewer$ref;
export declare type WorksForYouArtistFeed_viewer = {
    readonly artist: ({
        readonly name: string | null;
        readonly href: string | null;
        readonly counts: ({
            readonly artworks: any | null;
            readonly for_sale_artworks: any | null;
        }) | null;
        readonly image: ({
            readonly resized: ({
                readonly url: string | null;
            }) | null;
        }) | null;
        readonly artworks_connection: ({
            readonly pageInfo: {
                readonly hasNextPage: boolean;
                readonly endCursor: string | null;
            };
            readonly edges: ReadonlyArray<({
                readonly node: ({
                    readonly __id: string;
                }) | null;
            }) | null> | null;
            readonly " $fragmentRefs": ArtworkGrid_artworks$ref;
        }) | null;
    }) | null;
    readonly " $refType": WorksForYouArtistFeed_viewer$ref;
};
declare const node: ConcreteFragment;
export default node;
