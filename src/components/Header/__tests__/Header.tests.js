import React from "react";
import { shallow } from "enzyme";
import HeaderComp from "../";

describe("HeaderComp component", () => {
  test("renders", () => {
    expect(shallow(<HeaderComp />)).toBeTruthy();
  });
});
