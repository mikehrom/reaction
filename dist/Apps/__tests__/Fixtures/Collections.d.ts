export declare const CollectionsFixture: ({
    title: string;
    slug: string;
    headerImage: string;
    price_guidance?: undefined;
} | {
    title: string;
    slug: string;
    headerImage: string;
    price_guidance: number;
})[];
export declare const CollectionsRailFixture: {
    slug: string;
    headerImage: string;
    title: string;
    price_guidance: number;
    artworks: {
        artworks_connection: {
            edges: {
                node: {
                    artist: {
                        name: string;
                    };
                    title: string;
                    image: {
                        resized: {
                            url: string;
                        };
                    };
                };
            }[];
        };
    };
}[];
export declare const CategoriesFixture: {
    name: string;
    collections: {
        headerImage: string;
        slug: string;
        title: string;
    }[];
}[];
export declare const CollectionsHubLinkedCollections: {
    linkedCollections: {
        groupType: string;
        name: string;
        members: {
            slug: string;
            title: string;
            price_guidance: number;
            artworks: {
                artworks_connection: {
                    edges: ({
                        node: {
                            artist: {
                                name?: undefined;
                            };
                            title: string;
                            image: {
                                url: string;
                            };
                        };
                    } | {
                        node: {
                            artist: {
                                name: string;
                            };
                            title: string;
                            image: {
                                url: string;
                            };
                        };
                    })[];
                };
            };
        }[];
    }[];
};
export declare const CollectionHubFixture: {
    title: string;
    slug: string;
    headerImage: string;
    linkedCollections: ({
        groupType: string;
        name: string;
        members: ({
            slug: string;
            thumbnail: string;
            title: string;
        } | {
            slug: string;
            title: string;
            thumbnail?: undefined;
        })[];
    } | {
        groupType: string;
        name: string;
        members: {
            description: string;
            price_guidance: number;
            slug: string;
            thumbnail: string;
            title: string;
        }[];
    })[];
};
