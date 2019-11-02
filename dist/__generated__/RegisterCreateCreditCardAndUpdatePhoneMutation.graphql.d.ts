import { ConcreteRequest } from "relay-runtime";
export declare type CreditCardInput = {
    readonly token: string;
    readonly oneTimeUse?: boolean | null;
    readonly clientMutationId?: string | null;
};
export declare type UpdateMyProfileInput = {
    readonly name?: string | null;
    readonly email?: string | null;
    readonly phone?: string | null;
    readonly location?: EditableLocation | null;
    readonly collector_level?: number | null;
    readonly price_range_min?: number | null;
    readonly price_range_max?: number | null;
    readonly clientMutationId?: string | null;
};
export declare type EditableLocation = {
    readonly address?: string | null;
    readonly address_2?: string | null;
    readonly city?: string | null;
    readonly country?: string | null;
    readonly summary?: string | null;
    readonly postal_code?: string | null;
    readonly state?: string | null;
    readonly state_code?: string | null;
};
export declare type RegisterCreateCreditCardAndUpdatePhoneMutationVariables = {
    readonly creditCardInput: CreditCardInput;
    readonly profileInput: UpdateMyProfileInput;
};
export declare type RegisterCreateCreditCardAndUpdatePhoneMutationResponse = {
    readonly updateMyUserProfile: ({
        readonly user: ({
            readonly id: string;
        }) | null;
    }) | null;
    readonly createCreditCard: ({
        readonly creditCardOrError: ({
            readonly creditCardEdge?: ({
                readonly node: ({
                    readonly last_digits: string;
                }) | null;
            }) | null;
            readonly mutationError?: ({
                readonly type: string | null;
                readonly message: string | null;
                readonly detail: string | null;
            }) | null;
        }) | null;
    }) | null;
};
export declare type RegisterCreateCreditCardAndUpdatePhoneMutation = {
    readonly response: RegisterCreateCreditCardAndUpdatePhoneMutationResponse;
    readonly variables: RegisterCreateCreditCardAndUpdatePhoneMutationVariables;
};
declare const node: ConcreteRequest;
export default node;
