import React, {useEffect, useState, useCallback} from 'react'
import Event from './Event'
import { Link } from 'react-router-dom'
import Sidebar from "./Sidebar.js";
import Header from "./Header";
import axios from "axios";


const Events = () => {

    const [events, setEvents] = useState([]);
    const [city, setCity] = useState("");
    const [category, setCategory] = useState("");
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
            fetchEvents();
        },
        [])

    const fetchEvents = () => {
        return axios.get('http://localhost:8080/events')
            .then(res => {
                setIsPending(false);
                setEvents(res.data);
            })
    }

    const fetchEventsByCity = () => {
        return axios.get(`http://localhost:8080/events/city/${city}`)
            .then(res => {
                setIsPending(false);
                setEvents(res.data);
            })
    }

    const fetchEventsByCategory = () => {
        return axios.get(`http://localhost:8080/events/category/${category}`)
            .then(res => {
                setIsPending(false);
                setEvents(res.data);
            })
    }

    const wrapperSetEvents = useCallback(city => {
        setCity(city);
    }, []);


    return (
          <>
            < Sidebar

            />
            <div className='events-main-container'>
                < Header  />

                    <div className='events-container'>
                        {events
                            ? (events.map((event) =>
                                <Link to={`/eventDetails/${event.eventId}`} key = {event.eventId}>
                                    <div className='event-card'>
                                        <Event key={event.eventId}
                                               event={event}
                                        />
                                    </div>
                                </Link>))
                            : (<p>loading events...</p>)}
                    </div>
            </div>
          </>
      )
    }

export default Events

