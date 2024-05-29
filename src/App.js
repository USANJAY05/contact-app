import React, { useState } from 'react'
import './App.css'
import Header from './Header'
import Main from './Main'

const App = () => {
  const [items,setItems]=useState([
    {}
  ])
  const [favourate,setFavourate]=useState()
  const [fName,setFName]=useState()
  const [lName,setLName]=useState()
  const [email,setEmail]=useState()
  const [phone,setPhone]=useState()
  const [date,setDate]=useState()
  const [notes,setNotes]=useState()

  const [search,setSearch]=useState('')

  const [contacts,setContacts]=useState('Contacts')
  const [groups,setGroups]=useState()
  const [settings,setSettings]=useState()
  const [phoneNo,setPhoneNo]=useState('')

  const handlePhoneNo=(e)=>{
    const pNo=phoneNo+e
    setPhoneNo(pNo)
  }
  const clearPhoneNo=()=>{
    setPhoneNo(phoneNo.slice(0, -1));
  }

  const addContacts=(fName,lName,date,notes,email,phone)=>{
    const id=items.length>1?items[items.length-1].id+1:1
    console.log(id)
    const item={id:id,fName,lName,date,notes,email,phone}
    const list=[...items,item]
    setItems(list)
    setLName("")
    setFName("")
    setEmail("")
    setPhone('')
    setDate('')
    setFavourate(false)
    setNotes('')
  }

  const saveContacts=(e)=>{
    e.preventDefault()
    console.log(fName,lName,date,notes,email,phone)
    setContacts("Contacts")
    addContacts(fName,lName,date,notes,email,phone)
  }

  const handleDel=(id)=>{
    const item=items.filter(item=>item.id!==id)
    console.log('hi',id)
    setItems(item)
  }

  const profileView=(e)=>{
    const prof=items[e-1]
    console.log(prof)
  }
  return (
    <div className='app'>
    <Header 
      title={"Contacts"} 
      contacts={contacts} 
      setContacts={setContacts}
      setSearch={setSearch}
      />
    <Main 
      items={items} 
      phoneNo={phoneNo} 
      handlePhoneNo={handlePhoneNo} 
      clearPhoneNo={clearPhoneNo} 
      contacts={contacts} 
      setContacts={setContacts} 
      profileView={profileView} 
      saveContacts={saveContacts}

      setFavourate={setFavourate}
      setFName={setFName}
      setLName={setLName}
      setDate={setDate}
      setEmail={setEmail}
      setNotes={setNotes}
      setPhone={setPhone}
      handleDel={handleDel}

      search={search}
      />

    </div>
  )
}

export default App