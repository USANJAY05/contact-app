import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";

const Phone = ({phoneNo,handlePhoneNo,clearPhoneNo}) => {
  return (
    <div className="main phone-main">
        <section className="phone">
            <input readOnly 
            type="phone"
            value={phoneNo}
            />
            <button onClick={(e)=>handlePhoneNo(e.target.innerText)}>1</button>
            <button onClick={(e)=>handlePhoneNo(e.target.innerText)}>2</button>
            <button onClick={(e)=>handlePhoneNo(e.target.innerText)}>3</button>
            <button onClick={(e)=>handlePhoneNo(e.target.innerText)}>4</button>
            <button onClick={(e)=>handlePhoneNo(e.target.innerText)}>5</button>
            <button onClick={(e)=>handlePhoneNo(e.target.innerText)}>6</button>
            <button onClick={(e)=>handlePhoneNo(e.target.innerText)}>7</button>
            <button onClick={(e)=>handlePhoneNo(e.target.innerText)}>8</button>
            <button onClick={(e)=>handlePhoneNo(e.target.innerText)}>9</button>
            <button onClick={(e)=>handlePhoneNo(e.target.innerText)}>*</button>
            <button onClick={(e)=>handlePhoneNo(e.target.innerText)}>0</button>
            <button onClick={(e)=>handlePhoneNo(e.target.innerText)}>#</button>
            <button> <a href={`tel:${phoneNo}`}><FaPhoneAlt /></a></button>
            <button style={{width:'50px',height:'20px'}} onClick={()=>clearPhoneNo()}>x</button>
        </section>
    </div>
  )
}

export default Phone