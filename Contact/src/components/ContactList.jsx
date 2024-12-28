import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
const ContactList = (props) => {
  const {contact,removeContact} = props;
    const ContactList = contact.map((val)=>{
        return(
            <div className='contacts'>
                <div style={{marginLeft:"2px",fontSize:"20px"}}>{val.data.name}</div>
                <div style={{fontSize:"20px"}} className='email'>{val.data.email}</div>
               <span onClick={()=> removeContact(val.id)}><DeleteIcon/></span>
            </div>
        )
    })
  return (
    <>
     <div className='contactsHeader'>ContactList</div> 
     <div>{ContactList}</div>
    </>
  )
}

export default ContactList
