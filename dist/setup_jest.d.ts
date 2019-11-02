import "regenerator-runtime/runtime";
/**
 * We want each test to have assertions, otherwise it’s too easy to write async
 * tests that never end up making any, leading to false positives.
 *
 * TODO: Find a way to make this not emit after failing tests.
 *
 * SEE: https://github.com/facebook/jest/issues/2209#issuecomment-458706599
 */
import "DevTools/renderUntil";
import "jsdom";
