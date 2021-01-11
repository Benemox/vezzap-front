import React, { useState, useEffect, useContext } from 'react';
import { useRedirect } from '../../components/Hooks/useRedirect';


import {Link} from "react-router-dom";
import logo from '../../img/Frame.png';
import loginbtn from '../../img/logon.png';
import vesapbtn from '../../img/boton1.png';
//import {UserProvider, userProvider} from "../../components/Context/LoginContext"

export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const user = {
        email: email,
        pwd: password
    }

    console.log(user);
    const Redirect = useRedirect();
     const placeholder = "*******"
   
    const fetchData = async () => {
        const url = 'http://localhost:8080/login'
         await fetch (url, {            
            method:"POST",
            //credentials:"include",
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(user)
        })
        .then (data => {
            console.log(data);
            if(data.ok === true){
               º
                Redirect("/Dasboard")}
        })

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
     }
    

    return (
        <div>
            <img src={logo} alt="a" className="frame"/>
            <form onSubmit={handleSubmit} className="screen-size screen-back Container42">
            
                <input 
                    id="email"
                    type="text"
                    name="email"
                    placeholder="example@gmail.com"
                    autoComplete="off"
                    value={email}
                    className="happy-box78"  
                    onChange={ (e) => setEmail(e.target.value) }
                   />
                
                <br></br>

                <input 
                    id="pwd"
                    name="pwd"
                    placeholder={placeholder}
                    autoComplete="off"
                    value={ password }
                    className="happy-box79" 
                    onChange={ (e) => setPassword(e.target.value) } 
                     />
                
                {/* <i id={LoginCss.eye} className="fas fa-eye" onClick={HandlepwdVisibility}></i> */}
                <br></br>
                <a href="/register" className="usual-link">No recuerdo la contraseña</a>
        <div className="distance">
                <button type="submit" className="btn-157"><img src={loginbtn} alt="a" className="frameimg"/> </button>
                <br></br>

                <Link to="/register">  
                    <button name="checkAge" className="btn-157"><img src={vesapbtn} alt="a" className="frameimg"/></button>
                </Link>
        </div>        
                {/* <button className={LoginCss.backBtn} onClick={() => {redirect("/")}}>&lt;</button> */}
            </form>
        </div>
    )
}
export default Login