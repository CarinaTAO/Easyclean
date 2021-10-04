import React from "react";
import "../../assets/bootstrap.css";
import Background1 from "../../assets/img/home-bg.jpg";

function HomePage() {
  return (
    <div>
      <React.Fragment>
        <header
          className="masthead"
          style={{ backgroundImage: `url(${Background1})` }}
        >
          <div className="container position-relative px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7">
                <div className="site-heading">
                  <h1>Connect with experts to get the job done on Easy-Tasker</h1>
                  <span className="subheading">
                    It’s amazing what you can’t do yourself
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>
      ;
    </div>
  );
}

export default HomePage;
