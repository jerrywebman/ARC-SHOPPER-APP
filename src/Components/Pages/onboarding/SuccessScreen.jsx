import React from "react";
import Footer from "../../partials/Footer";
import Topbar from "../../partials/Topbar";
import Middlebar from "../../partials/Middlebar";
import Menu from "../../partials/Menu";
import { Link } from "react-router-dom";
import Newsletter from "../../Newsletter";

const SuccessScreen = () => {
  return (
    <>
      <header className="header">
        <Topbar />
        <Middlebar />
        <Menu />
      </header>

      <section className="mt-5">
        <div className="row justify-content-center align-items-center mb-4">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center mt-1 mb-4">Welcome</h2>

                <div
                  className="col-sm-8 col-lg-6 text-center"
                  style={{ margin: "5em" }}
                >
                  {/* <center>
                    <img
                      src="https://allroundcare.ng/assets/img/prof-2.jpeg"
                      className="d-block mx-lg-auto img-fluid"
                      alt="Bootstrap Themes"
                      width="600"
                      height="500"
                      loading="lazy"
                    />
                  </center> */}
                </div>

                <p className="text-center" style={{ marginTop: "4em" }}>
                  Authentication Successful
                </p>
                {/* <button
                  className="btn btn-primary w-100"
                  style={{
                    backgroundColor: "#449f1a",
                    height: "45px",
                    borderRadius: "43px",
                  }}
                >
                  OK
                </button> */}
                {/* <Link
                  to="/register"
                  className="btn btn-success btn-lg"
                  style={{ margin: "2.1em" }}
                >
                  <h3>OK</h3>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </>
  );
};

export default SuccessScreen;
