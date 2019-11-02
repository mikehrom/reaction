export declare const RelatedArtistsFixture: {
    mainArtists: {
        id: string;
        related: {
            artists: {
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
                        name: string;
                        id: string;
                        href: string;
                        image: {
                            cropped: {
                                url: string;
                            };
                        };
                        formatted_nationality_and_birthday: string;
                        __id: string;
                        is_followed: boolean;
                        counts: {
                            follows: number;
                        };
                    };
                }[];
            };
        };
        __id: string;
    };
};
