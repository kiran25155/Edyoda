import React from "react";
import './Header.css'
import DownArrow from './Images/DownArrow.png' 
import search from './Images/Search Icon.png'
const Header=()=>{
    return(
        <>
        <div className='container'>
        <div className="flex-item">EDYODA</div>
        <div className="flex-item">Courses</div>
        <div className="flex-item" ><img className='DownArrow' src={DownArrow}/></div>
        <div className="flex-item">Programs</div>
        <div className="flex-item"><img className='DownArrow' src={DownArrow}/></div>
        <div className="flex-item"></div>
        <div className="flex-item"><img  style={{minHeight:'25px',minweight:'15px'}} src={search}/></div>
        <div className="flex-item">login</div>
        <div className="flex-item"><button className="joinNow">JOIN NOW</button></div>  
        </div>
        </>
    )
}
export default Header