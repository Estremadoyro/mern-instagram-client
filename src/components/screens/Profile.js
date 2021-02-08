import React, { Fragment, useState, useEffect } from "react";
import { useUserAuth } from "../../contexts/UserContext";
import "../../Styles.css";

const Profile = () => {
  const [userPosts, setUserPosts] = useState([]);
  const { authState } = useUserAuth();

  const getUserPosts = async () => {
    try {
      const fetchUserPosts = await fetch("/myposts", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      });
      const response = await fetchUserPosts.json();
      setUserPosts(response.post);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserPosts();
  }, []);

  return (
    <Fragment>
      <div className="jumbotron jumbotron-fluid">
        <div className="container" style={{ margin: "0px auto" }}>
          {authState.user && (
            <>
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6">
                  <img
                    src="https://images.unsplash.com/photo-1594394425161-bf2130df7875?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGxlYWd1ZSUyMG9mJTIwbGVnZW5kc3xlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className="rounded mt-2 center-block d-block mx-auto shadow-2-strong"
                    style={{
                      widht: "160px",
                      height: "160px",
                      borderRadius: "80px",
                    }}
                  />
                </div>
                <div className="col-12 col-sm-12 col-md-6">
                  <div className="text-right">
                    <h2 className="my-3 font-weight-bold">
                      {authState.user.name}
                    </h2>
                  </div>

                  <table>
                    <tbody style={{ justifyContent: "space-between" }}>
                      <tr className="mb-3">
                        <td className="td-xs-12" style={{ width: "33%" }}>
                          <span className="font-weight-bold">23</span> posts
                        </td>
                        <td className="td-xs-12" style={{ width: "33%" }}>
                          <span className="font-weight-bold">43</span> follows
                        </td>
                        <td className="td-xs-12" style={{ width: "33%" }}>
                          <span className="font-weight-bold">534</span>{" "}
                          following
                        </td>
                      </tr>
                      <tr>
                        <td className="text-muted" colSpan="3">
                          @{authState.user.username}
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="3">"No fucks given biotch"</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          <hr className="mb-0 mt-4" />
          <h4 className="font-weight-bold text-center">Posts</h4>

          <div className="container">
            <div className="row">
              {userPosts &&
                userPosts.map((post) => {
                  return (
                    <div
                      className="col-sm-12 col-md-12 col-lg-4 py-3 py-sm-0"
                      key={post._id}
                    >
                      <div className="card box-shadow">
                        <img
                          src={post.photo}
                          className="card-img-top img-fluid mx-auto d-block shadow-3-strong"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">{post.title}</h5>
                          <p className="card-text">{post.body}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
