import React from "react";
import { shallow } from "enzyme";
import FooterComp from "../";

describe("Footer component", () => {
  test("renders", () => {
    expect(shallow(<FooterComp />)).toBeTruthy();
  });
});
