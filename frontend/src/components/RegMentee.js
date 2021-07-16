import React, { Component } from 'react';
import axios from 'axios';
import './RegMentee.css';

export default class RegMentee extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeGuardianName = this.onChangeGuardianName.bind(this);
        this.onChangeGuardianNumber = this.onChangeGuardianNumber.bind(this);
        this.onChangeLocality = this.onChangeLocality.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
        this.onChangeLanguage = this.onChangeLanguage.bind(this);
        this.onChangeGenPref = this.onChangeGenPref.bind(this);
        this.onChangeSchoolName = this.onChangeSchoolName.bind(this);
        this.onChangeSchoolCity = this.onChangeSchoolCity.bind(this);
        this.onChangeSchoolState = this.onChangeSchoolState.bind(this);
        this.onChangeAspireTobe = this.onChangeAspireTobe.bind(this);
        this.onChangeSubjectInterest = this.onChangeSubjectInterest.bind(this);
        this.onChangeDesStudy = this.onChangeDesStudy.bind(this);
        this.onChangeDesYourself = this.onChangeDesYourself.bind(this);
        this.onChangeExtraCurricular = this.onChangeExtraCurricular.bind(this);
        this.onChangeDesImportant = this.onChangeDesImportant.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            email: '',
            password: '',
            guardianName: '',
            guardinaNumber: 0,
            locality: '',
            city: '',
            state: '',
            language: '',
            genPref: "",
            schoolName: '',
            schoolCity: '',
            schoolState: '',
            aspireTobe: '',
            subjectInterest: "",
            desStudy: "",
            desYourself: "",
            extraCurricular: "",
            desImportant: ""
        }

    }
    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }
    onChangeGuardianName(e) {
        this.setState({
            guardianName: e.target.value
        })
    }
    onChangeGuardianNumber(e) {
        this.setState({
            guardianNumber: e.target.value
        })
    }
    onChangeLocality(e) {
        this.setState({
            locality: e.target.value
        })
    }
    onChangeCity(e) {
        this.setState({
            city: e.target.value
        })
    }
    onChangeState(e) {
        this.setState({
            state: e.target.value
        })
    }

    onChangeLanguage(e) {
        this.setState({
            language: e.target.value
        })
    }
    onChangeGenPref(e) {
        this.setState({
            genPref: e.target.value
        })
    }
    onChangeSchoolName(e) {
        this.setState({
            schoolName: e.target.value
        })
    }
    onChangeSchoolCity(e) {
        this.setState({
            schoolCity: e.target.value
        })
    }
    onChangeSchoolState(e) {
        this.setState({
            schoolState: e.target.value
        })
    }
    onChangeAspireTobe(e) {
        this.setState({
            aspireTobe: e.target.value
        })
    }
    onChangeSubjectInterest(e) {
        this.setState({
            subjectInterest: e.target.value
        })
    }
    onChangeDesStudy(e) {
        this.setState({
            desStudy: e.target.value
        })
    }
    onChangeDesYourself(e) {
        this.setState({
            desYourself: e.target.value
        })
    }
    onChangeExtraCurricular(e) {
        this.setState({
            extraCurricular: e.target.value
        })
    }
    onChangeDesImportant(e) {
        this.setState({
            desImportant: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();

        const menteeData = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            guardianName: this.state.guardianName,
            guardianNumber: this.state.guardianNumber,
            locality: this.state.locality,
            city: this.state.city,
            state: this.state.state,
            language: this.state.language,
            genPref: this.state.genPref,
            schoolName: this.state.schoolName,
            schoolCity: this.state.schoolCity,
            schoolState: this.state.schoolState,
            aspireTobe: this.state.aspireTobe,
            subjectInterest: this.state.subjectInterest,
            desStudy: this.state.desStudy,
            desYourself: this.state.desYourself,
            extraCurricular: this.state.extraCurricular,
            desImportant: this.state.desImportant

        }

        console.log(menteeData);

        axios.post('http://localhost:5000/menteeData', menteeData)
            .then(res => console.log(res.data));

    }



    render() {

        return (
            <div className="reg-form"
                style={
                    {
                        width: "100%", backgroundColor: "#3a3b70", fontFamily: "'Montserrat', sans-serif",
                        color: "white", marginTop: "25px"
                    }}>
                <h3> Mentee registration page</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="question1">
                        <p>What is your name?</p>
                        <label>Enter your name</label>
                        <input type="text" autoFocus required
                            value={this.state.name}
                            onChange={this.onChangeName} className="input" />


                    </div>
                    <div className="question1">
                        <p>What is your email address?</p>
                        <label>Enter your email address</label>
                        <input type="email" autoFocus required
                            value={this.state.email}
                            onChange={this.onChangeEmail}

                            className="input" ></input>
                    </div>
                    <div className="question1">
                        <p>Choose you're password</p>
                        <label>Enter your passoword</label>
                        <input type="text" autoFocus required
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            className="input"
                        ></input>
                    </div>
                    <div className="question1">
                        <p>What is your guardian name?</p>
                        <label>Enter your guardian name</label>
                        <input type="text" autoFocus required
                            value={this.state.guardianName}
                            onChange={this.onChangeGuardianName}
                            className="input"  ></input>
                    </div>
                    <div className="question1">
                        <p>What is your guardian contact number?</p>
                        <label>Enter your guardian contact number</label>
                        <input type="number" autoFocus required
                            value={this.state.guardianNumber}
                            onChange={this.onChangeGuardianNumber}
                            className="input"     ></input>
                    </div>
                    <div className="question1">
                        <p>Where do you stay currently?</p>

                        <label>Locality</label>
                        <input type="text" autoFocus required
                            value={this.state.locality}
                            onChange={this.onChangeLocality}
                            className="input"   ></input>

                        <label>City</label>
                        <input type="text" autoFocus required
                            value={this.state.city}
                            onChange={this.onChangeCity}
                            className="input"   ></input>
                        <label>State</label>
                        <input type="text" autoFocus required
                            value={this.state.State}
                            onChange={this.onChangeState}
                            className="input"   ></input>
                    </div>

                    <div className="question1">
                        <p>Languages you are comfortable with:</p>
                        <input type="text" autoFocus required
                            value={this.state.language}
                            onChange={this.onChangeLanguage}
                            className="input"    ></input>
                    </div>
                    <div className="question1">
                        <p>Preferable Gender of mentor:</p>
                        <select value={this.state.genPref}
                            onChange={this.onChangeGenPref}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="I don’t have any particular gender preference">Others</option>
                        </select>
                    </div>
                    <div className="question1">
                        <p>Which school are you currently enrolled in?</p>

                        <label>Enter your school name</label>
                        <input type="text" autoFocus required
                            value={this.state.schoolName}
                            onChange={this.onChangeSchoolName} className="input"></input>

                        <label>City</label>
                        <input type="text" autoFocus required
                            value={this.state.schoolCity}
                            onChange={this.onChangeSchoolCity} className="input"></input>
                        <label>State</label>
                        <input type="text" autoFocus required
                            value={this.state.schoolState}
                            onChange={this.onChangeSchoolState} className="input"></input>
                    </div>
                    <div className="question1">
                        <p>What do you aspire to become one day?</p>
                        <input type="text" autoFocus required
                            value={this.state.aspireTobe}
                            onChange={this.onChangeAspireTobe} className="input"></input>
                    </div>
                    <div className="question1">
                        <p>Which subject you find most interesting</p>
                        <select value={this.state.subjectInterest}
                            onChange={this.onChangeSubjectInterest}>
                            <option value="Physics"></option>
                            <option value="Chemistry"></option>
                            <option value="Maths"></option>
                            <option value="Biology"></option>
                            <option value="Computer Science"></option>
                            <option value="Social Science"></option>
                            <option value="Literature"></option>
                        </select>

                    </div>

                    <div className="question1">
                        <p>Describe your studying skills.</p>
                        <select
                            value={this.state.desStudy}
                            onChange={this.onChangeDesStudy}>
                            <option value="I procrastinate until crunch time.">I procrastinate until crunch time.</option>
                            <option value="I read something here and there, I am usually familiar with a lot.">I read something here and there, I am usually familiar with a lot.</option>
                            <option value="I have a strict schedule, and plenty of flash cards.">I have a strict schedule, and plenty of flash cards.</option>
                            <option value="I study hard, and then reward myself with something relaxing">I study hard, and then reward myself with something relaxing</option>
                        </select>
                    </div>
                    <div className="question1">
                        <p>How do you describe yourself? </p>
                        <select value={this.state.desYourself}
                            onChange={this.onChangeDesYourself}>
                            <option value="Hardworking">Hardworking</option>
                            <option value="Creative">Creative</option>
                            <option value="Problem Solver">Problem Solver</option>
                            <option value="Laid back">Laid back</option>
                            <option value="Sassy">Sassy</option>
                            <option value="Strong willed">Strong willed</option>
                        </select>
                    </div>
                    <div className="question1">
                        <p>Which extra-curricular activity you enjoy the most?</p>
                        <select value={this.state.extraCurricular}
                            onChange={this.onChangeExtraCurricular}>
                            <option value="Art & Craft">Art & Craft</option>
                            <option value="Music & Dance">Music & Dance</option>
                            <option value="Sports Activities">Sports Activities</option>
                            <option value="Theatre and Drama">Theatre and Drama</option>
                            <option value="Poetry & Literature">Poetry & Literature</option>
                            <option value="Gaming">Gaming</option>
                        </select>
                    </div>
                    <div className="question1">
                        <p>What is most important to you?</p>
                        <select value={this.state.desImportant}
                            onChange={this.onChangeDesImportant}>
                            <option value="Trusting your gut.">Trusting your gut.</option>
                            <option value="Knowledge is power!">Knowledge is power!</option>
                            <option value="Getting through the day.">Getting through the day.</option>
                            <option value="Being someone, people can depend on.">Being someone, people can depend on.</option>
                        </select>
                    </div>
                    <div className="form-group  question1">
                        <input type="submit" value="Submitting mentee details" className="btn btn-primary input" />
                    </div>
                </form>
            </div>
        )
    }

}


