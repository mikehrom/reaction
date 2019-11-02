import React from "react";
export declare type ContentKey = "registrationConfirmed" | "registrationPending" | "bidPending";
interface Props {
    onClose: () => void;
    contentKey: ContentKey;
}
export declare const PostRegistrationModal: React.FC<Props>;
export {};
