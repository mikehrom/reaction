export declare const artistResponse: {
    __id: string;
    _id: string;
    insights: {
        type: string;
        label: string;
        entities: string[];
    }[];
    highlights: {
        partners: {
            edges: {
                node: {
                    categories: {
                        id: string;
                    }[];
                    __id: string;
                };
                __id: string;
            }[];
        };
    };
    auctionResults: {
        edges: {
            node: {
                price_realized: {
                    display: string;
                };
                organization: string;
                sale_date: string;
                __id: string;
            };
        }[];
    };
};
