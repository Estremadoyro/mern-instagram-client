import React, { Fragment, useState, useEffect } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    try {
      const requestPosts = await fetch("/allpost", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      });
      const response = await requestPosts.json();
      setPosts(response.posts);
      console.log(response.posts.length);
      console.log(response.posts);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <Fragment>
      <div className="container">
        {posts &&
          posts.map((post) => {
            return (
              <div
                className="card mx-auto my-4 post-border"
                style={{ maxWidth: "600px" }}
                key={post._id}
              >
                <h5 className="my-2">{post.postedBy.username}</h5>
                <img
                  src={post.photo}
                  className="card-img-top center-block d-block mx-auto shadow-2-strong post-image"
                  alt="..."
                />
                <div className="card-body">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <i className="far fa-heart fa-lg ml-0 mr-2"></i>
                        </td>
                        <td>
                          <i className="far fa-comment fa-lg mr-2"></i>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="2" className="font-weight-bold">
                          435 likes
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="card-text">{post.body}</p>
                  <input type="text" placeholder="Comment..." />
                </div>
              </div>
            );
          })}
      </div>
    </Fragment>
  );
};

export default Home;
