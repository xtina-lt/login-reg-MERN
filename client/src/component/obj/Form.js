import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Form = ({ arr, setArr, old, submit, user }) => {
    const [item, setItem] = useState(
        // if there is an old item to edit use that
        (old)
        ?
        old
        // else use blank for create
        :
        { name: '', pic:'' }
    )
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        // IF THERE IS NO USER REDIRECT
        if (!user.first) {
            navigate('/login-reg')
        // IF THERE IS A USER CONTINUE
        } else {
            console.log('logged in')
            axios.post('http://localhost:8000/api/obj', item, { withCredentials: true } )
                .then( res => {
                    setErrors([]);
                    setSuccess(true);
                    // deconstruct and add object returned
                    setArr([...arr, res.data]);
                    // set blank form
                    setItem({ name: '', pic:'' });
                } )
                .catch( res => {
                    setSuccess(false);
                    setErrors(res.response.data.errors) ;
                    console.log("error in create: " + res.response.data.errors)
                } );
        };
    }

    const handleEdit = e => {
        e.preventDefault()
            console.log('edit and logged in')
            axios.put(`http://localhost:8000/api/obj/${item._id}`, item, {withCredentials:true} )
                .then( res => {
                    setErrors([])
                    setSuccess(true)
                } )
                .catch( res => {
                    setSuccess(false)
                    console.log(res.response.data.errors)
                    setErrors(res.response.data.errors)  
                } );
    }

    return (
        <form onSubmit={(submit) ? handleEdit : handleSubmit}>
            {/* success */}
            {
                success && 
                <>
                <span className="accent">
                    SUCCESS
                </span>
                <br/>
                </>
            }
            <img src={item.pic}/>
            {/* name */}
            <label>
                {
                    // NAME
                    errors.name && 
                    <>
                    <span className="accent">
                        {errors.name.message}
                    </span>
                    <br/>
                    </>
                }
                Name:
                <input type="text" value={item.name} onChange={e => setItem({...item, name: e.target.value})} />
            </label>
            <label>
                {
                    // PIC
                    errors.pic && 
                    <>
                    <span className="accent">
                        {errors.pic.message}
                    </span>
                    <br/>
                    </>
                }
                Pic:
                <input type="text" value={item.pic} onChange={e => setItem({...item, pic: e.target.value})} />
            </label>
            <input type="submit" value={submit || "Create Object"} />
        </form>
    )
}

export default Form