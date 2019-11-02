import { routes_ConfirmBidQueryResponse } from "__generated__/routes_ConfirmBidQuery.graphql";
import React from "react";
import { RelayProp } from "react-relay";
interface ConfirmBidProps {
    artwork: routes_ConfirmBidQueryResponse["artwork"];
    me: routes_ConfirmBidQueryResponse["me"];
    relay: RelayProp;
    location: Location;
}
export declare const ConfirmBidRoute: React.FC<ConfirmBidProps>;
export declare const ConfirmBidRouteFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ConfirmBidProps, "location" | "artwork" | "me">> & import("react-relay").ComponentRef>;
export {};
