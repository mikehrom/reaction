import { ConcreteRequest } from "relay-runtime";
import { ArtistToolTip_artist$ref } from "./ArtistToolTip_artist.graphql";
import { FollowArtistButton_artist$ref } from "./FollowArtistButton_artist.graphql";
import { FollowGeneButton_gene$ref } from "./FollowGeneButton_gene.graphql";
import { GeneToolTip_gene$ref } from "./GeneToolTip_gene.graphql";
import { MarketDataSummary_artist$ref } from "./MarketDataSummary_artist.graphql";
export declare type TooltipsDataLoaderQueryVariables = {
    readonly artistSlugs?: ReadonlyArray<string> | null;
    readonly geneSlugs?: ReadonlyArray<string> | null;
};
export declare type TooltipsDataLoaderQueryResponse = {
    readonly artists: ReadonlyArray<({
        readonly id: string;
        readonly _id: string;
        readonly " $fragmentRefs": ArtistToolTip_artist$ref & MarketDataSummary_artist$ref & FollowArtistButton_artist$ref;
    }) | null> | null;
    readonly genes: ReadonlyArray<({
        readonly id: string;
        readonly _id: string;
        readonly " $fragmentRefs": GeneToolTip_gene$ref & FollowGeneButton_gene$ref;
    }) | null> | null;
};
export declare type TooltipsDataLoaderQuery = {
    readonly response: TooltipsDataLoaderQueryResponse;
    readonly variables: TooltipsDataLoaderQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
