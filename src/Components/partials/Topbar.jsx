import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <>
      <div className="top_bar">
        <div className="container">
          <div className="row">
            <div className="col d-flex flex-row">
              <div className="top_bar_contact_item">
                <div className="top_bar_icon">
                  <img
                    src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918577/phone.png"
                    alt="foot_img"
                  />
                </div>
                +91 9823 132 111
              </div>
              <div className="top_bar_contact_item">
                <div className="top_bar_icon">
                  <img
                    src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918597/mail.png"
                    alt="foot_img"
                  />
                </div>
                <a href="mailto:contact@allroundcare.ng">
                  contact@allroundcare.ng
                </a>
              </div>
              <div className="top_bar_content ms-auto">
                <div className="top_bar_menu">
                  <ul className="standard_dropdown top_bar_dropdown">
                    <li>
                      <a href="#">
                        English<i className="fas fa-chevron-down"></i>
                      </a>
                      <ul>
                        <li>
                          <a href="#">Italian</a>
                        </li>
                        <li>
                          <a href="#">Spanish</a>
                        </li>
                        <li>
                          <a href="#">Japanese</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        NGN<i className="fas fa-chevron-down"></i>
                      </a>
                      <ul>
                        <li>
                          <a href="#">EUR Euro</a>
                        </li>
                        <li>
                          <a href="#">GBP British Pound</a>
                        </li>
                        <li>
                          <a href="#">JPY Japanese Yen</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="top_bar_user">
                  <div className="user_icon">
                    <img
                      src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918647/user.svg"
                      alt="foot_img"
                    />
                  </div>
                  <div className="text-lg" style={{ fontWeight: "bold" }}>
                    <h3>
                      <Link to="/register">Register</Link>
                    </h3>
                  </div>
                  <div>
                    <Link to="/login">Sign in</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
