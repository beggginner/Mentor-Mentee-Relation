import React from 'react'
import Navbar from './Navbar'
import img2 from '../assets/student2.svg';
import img1 from '../assets/mentor.svg';
function Dashboard() {
    return (
        <div>
            <Navbar />
            <div className="container" style={{ marginTop: "90px" }}>
                <div className="row gy-4">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="card" style={{ width: "100%", background: "#6190E8", background: " -webkit-linear-gradient(to right, #A7BFE8, #6190E8)", background: "linear-gradient(to right, #A7BFE8, #6190E8)", border: "none" }}>
                            <div className="card-heading"><h1 style={{ textAlign: "center", fontFamily: "'Montserrat', sans-serif", marginTop: "25px" }}> Mentor</h1></div>
                            <a href="mentordb"><img src={img1} style={{ width: "75%", height: "75%", marginLeft: "20px", marginBottom: "25px" }} className="card-img-top" alt="student"></img></a>

                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="card" style={
                            { width: "100%", background: "#6190E8", background: " -webkit-linear-gradient(to right, #A7BFE8, #6190E8)", background: "linear-gradient(to right, #A7BFE8, #6190E8)", border: "none" }}>
                            <div className="card-heading"><h1 style={{ textAlign: "center", fontFamily: "'Montserrat', sans-serif", marginTop: "25px" }}>Student</h1></div>
                            <a href="menteedb"><img src={img2} style={{ width: "80%", height: "80%", marginLeft: "20px", marginBottom: "25px" }} className="card-img-top" alt="student"></img></a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
