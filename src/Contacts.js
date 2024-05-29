import React from 'react'
import { IoCall } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
const Contacts = ({items,profileView,handleDel}) => {
  return (
    <div className="main">
    {items.map(items=>(
          <section onClick={()=>profileView(items.id)} className="contact-card" key={items.id}>
          <div className='card-left'>
              <div className="box">{items.fName[0]}</div>
  
              <div className="card-details">
                  <h2 className="name">{items.fName}</h2>
                  <h2 className='name'>{items.lName}</h2>
              </div>
          </div>
          <h3 className='desk'>{items.phone}</h3>
          <h3 className='desk desk-email'>{items.email}</h3>
          <h3 className='desk desk-age'>12</h3>
  
          <div className="card-right">
              <FaTrash className='icon trash'
              onClick={()=>handleDel(items.id)}
              />
              
              <a href={`mailto:${items.email}`}>
                  <FaMessage className='icon' />
              </a>
  
              <a href={`tel:${items.phone}`}>
                  <IoCall className='icon' />
              </a>
          </div>
      
    </section>
    ))}
  </div>
  )
}

export default Contacts