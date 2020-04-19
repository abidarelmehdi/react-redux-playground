import React from "react";
import AuthorForm from "./AuthorForm";
import renderer from "react-test-renderer";
import { render, cleanup } from "@testing-library/react";
import { shallow } from "enzyme";
import { courses, authors } from "../../../tools/mockData";

function buildAuthorForm(args) {
  const defaultProps = {
    author: authors[0],
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    saving: false,
  };

  const props = { ...defaultProps, ...args };

  return <AuthorForm {...props} />;
}

afterEach(cleanup);

// React-Testing-Library test
it("renders page title", () => {
  const { getByText } = render(buildAuthorForm());
  getByText("Author Form");
});

// Enzyme test
it("renders form", () => {
  const wrapper = shallow(buildAuthorForm());
  expect(wrapper.find("form").length).toBe(1);
});

it("renders submit btn when saving is false", () => {
  const wrapper = shallow(buildAuthorForm({ saving: false }));
  expect(wrapper.find("SubmitBtn").length).toBe(1);
});

it("renders spinner when saving is true", () => {
  const wrapper = shallow(buildAuthorForm({ saving: true }));
  expect(wrapper.find("SubmitBtn").length).toBe(0);
});

/* Snapshot tests */
it("replace save button with saving state when form is saving", () => {
  const tree = renderer.create(buildAuthorForm({ saving: true }));

  expect(tree).toMatchSnapshot();
});

/* it("load save button instead of saving state when form is loaded", () => {
  const tree = renderer.create(buildAuthorForm());

  expect(tree).toMatchSnapshot();
}) */
