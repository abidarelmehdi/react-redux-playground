import React, { Component } from "react";
import AuthorItem from "./AuthorItem";

export default class AuthorsList extends Component {
  render() {
    return (
      <ul>
        {this.props.authors.map((author, index) => (
          <AuthorItem
            key={author.id}
            author={author}
            handleDelete={this.props.handleDelete}
            first={index === 0}
          />
        ))}
      </ul>
    );
  }
}
