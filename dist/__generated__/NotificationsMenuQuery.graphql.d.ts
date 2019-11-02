import { ConcreteRequest } from "relay-runtime";
export declare type NotificationsMenuQueryVariables = {};
export declare type NotificationsMenuQueryResponse = {
    readonly me: ({
        readonly followsAndSaves: ({
            readonly notifications: ({
                readonly edges: ReadonlyArray<({
                    readonly node: ({
                        readonly href: string | null;
                        readonly summary: string | null;
                        readonly artists: string | null;
                        readonly published_at: string | null;
                        readonly image: ({
                            readonly resized: ({
                                readonly url: string | null;
                            }) | null;
                        }) | null;
                    }) | null;
                }) | null> | null;
            }) | null;
        }) | null;
    }) | null;
};
export declare type NotificationsMenuQuery = {
    readonly response: NotificationsMenuQueryResponse;
    readonly variables: NotificationsMenuQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
