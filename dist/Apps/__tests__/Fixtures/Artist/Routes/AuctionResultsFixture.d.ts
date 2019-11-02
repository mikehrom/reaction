export declare const AuctionResultsFixture: {
    id: string;
    auctionResults: {
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
        totalCount: number;
        edges: {
            node: {
                title: string;
                dimension_text: string;
                organization: string;
                images: {
                    thumbnail: {
                        url: string;
                    };
                };
                description: string;
                date_text: string;
                sale_date_text: string;
                price_realized: {
                    display: string;
                    cents_usd: number;
                };
                estimate: {
                    display: string;
                };
                __id: string;
            };
        }[];
    };
    __id: string;
};
