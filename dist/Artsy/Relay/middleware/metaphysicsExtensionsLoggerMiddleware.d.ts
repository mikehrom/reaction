/**
 * This takes the extra extension metadata that staging and dev metaphysics
 * sends about API requests it makes for you, and logs it out during dev
 * time into your console at the same places as the relay queries.
 */
export declare function metaphysicsExtensionsLoggerMiddleware(): (next: any) => (req: any) => any;
