import React from "react";
import Footer from "../../partials/Footer";
import Topbar from "../../partials/Topbar";
import Middlebar from "../../partials/Middlebar";
import Menu from "../../Menu";
import { Link } from "react-router-dom";
import Newsletter from "../../Newsletter";

const Otp = () => {
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
                <h3 className="card-title mt-1 mb-4">
                  Enter your 4-digit code
                </h3>
                <h5 className=" mt-3 mb-5">Code</h5>

                <form action="#">
                  <div
                    id="otp"
                    className="inputs d-flex flex-row justify-content-center mt-2"
                  >
                    <input
                      className="m-2 text-center form-control rounded"
                      type="text"
                      id="first"
                      maxlength="1"
                    />
                    <input
                      className="m-2 text-center form-control rounded"
                      type="text"
                      id="second"
                      maxlength="1"
                    />
                    <input
                      className="m-2 text-center form-control rounded"
                      type="text"
                      id="third"
                      maxlength="1"
                    />
                    <input
                      className="m-2 text-center form-control rounded"
                      type="text"
                      id="fourth"
                      maxlength="1"
                    />
                  </div>
                </form>

                <p className=" mt-3 mb-5" style={{ textAlign: "right" }}>
                  <Link to="#"> Resend Code</Link>
                </p>
                <p className="" style={{ textAlign: "left" }}>
                  <Link to="#"> Code Expires in (3:00)</Link>
                </p>
                <Link to="/success-screen">
                  <button
                    className="btn btn-primary w-100"
                    style={{
                      backgroundColor: "#449f1a",
                      height: "45px",
                      borderRadius: "43px",
                    }}
                  >
                    VERIFY
                  </button>
                </Link>
              </div>
              <p className="text-center mt-3 mb-5">
                Don’t have account? <Link to="/register"> Register</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </>
  );
};

export default Otp;
