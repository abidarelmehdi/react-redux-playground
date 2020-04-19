import React from "react";
import { AuthorManagePage } from "../pages/AuthorManagePage";
import renderer from "react-test-renderer";
import { render, cleanup } from "@testing-library/react";
import { shallow, mount } from "enzyme";
import { courses, authors } from "../../../tools/mockData";

function buildAuthorManagePage(args) {
  const defaultProps = {
    authors: authors,
    selectedAuthor: null,
    history: {},
    location: {},
    match: {},
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    saving: false,
  };

  const props = { ...defaultProps, ...args };

  return <AuthorManagePage {...props} />;
}

// Enzyme test
it("renders form", () => {
  const wrapper = mount(buildAuthorManagePage());
  expect(wrapper.find("form").length).toBe(1);
});
