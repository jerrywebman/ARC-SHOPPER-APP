import React from 'react'
import {Link} from 'react-router-dom'
const Hero = () => {
  return (
    <>
      <div className="container px-xl-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-sm-12">
            <div className="col-10 bg-green">
              <h1 className="display-6 fw-bold mt-5 text-white mb-3">Groceries & Healthy
 Food</h1>
              <p className="lead text-light">
                We Sale up to <button className="btn btn-warning">30% OFF</button>
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <Link to="/sProduct" className="d-block btn btn-shop mb-2" data-abc="true">
                      Shop Now &nbsp; <i className="fa fa-arrow-right text-success"></i>
                  </Link>
                  
              </div>
            </div>
          </div>
          <div className="col-lg-4 row justify-content-center align-items-center col-sm-12">
                <div className="product-offer mt-3 mb-30" style={{height: "200px"}}>
                    <img className="img-fluid" src="/img/product-1.jpg" alt="" />
                    <div className="offer-text">
                        <h6 className="text-white text-uppercase">Summer Sale</h6>
                        <h3 className="text-white mb-3">75% OFF</h3>
                        <a href="" className="btn btn-warning">Shop Now</a>
                    </div>
                </div>
                <div className="product-offer mt-3 mb-30" style={{height: "200px"}}>
                    <img className="img-fluid" src="/img/product-2.jpg" alt="" />
                    <div className="offer-text">
                        <h6 className="text-white text-uppercase">Best Deal</h6>
                        <h3 className="text-white text-center mb-3">Special Products Deal of the Month</h3>
                        <a href="" className="btn btn-warning">Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="container-fluid mt-5">
        <div className="container pt-5 shadow">
        <div className="row px-xl-5 pb-3">
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center bg-light mb-4" style={{padding: "30px"}}>
                    <i className="fa fa-shipping-fast text-success fw-bold m-0 mr-2"></i> &nbsp;
                    <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
                    
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center bg-light mb-4" style={{padding: "30px"}}>
                    <i className="fa fa-headphones fw-bold text-success m-0 mr-3"></i> &nbsp;
                    <h5 className="font-weight-semi-bold m-0">Customer Support 24/7</h5>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center bg-light mb-4" style={{padding: "30px"}}>
                    <i className="fas fa-exchange-alt fw-bold text-success m-0 mr-3"></i> &nbsp;
                    <h5 className="font-weight-semi-bold m-0">100% Secure Payment</h5>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center bg-light mb-4" style={{padding: "30px"}}>
                    <i className="fa fa-cube fw-bold text-success m-0 mr-3"></i> &nbsp;
                    <h5 className="font-weight-semi-bold m-0">Money-Back Guarantee</h5>
                </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Hero