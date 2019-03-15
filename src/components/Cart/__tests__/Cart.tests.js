import React from "react";
import { shallow } from "enzyme";
import CartComp from "../";

describe("Cart component", () => {
  test("renders", () => {
    expect(shallow(<CartComp />)).toBeTruthy();
  });
});
