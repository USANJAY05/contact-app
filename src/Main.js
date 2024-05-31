import Features from './Features';
import Form from './Form';
import Phone from './Phone';
import Contacts from './Contacts';
import Groups from './Groups';
import Settings from './Settings';
import Birthday from './Birthday';

const Main = ({ items, phoneNo, handlePhoneNo, clearPhoneNo, contacts, setContacts, profileView, saveContacts, setPhone, setDate, setEmail, setFavourate, setNotes, setLName, setFName, handleDel, search, favourate }) => {
  const filteredItems = items.filter(item => 
    (item.fName && item.fName.toLowerCase().includes(search.toLowerCase())) ||
    (item.lName && item.lName.toLowerCase().includes(search.toLowerCase())) ||
    (item.email && item.email.toLowerCase().includes(search.toLowerCase())) ||
    (item.phone && item.phone.toLowerCase().includes(search.toLowerCase()))
  ).sort((a, b) => {
    const nameA = (a.fName + ' ' + a.lName).toLowerCase();
    const nameB = (b.fName + ' ' + b.lName).toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });


  const favourateItems=filteredItems.filter(filterItem=>filterItem.favourate===true)

  return (
    <main className='desk-main'>
      {contacts === "Contacts" && (
        <Contacts 
          items={filteredItems} 
          profileView={profileView} 
          handleDel={handleDel} 
        />
      )}
      {contacts === "Phone" && (
        <Phone 
          phoneNo={phoneNo} 
          handlePhoneNo={handlePhoneNo} 
          clearPhoneNo={clearPhoneNo} 
        />
      )}
      {contacts === 'Form' && (
        <Form 
          setContacts={setContacts} 
          saveContacts={saveContacts} 
          setPhone={setPhone} 
          setEmail={setEmail} 
          setLName={setLName} 
          setFName={setFName} 
          setNotes={setNotes} 
          setFavourate={setFavourate} 
          setDate={setDate} 
          favourate={favourate}
        />
      )}
      {contacts === "Favourates" && (
        <Contacts 
          items={favourateItems} 
          profileView={profileView} 
          handleDel={handleDel} 
        />
      )}
      {contacts === "Groups" && (
        <Groups name={'coming soon'} />
      )}

      {contacts==="Birthday"&&(
        <Birthday items={items} />
      )}
      
      {contacts === "Settings" && (
        <Settings name={'coming soon'} items={items.length} favourate={favourateItems.length} />
      )}

      <Features 
        contacts={contacts} 
        setContacts={setContacts} 
      />
    </main>
  );
};

export default Main;
