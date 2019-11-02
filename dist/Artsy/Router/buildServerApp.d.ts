import { RouterConfig } from "./";
interface Resolve {
    bodyHTML?: string;
    redirect?: {
        url: string;
    };
    status?: number;
    headTags?: any[];
    scripts?: string;
    styleTags?: string;
}
export interface ServerRouterConfig extends RouterConfig {
    userAgent?: string;
}
export declare function buildServerApp(config: ServerRouterConfig): Promise<Resolve>;
export declare const __THOU_SHALT_NOT_FAFF_AROUND_WITH_THIS_HERE_OBJECT_WE_ARE_SERIOUS__: symbol;
export {};
