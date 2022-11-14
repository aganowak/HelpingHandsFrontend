import React from 'react'

const Event = ({ event }) => {

      return (
        <div onClick={() => console.log("Click")}>
          <h5 className="event-card-category">{event.eventCategory}</h5>
          <h6><span>{event.dateOfEvent}</span>&nbsp;<span>{event.city}</span></h6>
          <h3>
            {event.eventTitle}{' '}
          </h3>
          <p>{event.eventDescription}</p>
        </div>
      )
}

export default Event
