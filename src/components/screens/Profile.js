import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "../../Styles.css";

const Profile = () => {
  return (
    <Fragment>
      <div className="jumbotron jumbotron-fluid">
        <div className="container" style={{ margin: "0px auto" }}>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6">
              <img
                src="https://images.unsplash.com/photo-1594394425161-bf2130df7875?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGxlYWd1ZSUyMG9mJTIwbGVnZW5kc3xlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="rounded mt-2 center-block d-block mx-auto shadow-2-strong"
                style={{ widht: "160px", height: "160px", borderRadius: "80px" }}
              />
            </div>
            <div className="col-12 col-sm-12 col-md-6">
              <div className="text-right">
                <h2 className="my-3 font-weight-bold">Louis Litt</h2>
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
                      <span className="font-weight-bold">534</span> following
                    </td>
                  </tr>
                  <tr>
                    <td className="text-muted" colSpan="3">
                      @louis.litt
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="3">"No fucks given biotch"</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <hr className="mb-0 mt-4" />
          <h4 className="font-weight-bold text-center">Posts</h4>

          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-4 py-3 py-sm-0">
                <div className="card box-shadow">
                  <img
                    src="https://images.unsplash.com/photo-1508970755744-c6d748f095d2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTQxfHxsZWFndWUlMjBvZiUyMGxlZ2VuZHN8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    className="card-img-top img-fluid mx-auto d-block shadow-3-strong"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </p>
                    <Link to="/profile" className="btn btn-primary">
                      Read more...
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-4 py-3 py-sm-0">
                <div className="card box-shadow">
                  <img
                    src="https://images.unsplash.com/photo-1508970755744-c6d748f095d2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTQxfHxsZWFndWUlMjBvZiUyMGxlZ2VuZHN8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    className="card-img-top img-fluid mx-auto d-block shadow-3-strong"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </p>
                    <Link to="/profile" className="btn btn-primary">
                      Read more...
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-4 py-3 py-sm-0">
                <div className="card box-shadow">
                  <img
                    src="https://images.unsplash.com/photo-1508970755744-c6d748f095d2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTQxfHxsZWFndWUlMjBvZiUyMGxlZ2VuZHN8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    className="card-img-top img-fluid mx-auto d-block shadow-3-strong"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </p>
                    <Link to="/profile" className="btn btn-primary">
                      Read more...
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-4 py-3 py-sm-0">
                <div className="card box-shadow">
                  <img
                    src="https://images.unsplash.com/photo-1508970755744-c6d748f095d2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTQxfHxsZWFndWUlMjBvZiUyMGxlZ2VuZHN8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    className="card-img-top img-fluid mx-auto d-block shadow-3-strong"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </p>
                    <Link to="/profile" className="btn btn-primary">
                      Read more...
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-4 py-3 py-sm-0">
                <div className="card box-shadow">
                  <img
                    src="https://images.unsplash.com/photo-1508970755744-c6d748f095d2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTQxfHxsZWFndWUlMjBvZiUyMGxlZ2VuZHN8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    className="card-img-top img-fluid mx-auto d-block shadow-3-strong"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </p>
                    <Link to="/profile" className="btn btn-primary">
                      Read more...
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-4 py-3 py-sm-0">
                <div className="card box-shadow">
                  <img
                    src="https://images.unsplash.com/photo-1508970755744-c6d748f095d2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTQxfHxsZWFndWUlMjBvZiUyMGxlZ2VuZHN8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    className="card-img-top img-fluid mx-auto d-block shadow-3-strong"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </p>
                    <Link to="/profile" className="btn btn-primary">
                      Read more...
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
