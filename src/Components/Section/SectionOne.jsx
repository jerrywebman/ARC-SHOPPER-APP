import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const SectionOne = () => {
  return (
    <>
      <section className="bg-light">
        <div className="conatiner">
          <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row align-items-center g-5 py-2">
              <div className="col-10 col-sm-8 col-lg-4 text-center">
                <center>
                  <img
                    src="https://allroundcare.ng/assets/img/log.jpeg"
                    className="d-block mx-lg-auto img-fluid"
                    alt="Bootstrap Themes"
                    width="600"
                    height="500"
                    loading="lazy"
                  />
                </center>
              </div>
              <div className="col-lg-8">
                <h2 className="fw-bold mb-3">Streamlining Operations</h2>
                <p className="lead">
                  Enabling retailers to reach their full potential
                </p>
                {/* <p className="mt-2" style={{padding:"10px"}}>
                        The ARC software application, delivers a tech based end-to-end B2B and B2C distribution 
                        service to our customers.
                    </p> */}
                <p className="mt-2">
                  It is an all-in-one application that is created to remodel the
                  way household and freshfood items are distributed and the
                  entire logistics ecosystem
                </p>
                {/* <p className="mt-2" style={{padding:"10px"}}>
                        In addition to this, we provide diverse remunerative (income opportunities) and 
                        non-remunerative (charged) services for various arms within the distribution chain.
                    </p> */}
                <div className="row">
                  <div className="col col-md-6 col-sm-6 col-lg-3">
                    <div
                      className="product-offer mt-3 mb-10"
                      style={{ height: "10em" }}
                    >
                      <img
                        className="img-fluid"
                        src="https://cdn.vanguardngr.com/wp-content/uploads/2015/06/dettol.jpg"
                        alt=""
                      />
                      <div className="offer-text">
                        <h6 className="text-white text-uppercase mb-3"></h6>
                        <Button color="success">Retailers</Button>
                      </div>
                    </div>
                  </div>

                  <div className="col col-md-6 col-sm-2 col-lg-3">
                    <div
                      className="product-offer mt-3 mb-10"
                      style={{ height: "10em" }}
                    >
                      <img
                        className="img-fluid"
                        src="https://thumbs.dreamstime.com/b/building-technology-business-real-estate-investment-businessman-holding-hand-buildings-118751095.jpg"
                        alt=""
                      />
                      <div className="offer-text">
                        <h6 className="text-white text-uppercase mb-3"></h6>
                        <Button color="success" outline>
                          Investor
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-6 col-sm-6 col-lg-3">
                    <div
                      className="product-offer mt-3 mb-10"
                      style={{ height: "10em" }}
                    >
                      <img
                        className="img-fluid"
                        src="/img/product-1.jpg"
                        alt=""
                      />
                      <div className="offer-text">
                        <h6 className="text-white text-uppercase mb-3"></h6>
                        <Button color="success">Consumer</Button>
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-6 col-sm-6 col-lg-3">
                    <div
                      className="product-offer mt-3 mb-10"
                      style={{ height: "10em" }}
                    >
                      <img
                        className="img-fluid"
                        src="https://allroundcare.ng/assets/img/log.jpeg"
                        alt=""
                      />
                      <div className="offer-text">
                        <h6 className="text-white text-uppercase mb-3"></h6>
                        <Button color="success" outline>
                          Logistics
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg_middle">
        <div className="overlay_container">
          <div className="container py-5 px-4">
            <div className="row">
              <div className="col-lg-4 col-sm-12 text-center">
                <Link to="#" className="btn btn-success btn-lg">
                  Learn more
                </Link>
              </div>

              <div className="col-sm-12 col-lg-8 mt-3">
                <h4 className="display-6 fw-bold text-white">
                  Earn money with ARC, become a logistics partner.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="conatiner">
          <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center py-2">
              <div className="col-sm-8 col-lg-6 text-center">
                <center>
                  <img
                    src="https://allroundcare.ng/assets/img/prof-2.jpeg"
                    className="d-block mx-lg-auto img-fluid"
                    alt="Bootstrap Themes"
                    width="600"
                    height="500"
                    loading="lazy"
                  />
                </center>
              </div>
              <div className="col-lg-6">
                <h3 className="fw-bold mb-3">Best Organic Value Proportions</h3>
                {/* <p className="lead">Enabling retailers to reach their full potential</p> */}
                <p className="lead mt-2" style={{ padding: "10px" }}>
                  The ARC software application, delivers a tech based end-to-end
                  B2B and B2C distribution service to our customers.
                </p>
                <p className="lead mt-2" style={{ padding: "10px" }}>
                  <ul>
                    <li>We are Faster</li>
                    <li>We are Cheaper</li>
                    <li>We are Reliable</li>
                    <li>We are generally better all round.</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg_middle">
        <div className="overlay_container">
          <div className="container py-5 px-4">
            <div className="row">
              <div className="col-sm-12 col-lg-8">
                <h3 className="display-5 fw-bold text-white text-center mb-3">
                  Visit Our Store
                </h3>
              </div>
              <div className="col-lg-4 col-sm-12 text-center">
                <Link to="/register" className="btn btn-success btn-lg">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionOne;
