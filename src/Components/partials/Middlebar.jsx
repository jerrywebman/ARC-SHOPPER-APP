import React from "react";

const Middlebar = () => {
  return (
    <>
      <div className="header_main">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-sm-3 col-3 order-1">
              <div className="logo_container">
                <div className="logo">
                  <a href="#">
                    <img src="img/logo.png" alt="" />
                  </a>
                </div>
                {/* <img className="logo" src="img/logo.png" alt="" /> */}
              </div>
            </div>

            <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
              <div className="header_search">
                <div className="header_search_content">
                  <div className="header_search_form_container">
                    <form action="#" className="header_search_form clearfix">
                      <input
                        type="search"
                        required="required"
                        className="header_search_input"
                        placeholder="Search for products..."
                      />
                      <div
                        className="custom_dropdown"
                        style={{ display: "none" }}
                      >
                        <div className="custom_dropdown_list">
                          <span className="custom_dropdown_placeholder clc">
                            All Categories
                          </span>
                          <i className="fas fa-chevron-down"></i>
                          <ul className="custom_list clc">
                            <li>
                              <a className="clc" href="#">
                                All Categories
                              </a>
                            </li>
                            <li>
                              <a className="clc" href="#">
                                Computers
                              </a>
                            </li>
                            <li>
                              <a className="clc" href="#">
                                Laptops
                              </a>
                            </li>
                            <li>
                              <a className="clc" href="#">
                                Cameras
                              </a>
                            </li>
                            <li>
                              <a className="clc" href="#">
                                Hardware
                              </a>
                            </li>
                            <li>
                              <a className="clc" href="#">
                                Smartphones
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="header_search_button trans_300"
                        value="Submit"
                      >
                        <img
                          src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918770/search.png"
                          alt="foot_img"
                        />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
              <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                <div className="wishlist d-flex flex-row align-items-center justify-content-end">
                  <div className="wishlist_icon">
                    <img
                      src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918681/heart.png"
                      alt="foot_img"
                    />
                  </div>
                  <div className="wishlist_content">
                    <div className="wishlist_text">
                      <a href="#">Wishlist</a>
                    </div>
                    <div className="wishlist_count">10</div>
                  </div>
                </div>

                <div className="cart">
                  <div className="cart_container d-flex flex-row align-items-center justify-content-end">
                    <div className="cart_icon">
                      <img
                        src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918704/cart.png"
                        alt="foot_img"
                      />
                      <div className="cart_count">
                        <span>3</span>
                      </div>
                    </div>
                    <div className="cart_content">
                      <div className="cart_text">
                        <a href="#">Cart</a>
                      </div>
                      <div className="cart_price">N185</div>
                    </div>
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

export default Middlebar;
