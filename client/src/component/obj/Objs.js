import { useState, useEffect } from "react"
import axios from "axios"
import Form from "./Form"

const Objs = ({ user, setTitle }) => {
    // Declare Variables
    setTitle("Objs")
    const [arr, setArr] = useState([])

    // Get all
    useEffect(() => {
        axios.get('http://localhost:8000/api/objs')
            .then(res => { console.log(res.data); setArr(res.data) })
            .catch(err => console.log("getall error: " + err))
    }, [])

    const getTime = e => {
        var date = new Date(e)
        var seconds = Math.floor((new Date() - date) / 1000);
        var interval = Math.floor(seconds / 31536000);
        if (interval > 1) return interval + " years ago...";
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) return interval + " months ago...";
        interval = Math.floor(seconds / 86400);
        if (interval > 1) return interval + " days ago...";
        interval = Math.floor(seconds / 3600);
        if (interval > 1) return interval + " hours ago...";
        interval = Math.floor(seconds / 60);
        if (interval > 1) return interval + " minutes ago...";
        return Math.floor(seconds) + " seconds ago...";
    }

    const getName = (first, last) => {
        return `${last[0].toUpperCase() + last.slice(1)}, ${first[0].toUpperCase() + first.slice(1)}`
    }
    return (
        <>
            <div>
                <Form arr={arr} setArr={setArr} user={user}/>
                {/* read create */}
            </div>
            <div>
                <h2>
                    All Objects
                </h2>
                {/* MAP TROUGH THE GET ALL REQUEST RETURN */}
                {
                    arr.map(e =>
                        <div key={e._id}>
                            <h3>
                                {e.name}
                            </h3>
                            <img src={e.pic} />
                            {/* USE THE SAME USER ATTRIBUTE NAME FROM OBJECT MODEL TO GET USER INFORMATION */}
                            By: {getName(e.creator.first, e.creator.last)}
                            <br />
                            {/* if created at and updated at ar the same -> it wasn't updated */}
                            {/* if they are different -> return the updated time */}
                            {(e.createdAt == e.updatedAt) ? getTime(e.createdAt) : getTime(e.updatedAt)}
                            <br/>
                            {
                                (user && user._id == e.creator._id) 
                                    ?
                                    <a href="/">
                                        Edit
                                    </a>  
                                    : 
                                    "no edit"}
                        </div>

                    )
                }
            </div>
        </>
    )
}

export default Objs