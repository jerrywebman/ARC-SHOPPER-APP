import React, { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Navigate,
  Link,
  Redirect,
  // useHistory,
  useLocation,
} from "react-router-dom";
import Footer from "../../partials/Footer";
import Topbar from "../../partials/Topbar";
import Middlebar from "../../partials/Middlebar";
import Menu from "../../partials/Menu";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import qs from "qs";

const Register = () => {
  // Loading States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("ARC");
  const location = useLocation();

  //LOGIN
  const onRegister = () => {
    const formData = {
      email,
      password,
    };

    try {
      const url = "http://api.allroundcare.ng/accounts/register";
      const options = {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        data: qs.stringify(formData),
        url,
      };
      axios(options)
        .then((response) => {
          if (response.data.type === "success") {
            toast.success(response.data.msg, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            // <Navigate to="/success-screen" replace state={{ from: location }} />;
            setTimeout(() => {
              window.open("/login", "_blank");
            }, 2000);
          } else {
            toast.error("User already Exists", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        })
        .catch((err) => {
          toast.error(err.response.statusText, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    } catch (err) {
      toast.error(`a server error occurred ${err}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
                <form
                  action="#"
                  autoComplete="off"
                  onSubmit={handleSubmit}
                  id="register-form"
                >
                  <div className="col-12 mt-3 mb-3">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="Name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
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
                onClick={onRegister}
                type="submit"
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
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Register;
