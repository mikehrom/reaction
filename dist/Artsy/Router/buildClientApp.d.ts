import { ComponentType } from "react";
import { RouterConfig } from "./";
interface Resolve {
    ClientApp: ComponentType<any>;
}
export declare function buildClientApp(config: RouterConfig): Promise<Resolve>;
export {};
