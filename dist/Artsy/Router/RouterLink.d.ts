import { LinkProps } from "found";
import React from "react";
/**
 * Wrapper component around found's <Link> component with a fallback to a normal
 * <a> tag if ouside of a routing context.
 *
 * NOTE: If using styled-components, <RouterLink> can be easily styled like so:
 *
 * const StyledLink = styled(RouterLink)`
 *   ...
 * `
 */
export declare const RouterLink: React.FC<LinkProps>;
