import { ArticleData, DateFormat } from "../Publishing/Typings";
/**
 * Matches for Email / Instant Articles
 */
export declare const EMAIL_REGEX: RegExp;
/**
 * The quality to request from image CDN
 */
export declare const GLOBAL_IMAGE_QUALITY = 80;
/**
 * TODO: Eventually remove sizeMe
 */
export declare const SIZE_ME_REFRESH_RATE = 500;
/**
 * Relative path to article
 */
export declare const getArticleHref: (slug: any) => string;
/**
 * Absolute path to article
 */
export declare const getArticleFullHref: (slug: any) => string;
/**
 * Get the pre-slug part of URL
 */
export declare const getPreSlugPath: (layout: any) => any;
/**
 * Relative path to editorial entity
 */
export declare const getEditorialHref: (layout: any, slug: any) => string;
/**
 * Absolute path to editorial entity
 */
export declare const getFullEditorialHref: (layout: any, slug: any) => string;
/**
 * Absolute path to artsy entity
 */
export declare const getFullArtsyHref: (slug: any) => string;
/**
 * ByLine helpers
 * TODO: Move this into some kind of utils folder
 */
export declare const getAuthorByline: (authors: any, isEditoral?: boolean) => any;
export declare const getDate: (date: any, format?: DateFormat) => string;
export declare const getCurrentUnixTimestamp: () => number;
export declare const getMediaDate: (article: any) => any;
export declare const formatTime: (time: any) => string;
interface SlugsFromArticle {
    artists: string[];
    genes: string[];
}
export declare const getArtsySlugsFromArticle: (article: ArticleData) => SlugsFromArticle;
export declare const getArtsySlugsFromHTML: (html: string, model: string) => string[];
export {};
