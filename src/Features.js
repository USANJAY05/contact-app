import React from 'react'
import { FaStar } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { IoIosKeypad } from "react-icons/io";

const Features = ({contacts,setContacts}) => {
  return (
    <footer className='features'>
      <button onClick={()=>setContacts("Favourates")} style={{backgroundColor:contacts==="Favourates"?'#5f87ed8e':'rgba(0, 0, 0, 0)'}}>
        <FaStar className='features-icon' /><h2>Favourates</h2>
      </button>
      <button  onClick={()=>setContacts("Contacts")} style={{backgroundColor:contacts==="Contacts"?'#5f87ed8e':'rgba(0, 0, 0, 0)'}}>
        <IoIosContact className='features-icon' /><h2>Contacts</h2>
      </button>
      <button  onClick={()=>setContacts("Groups")} style={{backgroundColor:contacts==="Groups"?'#5f87ed8e':'rgba(0, 0, 0, 0)'}}>
        <FaUserGroup className='features-icon' /><h2>Groups</h2>
      </button>
      <button onClick={()=>setContacts("Phone")}  style={{backgroundColor:contacts==="Phone"?'#5f87ed8e':'rgba(0, 0, 0, 0)'}}>
        <IoIosKeypad  className='features-icon'/><h2>Phone</h2>
      </button>
      <button onClick={()=>setContacts("Settings")}  style={{backgroundColor:contacts==="Settings"?'#5f87ed8e':'rgba(0, 0, 0, 0)'}}>
        <IoMdSettings className='features-icon'/><h2>Settings</h2>
      </button>
    </footer>
  )
}

export default Features