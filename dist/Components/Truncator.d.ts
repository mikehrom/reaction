import React from "react";
interface Props {
    maxLineCount?: number;
    ellipsis?: string;
    ReadMoreLink?: () => any;
}
/**
 * Truncate large bodies of text.
 * If you need to truncate a single line, consider using `text-overflow: ellipsis`.
 */
export declare const Truncator: React.SFC<Props>;
export {};
