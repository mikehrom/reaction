/// <reference types="jest" />
export declare const ChangeEvents: {
    email: {
        currentTarget: {
            value: string;
        };
        persist: jest.Mock<any, any>;
        target: {
            type: string;
            name: string;
            value: string;
        };
    };
    password: {
        currentTarget: {
            value: string;
        };
        persist: jest.Mock<any, any>;
        target: {
            type: string;
            name: string;
            value: string;
        };
    };
    accepted_terms_of_service: {
        currentTarget: {
            checked: boolean;
        };
        persist: jest.Mock<any, any>;
        target: {
            type: string;
            name: string;
            checked: boolean;
        };
    };
    name: {
        currentTarget: {
            value: string;
        };
        persist: jest.Mock<any, any>;
        target: {
            type: string;
            name: string;
            value: string;
        };
    };
};
export declare const SignupValues: {
    email: string;
    password: string;
    name: string;
    accepted_terms_of_service: boolean;
};
export declare const LoginValues: {
    email: string;
    password: string;
};
