import { VerifiedSeller_artwork } from "__generated__/VerifiedSeller_artwork.graphql";
import React from "react";
import { TrustSignalProps } from "./TrustSignal";
interface VerifiedSellerProps extends Omit<TrustSignalProps, "Icon" | "label" | "description"> {
    artwork: VerifiedSeller_artwork;
}
export declare const VerifiedSeller: React.FC<VerifiedSellerProps>;
export declare const VerifiedSellerFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<VerifiedSellerProps, "bottom" | "p" | "display" | "flexGrow" | "alignItems" | "alignContent" | "background" | "flexBasis" | "flexWrap" | "height" | "justifyContent" | "maxHeight" | "maxWidth" | "order" | "position" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "width" | "zIndex" | "artwork">> & import("react-relay").ComponentRef>;
export {};
