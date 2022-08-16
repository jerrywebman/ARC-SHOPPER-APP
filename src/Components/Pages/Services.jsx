import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import {
  BsArrowRight,
  BsFillCartCheckFill,
  BsFillCreditCardFill,
  BsFillCollectionFill,
  BsFillPeaceFill,
} from "react-icons/bs";
import Footer from "../partials/Footer";
import Topbar from "../partials/Topbar";
import Middlebar from "../partials/Middlebar";
import Menu from "../partials/Menu";
import Newsletter from "../Newsletter";
import "./../styles/card.css";

const Services = () => {
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
          <div>
            <div className="col-lg-12 mt-3 mx-auto">
              <h2 className="fw-bold mb-3 text-center">
                LOGISTICS PARTNERSHIP
              </h2>
              <p className="lead">
                individuals, corporate entities or businesses can take advantage
                of this opportunity by providing logistics channels (motorbikes,
                mini vans and trucks) with which orders can be fulfilled while
                making good returns on investment in the process. ARC for
                logistics is in need of partners to help bolster its logistics
                ranks and cater to its vast clientele. We are open to
                individual, corporate bodies and businesses with logistics and
                distribution means, who are looking to make good returns on
                their investments. 
              </p>
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
              <div className="col-lg-5 col-sm-12 text-center"></div>
              <div className="col-sm-12 col-lg-7 mt-3">
                <h5 className="display-6 fw-bold text-white"></h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* final section */}
      <div className="section_our_solution">
        <div className="row">
          <div className="col-lg-12 mt-3 mx-auto mb-3">
            <h2 className="fw-bold mb-3 text-center">
              BEST FEATURES DEPLOYED BY ARC
            </h2>
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
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
      <Newsletter />
      <Footer />
    </>
  );
};

export default Services;
