export declare const handleSubmit: (url: string, csrf: string, redirectTo?: string) => (values: any, formikBag: any) => Promise<void>;
export declare function sendAuthData(url: string, values: {
    [key: string]: any;
    _csrf: string;
}): Promise<any>;
export declare const checkEmail: ({ relayEnvironment, values, actions, shouldExist, }: {
    relayEnvironment: any;
    values: any;
    actions: any;
    shouldExist: any;
}) => Promise<boolean>;
