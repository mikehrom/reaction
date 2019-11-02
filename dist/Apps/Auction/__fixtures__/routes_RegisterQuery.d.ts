import { Register_me } from "__generated__/Register_me.graphql";
import { Register_sale } from "__generated__/Register_sale.graphql";
import { routes_RegisterQueryResponse } from "__generated__/routes_RegisterQuery.graphql";
import { DeFraged } from "Utils/typeSupport";
export interface DeFragedRegisterQueryResponse {
    sale: DeFraged<routes_RegisterQueryResponse["sale"] & Register_sale>;
    me: DeFraged<routes_RegisterQueryResponse["me"] & Register_me>;
}
export declare const RegisterQueryResponseFixture: DeFragedRegisterQueryResponse;
