import { ArticleData } from "../Typings";
export declare const ClassicArticle: ArticleData;
export declare const ClassicArticleManyAuthors: ArticleData & {
    contributing_authors: {
        id: string;
        name: string;
    }[];
};
export declare const StandardArticle: ArticleData;
export declare const BasicArticle: ArticleData;
export declare const FeatureArticle: ArticleData;
export declare const NonSponsoredFeatureArticle: ArticleData;
export declare const FeatureBasicVideoArticle: ArticleData;
export declare const UnsponsoredFeatureArticle: ArticleData;
export declare const FeatureBasicArticle: ArticleData;
export declare const SponsoredArticle: ArticleData & {
    sponsor: {
        partner_condensed_logo: string;
        partner_light_logo: string;
        partner_dark_logo: string;
        partner_logo_link: string;
        pixel_tracking_code: string;
    };
};
export declare const SponsoredFeatureArticle: ArticleData & {
    sponsor: {
        partner_condensed_logo: string;
        partner_light_logo: string;
        partner_dark_logo: string;
        partner_logo_link: string;
        pixel_tracking_code: string;
    };
};
export declare const SuperArticle: ArticleData & {
    is_super_article: boolean;
    super_article: {
        footer_blurb: string;
        partner_fullscreen_header_logo: string;
        partner_link: string;
        partner_link_title: string;
        partner_logo: string;
        partner_logo_link: string;
        related_articles: string[];
        secondary_logo_link: string;
        secondary_logo_text: string;
        secondary_partner_logo: string;
    };
};
export declare const ImageHeavyStandardArticle: ArticleData & {
    sections: ({
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
    } | {
        type: string;
        body: string;
        layout?: undefined;
        images?: undefined;
    })[];
};
export declare const ShortStandardArticle: ArticleData & {
    sections: {
        type: string;
        body: string;
    }[];
};
export declare const MissingVerticalStandardArticle: ArticleData & {
    vertical: any;
};
export declare const TextClassicArticle: ArticleData & {
    sections: object[];
};
export declare const TextStandardArticle: ArticleData & {
    sections: object[];
};
export declare const TextFeatureArticle: ArticleData & {
    sections: object[];
};
export declare const VideoArticle: ArticleData;
export declare const VideoArticleUnpublished: ArticleData & {
    media: {
        title: string;
        url: string;
        duration: number;
        release_date: string;
        published: boolean;
        description: string;
        credits: string;
    };
};
export declare const VideoArticleSponsored: ArticleData & {
    sponsor: {
        partner_condensed_logo: string;
        partner_light_logo: string;
        partner_dark_logo: string;
        partner_logo_link: string;
        pixel_tracking_code: string;
    };
};
export declare const SeriesArticle: ArticleData;
export declare const SeriesArticleSponsored: ArticleData & {
    sponsor: {
        partner_condensed_logo: string;
        partner_light_logo: string;
        partner_dark_logo: string;
        partner_logo_link: string;
        pixel_tracking_code: string;
    };
};
export declare const SeriesArticleCustomSubTitle: ArticleData & {
    series: {
        sub_title: string;
    };
};
export declare const NewsArticle: ArticleData;
