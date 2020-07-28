import React, { Component } from "react";
import Card from "./CardUI";


const img1 = "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2019/12/GettyImages-481073822-1024x575.jpg?w=1155&h=1528"
const img2 = "https://upload.wikimedia.org/wikipedia/commons/8/89/%281%29Westpoint_Blacktown-3.jpg "
const img3 = "https://www.qld.gov.au/__data/assets/image/0016/120616/Thumb_05.png"
const img4 = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTM8liCiqba7lkBdEqaSeqB7r9yzGQQDKqLAg&usqp=CAU"
const img5 = "https://blogs.biomedcentral.com/bmcseriesblog/wp-content/uploads/sites/9/2020/04/Syrian-Doctor-620x342.jpg"
const img6 = "https://s.japingkaaboriginalart.com/wp-content/uploads/13-Otto-Jap-007234.jpg"

class Cards extends React.Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Card imgsrc={img1} title="Make and Appointment" text="Book and appoint with us today. " button="Book Now" link = "https://www.hotdoc.com.au/medical-centres/blacktown-NSW-2148/kildare-road-medical-centre/doctors" />
          </div>
          
          <div className="col-md-4">
            <Card imgsrc={img2} title="Community" button="Have a Look" text="We are involved in our local community." link = "/books"/>
          </div>
          
          <div className="col-md-4">
            <Card imgsrc={img3} title="What We Offer" text="See how we can help. " button="What we do" link = "https://en.wikipedia.org/wiki/Jeanne_Baret" />
          </div>

          <div className="col-md-4">
            <Card imgsrc={img4} title="Corporate Clients" button="Corporate Services" text="We welcome WorkCover consultations and offer a range of medicals, vaccination programs and presentations." link = "/books"/>
          </div>

          <div className="col-md-4">
            <Card imgsrc={img5} title="Our Health Team" text="Check out our highly skilled team of General Practitioners, Specialists, Nurses and Allied Health Providers." button="Our Team" link = "/books"/>
          </div>

          <div className="col-md-4">
            <Card imgsrc={img6} title="Aboriginal Health Services" text="We are commited to closing the gap and provide a range of services for member of the Aboriginal and Torres Strait Islander community." button="Services" link = "/books"/>
          </div>

          
   
        </div>
      </div>
      
    );
  }
}
export default Cards;