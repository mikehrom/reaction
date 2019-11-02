import React from "react";
interface Sale {
    name: string;
}
export declare type SubmitRegistrationHandler = (opts: {
    setSubmitting: (isSubmitting: boolean) => void;
    setError: (message: string) => void;
    auction: Sale;
    acceptedTerms: boolean;
}) => void;
interface Props {
    /** The auction attributes */
    auction: Sale;
    /** Any cleanup that needs to happen when the modal closes */
    onClose: () => void;
    /** Handle a successful submission (commence registration) */
    onSubmit: SubmitRegistrationHandler;
}
export declare const AuctionRegistrationModal: React.FC<Props>;
export {};
