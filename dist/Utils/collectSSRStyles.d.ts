/// <reference types="react" />
/**
 * When performing SSR rendering, it is necessary to extract the styles from
 * a styled-components tree and inject the collected styles into the head of
 * the document.
 *
 * NOTE: When using symlinks (via `yarn link` or otherwiwse) it is *imperative*
 * that only one instance of styled-components is used when performing an SSR
 * pass. This is due to how styled-components 4 implements the new React context
 * api, which cannot be shared across different instances of styled components.
 *
 * See https://github.com/styled-components/styled-components/issues/2322 for
 * more info.
 */
export declare function collectSSRStyles(Component: React.ReactNode): string;
