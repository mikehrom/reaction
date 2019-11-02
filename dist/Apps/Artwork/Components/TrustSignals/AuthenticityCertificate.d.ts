import { AuthenticityCertificate_artwork } from "__generated__/AuthenticityCertificate_artwork.graphql";
import React from "react";
import { TrustSignalProps } from "./TrustSignal";
interface AuthenticityCertificateProps extends Omit<TrustSignalProps, "Icon" | "label" | "description"> {
    artwork: AuthenticityCertificate_artwork;
}
export declare const AuthenticityCertificate: React.FC<AuthenticityCertificateProps>;
export declare const AuthenticityCertificateFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<AuthenticityCertificateProps, "bottom" | "p" | "display" | "flexGrow" | "alignItems" | "alignContent" | "background" | "flexBasis" | "flexWrap" | "height" | "justifyContent" | "maxHeight" | "maxWidth" | "order" | "position" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "width" | "zIndex" | "artwork">> & import("react-relay").ComponentRef>;
export {};
