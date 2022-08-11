import React from "react";
import Footer from "../partials/Footer";
import Topbar from "../partials/Topbar";
import Middlebar from "../partials/Middlebar";
import Menu from "../Menu";
import { Link } from "react-router-dom";
import Newsletter from "../Newsletter";
import Header from "../partials/Header";
const SProduct = () => {
  return (
    <>
      <header className="header">
        <Topbar />
        <Middlebar />
        <Menu />
      </header>

      <Header title="PRODUCT NAME" />

      <div className="container pd mb-5">
        <div className="card">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                  <div className="tab-pane active" id="pic-1">
                    <img src="/img/apple.png" />
                  </div>
                  <div className="tab-pane" id="pic-2">
                    <img src="/img/apple.png" />
                  </div>
                  <div className="tab-pane" id="pic-3">
                    <img src="/img/apple.png" />
                  </div>
                  <div className="tab-pane" id="pic-4">
                    <img src="/img/apple.png" />
                  </div>
                  <div className="tab-pane" id="pic-5">
                    <img src="/img/apple.png" />
                  </div>
                </div>
                <ul className="preview-thumbnail nav nav-tabs">
                  <li className="active">
                    <a data-target="#pic-1" data-toggle="tab">
                      <img src="/img/apple.png" />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-2" data-toggle="tab">
                      <img src="/img/apple.png" />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-3" data-toggle="tab">
                      <img src="/img/apple.png" />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-4" data-toggle="tab">
                      <img src="/img/apple.png" />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-5" data-toggle="tab">
                      <img src="/img/apple.png" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="details col-md-6">
                <h3 className="product-title">men's shoes fashion</h3>
                <div className="rating d-flex">
                  <div className="stars">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                  <span className="review-no">41 reviews</span>
                </div>
                <p className="product-description">
                  Suspendisse quos? Tempus cras iure temporibus? Eu laudantium
                  cubilia sem sem! Repudiandae et! Massa senectus enim minim
                  sociosqu delectus posuere.
                </p>
                <h4 className="price">
                  current price: <span>$180</span>
                </h4>
                <p className="vote">
                  <strong>91%</strong> of buyers enjoyed this product!{" "}
                  <strong>(87 votes)</strong>
                </p>
                <h5 className="sizes">
                  sizes:
                  <span className="size" data-toggle="tooltip" title="small">
                    s
                  </span>
                  <span className="size" data-toggle="tooltip" title="medium">
                    m
                  </span>
                  <span className="size" data-toggle="tooltip" title="large">
                    l
                  </span>
                  <span
                    className="size"
                    data-toggle="tooltip"
                    title="xtra large"
                  >
                    xl
                  </span>
                </h5>
                <h5 className="colors">
                  colors:
                  <span
                    className="color orange not-available"
                    data-toggle="tooltip"
                    title="Not In store"
                  ></span>
                  <span className="color green"></span>
                  <span className="color blue"></span>
                </h5>
                <div className="action">
                  <button className="add-to-cart btn btn-default" type="button">
                    add to cart
                  </button>
                  <button className="like btn btn-default" type="button">
                    <span className="fa fa-heart"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-sm-12">
                <p className="text-start">
                  Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet
                  at posuere ac, viverra at mauris. Maecenas tincidunt ligula a
                  sem vestibulum pharetra. Maecenas auctor tortor lacus, nec
                  laoreet nisi porttitor vel. Etiam tincidunt metus vel dui
                  interdum sollicitudin. Mauris sem ante, vestibulum nec orci
                  vitae, aliquam mollis lacus. Sed et condimentum arcu, id
                  molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a
                  convallis. Morbi urna ipsum, placerat quis commodo quis,
                  egestas elementum leo. Donec convallis mollis enim. Aliquam id
                  mi quam. Phasellus nec fringilla elit.
                </p>
                <p>
                  Nulla mauris tellus, feugiat quis pharetra sed, gravida ac
                  dui. Sed iaculis, metus faucibus elementum tincidunt, turpis
                  mi viverra velit, pellentesque tristique neque mi eget nulla.
                  Proin luctus elementum neque et pharetra.
                </p>
                <ul>
                  <li>100 g of fresh leaves provides.</li>
                  <li>Aliquam ac est at augue volutpat elementum.</li>
                  <li>Quisque nec enim eget sapien molestie.</li>
                  <li>Proin convallis odio volutpat finibus posuere.</li>
                </ul>
                <p>
                  Cras et diam maximus, accumsan sapien et, sollicitudin velit.
                  Nulla blandit eros non turpis lobortis iaculis at ut massa.
                </p>
              </div>
              <div className="col-lg-5 col-sm-12">
                <img src="/img/apple.png" alt="apple" />
                <div className="row justify-content-center align-items-center border mt-4 pt-3 pb-3">
                  <div className="col-6 d-flex align-items-center">
                    <i className="fa fa-tag text-success"></i> &nbsp;
                    <div>
                      <h4>64% Discount</h4>
                      <p>Save your 64% money with us</p>
                    </div>
                  </div>
                  <div className="col-6 d-flex align-items-center">
                    <i className="fa fa-leaf text-success"></i> &nbsp;
                    <div>
                      <h4>100% Organic</h4>
                      <p>100% Organic Vegetables</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </>
  );
};

export default SProduct;
