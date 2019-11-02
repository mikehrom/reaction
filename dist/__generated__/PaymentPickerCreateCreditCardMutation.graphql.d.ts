import { ConcreteRequest } from "relay-runtime";
export declare type CreditCardInput = {
    readonly token: string;
    readonly oneTimeUse?: boolean | null;
    readonly clientMutationId?: string | null;
};
export declare type PaymentPickerCreateCreditCardMutationVariables = {
    readonly input: CreditCardInput;
};
export declare type PaymentPickerCreateCreditCardMutationResponse = {
    readonly createCreditCard: ({
        readonly creditCardOrError: ({
            readonly creditCard?: ({
                readonly id: string;
                readonly name: string | null;
                readonly street1: string | null;
                readonly street2: string | null;
                readonly city: string | null;
                readonly state: string | null;
                readonly country: string | null;
                readonly postal_code: string | null;
                readonly expiration_month: number;
                readonly expiration_year: number;
                readonly last_digits: string;
                readonly brand: string;
            }) | null;
            readonly mutationError?: ({
                readonly type: string | null;
                readonly message: string | null;
                readonly detail: string | null;
            }) | null;
        }) | null;
    }) | null;
};
export declare type PaymentPickerCreateCreditCardMutation = {
    readonly response: PaymentPickerCreateCreditCardMutationResponse;
    readonly variables: PaymentPickerCreateCreditCardMutationVariables;
};
declare const node: ConcreteRequest;
export default node;
