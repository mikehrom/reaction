export declare const Eoy2018Artists: {
    _id: string;
    author_id: string;
    channel_id: string;
    author: {
        id: string;
        name: string;
    };
    layout: string;
    author_ids: string[];
    tier: number;
    tags: string[];
    tracking_tags: string[];
    published: boolean;
    hero_section: {
        type: string;
        url: string;
    };
    media: {};
    related_article_ids: any[];
    fair_ids: any[];
    fair_programming_ids: any[];
    fair_artsy_ids: any[];
    fair_about_ids: any[];
    auction_ids: any[];
    section_ids: any[];
    featured: boolean;
    exclude_google_news: boolean;
    indexable: boolean;
    contributing_authors: {
        id: string;
        name: string;
    }[];
    sponsor: {};
    email_metadata: {
        image_url: string;
        author: string;
        headline: string;
    };
    is_super_article: boolean;
    send_body: boolean;
    partner_channel_id: any;
    daily_email: boolean;
    weekly_email: boolean;
    news_source: {};
    keywords: string[];
    updated_at: string;
    slugs: string[];
    title: string;
    thumbnail_title: string;
    lead_paragraph: string;
    sections: ({
        type: string;
        body: string;
        layout?: undefined;
        images?: undefined;
        title?: undefined;
    } | {
        type: string;
        layout: string;
        images: {
            url: string;
            type: string;
            width: number;
            height: number;
            caption: string;
        }[];
        body?: undefined;
        title?: undefined;
    } | {
        type: string;
        layout: string;
        images: ({
            url: string;
            type: string;
            width: number;
            height: number;
            caption: string;
            id?: undefined;
            slug?: undefined;
            date?: undefined;
            title?: undefined;
            image?: undefined;
            partner?: undefined;
            artists?: undefined;
            artist?: undefined;
            credit?: undefined;
        } | {
            type: string;
            id: string;
            slug: string;
            date: string;
            title: string;
            image: string;
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
            credit: string;
            url?: undefined;
            caption?: undefined;
        })[];
        title: string;
        body?: undefined;
    })[];
    id: string;
    slug: string;
    published_at: string;
    scheduled_publish_at: any;
    thumbnail_image: string;
    social_image: string;
    postscript: string;
    vertical: {
        id: string;
        name: string;
    };
    primary_featured_artist_ids: string[];
    description: string;
    seo_keyword: string;
    relatedArticles: {
        description: string;
        layout: string;
        media: {
            duration: any;
            published: any;
            release_date: any;
        };
        published_at: string;
        slug: string;
        thumbnail_image: string;
        thumbnail_title: string;
        title: string;
    }[];
};
