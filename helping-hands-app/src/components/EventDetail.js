import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import JoinEventCard from "./JoinEventCard";
import EventDetailCard from "./EventDetailCard";

const EventDetail = ({match}) => {
    const {id} = useParams();
    const [event, setEvent] = useState([]);

    useEffect(() => {
        fetchEvent();
    }, []);

    const fetchEvent = () => {
        fetch(`http://localhost:8080/events/${id}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setEvent(data);
            })
            .catch((err) => console.log(err));
    };

      return (
        <>
            <div>
                < EventDetailCard event = {event} />
                < JoinEventCard event = {event} />
            </div>
        </>
      )
}

export default EventDetail
