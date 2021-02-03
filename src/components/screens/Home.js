import React, { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="card mx-auto my-4 post-border" style={{ maxWidth: "600px" }}>
          <h5 className="my-2">Louis Litt</h5>
          <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" className="card-img-top center-block d-block mx-auto shadow-2-strong post-image" alt="..." />
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
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <input type="text" placeholder="Comment..." />
          </div>
        </div>
        <div className="card mx-auto my-4 post-border" style={{ maxWidth: "600px" }}>
          <h5 className="my-2">Louis Litt</h5>
          <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" className="card-img-top center-block d-block mx-auto shadow-2-strong post-image" alt="..." />
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
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <input type="text" placeholder="Comment..." />
          </div>
        </div>
        <div className="card mx-auto my-4 post-border" style={{ maxWidth: "600px" }}>
          <h5 className="my-2">Louis Litt</h5>
          <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" className="card-img-top center-block d-block mx-auto shadow-2-strong post-image" alt="..." />
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
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <input type="text" placeholder="Comment..." />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
