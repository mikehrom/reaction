import { ConcreteFragment } from "relay-runtime";
import { ArtistSeriesEntity_member$ref } from "./ArtistSeriesEntity_member.graphql";
export declare type MarketingGroupTypes = "ArtistSeries" | "FeaturedCollections" | "OtherCollections" | "%future added value";
declare const _ArtistSeriesRail_collectionGroup$ref: unique symbol;
export declare type ArtistSeriesRail_collectionGroup$ref = typeof _ArtistSeriesRail_collectionGroup$ref;
export declare type ArtistSeriesRail_collectionGroup = {
    readonly groupType: MarketingGroupTypes;
    readonly name: string;
    readonly members: ReadonlyArray<{
        readonly " $fragmentRefs": ArtistSeriesEntity_member$ref;
    }>;
    readonly " $refType": ArtistSeriesRail_collectionGroup$ref;
};
declare const node: ConcreteFragment;
export default node;
