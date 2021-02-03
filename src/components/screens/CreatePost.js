import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [photo, setPhoto] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const history = useHistory();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const updatePhoto = (e) => { 
    setPhoto(e.target.files[0]); 
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", photo);
    data.append("upload_preset", "insta-clone");
    data.append("cloud_name", "nova-solutions");
    data.append("title", title);
    data.append("body", body)

    try {
      const uploadImageServer = await axios.post("/createpost", data, {
        method: "POST",
        headers: { 
          //'Content-Type': 'multipart/form-data',
          'Content-Type': 'Application/json',
          'Authorization': "Bearer " + localStorage.getItem("jwt"),
        },
      }); 
      const response = uploadImageServer.data;
      console.log("wot")
      console.log(response); 
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
                className="custom-file-input"
                id="validatedCustomFile"
                onChange={updatePhoto}
                required
              />
              <div className="invalid-feedback">Example invalid custom file feedback </div>
            </div>

            <button disabled={loading} className="btn btn-lg btn-primary w-100 text-center mt-2">
              Post!
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default CreatePost;
