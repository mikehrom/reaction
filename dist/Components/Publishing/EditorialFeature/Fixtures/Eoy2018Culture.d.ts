export declare const Eoy2018Culture: {
    _id: string;
    author_id: string;
    channel_id: string;
    author: {
        id: string;
        name: string;
    };
    layout: string;
    author_ids: any[];
    tier: number;
    tags: any[];
    tracking_tags: any[];
    published: boolean;
    hero_section: {
        url: string;
        type: string;
    };
    media: {};
    related_article_ids: string[];
    fair_ids: any[];
    fair_programming_ids: any[];
    fair_artsy_ids: any[];
    fair_about_ids: any[];
    auction_ids: any[];
    section_ids: any[];
    featured: boolean;
    exclude_google_news: boolean;
    indexable: boolean;
    contributing_authors: any[];
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
    keywords: any[];
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
        url?: undefined;
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
        url?: undefined;
    } | {
        type: string;
        body: string;
        layout: any;
        images?: undefined;
        title?: undefined;
        url?: undefined;
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
        title: string;
        body?: undefined;
        url?: undefined;
    } | {
        type: string;
        url: string;
        layout: string;
        body?: undefined;
        images?: undefined;
        title?: undefined;
    })[];
    id: string;
    slug: string;
    published_at: string;
    scheduled_publish_at: any;
    thumbnail_image: string;
    seo_keyword: string;
    description: string;
    social_image: string;
};
