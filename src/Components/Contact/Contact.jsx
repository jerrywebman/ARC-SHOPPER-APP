import React from 'react'

const Contact = () => {
  return (
    <>
        <div className="container-xxl py-5">
        <div className="container">
            <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "500px"}}>
                <h1 className="display-5 mb-3">Contact Us</h1>
            </div>
            <div className="row g-5 justify-content-center">
                <div className="col-lg-5 col-md-12 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="bg-success text-white d-flex flex-column justify-content-center h-100 p-5">
                        <h5 className="text-white">Call Us</h5>
                        <p className="mb-2 text-light"><i className="fa fa-phone-alt me-3"></i>+234 814 000 2718</p>
                        <p className="mb-5 text-light"><i className="fa fa-phone-alt me-3"></i>+234 818 521 9383</p>
                        <h5 className="text-white">Email Us</h5>
                        <p className="mb-5 text-light"><i className="fa fa-envelope me-3"></i>info@allroundcare.ng</p>
                        <h5 className="text-white">Office Address</h5>
                        <p className="mb-5 text-light"><i className="fa fa-map-marker-alt me-3"></i>24, Oyenuga Street, off Omilani Aguda Surulere, Lagos</p>
                        <h5 className="text-white">Follow Us</h5>
                        <div className="d-flex pt-2">
                            <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-square btn-outline-light rounded-circle me-0" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                <p>Kindly fill the form below.</p>
                    <form>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                    <label for="name">Your Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                    <label for="email">Your Email</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                    <label for="subject">Subject</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: "200px"}}></textarea>
                                    <label for="message">Message</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-success rounded-pill py-3 px-5" type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact