import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div>
            <div className='container-fluid'>
                <div className="card">
                    <div className="heading text-center">
                        <div className="head1">CLAY LAB</div>
                        <p className="bdr"></p>
                    </div>
                    <div className="card-body">
                        <div className="row m-0 pt-5">
                            <div className="card col-12 col-md-3">
                                <div className="card-content justify-content">
                                    <div className="card-title text-light " style={{ fontSize: "20px", fontFamily: "sans-serif" }}> CLAYLAB EDUCATION FOUNDATION</div>
                                    <a href="https://wordpress.com/?ref=footer_custom_powered" style={{ textDecoration: "none", color: "yellowgreen" }}><small>Powered by WordPress.com</small></a>

                                </div>
                            </div>
                            <div className="card col-12 col-md-3">
                                <div className="card-content hustify-content" >
                                    <div className="card-title" style={{ fontSize: "20px", fontFamily: "sans-serif" }}> Who all are eligible to join Claylab Fellowship?</div>
                                    <p><small>Any graduate or someone who will be able to finish his/her graduation before 30th June, is eligible for Claylab Fellowship.</small></p>
                                </div>
                            </div>
                            <div className="card col-12 col-md-3">
                                <div className="card-content justify-content">
                                    <div className="card-title" style={{ fontSize: "20px", fontFamily: "sans-serif" }}> Which subject will a Fellow teach?</div>
                                    <p><small>Our Fellows teach all the core subjects of Science, Commerce and Arts streams. One Fellow applies for 1 subject only. e.g. You can take responsibility of Physics for 11th grade.Share this:n</small></p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="card-footer row m-0">

                        <div>
                            <p> <small className="follow-text">FOLLOW US ON SOCIAL MEDIA</small> <label className="footer-right">
                                <a href="#" style={{ textDecoration: "none", color: "white", fontSize: "20px" }}><i className="fab fa-instagram"></i></a>
                                <a href="#" style={{ textDecoration: "none", color: "white", fontSize: "20px" }}> <i className="fab fa-facebook-square"></i></a>
                                <a href="#" style={{ textDecoration: "none", color: "white", fontSize: "20px" }}> <i className="fab fa-linkedin"></i></a>
                                <a href="#" style={{ textDecoration: "none", color: "white", fontSize: "20px" }}> <i className="fab fa-twitter-square"></i></a>
                            </label> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer