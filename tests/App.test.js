import React from "react";
import renderer from "react-test-renderer";

import App from "../App";
import { divideNumbers } from "../lib/utils";

describe("<App />", () => {
  it("has 5 child", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(5);
  });
});


describe("Division Function", () => {
  // NOTE: Use %d for numbers, %s for strings, %j for JSON
  it("can divide non-zero numbers", () => {
    const num = 10;
    const denom = 2;
    const expected = 5;
    const res = divideNumbers(num, denom);
    expect(res).toBe(expected);
  });

  
  it("throws an error when dividing by zero", () => {
    expect(() => divideNumbers(1, 0)).toThrow();
  });
});
