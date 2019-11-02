import { ConcreteFragment } from "relay-runtime";
declare const _RelatedCollectionEntity_collection$ref: unique symbol;
export declare type RelatedCollectionEntity_collection$ref = typeof _RelatedCollectionEntity_collection$ref;
export declare type RelatedCollectionEntity_collection = {
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
    readonly " $refType": RelatedCollectionEntity_collection$ref;
};
declare const node: ConcreteFragment;
export default node;
