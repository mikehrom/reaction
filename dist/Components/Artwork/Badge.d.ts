import { Badge_artwork } from "__generated__/Badge_artwork.graphql";
import React from "react";
interface BadgeProps {
    artwork: Badge_artwork;
    width?: number;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<BadgeProps, "width" | "artwork">> & import("react-relay").ComponentRef>;
export default _default;
