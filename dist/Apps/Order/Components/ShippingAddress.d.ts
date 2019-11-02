import React from "react";
import { ShippingAddress_ship } from "__generated__/ShippingAddress_ship.graphql";
export interface ShippingAddressProps {
    ship: ShippingAddress_ship;
}
export declare const ShippingAddress: ({ ship: { name, addressLine1, addressLine2, city, region, postalCode, country, phoneNumber, }, }: ShippingAddressProps) => JSX.Element;
export declare const ShippingAddressFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ShippingAddressProps, "ship">> & import("react-relay").ComponentRef>;
