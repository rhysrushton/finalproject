import React, { useState, useRef } from "react"; 
import "./accordian.css"; 

function Accordian(props){

    const [setActive, setActiveState ] = useState("");
    const [ setHeight, setHeightState ] = useState("0px"); 

    const content = useRef(null); 

    function toggleAccordian(){
        setActiveState(setActive === "" ? "active" : ""); 
        setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`); 
        console.log(content.current.scrollHeight)
    }


    return (
        <div className="accordian_section">
            <button className={`accordian ${setActive}`} onClick={toggleAccordian}>
                <p className="accordian_title">{props.title}</p>
            </button>
            <div ref={content} style={{maxHeight: `${setHeight}`}} className="accordian_content">
                <div className="accordian_text"
                dangerouslySetInnerHTML={{__html: props.content}}
                />
            </div>
            
        </div>
    )
}

export default Accordian; 