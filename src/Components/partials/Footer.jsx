import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="section-footer border-top pt-3">
        <div className="container">
          <div className="container p-5">
            <section className="footer-top padding-y">
              <div className="row">
                <aside className="col-md-4 mt-2">
                  <article className="mr-3">
                    {" "}
                    <h2 className="text-start text-white">ARC</h2>
                    <p className="mt-3 description">
                      Morbi cursus porttitor enim lobortis molestie. Duis
                      gravida turpis dui, eget bibendum magna congue nec.
                    </p>
                    <div>
                      {" "}
                      <Link
                        to="/"
                        className="btn btn-icon btn-light"
                        title="Facebook"
                        target="_blank"
                        href="#"
                        data-abc="true"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </Link>{" "}
                      <Link
                        className="btn btn-icon btn-light"
                        title="Instagram"
                        target="_blank"
                        to="/"
                        data-abc="true"
                      >
                        <i className="fab fa-instagram"></i>
                      </Link>{" "}
                      <Link
                        className="btn btn-icon btn-light"
                        title="Youtube"
                        target="_blank"
                        to="/"
                        data-abc="true"
                      >
                        <i className="fab fa-youtube"></i>
                      </Link>{" "}
                      <Link
                        className="btn btn-icon btn-light"
                        title="Twitter"
                        target="_blank"
                        to="/"
                        data-abc="true"
                      >
                        <i className="fab fa-twitter"></i>
                      </Link>{" "}
                    </div>
                  </article>
                </aside>
                <aside className="col-sm-3 col-md-2 mt-2">
                  <h6 className="title">About</h6>
                  <ul className="list-unstyled">
                    <li>
                      {" "}
                      <Link to="/" data-abc="true">
                        About us
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/" data-abc="true">
                        Services
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/" data-abc="true">
                        Terms &#38; Condition
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/" data-abc="true">
                        Our Blogs
                      </Link>
                    </li>
                  </ul>
                </aside>
                <aside className="col-sm-3 col-md-2 mt-2">
                  <h6 className="title">Helps</h6>
                  <ul className="list-unstyled">
                    <li>
                      {" "}
                      <Link to="/" data-abc="true">
                        Help center
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/" data-abc="true">
                        Money refund
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/" data-abc="true">
                        Terms and Policy
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/" data-abc="true">
                        Open dispute
                      </Link>
                    </li>
                  </ul>
                </aside>
                <aside className="col-sm-3 col-md-2 mt-2">
                  <h6 className="title">My Account</h6>
                  <ul className="list-unstyled">
                    <li>
                      {" "}
                      <Link to="/" data-abc="true">
                        {" "}
                        User Login{" "}
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/" data-abc="true">
                        {" "}
                        User register{" "}
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/" data-abc="true">
                        {" "}
                        Account Setting{" "}
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/" data-abc="true">
                        {" "}
                        My Orders{" "}
                      </Link>
                    </li>
                  </ul>
                </aside>
                <aside className="col-sm-2 col-md-2 mt-2">
                  <h6 className="title">Our app</h6>{" "}
                  <Link to="/" className="d-block mb-2" data-abc="true">
                    <img
                      className="img-responsive"
                      src="https://i.imgur.com/nkZP7fe.png"
                      height="40"
                      alt="foot_img"
                    />
                  </Link>{" "}
                  <Link to="/" className="d-block mb-2" data-abc="true">
                    <img
                      className="img-responsive"
                      src="https://i.imgur.com/47q2YGt.png"
                      height="40"
                      width="123"
                      alt="foot_img"
                    />
                  </Link>
                </aside>
              </div>
            </section>
            <section className="footer-copyright border-top d-flex">
              <p className="float-left text-muted">
                {" "}
                ARC Limited © 2022. All Rights Reserved{" "}
              </p>
              <p target="_blank" className="ms-auto text-muted">
                {" "}
                <Link to="/" data-abc="true">
                  Privacy &amp; Cookies
                </Link>{" "}
                &nbsp; &nbsp;{" "}
                <Link to="/" data-abc="true">
                  Accessibility
                </Link>{" "}
              </p>
            </section>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
