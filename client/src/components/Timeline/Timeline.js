import data from "./data"
import TimelineItem from "./TimelineItem"
import React from "react"; 
import './style.css';

const Timeline = () => data.length > 0 && (

    <div className="timeline-container">
        {data.map((data, idx) => ( 
                <TimelineItem data={data} key={idx}></TimelineItem>

        ))}

    </div>
    

);

export default Timeline; 