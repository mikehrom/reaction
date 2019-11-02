import { ReactWrapper } from "enzyme";
export declare function expectOne<T>(component: ReactWrapper<T>): ReactWrapper<T>;
export declare class RootTestPage {
    readonly root: ReactWrapper;
    update(): Promise<void>;
    find: ReactWrapper["find"];
    text(): string;
}
