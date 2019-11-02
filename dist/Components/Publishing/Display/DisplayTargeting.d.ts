import { ArticleData } from "Components/Publishing/Typings";
export declare const targetingData: (article: ArticleData, pageType: string) => {
    is_testing: boolean;
    page_type: string;
    post_id: string;
    tags: any;
};
export declare const is300x50AdUnit: (unit: string) => boolean;
