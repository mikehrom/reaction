import { SFC } from "react";
interface ArticleItemProps {
    imageUrl: string;
    date: string;
    author: string;
    title: string;
    href: string;
    lastChild: boolean;
}
export declare const ArticleItem: SFC<ArticleItemProps>;
export {};
