import { ConcreteFragment } from "relay-runtime";
declare const _ArtistSeriesEntity_member$ref: unique symbol;
export declare type ArtistSeriesEntity_member$ref = typeof _ArtistSeriesEntity_member$ref;
export declare type ArtistSeriesEntity_member = {
    readonly slug: string;
    readonly headerImage: string | null;
    readonly thumbnail: string | null;
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
                        readonly url: string | null;
                    }) | null;
                }) | null;
            }) | null> | null;
        }) | null;
    }) | null;
    readonly " $refType": ArtistSeriesEntity_member$ref;
};
declare const node: ConcreteFragment;
export default node;
