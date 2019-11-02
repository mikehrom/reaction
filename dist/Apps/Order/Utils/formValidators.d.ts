import { Address } from "Apps/Order/Components/AddressForm";
export declare const validatePresence: (value: string) => string;
export declare const validateAddress: (address: Address) => {
    errors: {
        name: string;
        addressLine1: string;
        city: string;
        region: string;
        country: string;
        postalCode: string;
    };
    hasErrors: boolean;
};
