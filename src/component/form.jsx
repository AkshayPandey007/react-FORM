import React,{useState} from 'react'
import axios from 'axios'
import styles from '../App.css'



export const Form = () => {
    const [ form , setform ] = useState ( {
        name : "",
        age:"",
        address : "",
        department : "",
        salary:"",
        status : false,
        photo:""
    } )

    const handleAdd = (e) => {
        let { type , name , value , checked , files  } = e.target
        if (type==="checkbox") {
            setform({
                ...form,
                [name] : checked,
            })
        }
        else if (type=="file") {
            setform({
                ...form,
                [name] : value,
            })
       }
        else {
            setform({
                ...form,
                [name] : value,
            })   
        }}

    const handleOnSubmit = (e) => {
        e.preventDefault()
        console.log(form)
        fetch("http://localhost:8080/table" , { 
            method:"POST",
            headers: { "content-type":"application/json" },
            body: JSON.stringify ( { 
                name : form.name,
                age:form.age,
                address : form.address,
                department : form.department,
                salary:form.salary,
                status : false,
                photo: form.photo
             })
         })
         .then((r) => r.json())
         .then((d) =>{
             setform([...form,d])
             setform("")
         })
    }  
  return (
    <div>
        <h1>Form</h1>
        <form onSubmit={handleOnSubmit}>
            <div>
                <label htmlFor="">Name:</label>
                <input className='input'
                type="text"
                placeholder='Enter Name'
                name='name'
                onChange={handleAdd}
                value={form.name}
                 />
            </div>

            <div>
                <label htmlFor="">Age:</label>
                <input className='input'
                type="number"
                min="0000"
                max = "100" 
                placeholder='Enter Age...'
                name='age'
                onChange={handleAdd}
                value={form.age}
                 />
            </div>            

            <div>
                <label htmlFor="">Address:</label>
                <input className='input'
                type="text"
                placeholder='Enter Address...'
                name='address'
                onChange={handleAdd}
                value={form.address}
                 />
            </div>

            <div>
               <label htmlFor="" >Select department</label>
               <select name="department" id="" onChange={handleAdd}>
                   <option value="sales">Sale</option>
                   <option value="accounts">Account</option>
                   <option value="marketing">Marketing</option>
               </select>
            </div>

            <div>

                <label htmlFor="">Salary</label>
                <input className='input'
                type="number"
                placeholder='Enter salary...'
                name='salary'
                onChange={handleAdd}
                value={form.salary}
                 />

            </div>

            <div>
                <label htmlFor="">Married</label>
                <input 
                type="checkbox"
                name="status"
                onChange={handleAdd}
                checked={form.status}
                 />
            </div>

            <div>
                <input onChange={handleAdd}
                type="file" 
                name="photo" 
                id="" 
                value={form.photo} />
            </div>

            <div>
                <input type="submit" className='btn'/>
            </div>
        </form>

    </div>
  )
}
