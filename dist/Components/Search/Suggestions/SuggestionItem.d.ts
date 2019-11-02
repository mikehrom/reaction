import { SFC } from "react";
interface Props {
    display: string;
    href: string;
    isHighlighted: boolean;
    label: string;
    query: string;
}
export declare const FirstSuggestionItem: SFC<Props>;
export declare const SuggestionItem: SFC<Props>;
export declare const PLACEHOLDER = "Search by artist, gallery, style, theme, tag, etc.";
export declare const PLACEHOLDER_XS = "Search Artsy";
export {};
