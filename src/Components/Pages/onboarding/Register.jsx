import React from "react";
import Footer from "../../partials/Footer";
import Topbar from "../../partials/Topbar";
import Middlebar from "../../partials/Middlebar";
import Menu from "../../Menu";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <header className="header">
        <Topbar />
        <Middlebar />
        <Menu />
      </header>

      {/* <Header title="Login" /> */}

      <div className="row justify-content-center align-items-center mb-4 mt-2">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-left mt-5">Sign up</h2>
              <p className="card-text mt-5">
                <form action="#">
                  <div className="col-12 mt-3 mb-3">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="Name"
                        placeholder="Name"
                      />
                      <label for="subject">Name</label>
                    </div>
                  </div>
                  <div className="col-12 mt-3 mb-3">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="Email"
                        placeholder="Email"
                      />
                      <label for="subject">Email</label>
                    </div>
                  </div>

                  <div className="col-12 mb-3 ">
                    <div className="form-floating">
                      <input
                        type="password"
                        className="form-control"
                        id="Password"
                        placeholder="Password"
                      />
                      <label for="subject">Password</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 text-end">
                      <Link to="/login">Already have an account?</Link>
                    </div>
                  </div>
                </form>
              </p>
              <button
                className="btn btn-primary w-100 mb-5"
                style={{
                  backgroundColor: "#449f1a",
                  height: "45px",
                  borderRadius: "43px",
                }}
              >
                SIGNUP
              </button>
              {/* <Link to="/register" className="btn btn-success btn-lg">
                                Sign up
                            </Link> */}
              {/* <p className="text-center mt-3 mb-5">
                Don’t have account? <Link to="/register"> Register</Link>
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
