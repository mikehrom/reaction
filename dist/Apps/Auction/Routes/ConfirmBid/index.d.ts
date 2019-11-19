import { ConfirmBid_me } from "__generated__/ConfirmBid_me.graphql";
import { routes_ConfirmBidQueryResponse } from "__generated__/routes_ConfirmBidQuery.graphql";
import React from "react";
import { RelayProp } from "react-relay";
import { ReactStripeElements } from "react-stripe-elements";
interface ConfirmBidProps extends ReactStripeElements.InjectedStripeProps {
    artwork: routes_ConfirmBidQueryResponse["artwork"];
    me: ConfirmBid_me;
    relay: RelayProp;
    location: Location;
}
export declare const ConfirmBidRoute: React.FC<ConfirmBidProps>;
export declare const StripeWrappedConfirmBidRoute: React.FC<ConfirmBidProps>;
export declare const ConfirmBidRouteFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ConfirmBidProps, "location" | "artwork" | "me" | "stripe">> & import("react-relay").ComponentRef>;
export {};
