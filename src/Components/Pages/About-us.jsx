import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import {
  BsFillBarChartFill,
  BsFillXDiamondFill,
  BsFillTelephoneFill,
  BsFillPinFill,
  BsFillLightningChargeFill,
  BsFillPiggyBankFill,
  BsFillHandThumbsUpFill,
  BsFillPlugFill,
  BsFillLightningFill,
  BsArrowRight,
  BsFillCartCheckFill,
  BsFillCreditCardFill,
  BsFillCollectionFill,
  BsFillPeaceFill,
} from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import Footer from "../partials/Footer";
import Topbar from "../partials/Topbar";
import Middlebar from "../partials/Middlebar";
import Menu from "./../partials/Menu";
import Newsletter from "../Newsletter";
import "./../styles/card.css";

const AboutUs = () => {
  return (
    <>
      <header className="header">
        <Topbar />
        <Middlebar />
        <Menu />
      </header>
      <section className="bg-white mb-6">
        <div className="container">
          <article className="postcard light">
            <img
              className="postcard__img"
              src="https://picsum.photos/1000/1000"
              alt="ARC"
            />
            <div className="postcard__text">
              <h1 className="postcard__title blue " style={{ color: "green" }}>
                WHAT WE DO
              </h1>

              <div
                className="postcard__bar"
                style={{ backgroundColor: "green" }}
              ></div>
              <div className="lead text-black">
                ARC through it’s optimised software app delivers tech-based B2B
                and B2C logistics solutions to both business owners and end
                consumers.  Our e-commerce and logistics App has been optimised
                to facilitate the distribution of household and fresh foods
                items within and throughout the entire logistics ecosystem, all
                the way to the end-user.  Our services also includes various
                remunerative (income opportunities) and non-remunerative (paid)
                services for various arms within the distribution chain.
              </div>
            </div>
          </article>
        </div>
      </section>

      <section
        className="bg_middle"
        style={{ backgroundImage: "url(img/Dispatch-rider.jpg)" }}
      >
        <div className="overlay_container">
          <div className="container py-5 px-4">
            <div className="row">
              <div className="col-sm-12 col-lg-5 mt-3">
                <h5 className="display-6 fw-bold text-white">
                  ARC FOR RETAILERS
                </h5>
              </div>
              <div className="col-lg-7 col-sm-12 text-center">
                <Link to="#">
                  <Button color="success">
                    Learn More
                    <BsArrowRight
                      color="white"
                      fontSize="1.5em"
                      className="m-2 mr-3"
                    />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white mb-6">
        <div className="container">
          <div className="row mb-3">
            <div className="text-center mb-3">
              <h2 className="fw-bold mt-3">WHY ENGAGE ARC?</h2>
              <p className="lead text-black">
                With ARC, the needs of investors, retailers, and end consumers
                are catered to with our market-tested and time-proven logistics
                and e-commerce solutions
              </p>
            </div>
            <div className="col-md ">
              <div className="card shadow-lg border border-success">
                <div className="card-content">
                  <div className="card-body cleartfix">
                    <div className="media align-items-stretch">
                      <div className="align-self-center">
                        <h3 className="mr-2">
                          <BsFillBarChartFill
                            color="green"
                            fontSize="1.5em"
                            className="m-2"
                          />
                          Data-Driven
                        </h3>
                      </div>
                      <div className="align-self-center">
                        <p className="lead text-black">
                          Our optimised App provides real-time trade
                          intelligence from actual transactions, which enable
                          the delivery of Fast Moving Consumer Goods to the
                          retail business owner or end consumer on-time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md">
              <div className="card shadow-lg border border-success">
                <div className="card-content">
                  <div className="card-body cleartfix">
                    <div className="media align-items-stretch">
                      <div className="align-self-center">
                        <h3 className="mr-2">
                          {" "}
                          <GiReceiveMoney
                            color="green"
                            fontSize="1.5em"
                            className="m-2"
                          />
                          Financing Inventory
                        </h3>
                      </div>
                      <div className="align-self-center">
                        <p className="lead text-black">
                          We provide micro-loans to retailers to enable them buy
                          more and stock up, and thereby, remain in business.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card shadow-lg border border-success">
                <div className="card-content">
                  <div className="card-body cleartfix">
                    <div className="media align-items-stretch">
                      <div className="align-self-center">
                        <h3 className="mr-2">
                          {" "}
                          <BsFillLightningFill
                            color="green"
                            fontSize="1.5em"
                            className="m-2"
                          />
                          Deliver Smiles
                        </h3>
                      </div>
                      <div className="align-self-center">
                        <p className="lead text-black">
                          ARC is optimised to handle the inventory, shipping,
                          and stellar customer service throughout our
                          distribution channels all across Nigeria. Through it
                          all, our clientele can simply kick back and relax
                          while they wait on the order fulfilment. 
                        </p>
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
              <div className="col-lg-5 col-sm-12 text-center">
                <Link to="#">
                  <Button color="success">
                    Learn More
                    <BsArrowRight
                      color="white"
                      fontSize="1.5em"
                      className="m-2 mr-3"
                    />
                  </Button>
                </Link>
              </div>

              <div className="col-sm-12 col-lg-7 mt-3">
                <h5 className="display-6 fw-bold text-white">
                  ARC FOR INVESTORS
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container">
          <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center py-2">
              <div className="col-sm-8 col-lg-6 text-center">
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
              <div className="col-lg-6">
                <h2 className="fw-bold mb-3">Our Vision</h2>
                <p className="lead mb-3">
                  Our aim is to create a seamless ecosystem to foster the
                  distribution of Fast Moving Consumer Goods to the retailer and
                  final consumer.  
                </p>
                <h2 className="fw-bold mb-3">Our Mission</h2>
                <p className="lead mb-3">
                  To become Nigeria’s number one go-to online marketplace for
                  the distribution of Fast Moving Consumer Goods. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg_middle"
        style={{ backgroundImage: "url(img/Dispatch-rider.jpg)" }}
      >
        <div className="overlay_container mb-3">
          <div className="container py-5 px-4">
            <div className="row">
              <div className="col-sm-12 col-lg-7 mt-3">
                <h5 className="display-6 fw-bold text-white">
                  ARC FOR CONSUMERS
                </h5>
              </div>
              <div className="col-lg-5 col-sm-12 text-center">
                <Link to="#">
                  <Button color="success">
                    Learn More
                    <BsArrowRight
                      color="white"
                      fontSize="1.5em"
                      className="m-2 mr-3"
                    />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white m-6">
        <div className="container">
          <article className="postcard light">
            <div className="postcard__text">
              <h1 className="postcard__title blue " style={{ color: "black" }}>
                CORE VALUES
              </h1>

              <div
                className="postcard__bar"
                style={{ backgroundColor: "green" }}
              ></div>
              <div className="lead text-black mb-3">
                <div className="row">
                  <div className="col-sm-4">
                    <BsFillXDiamondFill
                      color="green"
                      fontSize="1.5em"
                      className="m-2 mr-3"
                    />
                    Innovation and Elegance
                  </div>
                  <div className="col-sm-4">
                    <BsFillTelephoneFill
                      color="green"
                      fontSize="1.5em"
                      className="m-2 mr-3"
                    />
                    Customer-centric solutions
                  </div>
                  <div className="col-sm-4">
                    <BsFillPinFill
                      color="green"
                      fontSize="1.5em"
                      className="m-2 mr-3"
                    />
                    Excellence or Nothing
                  </div>
                </div>
              </div>
              <h1 className="postcard__title blue " style={{ color: "black" }}>
                VALUE PROPORTIONS 
              </h1>
              <div
                className="postcard__bar"
                style={{ backgroundColor: "green" }}
              ></div>
              <div className="lead text-black">
                <div className="row">
                  <div className="col-sm-3">
                    <BsFillLightningChargeFill
                      color="green"
                      fontSize="1.5em"
                      className="m-2 mr-3"
                    />
                    We are faster
                  </div>
                  <div className="col-sm-3">
                    <BsFillPiggyBankFill
                      color="green"
                      fontSize="1.5em"
                      className="m-2 mr-3"
                    />
                    We are cheaper
                  </div>
                  <div className="col-sm-3">
                    <BsFillHandThumbsUpFill
                      color="green"
                      fontSize="1.5em"
                      className="m-2 mr-3"
                    />
                    We are reliable
                  </div>
                  <div className="col-sm-3">
                    <BsFillPlugFill
                      color="green"
                      fontSize="1.5em"
                      className="m-2 mr-3"
                    />
                    We are All Round Care
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section
        className="bg_middle"
        style={{ backgroundImage: "url(img/Dispatch-rider.jpg)" }}
      >
        <div className="overlay_container">
          <div className="container py-5 px-4">
            <div className="row">
              <div className="col-lg-5 col-sm-12 text-center">
                <Link to="#">
                  <Button color="success">
                    Learn More
                    <BsArrowRight
                      color="white"
                      fontSize="1.5em"
                      className="m-2 mr-3"
                    />
                  </Button>
                </Link>
              </div>
              <div className="col-sm-12 col-lg-7 mt-3">
                <h5 className="display-6 fw-bold text-white">
                  ARC FOR LOGISTICS
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* final section */}
      <div className="section_our_solution">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="our_solution_category">
              <div className="solution_cards_box">
                <div className="solution_card">
                  <div className="hover_color_bubble"></div>
                  <div className="so_top_icon">
                    <BsFillCreditCardFill
                      color="green"
                      fontSize="1.5em"
                      className="m-2 mr-3"
                    />
                  </div>
                  <div className="solu_title">
                    <h3>Easy Payment</h3>
                  </div>
                  <div className="solu_description">
                    <p>
                      ARC’s in-app payment portal is optimised to handle
                      payments with ease. Our in-app credit system is easy,
                      safe, and lightning-fast to use..
                    </p>
                  </div>
                </div>
                <div className="solution_card">
                  <div className="hover_color_bubble"></div>
                  <div className="so_top_icon">
                    <BsFillCollectionFill
                      color="green"
                      fontSize="1.5em"
                      className="m-2 mr-3"
                    />
                  </div>
                  <div className="solu_title">
                    <h3>0.00 Naira To Start</h3>
                  </div>
                  <div className="solu_description">
                    <p>
                      Taking advantage of ARC’s revolutionary credit-borrowing
                      feature, distributors and freelance shoppers, who have
                      completed the KYC process can secure ARC credit, which can
                      be transferred to a commercial bank account and used to
                      either fulfil a shopping list or carry out logistic
                      deliveries.
                    </p>
                  </div>
                </div>
              </div>

              <div className="solution_cards_box sol_card_top_3">
                <div className="solution_card">
                  <div className="hover_color_bubble"></div>
                  <div className="so_top_icon">
                    <BsFillPeaceFill
                      color="green"
                      fontSize="1.5em"
                      className="m-2 mr-3"
                    />
                  </div>
                  <div className="solu_title">
                    <h3>Creditors</h3>
                  </div>
                  <div className="solu_description">
                    <p className="mb-3">
                      Individuals with investment seed can take advantage of Our
                      creditors’ system and make their money work for them .Our
                      real-time transactional intelligence ensures that
                      creditors stay abreast with their money’s activities
                      within the system via prompts and notifications. Proceeds
                      from borrowed credit is instantly made available to the
                      creditor for withdrawal or recycling; whereas, seed
                      capital stays in the system until a full cycle is
                      completed. 
                    </p>
                  </div>
                </div>
                <div className="solution_card">
                  <div className="hover_color_bubble"></div>
                  <div className="so_top_icon">
                    <BsFillCartCheckFill
                      color="green"
                      fontSize="1.5em"
                      className="m-2 mr-3"
                    />
                  </div>
                  <div className="solu_title">
                    <h3>Shop with Ease</h3>
                  </div>
                  <div className="solu_description">
                    <p>
                      ARC’s business model is setup and optimised to reward
                      everyone who’s involved in the entire process. Retail
                      businesses and household shoppers have never had it this
                      good.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* finalsection ends */}
      <section className="bg-white mb-6">
        <div className="container">
          <article className="postcard light">
            <img
              className="postcard__img"
              src="https://cdn.vanguardngr.com/wp-content/uploads/2015/06/dettol.jpg"
              alt="ARC"
            />
            <div className="postcard__text">
              <h1 className="postcard__title blue " style={{ color: "green" }}>
                ARC FOR RETAILERS
              </h1>

              <div
                className="postcard__bar"
                style={{ backgroundColor: "green" }}
              ></div>
              <div className="lead text-black">
                Using an innovative B2B business model, ARC for retailers
                completely eliminates the clutter of supply chain logistics on
                behalf of the retailer. Our optimised system ensures that
                delivery of ordered retail goods is conducted with the utmost
                ease and efficiency; thereby drastically reducing drudgery and
                delivery time to a mere 3 hours at most. The burden of the high
                cost of doing business conveniently is greatly reduced by virtue
                of our highly efficient and extensive distribution chain..
              </div>
              <Link to="#">
                <Button color="success">
                  Sign up
                  <BsArrowRight
                    color="white"
                    fontSize="1.5em"
                    className="m-2 mr-3"
                  />
                </Button>
              </Link>
            </div>
          </article>
        </div>
      </section>
      <section className="bg-white mb-6">
        <div className="container">
          <article className="postcard light">
            <div className="postcard__text">
              <h1 className="postcard__title blue " style={{ color: "green" }}>
                ARC FOR CONSUMERS
              </h1>

              <div
                className="postcard__bar"
                style={{ backgroundColor: "green" }}
              ></div>
              <div className="lead text-black">
                By virtue of our research-tested B2C system, end consumers with
                the ultimate aim of achieving their set goals with a fresh foods
                list while inculcating the highest ease and convenience in the
                process, will find an amazing solution in ARC for consumers. Our
                novel and innovative logistics apparatus helps eliminate the
                hassle of shopping for fresh foods items anywhere within
                metropolitan Lagos and surrounding states. Our secure freelance
                logistics and real-time communication channel allows the
                consumer to be part of the shopping process remotely; curating
                the quality of their shopping. This allows for a wholesome and
                stress-free shopping experience the likes of which is not found
                elsewhere for the price expended.
              </div>
              <Link to="#">
                <Button color="success">
                  Join us
                  <BsArrowRight
                    color="white"
                    fontSize="1.5em"
                    className="m-2 mr-3"
                  />
                </Button>
              </Link>
            </div>
            <img className="postcard__img" src="/img/product-1.jpg" alt="ARC" />
          </article>
        </div>
      </section>
      <section className="bg-white mb-6">
        <div className="container">
          <article className="postcard light">
            <img
              className="postcard__img"
              src="https://thumbs.dreamstime.com/b/building-technology-business-real-estate-investment-businessman-holding-hand-buildings-118751095.jpg"
              alt="ARC"
            />
            <div className="postcard__text">
              <h1 className="postcard__title blue " style={{ color: "green" }}>
                ARC FOR INVESTORS
              </h1>

              <div
                className="postcard__bar"
                style={{ backgroundColor: "green" }}
              ></div>
              <div className="lead text-black">
                As the name implies, this is a facet of ARC specifically
                designed for investors. It is a great way of making your money
                work for you in real time, with the added advantage of
                transparency and security. Our in-app notification system
                prompts you, the investor, whenever your money is engaged
                anywhere within the system. This helps the investor keep track
                of earnings and also facilitate the recycling of funds if you
                they so wish. The borrow feature, cycling/recycling of funds,
                and automated functions of this facet of ARC make for a very
                smooth and innovative business model. So engage us and watch
                your money grow with the utmost peace of mind.
              </div>
              <Link to="#">
                <Button color="success">
                  Invest with us
                  <BsArrowRight
                    color="white"
                    fontSize="1.5em"
                    className="m-2 mr-3"
                  />
                </Button>
              </Link>
            </div>
          </article>
        </div>
      </section>
      <section className="bg-white mb-6">
        <div className="container">
          <article className="postcard light">
            <div className="postcard__text">
              <h1 className="postcard__title blue " style={{ color: "green" }}>
                ARC FOR LOGISTICS
              </h1>

              <div
                className="postcard__bar"
                style={{ backgroundColor: "green" }}
              ></div>
              <div className="lead text-black">
                Employing a brilliant and flexible model for movement and
                delivery of parcelled or fresh foods goods, ARC for logistics is
                poised to take the logistics industry by storm. Our flexible yet
                effective logistics model allows for both ease of operation and
                optimised functionality.
              </div>
              <Link to="#">
                <Button color="success">
                  Join us
                  <BsArrowRight
                    color="white"
                    fontSize="1.5em"
                    className="m-2 mr-3"
                  />
                </Button>
              </Link>
            </div>
            <img
              className="postcard__img"
              src="https://allroundcare.ng/assets/img/log.jpeg"
              alt="ARC"
            />
          </article>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </>
  );
};

export default AboutUs;
