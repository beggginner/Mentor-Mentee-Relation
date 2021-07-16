function Feedbackmentee() {
    return (
        <section className="login">
            <div className="loginContainer">
                <h3 style={{ color: "#fff" }}>Feedback Form</h3>
                <label> How would you rate the guidance of your mentor?</label>
                <select>
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="OK">OK</option>
                    <option value="Not Good">Not Good</option>
                    <option value="Very Bad">Very Bad</option>
                </select>

                <label> Is he punctual in joining the scheduled meetings?</label>
                <select>
                    <option value="Always">Always</option>
                    <option value="Mostly">Mostly</option>
                    <option value="Very often">Very often</option>
                    <option value="Not very often">Not very often</option>
                    <option value="Not at all">Not at all</option>
                </select>

                <label> How you rate the query resolving skill of your mentor?</label>
                <select>
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="OK">OK</option>
                    <option value="Not Good">Not Good</option>
                    <option value="Very Bad">Very Bad</option>
                </select>

                <label> Please rate the contents share by the mentor this week?</label>
                <select>
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="OK">OK</option>
                    <option value="Not Good">Not Good</option>
                    <option value="Very Bad">Very Bad</option>
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

export default Feedbackmentee;