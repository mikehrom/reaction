import { ReactWrapper, RenderUntilPredicate } from "enzyme";
import * as React from "react";
/**
 * @deprecated Use {@link ReactWrapper.prototype.renderUntil} instead.
 */
declare function deprecated_renderUntil<P = {}, S = {}, C extends React.Component = React.Component>(until: RenderUntilPredicate<P, S, C>, element: React.ReactElement<P>): Promise<ReactWrapper<P, S, C>>;
export { deprecated_renderUntil as renderUntil };
