import React from "react";
import renderer from "react-test-renderer";

import App from "../App";
import { divideNumbers } from "../lib/utils";

// ========= MOCKS =========
jest.mock("../lib/utils", () => ({
  divideNumbers: jest.fn(() => 42),
}));

// ========= TESTS =========
describe("<App />", () => {
  /**
   * Passes if the component renders without crashing.
   * 
   * Snapshot testing is a good way to test the UI of your components,
   * and is extremely easy to setup.
   */
  it("can render", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});


describe("Division Function", () => {
  // NOTE: Use %d for numbers, %s for strings, %j for JSON
  it("can divide non-zero numbers", () => {
    const num = 10;
    const denom = 2;
    const expected = 5;

    // We need to import the actual function because we are mocking the entire module above.
    const { divideNumbers } = jest.requireActual("../lib/utils");

    const res = divideNumbers(num, denom);
    expect(res).toBe(expected);
  });

  
  it("throws an error when dividing by zero", () => {
    expect(() => divideNumbers(1, 0)).toThrow();
  });

  /**
   * Passes if the mocked function inside returns the mocked value
   * 
   * NOTE: This is a bad test. You should never have a test case to test the testing tools.
   * Testing is expensive and takes time so design your test cases with a thought.
   */
  it("can be mocked", () => {
    // The below code fails because divideNumbers is a named export and hence is read-only
    // Left it here because most websites have this example
    // But for named exports, you will need to mock the entire module (file)

    // const originalDivideNumbers = divideNumbers;
    // divideNumbers = jest.fn(() => 42);

    const num = 10;
    const denom = 2;
    const expected = 42;
    const res = divideNumbers(num, denom);
    expect(res).toBe(expected);
  });
});
