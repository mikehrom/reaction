export declare const ArticlesFixture: {
    id: string;
    articlesConnection: {
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
                href: string;
                thumbnail_title: string;
                author: {
                    name: string;
                    __id: string;
                };
                published_at: string;
                thumbnail_image: {
                    resized: {
                        url: string;
                    };
                };
                __id: string;
            };
        }[];
    };
    __id: string;
};
