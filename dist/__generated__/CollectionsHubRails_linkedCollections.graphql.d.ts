import { ConcreteFragment } from "relay-runtime";
import { ArtistSeriesRail_collectionGroup$ref } from "./ArtistSeriesRail_collectionGroup.graphql";
import { FeaturedCollectionsRails_collectionGroup$ref } from "./FeaturedCollectionsRails_collectionGroup.graphql";
import { OtherCollectionsRail_collectionGroup$ref } from "./OtherCollectionsRail_collectionGroup.graphql";
export declare type MarketingGroupTypes = "ArtistSeries" | "FeaturedCollections" | "OtherCollections" | "%future added value";
declare const _CollectionsHubRails_linkedCollections$ref: unique symbol;
export declare type CollectionsHubRails_linkedCollections$ref = typeof _CollectionsHubRails_linkedCollections$ref;
export declare type CollectionsHubRails_linkedCollections = ReadonlyArray<{
    readonly groupType: MarketingGroupTypes;
    readonly " $fragmentRefs": FeaturedCollectionsRails_collectionGroup$ref & OtherCollectionsRail_collectionGroup$ref & ArtistSeriesRail_collectionGroup$ref;
    readonly " $refType": CollectionsHubRails_linkedCollections$ref;
}>;
declare const node: ConcreteFragment;
export default node;
