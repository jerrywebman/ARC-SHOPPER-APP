import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();
  console.log("pathname", location.pathname);
  return (
    <>
      <nav
        className={
          location.pathname ? "main_nav bg-dark text-white" : "main_nav"
        }
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="main_nav_content d-flex flex-row">
                <div className="main_nav_menu">
                  <ul className="standard_dropdown main_nav_dropdown">
                    <li>
                      <Link to="/">
                        Home<i className="fas fa-chevron-down"></i>
                      </Link>
                    </li>
                    <li className="hassubs">
                      <a href="#">
                        Shop<i className="fas fa-chevron-down"></i>
                      </a>
                      <ul>
                        <li>
                          <a href="#">
                            Lenovo<i className="fas fa-chevron-down"></i>
                          </a>
                          <ul>
                            <li>
                              <Link to="/">
                                Lenovo 1<i className="fas fa-chevron-down"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                Lenovo 3<i className="fas fa-chevron-down"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                Lenovo 2<i className="fas fa-chevron-down"></i>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/">
                            DELL<i className="fas fa-chevron-down"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            APPLE<i className="fas fa-chevron-down"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            HP<i className="fas fa-chevron-down"></i>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="hassubs">
                      <a href="#">
                        Pages<i className="fas fa-chevron-down"></i>
                      </a>
                      <ul>
                        <li>
                          <a href="shop.html">
                            Shop<i className="fas fa-chevron-down"></i>
                          </a>
                        </li>
                        <li>
                          <a href="product.html">
                            Product<i className="fas fa-chevron-down"></i>
                          </a>
                        </li>
                        <li>
                          <a href="blog.html">
                            Blog<i className="fas fa-chevron-down"></i>
                          </a>
                        </li>
                        <li>
                          <a href="blog_single.html">
                            Blog Post<i className="fas fa-chevron-down"></i>
                          </a>
                        </li>
                        <li>
                          <a href="regular.html">
                            Regular Post<i className="fas fa-chevron-down"></i>
                          </a>
                        </li>
                        <li>
                          <a href="cart.html">
                            Cart<i className="fas fa-chevron-down"></i>
                          </a>
                        </li>
                        <li>
                          <a href="contact.html">
                            Contact<i className="fas fa-chevron-down"></i>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/services">
                        Services<i className="fas fa-chevron-down"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/#about-us">
                        About Us<i className="fas fa-chevron-down"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        Contact<i className="fas fa-chevron-down"></i>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="menu_trigger_container ml-auto">
                  <div className="menu_trigger d-flex flex-row align-items-center justify-content-end">
                    <div
                      className="menu_burger"
                      onClick={() => setIsExpanded(!isExpanded)}
                    >
                      <div className="menu_trigger_text">menu</div>
                      <div className="cat_burger menu_burger_inner">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className={isExpanded ? "page_menu expanded" : "page_menu"}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="page_menu_content">
                <div className="page_menu_search">
                  <form action="#">
                    <input
                      type="search"
                      required="required"
                      className="page_menu_search_input"
                      placeholder="Search for products..."
                    />
                  </form>
                </div>
                <ul className="page_menu_nav">
                  <li className="page_menu_item">
                    <Link to="/">
                      Home<i className="fa fa-angle-down"></i>
                    </Link>
                  </li>
                  <li className="page_menu_item has-children">
                    <a href="#">
                      Shop<i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="page_menu_selection">
                      <li>
                        <a href="#">
                          Shop<i className="fa fa-angle-down"></i>
                        </a>
                      </li>
                      <li className="page_menu_item has-children">
                        <Link to="/">
                          Menu Item<i className="fa fa-angle-down"></i>
                        </Link>
                        <ul className="page_menu_selection">
                          <li>
                            <Link to="/">
                              Menu Item<i className="fa fa-angle-down"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              Menu Item<i className="fa fa-angle-down"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              Menu Item<i className="fa fa-angle-down"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              Menu Item<i className="fa fa-angle-down"></i>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/">
                          Menu Item<i className="fa fa-angle-down"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          Menu Item<i className="fa fa-angle-down"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          Menu Item<i className="fa fa-angle-down"></i>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="page_menu_item">
                    <Link to="/">
                      blog<i className="fa fa-angle-down"></i>
                    </Link>
                  </li>
                  <li className="page_menu_item">
                    <Link to="/">
                      contact<i className="fa fa-angle-down"></i>
                    </Link>
                  </li>
                  <li className="page_menu_item">
                    <Link to="/">
                      Register<i className="fa fa-user-circle"></i>
                    </Link>
                  </li>
                  <li className="page_menu_item">
                    <Link to="/">
                      Signin<i className="fa fa-user-o"></i>
                    </Link>
                  </li>
                </ul>

                <div className="menu_contact">
                  <div className="menu_contact_item">
                    <div className="menu_contact_icon">
                      <i className="fa fa-phone text-white"></i>
                    </div>
                    +38 068 005 3570
                  </div>
                  <div className="menu_contact_item">
                    <div className="menu_contact_icon">
                      <i className="fa fa-envelope text-white"></i>
                    </div>
                    <a href="mailto:fastsales@gmail.com">fastsales@gmail.com</a>
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

export default Menu;
