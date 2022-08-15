import React from "react";
import Footer from "../../partials/Footer";
import Topbar from "../../partials/Topbar";
import Middlebar from "../../partials/Middlebar";
import Menu from "../../partials/Menu";
import { Link } from "react-router-dom";
import Newsletter from "../../Newsletter";
import Header from "../../partials/Header";

const ForgotPasswordEmail = () => {
  return (
    <>
      <header className="header">
        <Topbar />
        <Middlebar />
        <Menu />
      </header>

      <div className="row justify-content-center align-items-center mb-4 mt-5">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-right mt-1">Forgot Password</h2>
              <p
                className="text-right mt-3 mb-20"
                style={{
                  color: "Black",
                  marginBottom: "3em",
                  marginTop: "3em",
                }}
              >
                Please enter your email. You will recieve a link to create a new
                password via email
              </p>

              <form action="#">
                <div className="form-group mb-3">
                  <input
                    type="email"
                    style={{ padding: "14px 16px" }}
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>
                <p
                  className="text-right mt-3 mb-20"
                  style={{ textAlign: "Right", color: "Black" }}
                >
                  <Link to="/forget-password">Try using phone number</Link>
                </p>
              </form>

              <Link
                className="btn w-100"
                to="/otp"
                style={{
                  color: "white",
                  backgroundColor: "#449f1a",
                  height: "45px",
                  borderRadius: "43px",
                  marginBottom: "2em",
                  marginTop: "2em",
                }}
              >
                SEND
              </Link>
            </div>
            <p className="text-center mt-3 mb-5">
              Don’t have account? <Link to="/register"> Register</Link>
            </p>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default ForgotPasswordEmail;
