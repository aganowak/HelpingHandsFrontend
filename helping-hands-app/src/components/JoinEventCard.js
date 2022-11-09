import React from 'react'
import './Events.css'
import Calendar from "./Calendar";
import "./JoinEventCard.css"

const JoinEventCard = ({ event }) => {
    return (
        <div className='join-event-card'>
            <h5 className="card-header">Join event</h5>
            <div className='calendar-display'>
                < Calendar />
            </div>
            <div className='button-row'>
                <button className='join-button'>Join</button>
            </div>
        </div>
    )
}

export default JoinEventCard
