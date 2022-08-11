import React from "react";
import { Link } from "react-router-dom";

const HeroLanding = () => {
  return (
    <>
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-2">
          <div class="col-10 col-sm-8 col-lg-6">
            <center>
              <img
                src="https://cartona.com/img/mob/1.png"
                class="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="350"
                height="500"
                loading="lazy"
              />
            </center>
          </div>
          <div class="col-lg-6">
            <h1 class="display-6 fw-bold mb-3">
              Digitizing The Traditional Trade Market
            </h1>
            <p class="lead">
              Through technology, automation and telecommunication, ARC ensures
              the fast availability of consumer packaged goods to both consumers
              and retailers in an easy way.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link to="/" className="d-block mb-2" data-abc="true">
                <img
                  className="img-responsive"
                  src="https://i.imgur.com/nkZP7fe.png"
                  height="40"
                  alt="foot_img"
                />
              </Link>
              <Link to="/" className="d-block mb-2" data-abc="true">
                <img
                  className="img-responsive"
                  src="https://i.imgur.com/47q2YGt.png"
                  height="40"
                  width="123"
                  alt="foot_img"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroLanding;
