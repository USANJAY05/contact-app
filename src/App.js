import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './Header'
import Main from './Main'

const App = () => {
  const [items,setItems]=useState([])
  useEffect(()=>{
    const storage=JSON.parse(localStorage.getItem("contacts"))||[]
    setItems(storage)
  },[])
  const [favourate,setFavourate]=useState(false)
  const [fName,setFName]=useState()
  const [lName,setLName]=useState()
  const [email,setEmail]=useState()
  const [phone,setPhone]=useState()
  const [date,setDate]=useState()
  const [notes,setNotes]=useState()

  const [search,setSearch]=useState('')

  const [contacts,setContacts]=useState('Birthday')
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

  const addContacts=(fName,lName,date,notes,email,phone,favourate)=>{
    const id=items.length>0?items[items.length-1].id+1:1
    console.log(id)
    const item={id:id,fName,lName,date,notes,email,phone,favourate}
    const list=[...items,item]
    setItems(list)
    localStorage.setItem("contacts",JSON.stringify(list))
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
    addContacts(fName,lName,date,notes,email,phone,favourate)
  }

  const handleDel=(id)=>{
    const item=items.filter(item=>item.id!==id)
    console.log('hi',id)
    setItems(item)
    localStorage.setItem("contacts",JSON.stringify(item))

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
      favourate={favourate}

      search={search}
      />

    </div>
  )
}

export default App