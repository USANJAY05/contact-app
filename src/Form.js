import React from 'react'

const Form = ({setContacts,saveContacts,setPhone,setDate,setEmail,setFavourate,setNotes,setLName,setFName}) => {
  return (
    <div className="main">
        <form className="form " onSubmit={saveContacts}>
            <section className="form-header">
                <button onClick={()=>setContacts("Contacts")}>Back</button>
                <div className='form-header'>
                <input
                type="checkbox"
                 id="star-checkbox"
                 onChange={()=>setFavourate()}
                 />
                <label htmlFor="star-checkbox" className="star"></label>
                    <button type="submit">Save</button>
                </div>
            </section>

            <div className="box"></div>
            <section className="form-name">
                <input
                type="text"
                placeholder='First Name'
                required
                onChange={(e)=>setFName(e.target.value)}
                />
                
                <input
                type="text"
                placeholder='Last Name'
                onChange={(e)=>setLName(e.target.value)}
                />
            </section>

            <section className="form-phone">
                <input 
                type="phone"
                placeholder='Phone'
                required
                onChange={(e)=>setPhone(e.target.value)}
                />
            </section>

            <section className="form-email">
                <input 
                type="email"
                placeholder='Email'
                onChange={(e)=>setEmail(e.target.value)}

                />
            </section>

            <section className="form-date">
                <label htmlFor="date">Date Of Birth :</label>
                <input 
                id='date'
                type="date"
                onChange={(e)=>setDate(e.target.value)}

                />
            </section>
            
            <section className="form-notes">
                <textarea placeholder='Notes'
                    onChange={(e)=>setNotes(e.target.value)}
                ></textarea>
            </section>





        </form>
    </div>

  )
}

export default Form