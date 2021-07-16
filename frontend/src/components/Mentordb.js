import React from 'react'
import c4 from '../assets/mentorillus.svg';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
function Mentordb() {
    return (
        <div><Navbar />
            <div className="container " style={{ marginTop: "25px" }}>
                <h1 className="text-black text-center" style={{ color: "#fff" }}>Welcome to your dashboard!!</h1>
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6">
                        <div className="card" style={{
                            width: "70%", background: "#6190E8",
                            background: "-webkit-linear-gradient(to right, #A7BFE8, #6190E8)", background: "linear-gradient(to right, #A7BFE8, #6190E8)"
                        }}>
                            <img src={c4} className="center card-img-top" alt="..." style={{ width: "50%", marginTop: "25px" }}></img>
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: "black", fontSize: "40px", fontFamily: "sans-serif" }}>About your Mentee!!</h5>
                            </div>
                            <ul className="list-group list-group-flush" style={{ color: "black", fontSize: "20px", fontFamily: "sans-serif" }}>
                                <li className="list-group-item" style={{
                                    background: "#6190E8",
                                    background: "-webkit-linear-gradient(to right, #A7BFE8, #6190E8)", background: "linear-gradient(to right, #A7BFE8, #6190E8)"
                                }}>Name</li>
                                <li className="list-group-item" style={{
                                    background: "#6190E8",
                                    background: "-webkit-linear-gradient(to right, #A7BFE8, #6190E8)", background: "linear-gradient(to right, #A7BFE8, #6190E8)"
                                }}>Gender</li>
                                <li className="list-group-item" style={{
                                    background: "#6190E8",
                                    background: "-webkit-linear-gradient(to right, #A7BFE8, #6190E8)", background: "linear-gradient(to right, #A7BFE8, #6190E8)"
                                }}>Interest</li>
                            </ul>
                            <div className="card-body">
                                <a href="fbmentor"><button href="fbmentor" className="btn btn-small btn btn-outline-success" style={{ color: "green" }}>Feedback Form</button></a>
                                <button href="#" className="btn btn-small btn btn-outline-primary" style={{ color: "blue", float: "right" }}>Upload Content</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6">
                        <div className="card" style={{
                            width: "70%", background: "#6190E8",
                            background: "-webkit-linear-gradient(to right, #A7BFE8, #6190E8)", background: "linear-gradient(to right, #A7BFE8, #6190E8)"
                        }}>
                            <img src={c4} className="center card-img-top" alt="..." style={{ width: "50%", marginTop: "25px" }}></img>
                            <div className="card-body">
                                <h5 className="card-title " style={{ color: "black", fontSize: "40px", fontFamily: "sans-serif" }}>About Your Mentee!!</h5>
                            </div>
                            <ul className="list-group list-group-flush" style={{ color: "black", fontSize: "20px", fontFamily: "sans-serif" }} >
                                <li className="list-group-item" style={{
                                    background: "#6190E8",
                                    background: "-webkit-linear-gradient(to right, #A7BFE8, #6190E8)", background: "linear-gradient(to right, #A7BFE8, #6190E8)"
                                }} >Name</li>
                                <li className="list-group-item" style={{
                                    background: "#6190E8",
                                    background: "-webkit-linear-gradient(to right, #A7BFE8, #6190E8)", background: "linear-gradient(to right, #A7BFE8, #6190E8)"
                                }}>Gender</li>
                                <li className="list-group-item" style={{
                                    background: "#6190E8",
                                    background: "-webkit-linear-gradient(to right, #A7BFE8, #6190E8)", background: "linear-gradient(to right, #A7BFE8, #6190E8)"
                                }}>Interest</li>
                            </ul>
                            <div className="card-body">
                                <a href="fbmentor"><button href="fbmentor" className="btn btn-small btn btn-outline-success" style={{ color: "green" }}>Feedback Form</button></a>
                                <button href="#" className="btn btn-small btn btn-outline-primary" style={{ color: "blue", float: "right" }}>Upload Content</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mentordb
