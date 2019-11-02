export declare const ShowsFixture: {
    artist_currentShows: {
        id: string;
        showsConnection: {
            pageInfo: {
                hasNextPage: boolean;
                endCursor: string;
            };
            pageCursors: {
                around: {
                    cursor: string;
                    page: number;
                    isCurrent: boolean;
                }[];
                first: any;
                last: any;
                previous: any;
            };
            edges: {
                node: {
                    partner: {
                        __typename: string;
                        name: string;
                        __id: string;
                    };
                    name: string;
                    href: string;
                    exhibition_period: string;
                    cover_image: {
                        cropped: {
                            url: string;
                        };
                    };
                    city: string;
                    __id: string;
                };
            }[];
        };
        __id: string;
    };
    artist_upcomingShows: {
        id: string;
        showsConnection: {
            pageInfo: {
                hasNextPage: boolean;
                endCursor: string;
            };
            pageCursors: {
                around: {
                    cursor: string;
                    page: number;
                    isCurrent: boolean;
                }[];
                first: any;
                last: any;
                previous: any;
            };
            edges: {
                node: {
                    partner: {
                        __typename: string;
                        name: string;
                        __id: string;
                    };
                    name: string;
                    href: string;
                    exhibition_period: string;
                    cover_image: {
                        cropped: {
                            url: string;
                        };
                    };
                    city: any;
                    __id: string;
                };
            }[];
        };
        __id: string;
    };
    artist_pastShows: {
        id: string;
        showsConnection: {
            pageInfo: {
                hasNextPage: boolean;
                endCursor: string;
            };
            pageCursors: {
                around: {
                    cursor: string;
                    page: number;
                    isCurrent: boolean;
                }[];
                first: any;
                last: {
                    cursor: string;
                    page: number;
                    isCurrent: boolean;
                };
                previous: any;
            };
            edges: {
                node: {
                    partner: {
                        __typename: string;
                        name: string;
                        __id: string;
                    };
                    name: string;
                    href: string;
                    exhibition_period: string;
                    cover_image: {
                        cropped: {
                            url: string;
                        };
                    };
                    city: string;
                    __id: string;
                };
            }[];
        };
        __id: string;
    };
};
