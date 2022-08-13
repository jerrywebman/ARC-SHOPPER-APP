import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const HeroLanding = () => {
  return (
    <>
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-2">
          <div class="col-10 col-sm-8 col-lg-6">
            <center>
              <img
                // src="img/woman_holding_phone.jpeg"
                src="https://thumbs.dreamstime.com/b/delivery-courier-service-concept-set-man-riding-bicycle-driving-moped-scooter-to-deliver-food-packages-time-holding-189534845.jpg"
                class="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                loading="lazy"
              />
            </center>
          </div>
          <div class="col-lg-6">
            <h1 class="display-6 fw-bold mb-3">Making</h1>
            <h1 class="display-6 fw-bold mb-3">Trade Easier</h1>
            <p class="lead">
              Harnessing the power of technology, automation and
              telecommunication, ARC ensures the fast availability of consumer
              packaged goods to both consumers and retailers in an easy way.
            </p>
            <div className="row">
              <div class="  col col-md-4 col-sm-4 col-lg-6">
                <Link to="#" data-abc="true">
                  <Button color="success" outline className="btn btn-md">
                    Join us
                  </Button>
                </Link>
              </div>
              <div class=" col col-md-4 col-sm-4 col-lg-6">
                <Link to="#" data-abc="true">
                  <Button color="success" className="btn btn-md">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroLanding;
