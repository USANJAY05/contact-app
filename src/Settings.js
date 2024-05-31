import React from 'react'

const Settings = ({name,items,favourate}) => {
  return (
    <div className='main'>
        <section className="settings">
            <div className="settings-cards">
              <div className="box">{"I"}</div>
              <h2>Info</h2>
            </div>
            <div className="settings-cards">
              <h3>Total Contacts: {items}</h3>
            </div>
            <div className="settings-cards">
              <h3>Favourates:{favourate}</h3>
            </div>
            <div className="settings-cards">
              <h3>About us:</h3>
                <a href="https://github.com/USANJAY05">Github</a>
                <a href="https://www.linkedin.com/in/sanjay-u-551b21255/">Linked In</a>
            </div>

            <div className="settings-cards">
              <h3>Version: 1.0</h3>
            </div>
            
        </section>
    </div>
  )
}

export default Settings