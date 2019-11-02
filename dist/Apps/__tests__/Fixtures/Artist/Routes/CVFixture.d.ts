export declare const CVFixture: {
    artist_soloShows: {
        id: string;
        showsConnection: {
            pageInfo: {
                hasNextPage: boolean;
                endCursor: string;
            };
            edges: {
                node: {
                    __id: string;
                    partner: {
                        __typename: string;
                        name: string;
                        href: string;
                        __id: string;
                    };
                    name: string;
                    start_at: string;
                    city: string;
                    href: string;
                    __typename: string;
                };
                cursor: string;
            }[];
        };
        __id: string;
    };
    artist_groupShows: {
        id: string;
        showsConnection: {
            pageInfo: {
                hasNextPage: boolean;
                endCursor: string;
            };
            edges: {
                node: {
                    __id: string;
                    partner: {
                        __typename: string;
                        name: string;
                        href: string;
                        __id: string;
                    };
                    name: string;
                    start_at: string;
                    city: string;
                    href: string;
                    __typename: string;
                };
                cursor: string;
            }[];
        };
        __id: string;
    };
    artist_fairBooths: {
        id: string;
        showsConnection: {
            pageInfo: {
                hasNextPage: boolean;
                endCursor: string;
            };
            edges: {
                node: {
                    __id: string;
                    partner: {
                        __typename: string;
                        name: string;
                        href: string;
                        __id: string;
                    };
                    name: string;
                    start_at: string;
                    city: any;
                    href: string;
                    __typename: string;
                };
                cursor: string;
            }[];
        };
        __id: string;
    };
};
