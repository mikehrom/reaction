export declare const Vanguard2019Fixture: {
    id: string;
    title: string;
    search_title: string;
    social_title: string;
    description: string;
    search_description: any;
    social_description: any;
    thumbnail_image: string;
    thumbnail_title: string;
    social_image: string;
    published_at: string;
    tags: string[];
    tracking_tags: any[];
    slug: string;
    layout: string;
    featured: boolean;
    channel_id: string;
    partner_channel_id: any;
    indexable: boolean;
    keywords: string[];
    published: boolean;
    postscript: any;
    is_super_article: boolean;
    is_super_sub_article: boolean;
    sponsor: {
        partner_dark_logo: any;
        partner_light_logo: any;
        partner_condensed_logo: any;
        partner_logo_link: any;
        pixel_tracking_code: any;
    };
    seriesArticle: any;
    super_article: any;
    email_metadata: {
        headline: string;
        author: string;
        image_url: string;
    };
    authors: any;
    contributing_authors: any[];
    vertical: {
        name: string;
        id: string;
    };
    news_source: {
        title: any;
        url: any;
    };
    media: {
        url: any;
        credits: any;
        description: any;
        cover_image_url: any;
        published: any;
        duration: any;
        release_date: any;
    };
    series: {
        description: string;
        sub_title: string;
    };
    hero_section: {
        url: string;
    };
    sections: any[];
    relatedArticlesPanel: {
        id: string;
        layout: string;
        slug: string;
        thumbnail_title: string;
        thumbnail_image: string;
    }[];
    relatedArticlesCanvas: {
        id: string;
        layout: string;
        slug: string;
        thumbnail_title: string;
        thumbnail_image: string;
        published_at: string;
        contributing_authors: {
            name: string;
        }[];
        authors: {
            name: string;
        }[];
    }[];
    relatedArticles: {
        authors: any;
        channel_id: string;
        id: string;
        description: string;
        layout: string;
        published_at: string;
        published: boolean;
        series: {
            sub_title: string;
        };
        slug: string;
        social_description: any;
        social_image: string;
        social_title: string;
        sponsor: {
            partner_dark_logo: any;
            partner_light_logo: any;
            partner_condensed_logo: any;
            partner_logo_link: any;
            pixel_tracking_code: any;
        };
        thumbnail_image: string;
        thumbnail_title: string;
        title: string;
        media: {
            duration: any;
            published: any;
            release_date: any;
        };
        hero_section: {
            url: string;
        };
        seriesArticle: {
            id: string;
        };
        relatedArticles: ({
            title: string;
            thumbnail_image: string;
            thumbnail_title: string;
            social_description: any;
            social_image: string;
            social_title: any;
            layout: string;
            slug: string;
            description: string;
            seriesArticle: {
                id: string;
            };
            hero_section: {
                url: any;
                deck: string;
            };
            sections: ({
                type: string;
                layout: string;
                images: ({
                    url: string;
                    caption: string;
                    type: string;
                    width: number;
                    height: number;
                    id?: undefined;
                    slug?: undefined;
                    image?: undefined;
                    title?: undefined;
                    date?: undefined;
                    partner?: undefined;
                    artists?: undefined;
                    artist?: undefined;
                } | {
                    type: string;
                    id: string;
                    slug: string;
                    image: string;
                    title: string;
                    date: string;
                    partner: {
                        name: string;
                        slug: string;
                    };
                    artists: {
                        name: string;
                        slug: string;
                    }[];
                    artist: {
                        name: string;
                        slug: string;
                    };
                    width: number;
                    height: number;
                    url?: undefined;
                    caption?: undefined;
                })[];
                body?: undefined;
                title?: undefined;
            } | {
                type: string;
                body: string;
                layout?: undefined;
                images?: undefined;
                title?: undefined;
            } | {
                type: string;
                title: string;
                layout: string;
                images: ({
                    url: string;
                    caption: string;
                    type: string;
                    width: number;
                    height: number;
                    id?: undefined;
                    slug?: undefined;
                    image?: undefined;
                    title?: undefined;
                    date?: undefined;
                    partner?: undefined;
                    artists?: undefined;
                    artist?: undefined;
                } | {
                    type: string;
                    id: string;
                    slug: string;
                    image: string;
                    title: string;
                    date: string;
                    partner: {
                        name: string;
                        slug: string;
                    };
                    artists: {
                        name: string;
                        slug: string;
                    }[];
                    artist: {
                        name: string;
                        slug: string;
                    };
                    width: number;
                    height: number;
                    url?: undefined;
                    caption?: undefined;
                })[];
                body?: undefined;
            })[];
        } | {
            title: string;
            thumbnail_image: string;
            thumbnail_title: string;
            social_description: any;
            social_image: string;
            social_title: any;
            layout: string;
            slug: string;
            description: string;
            seriesArticle: {
                id: string;
            };
            hero_section: {
                url: string;
                deck: string;
            };
            sections: ({
                type: string;
                layout: string;
                images: {
                    url: string;
                    caption: string;
                    type: string;
                    width: number;
                    height: number;
                }[];
                body?: undefined;
                title?: undefined;
            } | {
                type: string;
                body: string;
                layout?: undefined;
                images?: undefined;
                title?: undefined;
            } | {
                type: string;
                title: string;
                layout: string;
                images: {
                    url: string;
                    caption: string;
                    type: string;
                    width: number;
                    height: number;
                }[];
                body?: undefined;
            })[];
        })[];
    }[];
};
