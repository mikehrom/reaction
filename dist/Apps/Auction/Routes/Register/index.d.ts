import { Register_me } from "__generated__/Register_me.graphql";
import { Register_sale } from "__generated__/Register_sale.graphql";
import React from "react";
import { RelayProp } from "react-relay";
import { TrackingProp } from "react-tracking";
interface RegisterProps {
    sale: Register_sale;
    me: Register_me;
    relay: RelayProp;
    tracking: TrackingProp;
}
export declare const RegisterRoute: React.FC<RegisterProps>;
export declare const RegisterRouteFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<RegisterProps, "sale" | "tracking" | "me">> & import("react-relay").ComponentRef>;
export {};
