import { ConcreteFragment } from "relay-runtime";
declare const _SelectedCareerAchievements_artist$ref: unique symbol;
export declare type SelectedCareerAchievements_artist$ref = typeof _SelectedCareerAchievements_artist$ref;
export declare type SelectedCareerAchievements_artist = {
    readonly highlights: ({
        readonly partners: ({
            readonly edges: ReadonlyArray<({
                readonly node: ({
                    readonly categories: ReadonlyArray<({
                        readonly id: string;
                    }) | null> | null;
                }) | null;
            }) | null> | null;
        }) | null;
    }) | null;
    readonly insights: ReadonlyArray<({
        readonly type: string | null;
        readonly label: string | null;
        readonly entities: ReadonlyArray<string | null> | null;
    }) | null> | null;
    readonly auctionResults: ({
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly price_realized: ({
                    readonly display: string | null;
                }) | null;
                readonly organization: string | null;
                readonly sale_date: string | null;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly " $refType": SelectedCareerAchievements_artist$ref;
};
declare const node: ConcreteFragment;
export default node;
