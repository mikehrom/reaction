export interface Redirect {
    path: string;
    reason: string;
}
export declare type RedirectPredicate<Arguments> = (args: Arguments) => Redirect | void;
export interface RedirectRecord<Arguments> {
    path: string;
    rules: Array<RedirectPredicate<Arguments>>;
    children?: Array<RedirectRecord<Arguments>>;
}
export declare const trimLeadingSlashes: (s: string) => string;
export declare function getRedirect<Arguments>(redirects: RedirectRecord<Arguments>, location: string, args: Arguments): Redirect | null;
