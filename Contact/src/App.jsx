import { useEffect, useState } from 'react'
import './App.css'
import Addcontact from './components/Addcontact'
import ContactList from './components/ContactList'
import Header from './components/Header'
import uuid4 from 'uuid4'

function App() {
  const localStorageKey = "contact";
  const [contact,setContact] = useState(()=>{
   return JSON.parse(localStorage.getItem(localStorageKey)) || []
  });
  
  useEffect(()=>{
   localStorage.setItem(localStorageKey,JSON.stringify(contact));
  },[contact])
  const addcontact = (data)=>{
    setContact([...contact,{id:uuid4(),data}])
    
  }
  const removeContact = (id)=>{
    const updateList = contact.filter((val)=>{
      return val.id !== id;
    })
    setContact(updateList);
  }
  return (
    <div>
     <Header/> 
     <Addcontact addcontact={addcontact}/>
     <ContactList contact = {contact} removeContact={removeContact}/>
    </div>
  )
}

export default App
