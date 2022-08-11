import React from 'react'
import {Link} from 'react-router-dom'

const Header = ({title}) => {
  return (
    <>
        <section className="head">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="page-banner-cont">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mt-5">
                                    <li className="breadcrumb-item"><Link to="/home"><i className="fa fa-home"></i></Link></li>
                                    <li className="breadcrumb-item"><Link to="/home">Account</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">{title}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Header