import React, { useState } from 'react'

const Addcontact = ({addcontact}) => {
    const [data,setData] = useState({name:"",email:""});

    const handleChange = (e)=>{
     if(e.target.name === "name"){
     setData({...data, name:e.target.value});
     }
     else{
        setData({...data, email:e.target.value});
     }
    }
    const handleAdd = ()=>{
        if(data.name === "" || data.email === ""){
            alert("please fill all the details");
            return;
        }
       addcontact(data)
       
       setData({name:"",email:""});

    }
  return (
    <div className='formHeader'>
      <div className='add-contact'>Add Contact</div>
      <form>
        <label htmlFor="">Name:</label><br />
        <input type="text" placeholder='Enter Name' name='name' value={data.name} onChange={handleChange}/><br />

        <label htmlFor="">Email:</label><br />
        <input type="text" placeholder='Enter Name' name='email' value={data.email} onChange={handleChange}/>

        
      </form>
      <button className='btn' onClick={handleAdd}>Add Contact</button>
    </div>
  )
}

export default Addcontact
