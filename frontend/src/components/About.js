import React from 'react'
import './About.css'
import img1 from '../assets/ab-2.jpg';
import img2 from '../assets/ab-1.jpg';
import img3 from '../assets/claylab2.png';
import c1 from '../assets/c-1.jpg';
import c2 from '../assets/c-2.jpg';
import c3 from '../assets/c-3.jpg';
import c4 from '../assets/af.png';
function About() {
    return (
        <div>
            <div className="about-section justify-content">
                <img src={c4} style={{ marginBottom: "25px" }}></img>

                <p style={{ fontFamily: "sans-serif", fontSize: "20px" }}>Claylab Education Foundation is a Non-Profit Organisation (A section 8 company) working towards providing quality education to our children, the leaders of the future, during their higher secondary grades.

                    We provide after school support to high school students from less privileged backgrounds at a very affordable price. We, not only provide academic support, but also support students towards development of 21st century skills like Critical thinking, Collaboration, Ownership, Resilience and Empathy. All our structures are online and students from any part of the country can join us.
                </p>
                <a href="https://claylab.education/about-claylab/" style={{ textDecoration: "none", color: "yellowgreen" }}>More about CLAYLAB</a>
                <p style={{ marginTop: "30px", fontFamily: "sans-serif", fontSize: "20px" }}>We believe in continuous <span style={{ color: "blue" }}>learning</span> and therefore would like to learn from you as well.

                </p>
            </div>

            <h2 className="text-center">Our Works</h2>
            <div className="container justify-content" style={{ maxheight: "250px" }}>
                <div className="row">
                    <div className="column">
                        <div className="card">
                            <img src={c2} alt="Jane" style={{ width: "100%" }}></img>
                            <div className="container">
                                <h2>Mentorship</h2>
                                <p>Majority of our students are first generation graduates and therefore, they don’t know much about the professional world.
                                    They can have questions as simple as- ‘What do engineers do?’ in mind.


                                    Your time and guidance can help them to become the change they want to see in the world.

                                    Be a ‘Bhaiyaa’ or ‘Didi’ for our growing stars.</p>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <img src={c1} alt="Mike" style={{ width: "100%" }}></img>
                            <div className="container">
                                <h2>Fellowship</h2>
                                <p>We believe that we learn the best when we teach someone. Most of us have felt the need to provide application based education to children. Claylab finally gives you the chance to become a teacher from the comfort of your home and at the same time, bring a positive change , by helping the  students.</p>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <img src={c3} alt="John" style={{ width: "100%" }}></img>
                            <div className="container">
                                <h2>Donate</h2>
                                <p>To reach out to all the students, we need your help. And the good news is that you can sponsor a ward for as low as Rs 1000 per month! We don’t believe in passive donation.
                                    Donors can play a very important part in the development of our students. Therefore we invite you to be the part of Claylab family through Claylab Sponsathon.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-section justify-content" style={{ backgroundImage: `url(${img2})`, paddingTop: "50px" }}>
                <p style={{ color: "black", fontFamily: "sans-serif", fontSize: "20px" }}>We run these structures with the help of Claylab Fellows who join us for a year to provide academic support to students and Claylab Mentors who join us and provide one to one personalised support to students just like an elder bhaiyaa or didi. We believe in value based education a lot and therefore, we deliver all of structures with a lot of affection for our students.</p>
            </div>
            <div className="about-section justify-content" style={{ backgroundImage: `url(${img1})`, paddingTop: "50px" }}>
                <p style={{ color: "black", fontFamily: "sans-serif", fontSize: "20px" }}>To reach out to all students, we need your help. And the good news is that you can sponsor a ward for as low as Rs 1000 per month! We don’t believe in passive donation. Donors can play a very important part in the development of our students. Therefore, rather than asking for one time donation, we invite you to be the part of Claylab family through <span style={{ color: "greenyellow", fontsize: "25px" }}> Claylab Sponsathon.</span></p>
            </div>
        </div>
    )
}

export default About