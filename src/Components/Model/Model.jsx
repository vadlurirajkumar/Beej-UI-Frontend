import React,{useState,useContext} from 'react'
import {FaTimes} from "react-icons/fa"
import "./model.scss"
import { SideBarContext } from '../../AdminSidebarContex/SidebarContext'

function Model({model, handclick}) {
  const {Close} = useContext(SideBarContext)
  return (
  <div className='overlay'  style={{
    width: Close ? "95vw" : "85vw",
    marginLeft: Close ? "5vw" : "15vw",
    marginTop: "8vh",
  }}>
    <div className='model'>
  <div className='cross'>
  <FaTimes style={{color:"white"}} size={15} onClick={handclick}/>
  </div>
        <h2>Now book new direct flights to New York by American Airlines and code-share flights from Mumbai & Bengaluru by IndiGo.Flights, International Flights, Charter Flights, Hotels, International Hotels, Homestays and Villas, Activities, Holidays In India, International Holidays, Book Hotels From UAE, myBiz for Corporate Travel, Book Online Cabs, Book Bus Tickets, Book Train Tickets, Cheap Tickets to India, Book Flights From US, Book Flights From UAE, Trip Planner, Gift Cards, Trip Money, Trip Ideas, Travel Blog, PNR Status, MakeMyTrip Advertising Solutions, One Way Cab</h2>
    </div>
  </div>
  )
}

export default Model