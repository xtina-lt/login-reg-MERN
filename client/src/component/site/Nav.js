import { useState, useEffect } from 'react'
import axios from 'axios';

const Nav = ({ user, setUser }) => {
    // 3) GET THE CURRENT USER USING CREDENTIALS FROM TOKEN
    // -> You can see this token in the memory section of developer tools
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/user-current`, { withCredentials: true })
            .then(res => {
                // show the user returned
                console.log("logged user" + res.data.first)
                // 4) UPDATE THE STATE WITH CORRECT DATA
                setUser(res.data);
            })
            .catch(err => {
                console.log("current user error: " + err)
                setUser({})
        });
    }, []);

    const handleLogout = (e) => {
        e.preventDefault();
        console.log("attempting to logout");
        axios
            .post('http://localhost:8000/api/logout', { } , { withCredentials: true })
            .then(res => {
                setUser(null);
                console.log("successful logout")
                window.location.href = '/'
            })
            .catch(err => console.log("logout error: " + err));
    };

    return (
        <nav>
            {/* 4) CHECK IF USER HAS A FIRST NAME SO IT'S NOT NULL */}
            {(user && user.first) ? user.first : "nobody"}
            <a href='/'>
                Home
            </a>
            <a href='/objs'>
                All
            </a>
            <a href="https://github.com/xtina-lt" target="_blank" rel="noreferrer">
                GitHub
            </a>
            {/* IF WE HAVE A VALUE IN THE STATE, WE ARE LOGGED IN -> SHOW LOGOUT */}
            {/* 5) ELSE SHOW LOGIN OPTION*/}
            { (user && user.first) ?
                <>
                    <a href="/dash">
                        Dash
                    </a>
                    <a href="" onClick={handleLogout}>
                        Logout
                    </a>
                </>
                :
                <a href="/login-reg">
                    Login
                </a>
            }
        </nav>
    )
}

export default Nav