import { Location, Router } from "found";
import { RedirectRecord } from "./getRedirect";
import { redirects_order } from "__generated__/redirects_order.graphql";
interface OrderQuery {
    order: redirects_order;
}
export declare const confirmRouteExit: (newLocation: Location, oldLocation: Location, router: Router) => string;
export declare const redirects: RedirectRecord<OrderQuery>;
export {};
