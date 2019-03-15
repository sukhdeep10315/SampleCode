import React from "react";
import { shallow } from "enzyme";
import HeroContentBlockComp from "../";

describe("HeroContentBlock component", () => {
  test("renders", () => {
    expect(shallow(<HeroContentBlockComp />)).toBeTruthy();
  });
});
