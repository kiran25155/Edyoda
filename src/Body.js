import React from "react";
import r99 from './Images/₹ 99.png'
import book from './Images/Book.png'
import clock from './Images/clock.png'
import live from './Images/Live.png'
import scholarship from './Images/Scholarship.png'
import ads from './Images/Ads.png'
import './Body.css'
const Body=()=>{
    return(
        <>
        <h1 style={{color:'white'}}>
            Access curated couses worth<br/>
            ₹18500 at just <img src={r99} style={{minWidth:'40px',minHeight:'20px'}}></img> per year!
        </h1>
       
       
        <div className="parent">
        <div className="child"><img src={book}/> &nbsp; &emsp;</div> 
        <div className="child" style={{color:'#0096FF'}}>100+ &nbsp;</div> 
        <div className="child" style={{color:'white'}}>Job relevant courses</div>
        </div>
        <br/>

        <div className="parent">
        <div className="child"><img src={clock}/> &nbsp; &emsp;</div> 
        <div className="child" style={{color:'#0096FF'}}>20,000+ &nbsp;</div> 
        <div className="child" style={{color:'white'}}>Hours of content</div>
        </div>
          <br/>
        <div className="parent">
        <div className="child"><img src={live}/> &nbsp; &emsp;</div> 
        <div className="child" style={{color:'#0096FF'}}>Exclusive &nbsp;</div> 
        <div className="child" style={{color:'white'}}>webinar access</div>
        </div>
        <br/>
        <div className="parent">
        <div className="child"><img src={scholarship}/> &nbsp; &emsp;</div> 
        <div className="child" style={{color:'white'}}>Scholarship worth &nbsp;</div>
        <div className="child" style={{color:'#0096FF'}}>₹94,500</div> 
        </div>
        <br/>
        <div className="parent">
        <div className="child"><img src={ads}/> &nbsp; &emsp;</div> 
        <div className="child" style={{color:'#0096FF'}}>Ad Free &nbsp;</div> 
        <div className="child" style={{color:'white'}}>learning experience</div>
        </div>
        </>
    )
}
export default Body