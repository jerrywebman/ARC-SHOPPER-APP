import React from "react";
import "./styles/newsletter.css";

const Newsletter = () => {
  return (
    <>
      <section className="subscribe-area pb-50 pt-70">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="subscribe-text mb-15">
                {/* <span>JOIN OUR NEWSLETTER</span> */}
                <h2 className="">Subcribe our Newsletter</h2>
              </div>
            </div>
            <div className="col-md-8">
              <div className="subscribe-wrapper subscribe2-wrapper mb-15">
                <div className="subscribe-form">
                  <form action="#">
                    <input
                      placeholder="enter your email address"
                      type="email"
                    />
                    <button>
                      subscribe <i className="fas fa-long-arrow-alt-right"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
