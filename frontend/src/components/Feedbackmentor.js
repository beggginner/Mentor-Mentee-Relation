function Feedbackmentor() {
    return (
        <section className="login">
            <div className="loginContainer">
                <h3 style={{ color: "#fff" }}>Feedback Form</h3>
                <label>Are you happy with progress of student?</label>
                <select>
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="OK">OK</option>
                    <option value="Bad">Bad</option>
                    <option value="Horrible">Horrible</option>
                </select>

                <label> How punctual is the student in joining the scheduled meetings?</label>
                <select>
                    <option value="Always">Always</option>
                    <option value="Mostly">Mostly</option>
                    <option value="Very often">Very often</option>
                    <option value="Not very often">Not very often</option>
                    <option value="Not at all">Not at all</option>
                </select>

                <label> How often the student completes the tasks on time?</label>
                <select>
                    <option value="Always">Always</option>
                    <option value="Mostly">Mostly</option>
                    <option value="Very often">Very often</option>
                    <option value="Not very often">Not very often</option>
                    <option value="Not at all">Not at all</option>
                </select>

                <label> Is he responding in the students approach?</label>
                <select>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>

                <div className="btnContainer">
                    <>
                        <button>Submit</button>
                    </>
                </div>

            </div>
        </section>
    );
}

export default Feedbackmentor;