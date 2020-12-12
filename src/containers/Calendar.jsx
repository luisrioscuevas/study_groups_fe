import React, { useEffect } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";


const localizer = momentLocalizer(moment);

const MyCalendar = (props) => {

    const [date, setDate] = React.useState([]);

    useEffect(() => {
        setDate(props.dates);
    }, [props]);

    return (
        
            (props.slot) ? 
            <Calendar
                selectable
                localizer={localizer}
                events={date}
                startAccessor="start"
                endAccessor="end"
                onSelectSlot={props.onSlot}
                onSelectEvent={event => props.onSelect(event)}
                defaultView={Views.WEEK}
                style={{ height: 650 }}/>
            :
                <Calendar
                    localizer={localizer}
                    events={date}
                    startAccessor="start"
                    endAccessor="end"
                    onSelectEvent={event => props.onSelect(event)}
                    style={{ height: 650 }}/>
        
    );
}

export default MyCalendar;