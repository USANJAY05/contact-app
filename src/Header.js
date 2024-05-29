import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { RiContactsBook3Fill } from "react-icons/ri";

const Header = ({contacts,setContacts,setSearch}) => {
  return (
    <header className='header'>
      <div className='header-top'>
        <div className="logo" style={{display:'flex',alignItems:'center'}}>
          <RiContactsBook3Fill className='header-icons' />
          <h1>{contacts}</h1>
        </div>
        <FaPlus 
        className='header-icons'
        tabIndex={0}
        aria-label='addBtn'
        onClick={()=>setContacts("Form")}
        />
      </div>
      {/* {contacts!=='Phone'&&contacts!=="Form"&&( */}
        <div className='header-bottom'>
          <input type="search"
          placeholder='Search'
          onChange={(e)=>setSearch(e.target.value)}
          />
      </div>
      {/* )} */}


    </header>
  )
}

export default Header