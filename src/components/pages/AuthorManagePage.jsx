import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { StageSpinner } from "react-spinners-kit";
import AuthorForm from "../authors/AuthorForm";
import * as authorActions from "../../redux/actions/authorActions";
import { toast } from "react-toastify";
import SuccessToast from "../core/SuccessToast";

export function AuthorManagePage(props) {
  const [author, setAuthor] = useState({
    id: null,
    name: "",
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    props.authors.length === 0 && props.loadAuthors();
    props.selectedAuthor && setAuthor(props.selectedAuthor);
  }, [props]);

  const handleChange = ({ target }) => {
    setAuthor({
      ...author,
      [target.name]: target.value,
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    setSaving(true);
    props.saveAuthor(author).then(() => {
      toast(<SuccessToast message="Author saved successfully" />);
      props.history.push("/authors");
    });
  }

  const loading = props.authors.length === 0;
  return loading ? (
    <div className="flex items-center justify-center p-16">
      <StageSpinner size={60} color="#252f3f" />
    </div>
  ) : (
    <AuthorForm
      author={author}
      saving={saving}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
}

const mapStateToProps = (state, ownProps) => {
  const name = ownProps.match.params.name;
  const selectedAuthor =
    state.authors.find((author) => author.name === name) || null;
  return {
    selectedAuthor,
    authors: state.authors,
  };
};

const mapDispatchToProps = {
  saveAuthor: authorActions.saveAuthor,
  loadAuthors: authorActions.loadAuthors,
};
export default connect(mapStateToProps, mapDispatchToProps)(AuthorManagePage);
