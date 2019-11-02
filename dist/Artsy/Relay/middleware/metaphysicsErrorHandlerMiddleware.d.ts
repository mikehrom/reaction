export declare function metaphysicsErrorHandlerMiddleware({ checkStatus, }: {
    checkStatus: boolean;
}): (next: any) => (req: any) => Promise<any>;
