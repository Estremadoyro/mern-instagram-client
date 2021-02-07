import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
// import axios from "axios";

const CreatePost = () => {
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setFileInputState(e.target.value);
  };
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };
  const uploadImage = async (base64EncodedImage) => {
    console.log(base64EncodedImage);
    setLoading(true);
    try {
      const postImage = await fetch("/createpost", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          title: title,
          body: body,
          image: base64EncodedImage,
        }),
      });
      const response = await postImage.json();
      console.log(response);
      history.go(0);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!previewSource) {
      setError("Choose file owo");
      return;
    }
    try {
      uploadImage(previewSource);
    } catch (err) {
      console.log(err);
    }

    return;
  };
  return (
    <Fragment>
      <div className="card">
        <div className="card-body mx-md-auto" style={{ minWidth: "55%" }}>
          <h2 className="text-center mb-4">New Post</h2>
          {error && (
            <div className="alert alert-danger" role="alert">
              {" "}
              {error}
            </div>
          )}
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group" id="title">
              <div className="label">Title</div>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                required
              />
            </div>

            <div className="form-group" id="body">
              <div className="label">Body</div>
              <input
                type="text"
                className="form-control"
                value={body}
                onChange={(e) => {
                  setBody(e.target.value);
                }}
                required
              />
            </div>

            <div className="custom-file my-3">
              <input
                type="file"
                name="image"
                className="custom-file-input"
                id="validatedCustomFile"
                onChange={handleFileInputChange}
                value={fileInputState}
                required
              />
              <div className="invalid-feedback">
                Example invalid custom file feedback{" "}
              </div>
            </div>

            {previewSource && (
              <img
                src={previewSource}
                alt="chosen"
                className="img-fluid d-block mx-auto text-center"
              />
            )}
            <button
              disabled={loading}
              className="btn btn-lg btn-primary w-100 text-center mt-2"
            >
              Post!
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default CreatePost;
