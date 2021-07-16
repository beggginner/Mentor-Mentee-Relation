import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import './RegMentor.css'
function RegMentor() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [locality, setLocality] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [language, setLanguage] = useState("");
    const [schoolname, setSchoolname] = useState("");
    const [schoolcity, setSchoolCity] = useState("");
    const [schoolstate, setSchoolState] = useState("");
    const [gender, setGender] = useState("");
    const [mentoredBefore, setMentoredBefore] = useState("");
    const [qualification, setQualification] = useState("");
    const [occupation, setOccupation] = useState("");
    const [expertise, setExpertise] = useState("");
    const [dislike, setDislike] = useState("");
    const [skills, setSkills] = useState("");
    const [describeyourself, setDescribeyourself] = useState("");
    const [extracurricular, setExtracurricular] = useState("");
    const [important, setImportant] = useState("");
    const [agree, setAgree] = useState("");

    const submitform = () => {

        const mentorData = (
            {
                name: name,
                email: email,
                password: password,
                phone: phone,
                locality: locality,
                city: city,
                state: state,
                language: language,
                schoolname: schoolname,
                schoolcity: schoolcity,
                schoolstate: schoolstate,
                gender: gender,
                mentoredBefore: mentoredBefore,
                qualification: qualification,
                occupation: occupation,
                expertise: expertise,
                dislike: dislike,
                skills: skills,
                describeyourself: describeyourself,
                extracurricular: extracurricular,
                important: important,
                agree: agree
            });

        console.log(mentorData);

        axios.post('http://localhost:5000/mentorData', mentorData)
            .then(res => console.log(res.data));

    }


    return (
        <div className="registration-form1"
            style={
                {
                    width: "100%", backgroundColor: "#3a3b70", fontFamily: "'Montserrat', sans-serif",
                    color: "white", marginTop: "25px"
                }}>
            <h3>Mentor Registration</h3>
            <form onSubmit={submitform}>
                <div className="question1">
                    <p>Enter your name</p>
                    <input type="text" value={name} autoFocus required className="input" onChange={(e) => setName(e.target.value)}></input>
                </div>

                <div className="question1">
                    <p>Enter your Email address</p>
                    <input type="email" value={email} autoFocus required className="input" onChange={(e) => setEmail(e.target.value)}></input>
                </div>

                <div className="question1">
                    <p>Create a password</p>
                    <input type="text" value={password} autoFocus required className="input" onChange={(e) => setPassword(e.target.value)}></input>
                </div>

                <div className="question1">
                    <p>Contact Number</p>
                    <input type="number" value={phone} autoFocus required className="input" onChange={(e) => setPhone(e.target.value)}></input>
                </div>

                <div className="question1">
                    <p>What is your current location?</p>

                    <label>Locality</label>
                    <input type="text" value={locality} autoFocus required className="input" onChange={(e) => setLocality(e.target.value)}></input>

                    <label>City</label>
                    <input type="text" value={city} autoFocus required className="input" onChange={(e) => setCity(e.target.value)}></input>

                    <label>State</label>
                    <input type="text" value={state} autoFocus required className="input" onChange={(e) => setState(e.target.value)}></input>
                </div>

                <div className="question1">
                    <p>Languages you are comfortable with:</p>
                    <input type="text" value={language} autoFocus required className="input" onChange={(e) => setLanguage(e.target.value)}></input>
                </div>

                <div className="question1">
                    <p>Which school did you go?</p>

                    <label>Name</label>
                    <input type="text" value={schoolname} autoFocus required className="input" onChange={(e) => setSchoolname(e.target.value)}></input>

                    <label>City</label>
                    <input type="text" value={schoolcity} autoFocus required className="input" onChange={(e) => setSchoolCity(e.target.value)}></input>

                    <label>State</label>
                    <input type="text" value={schoolstate} autoFocus required className="input" onChange={(e) => setSchoolState(e.target.value)}></input>

                </div>

                <div className="question1">
                    <p>Gender:</p>
                    <select className="select1" onChange={(e) => setGender(e.target.value)}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </select>
                </div>

                <div className="question1">
                    <p>Have you mentored before?</p>
                    <input type="text" value={mentoredBefore} autoFocus required onChange={(e) => setMentoredBefore(e.target.value)}></input>
                </div>

                <div className="question1">
                    <p>Highest Qualification</p>
                    <select className="select1" onChange={(e) => setQualification(e.target.value)}>
                        <option value="School">School</option>
                        <option value="Graduate">Graduate</option>
                        <option value="Post graduate diploma holder">Post graduate diploma holder</option>
                        <option value="Post graduate degree holder (Dual bachelors)">Post graduate degree holder (Dual bachelors)</option>
                        <option value="Master's degree">Master's degree</option>
                        <option value="PHD">PHD</option>
                    </select>
                </div>

                <div className="question1">
                    <p>Current Occupation</p>
                    <input type="text" value={occupation} autoFocus required onChange={(e) => setOccupation(e.target.value)}></input>

                </div>

                <div className="question1">
                    <p>Domain Expertise</p>
                    <input type="text" value={expertise} autoFocus required onChange={(e) => setExpertise(e.target.value)}></input>
                </div>

                <div className="question1">
                    <p>In your high school days, which subject you disliked the most?</p>
                    <input type="text" value={dislike} autoFocus required onChange={(e) => setDislike(e.target.value)}></input>
                </div>

                <div className="question1">
                    <p>Describe your studying skills.</p>
                    <select className="select1" onChange={(e) => setSkills(e.target.value)}>
                        <option value="I procrastinate until crunch time.">I procrastinate until crunch time.</option>
                        <option value="I read something here and there, I am usually familiar with a lot.">I read something here and there, I am usually familiar with a lot.</option>
                        <option value="I have a strict schedule, and plenty of flash cards.">I have a strict schedule, and plenty of flash cards.</option>
                        <option value="I study hard, and then reward myself with something relaxing">I study hard, and then reward myself with something relaxing</option>
                    </select>
                </div>

                <div className="question1">
                    <p>How do you describe yourself?</p>
                    <select className="select1" onChange={(e) => setDescribeyourself(e.target.value)}>
                        <option value="Hardworking">Hardworking </option>
                        <option value="Creative">Creative</option>
                        <option value="Sassy">Sassy</option>
                        <option value="Strong willed">Strong willed</option>
                        <option value="Problem Solver">Problem Solver</option>
                    </select>
                </div>

                <div className="question1">
                    <p>Which extra-curricular activity you enjoyed the most during your school days</p>
                    <select className="select1" onChange={(e) => setExtracurricular(e.target.value)}>
                        <option value="Art & Craft">Art & Craft</option>
                        <option value="Music & Dance">Music & Dance</option>
                        <option value="Sports Activities">Sports Activities</option>
                        <option value="Theatre and Drama">Theatre and Drama</option>
                        <option value="Poetry & Literature">Poetry & Literature</option>
                    </select>
                </div>

                <div className="question1">
                    <p>What is most important to you?</p>
                    <select className="select1" onChange={(e) => setImportant(e.target.value)}>
                        <option value="Trusting your gut.">Trusting your gut.</option>
                        <option value="Knowledge is power!">Knowledge is power!</option>
                        <option value="Getting through the day.">Getting through the day.</option>
                        <option value="Being someone, people can depend on.">Being someone, people can depend on.</option>
                    </select>
                </div>

                <div className="question1">
                    <p>Which do you agree with most:  the first week of school is a time to:</p>
                    <select className="select1" onChange={(e) => setAgree(e.target.value)}>
                        <option value="Allow kids to get to know you better without requiring a lot of work.">Allow kids to get to know you better without requiring a lot of work.</option>
                        <option value="Teach the students your rules and enforce them strictly.">Teach the students your rules and enforce them strictly.</option>
                        <option value="Get to know each student while testing them to find their level of learning">Get to know each student while testing them to find their level of learning</option>
                        <option value="Jump right in and get started on the curriculum.">Jump right in and get started on the curriculum.</option>
                    </select>
                </div>
                <div className="form-group">
                    <input type="submit" value="Submitting mentor details" className="btn btn-primary" />
                </div>

            </form>
        </div>

    )
}

export default RegMentor
