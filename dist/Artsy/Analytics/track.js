"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockTracking = mockTracking;
exports.track = void 0;

var _reactTracking = _interopRequireDefault(require("react-tracking"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// tslint:disable:array-type

/**
 * This is the regular `track` function, but pre-typed using our schema.
 *
 * For its normal usage see the docs https://github.com/NYTimes/react-tracking
 *
 * One important gotcha that is easily overlooked is that you always need to
 * ‘enable’ tracking on a component before you can use it inside a component.
 *
 * @example
 *
 *     ```ts
 *     import React from "react"
 *     import { track } from "Artsy/Analytics"
 *
 *     // This is what enables tracking for further use inside the component.
 *     @track()
 *     class Artist extends React.Component {
 *       // This only works with the above line that enables tracking.
 *       @track({ … })
 *       handleClick() { … }
 *     }
 */
var track = _reactTracking.default;
/**
 * ## Writing tests for your tracked code
 *
 * By default we mock `react-tracking`, so it's not possible to test the code
 * easily.
 *
 * A good pattern for testing analytics code is to have a completely separate
 * file for the tests. For example: `__tests__/DateSource-analytics-tests.tsx`.
 * Jest has each test file run in a unique environment, so in that file we can
 * unmock `react-tracking`.
 *
 * Here's a full example:
 *
 * @example
 *
 *     ```ts
 *     import { mount } from "enzyme"
 *     import React from "react"
 *     import { mockTracking } from "Artsy/Analytics"
 *     import { DateSource } from "../DateSource"
 *
 *     jest.unmock("react-tracking")
 *
 *     const NewsArticle = { news_source: { url: "http://nytimes.com" }}
 *
 *     describe("DateSource analytics", () => {
 *       it("tracks news source link", () => {
 *         const { Component, dispatch } = mockTracking(DateSource)
 *         const component = mount(<Component article={NewsArticle} />)
 *         component
 *           .find("a")
 *           .at(0)
 *           .simulate("click")
 *         expect(dispatch).toBeCalledWith({
 *           action: "Click",
 *           type: "external link",
 *           label: "news source",
 *           destination_path: "http://nytimes.com",
 *         })
 *       })
 *     })
 *     ```
 */

exports.track = track;

function mockTracking(Subject) {
  var dispatch = jest.fn();
  var Component = (0, _reactTracking.default)({}, {
    dispatch: dispatch
  })(Subject);
  return {
    Component: Component,
    dispatch: dispatch
  };
}
//# sourceMappingURL=track.js.map