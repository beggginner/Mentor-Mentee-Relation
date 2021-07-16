import React from 'react'
import './Review.css'
import NavAdmin from './NavAdmin'
function Review() {
    return (
        <div>
            <NavAdmin />
            <div className="review-container">

                <div className="grid-container">

                    <div className="grid-item">Mentor 1</div>

                    <div className="grid-item"><button className="approve">Approve</button></div>

                    <div className="grid-item"><button className="reject">Reject</button></div>

                    <div className="grid-item">Mentor 1</div>

                    <div className="grid-item"><button className="approve">Approve</button></div>

                    <div className="grid-item"><button className="reject">Reject</button></div>

                    <div className="grid-item">Mentor 1</div>

                    <div className="grid-item"><button className="approve">Approve</button></div>

                    <div className="grid-item"><button className="reject">Reject</button></div>

                </div>
            </div>
        </div>
    )
}

export default Review
