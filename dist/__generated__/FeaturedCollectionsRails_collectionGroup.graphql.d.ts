import { ConcreteFragment } from "relay-runtime";
export declare type MarketingGroupTypes = "ArtistSeries" | "FeaturedCollections" | "OtherCollections" | "%future added value";
declare const _FeaturedCollectionsRails_collectionGroup$ref: unique symbol;
export declare type FeaturedCollectionsRails_collectionGroup$ref = typeof _FeaturedCollectionsRails_collectionGroup$ref;
export declare type FeaturedCollectionsRails_collectionGroup = {
    readonly groupType: MarketingGroupTypes;
    readonly name: string;
    readonly members: ReadonlyArray<{
        readonly id: string;
        readonly slug: string;
        readonly title: string;
        readonly description: string | null;
        readonly price_guidance: number | null;
        readonly thumbnail: string | null;
    }>;
    readonly " $refType": FeaturedCollectionsRails_collectionGroup$ref;
};
declare const node: ConcreteFragment;
export default node;
