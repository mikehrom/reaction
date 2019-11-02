import { ConcreteFragment } from "relay-runtime";
import { OtherCollectionEntity_member$ref } from "./OtherCollectionEntity_member.graphql";
export declare type MarketingGroupTypes = "ArtistSeries" | "FeaturedCollections" | "OtherCollections" | "%future added value";
declare const _OtherCollectionsRail_collectionGroup$ref: unique symbol;
export declare type OtherCollectionsRail_collectionGroup$ref = typeof _OtherCollectionsRail_collectionGroup$ref;
export declare type OtherCollectionsRail_collectionGroup = {
    readonly groupType: MarketingGroupTypes;
    readonly name: string;
    readonly members: ReadonlyArray<{
        readonly " $fragmentRefs": OtherCollectionEntity_member$ref;
    }>;
    readonly " $refType": OtherCollectionsRail_collectionGroup$ref;
};
declare const node: ConcreteFragment;
export default node;
