import { routes_ConfirmBidQueryResponse } from "__generated__/routes_ConfirmBidQuery.graphql";
import { routes_RegisterQueryResponse } from "__generated__/routes_RegisterQuery.graphql";
export interface Redirect {
    path: string;
    reason: string;
}
export declare function registerRedirect({ me, sale, }: routes_RegisterQueryResponse): Redirect | null;
export declare function confirmBidRedirect(data: routes_ConfirmBidQueryResponse, location: Location): Redirect | null;
