import React from "react"; 
import "./accordian.css"; 

function Accordian(props){
    return (
        <div className="accordian_section">
            <button className="accordian">
                <p className="accordian_title">{props.title}</p>"
            </button>
            <div className="accordian_content">
                <div className="accordian_text"
                dangerouslySetInnerHTML={{__html: props.content}}
                />
            </div>
        </div>
    )
}

export default Accordian; 