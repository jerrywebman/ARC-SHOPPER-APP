import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { BsArrowRight } from "react-icons/bs";

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
                <h2 className="fw-bold mb-3">Optimized Functionalities</h2>
                <p className="lead">
                  Enabling retailers to reach their full potential
                </p>
                {/* <p className="mt-2" style={{padding:"10px"}}>
                        The ARC software application, delivers a tech based end-to-end B2B and B2C distribution 
                        service to our customers.
                    </p> */}
                <p className="lead">
                  It is an all-in-one application that is created to remodel the
                  way household and freshfood items are distributed and the
                  entire logistics ecosystem
                </p>
                {/* <p className="mt-2" style={{padding:"10px"}}>
                        In addition to this, we provide diverse remunerative (income opportunities) and 
                        non-remunerative (charged) services for various arms within the distribution chain.
                    </p> */}
                <div class="container">
                  <div class="row">
                    <div class="col-sm">
                      {" "}
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
                          <Link to="/services">
                            <Button color="success">Retailers</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm">
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
                          <Link to="/services">
                            <Button color="success">Investor</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm">
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
                          <Link to="/services">
                            {" "}
                            <Button color="success">Consumer</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm">
                      {" "}
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
                          <Link to="/services">
                            <Button color="success">Logistics</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg_middle"
        style={{ backgroundImage: "url(img/Dispatch-rider.jpg)" }}
      >
        <div className="overlay_container">
          <div className="container py-5 px-4">
            <div className="row">
              <div className="col-lg-4 col-sm-12 text-center">
                <Link to="/services">
                  <Button color="success">
                    Learn More
                    <BsArrowRight
                      color="white"
                      fontSize="1.5em"
                      className="m-2"
                    />
                  </Button>
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
              <div className="col-sm-8 col-lg-4 text-center">
                <center>
                  <img
                    src="img/networks.jpg"
                    // src="https://allroundcare.ng/assets/img/prof-2.jpeg"
                    className="d-block mx-lg-auto img-fluid"
                    alt="ARC"
                    width="600"
                    height="500"
                    loading="lazy"
                  />
                </center>
              </div>
              <div className="col-lg-8" id="about-us">
                <h2 className="fw-bold mb-3">About us</h2>
                <p className="lead">
                  All Round Care (ARC) is an innovative e-commerce platform that
                  has saddled itself with the sole purpose of providing
                  web-based solutions to everyday retail and consumer needs. 
                  The ARC software app is our latest innovation, and specializes
                  in e-commerce and logistics.  
                </p>
                {/* <p className="lead">
                  <span className="fw-bold text-black">WHAT WE DO:{""}</span>{" "}
                  ARC through it’s optimised software app delivers tech-based
                  B2B and B2C logistics solutions to both business owners and
                  end consumers.  Our e-commerce and logistics App has been
                  optimised to facilitate the distribution of household and
                  fresh foods items within and throughout the entire logistics
                  ecosystem, all the way to the end-user. 
                </p> */}
                <Link to="/about-us">
                  <Button color="success">
                    Learn More
                    <BsArrowRight
                      color="white"
                      fontSize="1.5em"
                      className="m-2"
                    />
                  </Button>
                </Link>
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
                <Link to="/register">
                  <Button color="success">
                    Register
                    <BsArrowRight
                      color="white"
                      fontSize="1.5em"
                      className="m-2"
                    />
                  </Button>
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
