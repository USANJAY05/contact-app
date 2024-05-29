import React from 'react'
import Features from './Features';
import Form from './Form';
import Phone from './Phone';
import Contacts from './Contacts';
import Groups from './Groups';
import Settings from './Settings';

const Main = ({items,phoneNo,handlePhoneNo,clearPhoneNo,contacts,setContacts,profileView,saveContacts,setPhone,setDate,setEmail,setFavourate,setNotes,setLName,setFName,handleDel,search}) => {
  return (
    <main className='desk-main'>
      {contacts==="Contacts"&&(
        <Contacts  items={items.filter(item => 
          (item.fName && item.fName.toLowerCase().includes(search.toLowerCase())) ||
          (item.lName && item.lName.toLowerCase().includes(search.toLowerCase())) ||
          (item.email && item.email.toLowerCase().includes(search.toLowerCase())) ||
          (item.phone && item.phone.toLowerCase().includes(search.toLowerCase()))
        
        )} profileView={profileView} handleDel={handleDel} />
      )}
      {contacts==="Phone"&&(      
        <Phone phoneNo={phoneNo} handlePhoneNo={handlePhoneNo} clearPhoneNo={clearPhoneNo}
      />)}

      {contacts==='Form'&&(<Form setContacts={setContacts} saveContacts={saveContacts} setPhone={setPhone} setEmail={setEmail} setLName={setLName} setFName={setFName} setNotes={setNotes} setFavourate={setFavourate} setDate={setDate} />)}
      {contacts==="Favourates"&&<Contacts items={items.filter(item => 
          (item.fName && item.fName.toLowerCase().includes(search.toLowerCase())) ||
          (item.lName && item.lName.toLowerCase().includes(search.toLowerCase())) ||
          (item.email && item.email.toLowerCase().includes(search.toLowerCase())) ||
          (item.phone && item.phone.toLowerCase().includes(search.toLowerCase()))
        
        )} profileView={profileView} handleDel={handleDel}/>}
      {contacts==="Groups"&&<Groups name={'comming soon'}/>}
      {contacts==="Settings"&&<Settings name={'Comming Soon'}/>}
      
      
      <Features contacts={contacts} setContacts={setContacts} />

    </main>

  )
}

export default Main