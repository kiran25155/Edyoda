import React, { useState } from "react";
import './SelectPlan.css'
import clock from './Images/offerClock.png'
import Razarpay from './Images/Frame 12537.png'
const SelectPlan=()=>{
    const [finalPrice,setFinalPrice]=useState();
    const changeInputs=(event)=>{  
      let price=parseInt(event.target.value);
      setFinalPrice(Math.round(99+price*18/100+price));
    }

    return(
      <fieldset style={{backgroundColor:'white',}}>

        <div>
            <div className="child1"><button className='button1'>1</button>
            <p>Sign Up</p>
            </div>
            <div className="child1"><button className='button1'>2</button>
            <p>Sign Up</p>
            </div>
            <h2>Select your subcription plan</h2>
            <fieldset style={{backgroundColor:'#E7E7E7'}}> 
            <button className="offerExpire">Offer expired</button>
                <div>
                <div className="child2"><input disabled='true' onChange={changeInputs} name="price" value='99'  type="radio"/>
                 12 Months subcription</div>
                <div className="child3">
                Total ₹99<br/>
                ₹8/mo</div>
              </div>
            </fieldset>
            <br/>
            <br/>
            <fieldset > 
             <button className="recomended">Recommended</button>
                <div>
                <div className="child2"><input type="radio" style={{background:'blue'}} onChange={changeInputs} name="price" value='179'/>
                 12 Months Subcription</div>
                <div className="child3">
                Total ₹179<br/>
                ₹15/mo</div>
              </div>
            </fieldset>
            <br/>
            <br/>
            
           
            <fieldset> 
                <div>
                <div className="child2"><input type="radio" onChange={changeInputs} name="price" value='149'/>
                 6 Months Subcription</div>
                <div className="child3">
                Total ₹149<br/>
                ₹25/mo</div>
              </div>
            </fieldset>
            <br/>
            <br/>
            <fieldset> 
                <div>
                <div className="child2"><input type="radio" onChange={changeInputs} name="price" value='99'/>
                 3 Months Subcription</div>
                <div className="child3">
                Total ₹99<br/>
                ₹33/mo</div>
              </div>
            </fieldset>
            <hr/>
         
            <div>
                <div className="child2" style={{paddingTop:'5px'}}>Subcription Fee</div>
                <div className="child3">₹18,500</div>
                
            </div>
            <br/>
            <br/>
            <fieldset className='LimitedTime' > 
                <div>
                <div className="child2" ><p style={{marginTop:'-8px',color:'#DE4313'}}>Limited  time Offer</p>
                <br/>
                
                <div>
                    <div className="child4"><img src={clock} style={{backgroundColor:'red'}}/></div>

                    <div className="child4"><p style={{marginTop:'-45px',marginLeft:'67px',color:'#DE4313'}}>Offer vaild till 25th march 2023</p></div>
                </div>
                </div>
                <div className="child3">₹18,401</div>
              </div>
              <br/>
            </fieldset>
            <br/>
            <div>
                <div className="child2" style={{paddingTop:'5px'}}>
                    <div>
                    <div  className="child4"><h4>Total</h4>&nbsp; </div>
                    <div  className="child4" style={{marginTop:'32px',marginLeft:'8px'}}>(incl 18% GST)</div>
                    </div>
                    </div>
                    
                <div className="child3" style={{marginTop:'20px'}}><h2>{finalPrice}</h2></div>
                
            </div>
            <br/>
            <br/>
            <div>
                <div className="child1" ><button className="Cancelbottom">CANCEL</button></div>
                <div className="child1"><button className="Proceedbottom">PROCEED TO PAY</button></div>
                
            </div>
        </div>
        <br/>
        <img src={Razarpay} className="Razarpay"></img>
      </fieldset>
      
    )
}
export default SelectPlan