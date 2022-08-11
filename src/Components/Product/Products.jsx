import React from 'react'
import {Link} from 'react-router-dom'

const Products = () => {
  return (
    <>
      <div className="container px-xl-5 mt-5">
        <div className="row d-flex justify-content-between align-items-center mt-5">
          <h2 className="text-start col-6">Popular Products</h2>
          <div className="col-6 text-end">
          <Link to="/products" className='text-success'>
            View All <i className="fa fa-arrow-right text-success"></i>
          </Link>
          </div>
        </div>
        <div className="row mt-4 g-4">
          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="product-item">
                  <div className="position-relative bg-light overflow-hidden">
                      <img className="img-fluid w-100" src="img/product-1.jpg" alt="" />
                      <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                  </div>
                  <div className="text-center p-4">
                      <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                      <span className="text-success me-1">$19.00</span>
                      <span className="text-body text-decoration-line-through">$29.00</span>
                  </div>
                  <div className="d-flex border-top">
                      <small className="w-50 text-center border-end py-2">
                          <a className="text-body" href=""><i className="fa fa-eye text-success me-2"></i>View detail</a>
                      </small>
                      <small className="w-50 text-center py-2">
                          <a className="text-body" href=""><i className="fa fa-shopping-bag text-success me-2"></i>Add to cart</a>
                      </small>
                  </div>
              </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="product-item">
                  <div className="position-relative bg-light overflow-hidden">
                      <img className="img-fluid w-100" src="img/product-2.jpg" alt="" />
                      <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                  </div>
                  <div className="text-center p-4">
                      <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                      <span className="text-success me-1">$19.00</span>
                      <span className="text-body text-decoration-line-through">$29.00</span>
                  </div>
                  <div className="d-flex border-top">
                      <small className="w-50 text-center border-end py-2">
                          <a className="text-body" href=""><i className="fa fa-eye text-success me-2"></i>View detail</a>
                      </small>
                      <small className="w-50 text-center py-2">
                          <a className="text-body" href=""><i className="fa fa-shopping-bag text-success me-2"></i>Add to cart</a>
                      </small>
                  </div>
              </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="product-item">
                  <div className="position-relative bg-light overflow-hidden">
                      <img className="img-fluid w-100" src="img/product-3.jpg" alt="" />
                      <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                  </div>
                  <div className="text-center p-4">
                      <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                      <span className="text-success me-1">$19.00</span>
                      <span className="text-body text-decoration-line-through">$29.00</span>
                  </div>
                  <div className="d-flex border-top">
                      <small className="w-50 text-center border-end py-2">
                          <a className="text-body" href=""><i className="fa fa-eye text-success me-2"></i>View detail</a>
                      </small>
                      <small className="w-50 text-center py-2">
                          <a className="text-body" href=""><i className="fa fa-shopping-bag text-success me-2"></i>Add to cart</a>
                      </small>
                  </div>
              </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="product-item">
                  <div className="position-relative bg-light overflow-hidden">
                      <img className="img-fluid w-100" src="img/product-4.jpg" alt="" />
                      <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                  </div>
                  <div className="text-center p-4">
                      <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                      <span className="text-success me-1">$19.00</span>
                      <span className="text-body text-decoration-line-through">$29.00</span>
                  </div>
                  <div className="d-flex border-top">
                      <small className="w-50 text-center border-end py-2">
                          <a className="text-body" href=""><i className="fa fa-eye text-success me-2"></i>View detail</a>
                      </small>
                      <small className="w-50 text-center py-2">
                          <a className="text-body" href=""><i className="fa fa-shopping-bag text-success me-2"></i>Add to cart</a>
                      </small>
                  </div>
              </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="product-item">
                  <div className="position-relative bg-light overflow-hidden">
                      <img className="img-fluid w-100" src="img/product-5.jpg" alt="" />
                      <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                  </div>
                  <div className="text-center p-4">
                      <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                      <span className="text-success me-1">$19.00</span>
                      <span className="text-body text-decoration-line-through">$29.00</span>
                  </div>
                  <div className="d-flex border-top">
                      <small className="w-50 text-center border-end py-2">
                          <a className="text-body" href=""><i className="fa fa-eye text-success me-2"></i>View detail</a>
                      </small>
                      <small className="w-50 text-center py-2">
                          <a className="text-body" href=""><i className="fa fa-shopping-bag text-success me-2"></i>Add to cart</a>
                      </small>
                  </div>
              </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="product-item">
                  <div className="position-relative bg-light overflow-hidden">
                      <img className="img-fluid w-100" src="img/product-6.jpg" alt="" />
                      <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                  </div>
                  <div className="text-center p-4">
                      <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                      <span className="text-success me-1">$19.00</span>
                      <span className="text-body text-decoration-line-through">$29.00</span>
                  </div>
                  <div className="d-flex border-top">
                      <small className="w-50 text-center border-end py-2">
                          <a className="text-body" href=""><i className="fa fa-eye text-success me-2"></i>View detail</a>
                      </small>
                      <small className="w-50 text-center py-2">
                          <a className="text-body" href=""><i className="fa fa-shopping-bag text-success me-2"></i>Add to cart</a>
                      </small>
                  </div>
              </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="product-item">
                  <div className="position-relative bg-light overflow-hidden">
                      <img className="img-fluid w-100" src="img/product-7.jpg" alt="" />
                      <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                  </div>
                  <div className="text-center p-4">
                      <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                      <span className="text-success me-1">$19.00</span>
                      <span className="text-body text-decoration-line-through">$29.00</span>
                  </div>
                  <div className="d-flex border-top">
                      <small className="w-50 text-center border-end py-2">
                          <a className="text-body" href=""><i className="fa fa-eye text-success me-2"></i>View detail</a>
                      </small>
                      <small className="w-50 text-center py-2">
                          <a className="text-body" href=""><i className="fa fa-shopping-bag text-success me-2"></i>Add to cart</a>
                      </small>
                  </div>
              </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="product-item">
                  <div className="position-relative bg-light overflow-hidden">
                      <img className="img-fluid w-100" src="img/product-8.jpg" alt="" />
                      <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                  </div>
                  <div className="text-center p-4">
                      <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                      <span className="text-success me-1">$19.00</span>
                      <span className="text-body text-decoration-line-through">$29.00</span>
                  </div>
                  <div className="d-flex border-top">
                      <small className="w-50 text-center border-end py-2">
                          <a className="text-body" href=""><i className="fa fa-eye text-success me-2"></i>View detail</a>
                      </small>
                      <small className="w-50 text-center py-2">
                          <a className="text-body" href=""><i className="fa fa-shopping-bag text-success me-2"></i>Add to cart</a>
                      </small>
                  </div>
              </div>
          </div>
          {/* <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
            <Link to="/shop" className="btn btn-success rounded-pill py-3 px-5">Browse More Products</Link>
          </div> */}
        </div>
      </div>

      <div className="container-fluid pt-5 mt-5 pb-3">
        <div className="row px-xl-5">
            <div className="col-md-4 mt-3">
                <div className="product-offer mb-30" style={{height: "300px"}}>
                    <img className="img-fluid" src="img/product-5.jpg" alt="" />
                    <div className="offer-text">
                        <h6 className="text-white text-uppercase">Best Deals</h6>
                        <h3 className="text-white mb-3">Sale of the Month</h3>
                        <a href="" className="btn btn-warning">Shop Now</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mt-3">
                <div className="product-offer mb-30" style={{height: "300px"}}>
                    <img className="img-fluid" src="img/product-4.jpg" alt="" />
                    <div className="offer-text">
                        <h6 className="text-white text-uppercase">85% Fat Free</h6>
                        <h3 className="text-white mb-3">Low-Fat Meat</h3>
                        <p className="text-light">Started at <span className='text-warning'>$79.99</span></p>
                        <a href="" className="btn btn-warning">Shop Now</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mt-3">
                <div className="product-offer mb-30" style={{height: "300px"}}>
                    <img className="img-fluid" src="img/product-6.jpg" alt="" />
                    <div className="offer-text">
                        <h6 className="text-white text-uppercase">Summer Sale</h6>
                        <h3 className="text-white mb-3">100% Fresh Fruit</h3>
                        <p className="text-light">Up to <span className="btn btn-dark">64% OFF</span></p>
                        <a href="" className="btn btn-warning">Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Products