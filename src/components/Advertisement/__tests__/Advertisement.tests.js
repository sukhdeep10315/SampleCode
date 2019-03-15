import React from "react";
import { shallow } from "enzyme";
import AdvertisementComp from "../";

describe("Advertisement component", () => {
  test("renders", () => {
    expect(shallow(<AdvertisementComp />)).toBeTruthy();
  });
});
