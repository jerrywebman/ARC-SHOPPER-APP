import React from "react";
import Footer from "../../partials/Footer";
import Topbar from "../../partials/Topbar";
import Middlebar from "../../partials/Middlebar";
import Menu from "../../Menu";
import { Link } from "react-router-dom";
import Newsletter from "../../Newsletter";
import Header from "../../partials/Header";

const Login = () => {
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
              <h2 className="card-title text-right mt-5 text-lg">Login</h2>
              <p className="card-text mt-5">
                <form action="#">
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
                    <div className="col-6">
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label" htmlFor="redme">
                          Remember me.
                        </label>
                      </div>
                    </div>
                    <div className="col-6 text-end">
                      <Link to="/forget-password">Forget Password</Link>
                    </div>
                  </div>
                </form>
              </p>
              <button
                className="btn  w-100"
                style={{
                  backgroundColor: "#449f1a",
                  height: "45px",
                  borderRadius: "43px",
                  color: "white",
                }}
              >
                LOGIN
              </button>
              <p className="text-center mt-3 mb-5">
                Don’t have account? <Link to="/register"> Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
