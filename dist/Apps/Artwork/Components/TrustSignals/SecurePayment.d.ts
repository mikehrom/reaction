import { SecurePayment_artwork } from "__generated__/SecurePayment_artwork.graphql";
import React from "react";
import { TrustSignalProps } from "./TrustSignal";
interface SecurePaymentProps extends Omit<TrustSignalProps, "Icon" | "label" | "description"> {
    artwork: SecurePayment_artwork;
}
export declare const SecurePayment: React.FC<SecurePaymentProps>;
export declare const SecurePaymentFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<SecurePaymentProps, "bottom" | "p" | "display" | "flexGrow" | "alignItems" | "alignContent" | "background" | "flexBasis" | "flexWrap" | "height" | "justifyContent" | "maxHeight" | "maxWidth" | "order" | "position" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "width" | "zIndex" | "artwork">> & import("react-relay").ComponentRef>;
export {};
