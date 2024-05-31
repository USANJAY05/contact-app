import React from 'react'
import { IoCall } from 'react-icons/io5';
import { FaMessage } from 'react-icons/fa6';

const Birthday = ({ birthday, items }) => {
  function calculateNextBirthday(dob) {
    const today = new Date();
    const birthDate = new Date(dob);
    const currentYear = today.getFullYear();
    const nextBirthday = new Date(currentYear, birthDate.getMonth(), birthDate.getDate());

    // Check if the next birthday has already occurred this year
    if (nextBirthday < today) {
      nextBirthday.setFullYear(currentYear + 1); // Increment year for next birthday
    }

    // Calculate the difference in milliseconds between today and the next birthday
    const diffMs = nextBirthday - today;

    // Convert milliseconds to days
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    return diffDays;
  }

  // Sort items by the number of days until the next birthday
  const sortedItems = items.slice().sort((a, b) => calculateNextBirthday(a.date) - calculateNextBirthday(b.date));

  return (
    <div className="main">
      {sortedItems.map(item => (
        <section className="contact-card" key={item.id}>
          <div className='card-left'>
            <div className="box">{item.fName[0]}</div>
            <div className="card-details">
              <h2 className="name">{item.fName}</h2>
              <h2 className='name'>{item.lName}</h2>
            </div>
          </div>
          <h3 className='desk'>{item.phone}</h3>
          <h3 className='desk desk-email'>{item.email}</h3>
          <h3 className='desk desk-age'> {calculateNextBirthday(item.date)} days</h3>
          <div className="card-right">
            <a href={`mailto:${item.email}`} onClick={(e) => e.stopPropagation()}>
              <FaMessage className='icon' />
            </a>
            <a href={`tel:${item.phone}`} onClick={(e) => e.stopPropagation()}>
              <IoCall className='icon' />
            </a>
          </div>
        </section>
      ))}
    </div>
  )
}

export default Birthday;
