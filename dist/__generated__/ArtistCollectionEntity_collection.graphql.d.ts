import { ConcreteFragment } from "relay-runtime";
declare const _ArtistCollectionEntity_collection$ref: unique symbol;
export declare type ArtistCollectionEntity_collection$ref = typeof _ArtistCollectionEntity_collection$ref;
export declare type ArtistCollectionEntity_collection = {
    readonly headerImage: string | null;
    readonly slug: string;
    readonly title: string;
    readonly price_guidance: number | null;
    readonly artworks: ({
        readonly artworks_connection: ({
            readonly edges: ReadonlyArray<({
                readonly node: ({
                    readonly artist: ({
                        readonly name: string | null;
                    }) | null;
                    readonly title: string | null;
                    readonly image: ({
                        readonly resized: ({
                            readonly url: string | null;
                        }) | null;
                    }) | null;
                }) | null;
            }) | null> | null;
        }) | null;
    }) | null;
    readonly " $refType": ArtistCollectionEntity_collection$ref;
};
declare const node: ConcreteFragment;
export default node;
